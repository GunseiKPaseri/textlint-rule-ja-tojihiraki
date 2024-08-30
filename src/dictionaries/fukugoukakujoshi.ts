import type { DictionaryInputs } from '../type';

export const fukugoukakujoshi: DictionaryInputs[] = [
  {
    open: {
      expected: 'をはじめ',
      tokens: [
        {
          surface_form: 'を',
          pos: '助詞',
          pos_detail_1: '格助詞',
          basic_form: 'を',
          reading: 'ヲ',
        },
        {
          surface_form: '始め',
          pos: '名詞',
          basic_form: '始め',
          reading: 'ハジメ',
        },
      ],
    },
    close: {
      expected: 'を始め',
      tokens: [
        {
          surface_form: 'を',
          pos: '助詞',
          pos_detail_1: '格助詞',
          basic_form: 'を',
          reading: 'ヲ',
        },
        {
          surface_form: 'はじめ',
          pos: '名詞',
          basic_form: 'はじめ',
          reading: 'ハジメ',
        },
      ],
    },
  },
  {
    expected: 'をもって',
    tokens: [
      {
        surface_form: 'を以て',
        pos: '助詞',
        pos_detail_1: '格助詞',
        basic_form: 'を以て',
        reading: 'ヲモッテ',
      },
    ],
    joyogai: 'hyogai',
  },
];
