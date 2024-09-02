import type { DictionaryInputs } from '../type';
import { genToken } from './util';

export const meishi: DictionaryInputs[] = [
  {
    expected: 'いくら',
    tokens: [genToken('幾ら', 'イクラ', '名詞')],
  },
  {
    expected: 'こだわり',
    tokens: [genToken('拘り', 'コダワリ', '名詞')],
  },
  {
    expected: 'したたか',
    tokens: [genToken('強か', 'シタタカ', '名詞', '形容動詞語幹')],
  },
  {
    expected: 'すべて',
    tokens: [genToken('全て', 'スベテ', '名詞')],
  },
  {
    open: [
      {
        expected: 'たとえ',
        tokens: [genToken('例え', 'タトエ', '名詞')],
      },
      {
        expected: 'たとえ',
        tokens: [genToken('譬え', 'タトエ', '名詞')],
      },
      {
        expected: 'たとえ',
        tokens: [genToken('喩え', 'タトエ', '名詞')],
      },
    ],
    close: {
      warnOnly: true,
      expected: ['例え', '譬え', '喩え'],
      tokens: [genToken('たとえ', 'タトエ', '名詞')],
    },
  },
  {
    expected: 'もってのほか',
    tokens: [genToken('もっての外', 'モッテノホカ', '名詞')],
  },
  {
    open: {
      expected: 'わずか',
      tokens: [genToken('僅か', 'ワズカ', '名詞')],
    },
    close: {
      expected: '僅か',
      tokens: [genToken('わずか', 'ワズカ', '副詞', '助詞類接続')],
    },
  },
];
