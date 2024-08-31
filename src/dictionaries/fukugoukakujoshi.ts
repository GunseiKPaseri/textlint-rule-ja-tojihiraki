import type { DictionaryInputs } from '../type';
import { genToken } from './util';

export const fukugoukakujoshi: DictionaryInputs[] = [
  {
    open: {
      expected: 'をはじめ',
      tokens: [genToken('を', 'ヲ', '助詞', '格助詞'), genToken('始め', 'ハジメ', '名詞')],
    },
    close: {
      expected: 'を始め',
      tokens: [genToken('を', 'ヲ', '助詞', '格助詞'), genToken('はじめ', 'ハジメ', '名詞')],
    },
  },
  {
    expected: 'をもって',
    tokens: [genToken('を以て', 'ヲモッテ', '助詞', '格助詞')],
    joyogai: 'hyogai',
  },
];
