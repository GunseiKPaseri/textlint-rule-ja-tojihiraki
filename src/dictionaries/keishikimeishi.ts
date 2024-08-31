import type { DictionaryInputs } from '../type';
import { genToken } from './util';

export const keishikimeishi: DictionaryInputs[] = [
  {
    expected: 'うえ',
    tokens: [genToken('上', 'ウエ', '名詞', '非自立')],
  },
  {
    expected: 'うち',
    tokens: [genToken('内', 'ウチ', '名詞', '非自立')],
  },
  {
    expected: 'こと',
    tokens: [genToken('事', 'コト', '名詞', '非自立')],
  },
  {
    expected: 'ごと',
    tokens: [genToken('毎', 'ゴト', '名詞' /*, '非自立'*/)],
    joyogai: 'hyogai',
  },
  {
    expected: 'たび',
    tokens: [genToken('度', 'タビ', '名詞' /*, '非自立'*/)],
  },
  {
    expected: 'ため',
    tokens: [genToken('為', 'タメ', '名詞' /*, '非自立'*/)],
    joyogai: 'hyogai',
  },
  // {
  //   expected: 'とおり',
  //   tokens: [
  //     {
  //       surface_form: '通り',
  //       pos: '名詞',
  //       pos_detail_1: '非自立',
  //       basic_form: '通り',
  //       reading: 'トオリ',
  //     },
  //   ],
  // },
  {
    expected: 'とき',
    tokens: [genToken('時', 'トキ', '名詞', '非自立')],
  },
  {
    expected: 'ところ',
    tokens: [genToken('所', 'トコロ', '名詞', '非自立')],
  },
  {
    expected: 'なか',
    tokens: [genToken('中', 'ナカ', '名詞', '非自立')],
  },
  {
    expected: 'はず',
    tokens: [genToken('筈', 'ハズ', '名詞' /*, '非自立'*/)],
    joyogai: 'joyogai',
  },
  {
    expected: 'ほう',
    tokens: [genToken('方', 'ホウ', '名詞' /*, '非自立'*/)],
  },
  {
    expected: 'ほか',
    tokens: [genToken('他', 'ホカ', '名詞' /*, '非自立'*/)],
    joyogai: 'hyogai',
  },
  {
    expected: 'もの',
    tokens: [genToken('物', 'モノ', '名詞', '非自立')],
  },
  {
    expected: 'よう',
    tokens: [genToken('様', 'ヨウ', '名詞' /*, '非自立'*/)],
  },
  {
    expected: 'わけ',
    tokens: [genToken('訳', 'ワケ', '名詞' /*, '非自立'*/)],
  },
];
