import type { DictionaryInputs } from '../type';
import { genToken } from './util';

export const fukushi: DictionaryInputs[] = [
  {
    expected: 'あいにく',
    tokens: [genToken('生憎', 'アイニク', '副詞')],
  },
  {
    expected: 'あえて',
    tokens: [genToken('敢えて', 'アエテ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    open: [
      {
        expected: 'あたかも',
        tokens: [genToken('宛も', 'アタカモ', '副詞')],
        joyogai: 'hyogai',
      },
      {
        expected: 'あたかも',
        tokens: [genToken('恰も', 'アタカモ', '副詞')],
        joyogai: 'hyogai',
      },
    ],
    close: {
      warnOnly: true,
      expected: ['宛も', '恰も'],
      tokens: [genToken('あたかも', 'アタカモ', '副詞')],
    },
  },
  {
    open: {
      expected: 'あとで',
      tokens: [genToken('後で', 'アトデ', '副詞')],
    },
    close: {
      expected: '後で',
      tokens: [genToken('あと', 'アト', '名詞'), genToken('で', 'デ', '助詞')],
    },
  },
  {
    open: {
      warnOnly: true,
      expected: ['あまつさえ', 'あまっさえ'],
      tokens: [genToken('剰え', 'アマッサエ', '副詞')],
      joyogai: 'hyogai',
    },
    close: [
      {
        expected: '剰え',
        tokens: [genToken('あまつさえ', 'アマツサエ', '副詞')],
        joyogai: 'hyogai',
      },
      {
        expected: '剰え',
        tokens: [genToken('あまっさえ', 'アマッサエ', '副詞')],
        joyogai: 'hyogai',
      },
    ],
  },
  {
    open: [
      {
        expected: 'あまねく',
        tokens: [genToken('遍く', 'アマネク', '副詞')],
      },
      {
        expected: 'あまねく',
        tokens: [genToken('普く', 'アマネク', '副詞')],
      },
    ],
    close: {
      warnOnly: true,
      expected: ['遍く', '普く'],
      tokens: [genToken('あまねく', 'アマネク', '副詞')],
    },
  },
  {
    expected: 'あまり',
    tokens: [genToken('余り', 'アマリ', '副詞')],
  },
  {
    expected: 'あらかじめ',
    tokens: [genToken('予め', 'アラカジメ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'いかにも',
    tokens: [genToken('如何にも', 'イカニモ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    open: [
      {
        expected: 'いささか',
        tokens: [genToken('些か', 'イササカ', '副詞')],
        joyogai: 'joyogai',
      },
      {
        expected: 'いささか',
        tokens: [genToken('些か', 'イササカ', '副詞')],
        joyogai: 'joyogai',
      },
    ],
    close: {
      warnOnly: true,
      expected: ['些か', '聊か'],
      tokens: [genToken('いささか', 'イササカ', '副詞')],
    },
  },
  {
    expected: 'いっそう',
    tokens: [genToken('一層', 'イッソウ', '副詞')],
  },
  {
    open: {
      warnOnly: true,
      expected: ['いまだ', 'まだ'],
      tokens: [genToken('未だ', 'イマダ', '副詞')],
    },
    close: [
      {
        expected: '未だ',
        tokens: [genToken('いまだ', 'イマダ', '副詞')],
      },
      {
        expected: '未だ',
        tokens: [genToken('まだ', 'マダ', '副詞')],
      },
    ],
  },
  {
    expected: 'いやしくも',
    tokens: [genToken('苟も', 'イヤシクモ', '副詞')],
  },
  {
    expected: 'いろいろ',
    tokens: [genToken('色々', 'イロイロ', '副詞')],
  },
  // 所謂
  {
    open: [
      {
        expected: 'いわんや',
        tokens: [genToken('況や', 'イワンヤ', '副詞')],
        joyogai: 'hyogai',
      },
      {
        expected: 'いわんや',
        tokens: [genToken('況んや', 'イワンヤ', '副詞')],
        joyogai: 'hyogai',
      },
    ],
    close: {
      warnOnly: true,
      expected: ['況や', '況んや'],
      tokens: [genToken('いわんや', 'イワンヤ', '副詞')],
    },
  },
  {
    expected: 'おおむね',
    tokens: [genToken('概ね', 'オオムネ', '副詞')],
  },
  {
    expected: 'おのずから',
    tokens: [genToken('自ずから', 'オノズカラ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'おのずと',
    tokens: [genToken('自ずと', 'オノズト', '副詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'おもむろに',
    tokens: [genToken('徐に', 'オモムロニ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    open: {
      warnOnly: true,
      expected: ['およそ', 'おおよそ'],
      tokens: [genToken('凡そ', 'オヨソ', '副詞')],
      joyogai: 'hyogai',
    },
    close: [
      {
        expected: '凡そ',
        tokens: [genToken('およそ', 'オヨソ', '副詞')],
        joyogai: 'hyogai',
      },
      {
        expected: '凡そ',
        tokens: [genToken('おおよそ', 'オオヨソ', '副詞')],
        joyogai: 'hyogai',
      },
    ],
  },
  {
    expected: 'かえって',
    tokens: [genToken('却って', 'カエッテ', '副詞')],
    joyogai: 'hyogai',
  },
  // {
  //   open: {
  //     expected: 'かしこくも',
  //     tokens: [genToken('畏くも', 'カシコクモ', '副詞')],
  //     joyogai: 'hyogai',
  //   },
  //   close: {
  //     expected: '畏くも',
  //     tokens: [genToken('畏くも', 'カシコクモ', '副詞')],
  //     joyogai: 'hyogai',
  //   },
  // },
  {
    expected: 'きわめて',
    tokens: [genToken('極めて', 'キワメテ', '副詞')],
  },
  {
    expected: 'くしくも',
    tokens: [genToken('奇しくも', 'クシクモ', '副詞')],
    joyogai: 'hyogai',
  },
  // {
  //   expected: 'くまなく',
  //   tokens: [genToken('隈無く', 'クマナク', '副詞')],
  //   joyogai: 'joyogai'
  // },
  {
    open: {
      expected: 'こぞって',
      tokens: [
        {
          surface_form: '挙っ',
          pos: '動詞',
        },
        {
          surface_form: 'て',
          pos: '助詞',
          pos_detail_1: '接続助詞',
        },
      ],
      joyogai: 'hyogai',
    },
    close: {
      expected: '挙って',
      tokens: [genToken('こぞって', 'コゾッテ', '副詞')],
      joyogai: 'hyogai',
    },
  },
  {
    open: [
      {
        expected: 'ことごとく',
        tokens: [genToken('尽く', 'コトゴトク', '副詞')],
        joyogai: 'hyogai',
      },
      {
        expected: 'ことごとく',
        tokens: [genToken('悉く', 'コトゴトク', '副詞')],
        joyogai: 'joyogai',
      },
    ],
    close: {
      warnOnly: true,
      expected: ['尽く', '悉く'],
      tokens: [genToken('ことごとく', 'コトゴトク', '副詞')],
    },
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
    expected: 'さぞ',
    tokens: [genToken('嘸', 'サゾ', '副詞')],
    joyogai: 'joyogai',
  },
  {
    expected: 'さぞや',
    tokens: [genToken('嘸や', 'サゾヤ', '副詞')],
    joyogai: 'joyogai',
  },
  {
    expected: 'さながら',
    tokens: [genToken('宛ら', 'サナガラ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    open: {
      expected: 'さほど',
      tokens: [
        {
          surface_form: '然',
          pos: '副詞',
        },
        {
          surface_form: '程',
          pos: '名詞',
          pos_detail_1: '副詞可能',
        },
      ],
      joyogai: 'hyogai',
    },
    close: {
      expected: '然程',
      tokens: [genToken('さほど', 'サホド', '副詞')],
      joyogai: 'hyogai',
    },
  },
  {
    expected: 'さらに',
    tokens: [genToken('更に', 'サラニ', '副詞')],
  },
  {
    expected: 'しきりに',
    tokens: [genToken('頻りに', 'シキリニ', '副詞')],
  },
  {
    open: [
      {
        expected: 'しっかり',
        tokens: [genToken('確り', 'シッカリ', '副詞')],
        joyogai: 'hyogai',
      },
      {
        expected: 'しっかり',
        tokens: [genToken('聢り', 'シッカリ', '副詞')],
        joyogai: 'joyogai',
      },
    ],
    close: {
      warnOnly: true,
      expected: ['確り', '聢り'],
      tokens: [genToken('しっかり', 'しっかり', '副詞')],
    },
  },
  {
    expected: 'しばらく',
    tokens: [genToken('暫く', 'シバラク', '副詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'ずいぶん',
    tokens: [genToken('随分', 'ズイブン', '副詞')],
  },
  {
    open: {
      expected: 'すかさず',
      tokens: [
        {
          surface_form: '透かさ',
          pos: '動詞',
          basic_form: '透かす',
          reading: 'スカサ',
        },
        {
          surface_form: 'ず',
          pos: '助動詞',
          basic_form: 'ぬ',
          reading: 'ズ',
        },
      ],
    },
    close: {
      expected: '透かさず',
      tokens: [genToken('すかさず', 'スカサズ', '副詞')],
    },
  },
  {
    expected: 'すこぶる',
    tokens: [genToken('頗る', 'スコブル', '副詞')],
  },
  {
    expected: 'すでに',
    tokens: [genToken('既に', 'スデニ', '副詞')],
  },
  {
    open: [
      {
        expected: 'すべからく',
        tokens: [genToken('須らく', 'スベカラク', '副詞')],
        joyogai: 'hyogai',
      },
      {
        expected: 'すべからく',
        tokens: [
          {
            surface_form: '須',
            pos: '名詞',
          },
          {
            surface_form: 'く',
            pos: '動詞',
            pos_detail_1: '非自立',
            basic_form: 'く',
            reading: 'ク',
          },
        ],
        joyogai: 'hyogai',
      },
    ],
    close: {
      warnOnly: true,
      expected: ['須らく', '須く'],
      tokens: [genToken('すべからく', 'スベカラク', '副詞')],
    },
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
    tokens: [genToken('是非', 'ゼヒ', '副詞')],
  },
  {
    expected: 'たいそう',
    tokens: [genToken('大層', 'タイソウ', '副詞')],
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
      tokens: [genToken('沢山', 'タクサン', '副詞')],
    },
    close: {
      expected: '沢山',
      tokens: [genToken('たくさん', 'タクサン', '名詞', '副詞可能')],
    },
  },
  {
    expected: 'たちまち',
    tokens: [genToken('忽ち', 'タチマチ', '副詞')],
  },
  {
    expected: 'たとえ',
    tokens: [genToken('仮令', 'タトエ', '副詞')],
  },
  {
    expected: 'たとえ',
    tokens: [genToken('仮令', 'タトエ', '副詞')],
  },
  {
    expected: 'ちょうど',
    tokens: [genToken('丁度', 'チョウド', '副詞')],
  },
  {
    expected: 'ちょっと',
    tokens: [genToken('一寸', 'チョット', '副詞')],
  },
  {
    open: [
      {
        expected: 'ついでに',
        tokens: [genToken('序', 'ツイデ', '名詞'), genToken('に', 'ニ', '助詞')],
      },
      {
        expected: 'ついでに',
        tokens: [genToken('序で', 'ツイデ', '名詞'), genToken('に', 'ニ', '助詞')],
      },
    ],
    close: {
      warnOnly: true,
      expected: ['序に', '序でに'],
      tokens: [genToken('ついでに', 'ツイデニ', '副詞')],
    },
  },
  {
    open: [
      {
        expected: 'つぶさに',
        tokens: [genToken('具に', 'ツブサニ', '副詞')],
      },
      {
        expected: 'つぶさに',
        tokens: [genToken('備に', 'ツブサニ', '副詞')],
      },
      {
        expected: 'つぶさに',
        tokens: [genToken('悉に', 'ツブサニ', '副詞')],
      },
    ],
    close: {
      warnOnly: true,
      expected: ['具に', '備に', '悉に'],
      tokens: [genToken('つぶさに', 'ツブサニ', '副詞')],
    },
  },
  {
    open: {
      expected: 'とうに',
      tokens: [
        {
          surface_form: '疾',
          pos: '名詞',
        },
        {
          surface_form: 'うに',
          pos: '名詞',
        },
      ],
      joyogai: 'hyogai',
    },
    close: {
      expected: '疾うに',
      tokens: [genToken('とうに', 'トウニ', '副詞')],
    },
  },
  {
    expected: 'ときどき',
    tokens: [genToken('時々', 'トキドキ', '副詞')],
  },
  {
    expected: 'とくと',
    tokens: [genToken('篤と', 'トクト', '副詞')],
  },
  {
    open: {
      expected: 'とっさに',
      tokens: [genToken('咄嗟', 'トッサ', '名詞'), genToken('に', 'ニ', '助詞', '格助詞')],
    },
    close: {
      expected: '咄嗟に',
      tokens: [genToken('とっさ', 'トッサ', '名詞'), genToken('に', 'ニ', '助詞', '格助詞')],
    },
  },
  {
    open: {
      expected: 'とにかく',
      tokens: [
        {
          surface_form: '兎',
          pos: '名詞',
        },
        {
          surface_form: 'に',
          pos: '助詞',
        },
        {
          surface_form: '角',
          pos: '名詞',
        },
      ],
    },
    close: {
      expected: '兎に角',
      tokens: [genToken('とにかく', 'トニカク', '副詞')],
    },
  },
  // {
  //   open: [
  //     {
  //       expected: 'なお',
  //       tokens: [genToken('尚', 'ナオ', '副詞')],
  //       joyogai: 'hyogai',
  //     },
  //     {
  //       expected: 'なお',
  //       tokens: [genToken('猶', 'ナオ', '副詞')],
  //       joyogai: 'hyogai',
  //     },
  //   ],
  //   close: {
  //     warnOnly: true,
  //     expected: ['尚', '猶'],
  //     tokens: [genToken('なお', 'ナオ', '副詞')],
  //     joyogai: 'hyogai',
  //   },
  // },
  {
    expected: 'なぜ',
    tokens: [genToken('何故', 'ナゼ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'なぜか',
    tokens: [genToken('何故か', 'ナゼカ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'なにとぞ',
    tokens: [genToken('何卒', 'ナニトゾ', '副詞')],
  },
  {
    expected: 'はなはだ',
    tokens: [genToken('甚だ', 'ハナハダ', '副詞')],
  },
  // {
  //   expected: 'ひたすら',
  //   tokens: [genToken('只管', 'ヒタスラ', '副詞')],
  //   joyogai: 'joyogai',
  // },
  {
    expected: 'ひとえに',
    tokens: [genToken('偏に', 'ヒトエニ', '副詞')],
    joyogai: 'joyogai',
  },
  {
    expected: 'ひときわ',
    tokens: [genToken('一際', 'ヒトキワ', '副詞')],
    joyogai: 'joyogai',
  },
  {
    expected: 'ほとんど',
    tokens: [genToken('殆ど', 'ホトンド', '副詞')],
    joyogai: 'joyogai',
  },
  {
    open: [
      {
        expected: 'ほのぼの',
        tokens: [
          {
            surface_form: '仄',
            pos: '名詞',
          },
          {
            surface_form: '々',
            pos: '記号',
          },
        ],
      },
      {
        expected: 'ほのぼの',
        tokens: [
          {
            surface_form: '仄',
            pos: '名詞',
          },
          {
            surface_form: '仄',
            pos: '名詞',
          },
        ],
      },
    ],
    close: {
      warnOnly: true,
      expected: ['仄々', '仄仄'],
      tokens: [genToken('ほのぼの', 'ホノボノ', '副詞')],
    },
  },
  {
    expected: 'まさに',
    tokens: [genToken('正に', 'マサニ', '副詞')],
  },
  {
    expected: 'まず',
    tokens: [genToken('先ず', 'マズ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'むしろ',
    tokens: [genToken('寧ろ', 'ムシロ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'もちろん',
    tokens: [genToken('勿論', 'モチロン', '副詞')],
    joyogai: 'joyogai',
  },
  {
    expected: 'もっぱら',
    tokens: [genToken('専ら', 'モッパラ', '副詞')],
  },
  // {
  //   open: [{
  //     expected: 'もとより',
  //     tokens: [genToken('元より', 'モトヨリ', '副詞')],
  //   }, {
  //     expected: 'もとより',
  //     tokens: [genToken('固より', 'モトヨリ', '副詞')],
  //     joyogai: 'hyogai',
  //   }, {
  //     expected: 'もとより',
  //     tokens: [genToken('素より', 'モトヨリ', '副詞')],
  //     joyogai: 'hyogai',
  //   }],
  //   close: {
  //     warnOnly: true,
  //     expected: ['元より', '固より', '素より'],
  //     tokens: [genToken('もとより', 'モトヨリ', '副詞')],
  //   }
  // },
  {
    expected: 'もはや',
    tokens: [genToken('最早', 'モハヤ', '副詞')],
    joyogai: 'hyogai',
  },
  {
    open: {
      expected: 'やたら',
      tokens: [genToken('矢', 'ヤ', '名詞'), genToken('鱈', 'タラ', '名詞')],
      joyogai: 'joyogai',
    },
    close: {
      expected: '矢鱈',
      tokens: [genToken('やたら', 'ヤタラ', '副詞')],
      joyogai: 'joyogai',
    },
  },
  {
    expected: 'ようやく',
    tokens: [genToken('漸く', 'ヨウヤク', '副詞')],
    joyogai: 'hyogai',
  },
  {
    open: [
      {
        expected: 'よしんば',
        tokens: [genToken('縦しんば', 'ヨシンバ', '副詞')],
        joyogai: 'hyogai',
      },
      {
        expected: 'よしんば',
        tokens: [genToken('縦んば', 'ヨシンバ', '副詞')],
        joyogai: 'hyogai',
      },
    ],
    close: {
      warnOnly: true,
      expected: ['縦しんば', '縦んば'],
      tokens: [genToken('よしんば', 'ヨシンバ', '副詞')],
    },
  },
  {
    expected: 'よろしく',
    tokens: [genToken('宜しく', 'ヨロシク', '副詞')],
    joyogai: 'hyogai',
  },
  // {
  //   open: {
  //     warnOnly: true,
  //     expected: ['れっきと', 'れきと'],
  //     tokens: [{
  //       surface_form: '歴と',
  //       pos: '副詞',
  //     }],
  //   },
  //   close: [{
  //     expected: '歴と',
  //     tokens: [genToken('れっきと', 'レッキト', '副詞')],
  //   },{
  //     expected: '歴と',
  //     tokens: [genToken('れきと', 'レキト', '副詞')],
  //   }]
  // },
  {
    expected: 'わざと',
    tokens: [genToken('態と', 'ワザト', '副詞')],
    joyogai: 'hyogai',
  },
];
