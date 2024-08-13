import { daimeishi } from './dictionaries/daimeishi';
import { fukugoukakujoshi } from './dictionaries/fukugoukakujoshi';
import { fukujoshi } from './dictionaries/fukujoshi';
import { fukushi } from './dictionaries/fukushi';
import { hojodoushi } from './dictionaries/hojodoushi';
import { hojokeiyoushi } from './dictionaries/hojokeiyoushi';
import { keishikimeishi } from './dictionaries/keishikimeishi';
import { otherDoushi } from './dictionaries/other-doushi';
import { otherJodoushi } from './dictionaries/other-jodoushi';
import { otherKandoushi } from './dictionaries/other-kandoushi';
import { otherKeiyoushi } from './dictionaries/other-keiyoushi';
import { otherMeishi } from './dictionaries/other-meishi';
import { rentaishi } from './dictionaries/rentaishi';
import { setsuzokushi } from './dictionaries/setsuzokushi';
import type { DictOpts, Dictionary, DictionaryInputs } from './type';

const defaultOpts: DictOpts = {
  ignore: [],
  'force-close': [],
};

function getSurfaceFrom(dic: Omit<Dictionary, 'message'>): string {
  return dic.tokens
    .map((token) => (Array.isArray(token.surface_form) ? token.surface_form.join('') : token.surface_form ?? ''))
    .join('');
}
function getReading(dic: Omit<Dictionary, 'message'>): string {
  return dic.tokens
    .map((token) => (Array.isArray(token.reading) ? token.reading.join('') : token.reading ?? ''))
    .join('');
}

function shouldOpenDictionary(
  name: string,
  forceClose: Set<string>,
  ignore: Set<string>,
  items: DictionaryInputs[],
): Dictionary[] {
  return items.flatMap((openCloseItem) => {
    const openItem = !('expected' in openCloseItem) ? openCloseItem.open : openCloseItem;
    if (typeof openItem === 'undefined') return [];
    const expectedText = openItem.expected ?? '';
    const shouldOpenedText = getSurfaceFrom(openItem);
    const reading = getReading(openItem);
    if (expectedText === '' || forceClose.has(reading) || ignore.has(reading)) return [];
    return [
      {
        ...openItem,
        message: `ひらがなに開かれるべき${name}です: ${shouldOpenedText}(${reading})`,
      },
    ];
  });
}

function convertOpenToClose(openItem: Omit<Dictionary, 'message'>): Omit<Dictionary, 'message'> {
  return {
    expected: getSurfaceFrom(openItem),
    tokens: [
      {
        ...openItem.tokens[0],
        basic_form: openItem.expected,
        surface_form: openItem.expected,
      },
    ],
  };
}

function shouldCloseDictionary(name: string, forceClose: Set<string>, items: DictionaryInputs[]): Dictionary[] {
  return items.flatMap((openCloseItem) => {
    const closeItem = !('expected' in openCloseItem) ? openCloseItem.close : convertOpenToClose(openCloseItem);
    if (typeof closeItem === 'undefined') return [];
    const expectedText = closeItem.expected ?? '';
    //const shouldCloseText = getSurfaceFrom(closeItem);
    const reading = getReading(closeItem);
    if (expectedText === '' || forceClose.has(reading)) return [];
    return [
      {
        ...closeItem,
        message: `漢字に閉じるべき${name}です: ${expectedText}(${reading})`,
      },
    ];
  });
}

export class DictionaryLoader {
  private options: DictOpts;

  constructor(options: Partial<DictOpts>) {
    this.options = {
      ignore: [...defaultOpts.ignore, ...(options.ignore ?? [])],
      'force-close': [...defaultOpts['force-close'], ...(options['force-close'] ?? [])],
    };
  }

  load(): Dictionary[] {
    let dict: Dictionary[] = [];

    const ignore = new Set(this.options.ignore);
    const forceClose = new Set(this.options['force-close'].filter((x) => !ignore.has(x)));

    const targetList: [string, string, DictionaryInputs[]][] = [
      ['代名詞', 'daimeishi', daimeishi],
      ['複合格助詞', 'fukugoukakujoshi', fukugoukakujoshi],
      ['副助詞', 'fukujoshi', fukujoshi],
      ['副詞', 'fukushi', fukushi],
      ['補助動詞', 'hojodoushi', hojodoushi],
      ['補助形容詞', 'hojokeiyoushi', hojokeiyoushi],
      ['形式名詞', 'keishikimeishi', keishikimeishi],
      ['動詞', 'doushi', otherDoushi],
      ['助動詞', 'jodoushi', otherJodoushi],
      ['感動詞', 'kandoushi', otherKandoushi],
      ['形容詞', 'keiyoushi', otherKeiyoushi],
      ['名詞', 'meishi', otherMeishi],
      ['連体詞', 'rentaishi', rentaishi],
      ['接続詞', 'setuzokushi', setsuzokushi],
    ];

    for (const [name, nameLoma, items] of targetList) {
      if (!(ignore.has('all') || ignore.has(nameLoma))) {
        if (forceClose.has('all') || forceClose.has(nameLoma)) {
          dict = [...dict, ...shouldCloseDictionary(name, forceClose, items)];
        } else {
          dict = [...dict, ...shouldOpenDictionary(name, forceClose, ignore, items)];
        }
      }
    }
    return dict;
  }
}
