import type { DictionaryInputs } from '../type';

export const keiyoushi: DictionaryInputs[] = [
  {
    expected: 'ありがたい',
    tokens: [
      {
        surface_form: '有難い',
        pos: '形容詞',
        basic_form: '有難い',
        reading: 'アリガタイ',
      },
    ],
  },
  {
    open: {
      expected: 'うまく',
      tokens: [
        {
          surface_form: '上手く',
          pos: '形容詞',
          basic_form: '上手い',
          reading: 'ウマク',
        },
      ],
    },
    close: {
      expected: '上手く',
      tokens: [
        {
          surface_form: 'うまく',
          pos: '形容詞',
          basic_form: 'うまい',
          reading: 'ウマク',
        },
      ],
    },
  },
  {
    expected: 'おかしい',
    tokens: [
      {
        surface_form: '可笑しい',
        pos: '形容詞',
        basic_form: '可笑しい',
        reading: 'オカシイ',
      },
    ],
  },
  {
    expected: 'ない',
    tokens: [
      {
        surface_form: '無い',
        pos: '形容詞',
        basic_form: '無い',
        reading: 'ナイ',
      },
    ],
  },
  {
    expected: 'まずい',
    tokens: [
      {
        surface_form: '不味い',
        pos: '形容詞',
        basic_form: '不味い',
        reading: 'マズイ',
      },
    ],
  },
  {
    expected: 'もったいない',
    tokens: [
      {
        surface_form: '勿体ない',
        pos: '形容詞',
        basic_form: '勿体ない',
        reading: 'モッタイナイ',
      },
    ],
  },
  {
    expected: 'よい',
    tokens: [
      {
        surface_form: '良い',
        pos: '形容詞',
        basic_form: '良い',
        reading: 'ヨイ',
      },
    ],
  },
  {
    open: {
      expected: 'よかっ',
      tokens: [
        {
          surface_form: '良かっ',
          pos: '形容詞',
          basic_form: '良い',
          reading: 'ヨカッ',
        },
      ],
    },
    close: {
      expected: '良かっ',
      tokens: [
        {
          surface_form: 'よかっ',
          pos: '形容詞',
          basic_form: 'よい',
          reading: 'ヨカッ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'よく',
      tokens: [
        {
          surface_form: '良く',
          pos: '形容詞',
          basic_form: '良い',
          reading: 'ヨク',
        },
      ],
    },
    close: {
      expected: '良く',
      tokens: [
        {
          surface_form: 'よく',
          pos: '副詞',
          basic_form: 'よく',
          reading: 'ヨク',
        },
      ],
    },
  },
];
