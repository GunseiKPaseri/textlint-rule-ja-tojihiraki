import type { DictionaryInputs } from '../type';

export const rentaishi: DictionaryInputs[] = [
  {
    expected: 'いろいろ',
    tokens: [
      {
        surface_form: '色々',
        basic_form: '色々',
        pos: '名詞',
        reading: 'イロイロ',
      },
    ],
  },
  {
    expected: 'いろんな',
    tokens: [
      {
        surface_form: '色んな',
        basic_form: '色んな',
        pos: '連体詞',
        reading: 'イロンナ',
      },
    ],
  },
  // {
  //   message: '平仮名にひらいたほうが読みやすい連体詞を使用しています: 所謂',
  //   expected: 'いわゆる',
  //   tokens: [
  //     {
  //       surface_form: '所謂',
  //       basic_form: '所謂',
  //       pos: '連体詞',
  //       reading: 'イワユル',
  //     },
  //   ],
  // },
  {
    open: {
      expected: 'この前',
      tokens: [
        {
          surface_form: '此の前',
          basic_form: '此の前',
          pos: '名詞',
          reading: 'コノマエ',
        },
      ],
    },
    close: {
      expected: '此の前',
      tokens: [
        {
          surface_form: 'この',
          basic_form: 'この',
          pos: '連体詞',
          reading: 'コノ',
        },
        {
          surface_form: '前',
          basic_form: '前',
          pos: '名詞',
          pos_detail_1: '副詞可能',
          reading: 'マエ',
        },
      ],
    },
  },
  {
    expected: 'その',
    tokens: [
      {
        surface_form: '其の',
        basic_form: '其の',
        pos: '連体詞',
        reading: 'ソノ',
      },
    ],
  },
];
