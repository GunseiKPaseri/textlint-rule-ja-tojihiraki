import type { DictionaryInputs } from '../type';
import { genToken } from './util';

export const fukujoshi: DictionaryInputs[] = [
  {
    expected: 'くらい',
    tokens: [genToken('位', 'クライ', '助詞', '副助詞')],
  },
  {
    expected: 'など',
    tokens: [genToken('等', 'ナド', '助詞', '副助詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'ほど',
    tokens: [genToken('程', 'ホド', '助詞', '副助詞')],
  },
  {
    expected: 'まで',
    tokens: [genToken('迄', 'マデ', '助詞', '副助詞')],
    joyogai: 'joyogai',
  },
];
