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
  'force-open': ['all'],
};

type RuleOptionSet = {
  ignore: Set<string>;
  forceClose: Set<string>;
  forceOpen: Set<string>;
}

function isRuleEnabled(yomi: string, nameLoma: string, oc: 'open' | 'close', ruleOptionSet: RuleOptionSet): boolean {
  const {ignore, forceClose, forceOpen} = ruleOptionSet;
  // decide by yomi
  if (ignore.has(yomi) || (oc === 'open' && forceClose.has(yomi)) || (oc === 'close' && forceOpen.has(yomi))) return false;
  if ((oc === 'open' && forceOpen.has(yomi)) || (oc === 'close' && forceClose.has(yomi))) return true;
  // decide by nameLoma
  if (ignore.has(nameLoma) || (oc === 'open' && forceClose.has(nameLoma)) || (oc === 'close' && forceOpen.has(nameLoma))) return false;
  if ((oc === 'open' && forceOpen.has(nameLoma)) || (oc === 'close' && forceClose.has(nameLoma))) return true;
  // decide by all
  if (ignore.has('all') || (oc === 'open' && forceClose.has('all')) || (oc === 'close' && forceOpen.has('all'))) return false;
  return true;
}

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
  nameLoma: string,
  ruleOptionSet: {
    forceClose: Set<string>;
    forceOpen: Set<string>;
    ignore: Set<string>;
  },
  openCloseItem: DictionaryInputs,
): Dictionary | undefined {
  const openItem = !('expected' in openCloseItem) ? openCloseItem.open : openCloseItem;
  if (typeof openItem === 'undefined') return undefined;
  const expectedText = openItem.expected ?? '';
  const shouldOpenedText = getSurfaceFrom(openItem);
  const reading = getReading(openItem);
  if (expectedText === '') return undefined;
  if (!isRuleEnabled(reading, nameLoma, 'open', ruleOptionSet)) return undefined;
  return {
    ...openItem,
    message: `ひらがなに開かれるべき${name}です: ${shouldOpenedText}(${reading})`,
  };
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

function shouldCloseDictionary(name: string,
  nameLoma: string,
  ruleOptionSet: {
    forceClose: Set<string>;
    forceOpen: Set<string>;
    ignore: Set<string>;
  }, openCloseItem: DictionaryInputs): Dictionary | undefined {
  const closeItem = !('expected' in openCloseItem) ? openCloseItem.close : convertOpenToClose(openCloseItem);
  if (typeof closeItem === 'undefined') return undefined;
  const expectedText = closeItem.expected ?? '';
  //const shouldCloseText = getSurfaceFrom(closeItem);
  const reading = getReading(closeItem);
  if (!isRuleEnabled(reading, nameLoma, 'close', ruleOptionSet)) return undefined;
  return {
    ...closeItem,
    message: `漢字に閉じるべき${name}です: ${expectedText}(${reading})`,
  };
}

export class DictionaryLoader {
  private options: DictOpts;

  constructor(options: Partial<DictOpts>) {
    this.options = {
      ignore: [...defaultOpts.ignore, ...(options.ignore ?? [])],
      'force-close': [...defaultOpts['force-close'], ...(options['force-close'] ?? [])],
      'force-open': [...defaultOpts['force-open'], ...(options['force-open'] ?? [])],
    };
  }

  load(): Dictionary[] {
    let dict: Dictionary[] = [];

    const ignore = new Set(this.options.ignore);
    const forceClose = new Set(this.options['force-close'].filter((x) => !ignore.has(x)));
    const forceOpen = new Set(this.options['force-open'].filter((x) => !ignore.has(x) && !forceClose.has(x)));

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
      for(const item of items) {
        const closeRule = shouldCloseDictionary(name, nameLoma, {forceClose, forceOpen, ignore}, item)
        const openRule = shouldOpenDictionary(name, nameLoma, {forceClose, forceOpen, ignore}, item);
        if (closeRule) {
          dict = [...dict, closeRule];
        }
        if (openRule) {
          dict = [...dict, openRule];
        }
      }
    }
    return dict;
  }
}
