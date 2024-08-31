import type { DictionaryInputs } from '../type';

export const meishi: DictionaryInputs[] = [
  {
    expected: 'こだわり',
    tokens: [
      {
        surface_form: '拘り',
        pos: '名詞',
        basic_form: '拘り',
        reading: 'コダワリ',
      },
    ],
  },
  {
    open: [
      {
        expected: 'たとえ',
        tokens: [
          {
            surface_form: '例え',
            pos: '名詞',
            basic_form: '例え',
            reading: 'タトエ',
          },
        ],
      },
      {
        expected: 'たとえ',
        tokens: [
          {
            surface_form: '譬え',
            pos: '名詞',
            basic_form: '譬え',
            reading: 'タトエ',
          },
        ],
      },
      {
        expected: 'たとえ',
        tokens: [
          {
            surface_form: '喩え',
            pos: '名詞',
            basic_form: '喩え',
            reading: 'タトエ',
          },
        ],
      },
    ],
    close: {
      warnOnly: true,
      expected: ['例え', '譬え', '喩え'],
      tokens: [
        {
          surface_form: 'たとえ',
          pos: '名詞',
          basic_form: 'たとえ',
          reading: 'タトエ',
        },
      ],
    },
  },
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
