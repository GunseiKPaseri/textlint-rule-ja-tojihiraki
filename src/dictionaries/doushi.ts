import type { DictionaryInputs } from '../type';

export const doushi: DictionaryInputs[] = [
  // 分かる
  {
    open: {
      expected: 'わかる',
      tokens: [
        {
          surface_form: '分かる',
          pos: '動詞',
          basic_form: '分かる',
          reading: 'ワカル',
        },
      ],
    },
    close: {
      expected: '分かる',
      tokens: [
        {
          surface_form: 'わかる',
          pos: '動詞',
          basic_form: 'わかる',
          reading: 'ワカル',
        },
      ],
    },
  },
  {
    open: {
      expected: 'わから',
      tokens: [
        {
          surface_form: '分から',
          pos: '動詞',
          basic_form: '分かる',
          reading: 'ワカラ',
        },
      ],
    },
    close: {
      expected: '分から',
      tokens: [
        {
          surface_form: 'わから',
          pos: '動詞',
          basic_form: 'わかる',
          reading: 'ワカラ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'わかり',
      tokens: [
        {
          surface_form: '分かり',
          pos: '動詞',
          basic_form: '分かる',
          reading: 'ワカリ',
        },
      ],
    },
    close: {
      expected: '分かり',
      tokens: [
        {
          surface_form: 'わかり',
          pos: '動詞',
          basic_form: 'わかる',
          reading: 'ワカリ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'わかろ',
      tokens: [
        {
          surface_form: '分かろ',
          pos: '動詞',
          basic_form: '分かる',
          reading: 'ワカロ',
        },
      ],
    },
    close: {
      expected: '分かろ',
      tokens: [
        {
          surface_form: 'わかろ',
          pos: '動詞',
          basic_form: 'わかる',
          reading: 'ワカロ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'わかっ',
      tokens: [
        {
          surface_form: '分かっ',
          pos: '動詞',
          basic_form: '分かる',
          reading: 'ワカッ',
        },
      ],
    },
    close: {
      expected: '分かっ',
      tokens: [
        {
          surface_form: 'わかっ',
          pos: '動詞',
          basic_form: 'わかる',
          reading: 'ワカッ',
        },
      ],
    },
  },
  // できる
  {
    open: {
      expected: 'できる',
      tokens: [
        {
          surface_form: '出来る',
          pos: '動詞',
          basic_form: '出来る',
          reading: 'デキル',
        },
      ],
    },
    close: {
      expected: '出来る',
      tokens: [
        {
          surface_form: 'できる',
          pos: '動詞',
          basic_form: 'できる',
          reading: 'デキル',
        },
      ],
    },
  },
  {
    open: {
      expected: 'でき',
      tokens: [
        {
          surface_form: '出来',
          pos: '動詞',
          basic_form: '出来る',
          reading: 'デキ',
        },
      ],
    },
    close: {
      expected: '出来',
      tokens: [
        {
          surface_form: 'でき',
          pos: '動詞',
          basic_form: 'できる',
          reading: 'デキ',
        },
      ],
    },
  },
  // まとめる
  {
    open: {
      expected: 'まとめる',
      tokens: [
        {
          surface_form: '纏める',
          pos: '動詞',
          basic_form: '纏める',
          reading: 'マトメル',
        },
      ],
    },
    close: {
      expected: '纏める',
      tokens: [
        {
          surface_form: 'まとめる',
          pos: '動詞',
          basic_form: 'まとめる',
          reading: 'マトメル',
        },
      ],
    },
  },
  {
    open: {
      expected: 'まとめ',
      tokens: [
        {
          surface_form: '纏め',
          pos: '動詞',
          basic_form: '纏める',
          reading: 'マトメ',
        },
      ],
    },
    close: {
      expected: '纏め',
      tokens: [
        {
          surface_form: 'まとめ',
          pos: '動詞',
          basic_form: 'まとめる',
          reading: 'マトメ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'まとめよ',
      tokens: [
        {
          surface_form: '纏めよ',
          pos: '動詞',
          basic_form: '纏める',
          reading: 'マトメヨ',
        },
      ],
    },
    close: {
      expected: '纏めよ',
      tokens: [
        {
          surface_form: 'まとめよ',
          pos: '動詞',
          basic_form: 'まとめる',
          reading: 'マトメヨ',
        },
      ],
    },
  },
  // こだわる
  {
    open: {
      warnOnly: true,
      expected: ['こだわり', 'かかわり'],
      tokens: [
        {
          surface_form: '拘り',
          pos: '動詞',
          basic_form: '拘る',
        },
      ],
    },
    close: [
      {
        expected: '拘り',
        tokens: [
          {
            surface_form: 'こだわり',
            pos: '動詞',
            basic_form: 'こだわる',
            reading: 'コダワリ',
          },
        ],
      },
      {
        expected: '拘り',
        tokens: [
          {
            surface_form: 'こだわり',
            pos: '名詞',
            basic_form: 'こだわり',
            reading: 'コダワリ',
          },
        ],
      },
      {
        expected: '拘り',
        tokens: [
          {
            surface_form: 'かかわり',
            pos: '動詞',
            basic_form: 'かかわる',
            reading: 'コダワリ',
          },
        ],
      },
    ],
  },
  // いじる
  {
    expected: 'いじる',
    tokens: [
      {
        surface_form: '弄る',
        pos: '動詞',
        basic_form: '弄る',
        reading: 'イジル',
      },
    ],
  },
];
