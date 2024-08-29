import type { DictionaryInputs } from '../type';

export const meishi: DictionaryInputs[] = [
  {
    expected: 'すべて',
    tokens: [
      {
        surface_form: '全て',
        pos: '名詞',
        basic_form: '全て',
        reading: 'スベテ',
      },
    ],
  },
  {
    expected: 'もってのほか',
    tokens: [
      {
        surface_form: 'もっての外',
        pos: '名詞',
        basic_form: 'もっての外',
        reading: 'モッテノホカ',
      },
    ],
  },
  {
    open: {
      expected: 'わずか',
      tokens: [
        {
          surface_form: '僅か',
          pos: '名詞',
          basic_form: '僅か',
          reading: 'ワズカ',
        },
      ],
    },
    close: {
      expected: '僅か',
      tokens: [
        {
          surface_form: 'わずか',
          pos: '副詞',
          pos_detail_1: '助詞類接続',
          basic_form: 'わずか',
          reading: 'ワズカ',
        },
      ],
    },
  },
];
