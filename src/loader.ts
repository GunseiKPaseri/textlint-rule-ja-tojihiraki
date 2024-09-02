import { daimeishi } from './dictionaries/daimeishi';
import { doushi } from './dictionaries/doushi';
import { fukugoukakujoshi } from './dictionaries/fukugoukakujoshi';
import { fukujoshi } from './dictionaries/fukujoshi';
import { fukushi } from './dictionaries/fukushi';
import { hojodoushi } from './dictionaries/hojodoushi';
import { hojokeiyoushi } from './dictionaries/hojokeiyoushi';
import { jodoushi } from './dictionaries/jodoushi';
import { kandoushi } from './dictionaries/kandoushi';
import { keishikimeishi } from './dictionaries/keishikimeishi';
import { keiyoushi } from './dictionaries/keiyoushi';
import { meishi } from './dictionaries/meishi';
import { rentaishi } from './dictionaries/rentaishi';
import { setsuzokushi } from './dictionaries/setsuzokushi';
import type { DictOpts, Dictionary, DictionaryInput, DictionaryInputs } from './type';
import { hiraToKana } from './util';

const defaultOpts: DictOpts = {
  ignore: [],
  'force-close': [],
  'force-open': ['all'],
};

type RuleOptionSet = {
  ignore: Set<string>;
  forceClose: Set<string>;
  forceOpen: Set<string>;
};

function isRuleEnabled(yomi: string, nameLoma: string, oc: 'open' | 'close', ruleOptionSet: RuleOptionSet): boolean {
  if (yomi.includes('|')) return !yomi.split('|').some((y) => !isRuleEnabled(y, nameLoma, oc, ruleOptionSet));

  const { ignore, forceClose, forceOpen } = ruleOptionSet;
  // decide by yomi
  if (ignore.has(yomi) || (oc === 'open' && forceClose.has(yomi)) || (oc === 'close' && forceOpen.has(yomi)))
    return false;
  if ((oc === 'open' && forceOpen.has(yomi)) || (oc === 'close' && forceClose.has(yomi))) return true;
  // decide by nameLoma
  if (
    ignore.has(nameLoma) ||
    (oc === 'open' && forceClose.has(nameLoma)) ||
    (oc === 'close' && forceOpen.has(nameLoma))
  )
    return false;
  if ((oc === 'open' && forceOpen.has(nameLoma)) || (oc === 'close' && forceClose.has(nameLoma))) return true;
  // decide by all
  if (ignore.has('all') || (oc === 'open' && forceClose.has('all')) || (oc === 'close' && forceOpen.has('all')))
    return false;
  return true;
}

function getSurfaceFrom(dic: Omit<Dictionary, 'message'>): string {
  return dic.tokens
    .map((token) => (Array.isArray(token.surface_form) ? token.surface_form.join('') : token.surface_form ?? ''))
    .join('');
}

function getForceReading(dic: Omit<Dictionary, 'message'>): string {
  return dic.tokens
    .map((token) =>
      Array.isArray(token.reading)
        ? token.reading.join('')
        : token.reading ??
          hiraToKana(Array.isArray(token.surface_form) ? token.surface_form.join('') : token.surface_form ?? ''),
    )
    .join('');
}
function getReading(dic: Omit<Dictionary, 'message'>): string | undefined {
  if (dic.tokens.some((token) => token.reading === undefined)) return undefined;
  return getForceReading(dic);
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
): Dictionary[] {
  const openItem = 'open' in openCloseItem ? openCloseItem.open ?? [] : 'close' in openCloseItem ? [] : openCloseItem;
  if (Array.isArray(openItem)) {
    return openItem.flatMap((item) => shouldOpenDictionary(name, nameLoma, ruleOptionSet, item));
  }
  if (openItem.warnOnly) {
    const reading = openItem.expected.map(hiraToKana).join('|');
    if (!isRuleEnabled(reading, nameLoma, 'open', ruleOptionSet)) return [];
    return [
      {
        tokens: openItem.tokens,
        message: `ひらがなに開かれるべき${name}です: ${getSurfaceFrom({ tokens: openItem.tokens })}(${reading})`,
      },
    ];
  }
  const reading = getReading(openItem) ?? hiraToKana(openItem.expected);
  if (!isRuleEnabled(reading, nameLoma, 'open', ruleOptionSet)) return [];
  const shouldOpenedText = getSurfaceFrom(openItem);
  return [
    {
      ...openItem,
      message: `ひらがなに開かれるべき${name}です: ${shouldOpenedText}(${reading})`,
    },
  ];
}

function convertOpenToClose(openItem: DictionaryInput): DictionaryInput {
  return {
    expected: getSurfaceFrom({ tokens: openItem.tokens }),
    tokens: [
      {
        ...openItem.tokens[0],
        basic_form: openItem.expected,
        surface_form: openItem.expected,
      },
    ],
  };
}

function convertOpenToCloses(openItem: DictionaryInput | DictionaryInput[]): DictionaryInput[] {
  if (Array.isArray(openItem)) {
    return openItem.map(convertOpenToClose);
  }
  return [convertOpenToClose(openItem)];
}

function shouldCloseDictionaries(
  name: string,
  nameLoma: string,
  ruleOptionSet: {
    forceClose: Set<string>;
    forceOpen: Set<string>;
    ignore: Set<string>;
  },
  openCloseItem: DictionaryInputs,
) {
  const closeItem =
    'close' in openCloseItem
      ? openCloseItem.close ?? []
      : 'open' in openCloseItem
        ? []
        : convertOpenToCloses(openCloseItem);
  if (Array.isArray(closeItem)) {
    return closeItem.flatMap((item) => shouldCloseDictionary(name, nameLoma, ruleOptionSet, item));
  }
  return shouldCloseDictionary(name, nameLoma, ruleOptionSet, closeItem);
}

function shouldCloseDictionary(
  name: string,
  nameLoma: string,
  ruleOptionSet: {
    forceClose: Set<string>;
    forceOpen: Set<string>;
    ignore: Set<string>;
  },
  closeItem: DictionaryInput,
): Dictionary[] {
  const reading = getForceReading({ tokens: closeItem.tokens });
  if (!isRuleEnabled(reading, nameLoma, 'close', ruleOptionSet)) return [];
  if (closeItem.warnOnly) {
    return [
      {
        tokens: closeItem.tokens,
        message: `漢字に閉じるべき${name}です: ${closeItem.expected.map((x) => `${x}(${reading})`).join('|')}`,
      },
    ];
  }
  return [
    {
      ...closeItem,
      message: `漢字に閉じるべき${name}です: ${closeItem.expected}${reading === '' ? '' : `(${reading})`}`,
    },
  ];
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
      ['動詞', 'doushi', doushi],
      ['助動詞', 'jodoushi', jodoushi],
      ['感動詞', 'kandoushi', kandoushi],
      ['形容詞', 'keiyoushi', keiyoushi],
      ['名詞', 'meishi', meishi],
      ['連体詞', 'rentaishi', rentaishi],
      ['接続詞', 'setuzokushi', setsuzokushi],
    ];

    for (const [name, nameLoma, items] of targetList) {
      for (const item of items) {
        const closeRule = shouldCloseDictionaries(name, nameLoma, { forceClose, forceOpen, ignore }, item);
        const openRule = shouldOpenDictionary(name, nameLoma, { forceClose, forceOpen, ignore }, item);
        if (closeRule) {
          dict = [...dict, ...closeRule];
        }
        if (openRule) {
          dict = [...dict, ...openRule];
        }
      }
    }
    return dict;
  }
}
