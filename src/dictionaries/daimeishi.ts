import type { DictionaryInputs } from '../type';
import { genToken } from './util';

export const daimeishi: DictionaryInputs[] = [
  {
    expected: 'あなた',
    tokens: [genToken('貴方', 'アナタ', '名詞', '代名詞')],
  },
  {
    expected: 'いずれ',
    tokens: [genToken('何れ', 'イズレ', '名詞', '代名詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'ここ',
    tokens: [genToken('此処', 'ココ', '名詞' /*, '代名詞'*/)],
    joyogai: 'joyogai',
  },
  {
    expected: 'これ',
    tokens: [genToken('此れ', 'コレ', '名詞', '代名詞')],
    joyogai: 'joyogai',
  },
  {
    expected: 'そこ',
    tokens: [genToken('其処', 'ソコ', '名詞', '代名詞')],
    joyogai: 'joyogai',
  },
  {
    expected: 'それ',
    tokens: [genToken('其れ', 'ソレ', '名詞', '代名詞')],
    joyogai: 'joyogai',
  },
  {
    expected: 'どこ',
    tokens: [genToken('何処', 'ドコ', '名詞', '代名詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'どなた',
    tokens: [genToken('何方', 'ドナタ', '名詞' /*, '代名詞'*/)],
    joyogai: 'hyogai',
  },
];
