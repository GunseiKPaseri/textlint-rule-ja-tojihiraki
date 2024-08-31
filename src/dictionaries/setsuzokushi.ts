import type { DictionaryInputs } from '../type';
import { genToken } from './util';

export const setsuzokushi: DictionaryInputs[] = [
  {
    expected: 'あるいは',
    tokens: [genToken('或いは', 'アルイハ', '接続詞')],
    joyogai: 'joyogai',
  },
  {
    expected: 'および',
    tokens: [genToken('及び', 'オヨビ', '接続詞')],
  },
  {
    open: {
      expected: 'かつ',
      tokens: [
        genToken('且つ', 'カツ', '副詞'), // 副・接
      ],
    },
    close: {
      expected: '且つ',
      tokens: [
        genToken('かつ', 'カツ', '接続詞'), // 副・接
      ],
    },
  },
  {
    expected: 'したがって',
    tokens: [genToken('従って', 'シタガッテ', '接続詞')],
  },
  {
    expected: 'すなわち',
    tokens: [genToken('即ち', 'スナワチ', '接続詞')],
    joyogai: 'hyogai',
  },
  {
    close: {
      expected: 'その上',
      tokens: [genToken('そのうえ', 'ソノウエ', '接続詞')],
    },
  },
  {
    expected: 'ただし',
    tokens: [genToken('但し', 'タダシ', '接続詞')],
  },
  {
    expected: 'ちなみに',
    tokens: [genToken('因みに', 'チナミニ', '接続詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'なお',
    tokens: [genToken('尚', 'ナオ', '接続詞')],
    joyogai: 'hyogai',
  },
  {
    expected: 'ならびに',
    tokens: [genToken('並びに', 'ナラビニ', '接続詞')],
  },
  {
    expected: 'また',
    tokens: [genToken('又', 'マタ', '接続詞')],
  },
  {
    expected: 'または',
    tokens: [genToken('又は', 'マタハ', '接続詞')],
  },
  {
    expected: 'もしくは',
    tokens: [genToken('若しくは', 'モシクハ', '接続詞')],
    joyogai: 'hyogai',
  },
  {
    open: {
      expected: 'ゆえに',
      tokens: [genToken('故に', 'ユエニ', '接続詞')],
    },
    close: {
      expected: '故に',
      tokens: [genToken('ゆえ', 'ユエ', '名詞', '接尾'), genToken('に', 'ニ', '助詞')],
    },
  },
];
