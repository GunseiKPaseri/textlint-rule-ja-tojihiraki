import type { DictionaryInputs } from '../type';

export const fukujoshi: DictionaryInputs[] = [
  // {
  //   message: '平仮名にひらいたほうが読みやすい副助詞を使用しています: 位',
  //   expected: 'くらい',
  //   tokens: [
  //     {
  //       surface_form: '位',
  //       pos: '助詞',
  //       pos_detail_1: '副助詞',
  //       basic_form: '位',
  //       reading: 'クライ',
  //     },
  //   ],
  // },
  // {
  //   message: '平仮名にひらいたほうが読みやすい副助詞を使用しています: 等',
  //   expected: 'など',
  //   tokens: [
  //     {
  //       surface_form: '等',
  //       pos: '助詞',
  //       pos_detail_1: '副助詞',
  //       basic_form: '等',
  //       reading: 'ナド',
  //     },
  //   ],
  // },
  {
    expected: 'ほど',
    tokens: [
      {
        surface_form: '程',
        pos: '助詞',
        pos_detail_1: '副助詞',
        basic_form: '程',
        reading: 'ホド',
      },
    ],
  },
  {
    expected: 'まで',
    tokens: [
      {
        surface_form: '迄',
        pos: '助詞',
        pos_detail_1: '副助詞',
        basic_form: '迄',
        reading: 'マデ',
      },
    ],
  },
];
