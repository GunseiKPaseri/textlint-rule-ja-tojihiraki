import type { DictionaryInputs } from '../type';

export const fukushi: DictionaryInputs[] = [
  {
    expected: 'あまり',
    tokens: [
      {
        surface_form: '余り',
        pos: '副詞',
        basic_form: '余り',
        reading: 'アマリ',
      },
    ],
  },
  {
    open: {
      expected: 'あとで',
      tokens: [
        {
          surface_form: '後で',
          pos: '副詞',
          basic_form: '後で',
          reading: 'アトデ',
        },
      ],
    },
    close: {
      expected: '後で',
      tokens: [
        {
          surface_form: 'あと',
          pos: '名詞',
          basic_form: 'あと',
          reading: 'アト',
        },
        {
          surface_form: 'で',
          pos: '助詞',
          basic_form: 'で',
          reading: 'デ',
        },
      ],
    },
  },
  {
    expected: 'いかにも',
    tokens: [
      {
        surface_form: '如何にも',
        pos: '副詞',
        basic_form: '如何にも',
        reading: 'イカニモ',
      },
    ],
  },
  {
    expected: 'いっそう',
    tokens: [
      {
        surface_form: '一層',
        pos: '副詞',
        basic_form: '一層',
        reading: 'イッソウ',
      },
    ],
  },
  {
    expected: 'いろいろ',
    tokens: [
      {
        surface_form: '色々',
        basic_form: '色々',
        pos: '副詞',
        reading: 'イロイロ',
      },
    ],
  },
  {
    expected: 'およそ',
    tokens: [
      {
        surface_form: '凡そ',
        basic_form: '凡そ',
        pos: '副詞',
        reading: 'オヨソ',
      },
    ],
  },
  {
    expected: 'かえって',
    tokens: [
      {
        surface_form: '却って',
        pos: '副詞',
        basic_form: '却って',
        reading: 'カエッテ',
      },
    ],
  },
  {
    expected: 'きわめて',
    tokens: [
      {
        surface_form: '極めて',
        pos: '副詞',
        basic_form: '極めて',
        reading: 'キワメテ',
      },
    ],
  },
  {
    expected: 'さすが',
    tokens: [
      {
        surface_form: '流石',
        // pos: '副詞',
        basic_form: '流石',
        reading: 'サスガ',
      },
    ],
  },
  {
    expected: 'さらに',
    tokens: [
      {
        surface_form: '更に',
        pos: '副詞',
        basic_form: '更に',
        reading: 'サラニ',
      },
    ],
  },
  {
    expected: 'しばらく',
    tokens: [
      {
        surface_form: '暫く',
        pos: '副詞',
        basic_form: '暫く',
        reading: 'シバラク',
      },
    ],
  },
  {
    expected: 'ずいぶん',
    tokens: [
      {
        surface_form: '随分',
        pos: '副詞',
        basic_form: '随分',
        reading: 'ズイブン',
      },
    ],
  },
  {
    expected: 'すでに',
    tokens: [
      {
        surface_form: '既に',
        pos: '副詞',
        basic_form: '既に',
        reading: 'スデニ',
      },
    ],
  },
  {
    expected: 'せっかく',
    tokens: [
      {
        surface_form: '折角',
        // pos: '副詞',
        basic_form: '折角',
        reading: 'セッカク',
      },
    ],
  },
  {
    expected: 'ぜひ',
    tokens: [
      {
        surface_form: '是非',
        pos: '副詞',
        basic_form: '是非',
        reading: 'ゼヒ',
      },
    ],
  },
  {
    expected: 'たいそう',
    tokens: [
      {
        surface_form: '大層',
        pos: '副詞',
        basic_form: '大層',
        reading: 'タイソウ',
      },
    ],
  },
  // {
  //   expected: 'たいへん',
  //   tokens: [
  //     {
  //       surface_form: '大変',
  //       pos: '副詞',
  //       basic_form: '大変',
  //       reading: 'タイヘン',
  //     },
  //   ],
  // },
  {
    open: {
      expected: 'たくさん',
      tokens: [
        {
          surface_form: '沢山',
          pos: '副詞',
          basic_form: '沢山',
          reading: 'タクサン',
        },
      ],
    },
    close: {
      expected: '沢山',
      tokens: [
        {
          surface_form: 'たくさん',
          pos: '名詞',
          pos_detail_1: '副詞可能',
          basic_form: 'たくさん',
          reading: 'タクサン',
        },
      ],
    },
  },
  // {
  //   expected: 'たとえ',
  //   tokens: [
  //     {
  //       surface_form: '例え',
  //       pos: '副詞',
  //       basic_form: '例え',
  //       reading: 'タトエ',
  //     },
  //   ],
  // },
  {
    expected: 'ちょうど',
    tokens: [
      {
        surface_form: '丁度',
        pos: '副詞',
        basic_form: '丁度',
        reading: 'チョウド',
      },
    ],
  },
  {
    expected: 'ときどき',
    tokens: [
      {
        surface_form: '時々',
        pos: '副詞',
        basic_form: '時々',
        reading: 'トキドキ',
      },
    ],
  },
  {
    expected: 'なぜ',
    tokens: [
      {
        surface_form: '何故',
        pos: '副詞',
        basic_form: '何故',
        reading: 'ナゼ',
      },
    ],
  },
  {
    expected: 'なぜか',
    tokens: [
      {
        surface_form: '何故か',
        pos: '副詞',
        basic_form: '何故か',
        reading: 'ナゼカ',
      },
    ],
  },
  {
    expected: 'ほとんど',
    tokens: [
      {
        surface_form: '殆ど',
        pos: '副詞',
        basic_form: '殆ど',
        reading: 'ホトンド',
      },
    ],
  },
  {
    expected: 'まさに',
    tokens: [
      {
        surface_form: '正に',
        pos: '副詞',
        basic_form: '正に',
        reading: 'マサニ',
      },
    ],
  },
  {
    expected: 'まず',
    tokens: [
      {
        surface_form: '先ず',
        pos: '副詞',
        basic_form: '先ず',
        reading: 'マズ',
      },
    ],
  },
  {
    expected: 'むしろ',
    tokens: [
      {
        surface_form: '寧ろ',
        pos: '副詞',
        basic_form: '寧ろ',
        reading: 'ムシロ',
      },
    ],
  },
  {
    expected: 'もちろん',
    tokens: [
      {
        surface_form: '勿論',
        pos: '副詞',
        basic_form: '勿論',
        reading: 'モチロン',
      },
    ],
  },
  {
    expected: 'ようやく',
    tokens: [
      {
        surface_form: '漸く',
        pos: '副詞',
        basic_form: '漸く',
        reading: 'ヨウヤク',
      },
    ],
  },
  {
    expected: 'よろしく',
    tokens: [
      {
        surface_form: '宜しく',
        pos: '副詞',
        basic_form: '宜しく',
        reading: 'ヨロシク',
      },
    ],
  },
];
