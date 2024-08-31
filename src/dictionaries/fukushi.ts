import type { DictionaryInputs } from '../type';

export const fukushi: DictionaryInputs[] = [
  {
    expected: 'あいにく',
    tokens: [
      {
        surface_form: '生憎',
        pos: '副詞',
        basic_form: '生憎',
        reading: 'アイニク',
      },
    ],
  },
  {
    expected: 'あえて',
    tokens: [
      {
        surface_form: '敢えて',
        pos: '副詞',
        basic_form: '敢えて',
        reading: 'アエテ',
      },
    ],
    joyogai: 'hyogai',
  },
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
    expected: 'あらかじめ',
    tokens: [
      {
        surface_form: '予め',
        pos: '副詞',
        basic_form: '予め',
        reading: 'アラカジメ',
      },
    ],
    joyogai: 'hyogai',
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
    joyogai: 'hyogai',
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
    open: {
      warnOnly: true,
      expected: ['いまだ', 'まだ'],
      tokens: [
        {
          surface_form: '未だ',
          pos: '副詞',
          basic_form: '未だ',
        },
      ],
    },
    close: [
      {
        expected: '未だ',
        tokens: [
          {
            surface_form: 'いまだ',
            pos: '副詞',
            basic_form: 'いまだ',
            reading: 'イマダ',
          },
        ],
      },
      {
        expected: '未だ',
        tokens: [
          {
            surface_form: 'まだ',
            pos: '副詞',
            basic_form: 'まだ',
            reading: 'マダ',
          },
        ],
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
  // 所謂
  {
    expected: 'おのずから',
    tokens: [
      {
        surface_form: '自ずから',
        pos: '副詞',
        basic_form: '自ずから',
        reading: 'オノズカラ',
      },
    ],
    joyogai: 'hyogai',
  },
  {
    expected: 'おのずと',
    tokens: [
      {
        surface_form: '自ずと',
        pos: '副詞',
        basic_form: '自ずと',
        reading: 'オノズト',
      },
    ],
    joyogai: 'hyogai',
  },
  {
    open: {
      warnOnly: true,
      expected: ['およそ', 'おおよそ'],
      tokens: [
        {
          surface_form: '凡そ',
          basic_form: '凡そ',
          pos: '副詞',
        },
      ],
      joyogai: 'hyogai',
    },
    close: [
      {
        expected: '凡そ',
        tokens: [
          {
            surface_form: 'およそ',
            basic_form: 'およそ',
            pos: '副詞',
            reading: 'オヨソ',
          },
        ],
        joyogai: 'hyogai',
      },
      {
        expected: '凡そ',
        tokens: [
          {
            surface_form: 'おおよそ',
            basic_form: 'おおよそ',
            pos: '副詞',
            reading: 'オオヨソ',
          },
        ],
        joyogai: 'hyogai',
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
    joyogai: 'hyogai',
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
    joyogai: 'hyogai',
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
  {
    expected: 'たちまち',
    tokens: [
      {
        surface_form: '忽ち',
        pos: '副詞',
        basic_form: '忽ち',
        reading: 'タチマチ',
      },
    ],
  },
  {
    expected: 'たとえ',
    tokens: [
      {
        surface_form: '仮令',
        pos: '副詞',
        basic_form: '仮令',
        reading: 'タトエ',
      },
    ],
  },
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
    joyogai: 'hyogai',
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
    joyogai: 'hyogai',
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
    joyogai: 'joyogai',
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
    joyogai: 'hyogai',
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
    joyogai: 'hyogai',
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
    joyogai: 'joyogai',
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
    joyogai: 'hyogai',
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
    joyogai: 'hyogai',
  },
];
