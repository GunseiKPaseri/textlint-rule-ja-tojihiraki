import type { DictionaryInputs } from '../type';
import { genToken } from './util';

export const rentaishi: DictionaryInputs[] = [
  {
    expected: 'いろいろ',
    tokens: [genToken('色々', 'イロイロ', '名詞')],
  },
  {
    expected: 'いろんな',
    tokens: [genToken('色んな', 'イロンナ', '連体詞')],
  },
  {
    expected: 'いわゆる',
    tokens: [genToken('所謂', 'イワユル', '連体詞')],
    joyogai: 'joyogai',
  },
  {
    open: {
      expected: 'この前',
      tokens: [genToken('此の前', 'コノマエ', '名詞')],
      joyogai: 'joyogai',
    },
    close: {
      expected: '此の前',
      tokens: [genToken('この', 'コノ', '連体詞'), genToken('前', 'マエ', '名詞', '副詞可能')],
      joyogai: 'joyogai',
    },
  },
  {
    expected: 'その',
    tokens: [genToken('其の', 'ソノ', '連体詞')],
    joyogai: 'joyogai',
  },
];
