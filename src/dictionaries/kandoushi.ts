import type { DictionaryInputs } from '../type';
import { genToken } from './util';

export const kandoushi: DictionaryInputs[] = [
  {
    expected: 'ありがとう',
    tokens: [genToken('有難う', 'アリガトウ', '感動詞')],
  },
];
