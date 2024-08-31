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
    expected: 'あまり',
    tokens: [genToken('余り', 'アマリ', '副詞')],
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
    expected: 'いろいろ',
    tokens: [genToken('色々', 'イロイロ', '副詞')],
  },
  // 所謂
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
  {
    expected: 'きわめて',
    tokens: [genToken('極めて', 'キワメテ', '副詞')],
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
    tokens: [genToken('更に', 'サラニ', '副詞')],
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
    expected: 'すでに',
    tokens: [genToken('既に', 'スデニ', '副詞')],
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
    expected: 'ちょうど',
    tokens: [genToken('丁度', 'チョウド', '副詞')],
  },
  {
    expected: 'ときどき',
    tokens: [genToken('時々', 'トキドキ', '副詞')],
  },
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
    expected: 'ほとんど',
    tokens: [genToken('殆ど', 'ホトンド', '副詞')],
    joyogai: 'joyogai',
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
    expected: 'ようやく',
    tokens: [genToken('漸く', 'ヨウヤク', '副詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'よろしく',
    tokens: [genToken('宜しく', 'ヨロシク', '副詞')],
    joyogai: 'hyogai',
  },
];
