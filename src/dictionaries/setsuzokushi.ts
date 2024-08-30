import type { DictionaryInputs } from '../type';

export const setsuzokushi: DictionaryInputs[] = [
  {
    expected: 'あるいは',
    tokens: [
      {
        surface_form: '或いは',
        pos: '接続詞',
        basic_form: '或いは',
        reading: 'アルイハ',
      },
    ],
    joyogai: 'joyogai',
  },
  {
    expected: 'および',
    tokens: [
      {
        surface_form: '及び',
        pos: '接続詞',
        basic_form: '及び',
        reading: 'オヨビ',
      },
    ],
  },
  {
    open: {
      expected: 'かつ',
      tokens: [
        {
          surface_form: '且つ',
          pos: '副詞', // 副・接
          basic_form: '且つ',
          reading: 'カツ',
        },
      ],
    },
    close: {
      expected: '且つ',
      tokens: [
        {
          surface_form: 'かつ',
          pos: '接続詞', // 副・接
          basic_form: 'かつ',
          reading: 'カツ',
        },
      ],
    },
  },
  {
    expected: 'したがって',
    tokens: [
      {
        surface_form: '従って',
        pos: '接続詞',
        basic_form: '従って',
        reading: 'シタガッテ',
      },
    ],
  },
  {
    expected: 'すなわち',
    tokens: [
      {
        surface_form: '即ち',
        pos: '接続詞',
        basic_form: '即ち',
        reading: 'スナワチ',
      },
    ],
    joyogai: 'hyogai',
  },
  {
    expected: 'ただし',
    tokens: [
      {
        surface_form: '但し',
        pos: '接続詞',
        basic_form: '但し',
        reading: 'タダシ',
      },
    ],
  },
  {
    expected: 'ちなみに',
    tokens: [
      {
        surface_form: '因みに',
        pos: '接続詞',
        basic_form: '因みに',
        reading: 'チナミニ',
      },
    ],
    joyogai: 'hyogai',
  },
  {
    expected: 'なお',
    tokens: [
      {
        surface_form: '尚',
        pos: '接続詞',
        basic_form: '尚',
        reading: 'ナオ',
      },
    ],
    joyogai: 'hyogai',
  },
  {
    expected: 'ならびに',
    tokens: [
      {
        surface_form: '並びに',
        pos: '接続詞',
        basic_form: '並びに',
        reading: 'ナラビニ',
      },
    ],
  },
  {
    expected: 'また',
    tokens: [
      {
        surface_form: '又',
        pos: '接続詞',
        basic_form: '又',
        reading: 'マタ',
      },
    ],
  },
  {
    expected: 'または',
    tokens: [
      {
        surface_form: '又は',
        pos: '接続詞',
        basic_form: '又は',
        reading: 'マタハ',
      },
    ],
  },
  {
    expected: 'もしくは',
    tokens: [
      {
        surface_form: '若しくは',
        pos: '接続詞',
        basic_form: '若しくは',
        reading: 'モシクハ',
      },
    ],
    joyogai: 'hyogai',
  },
  {
    open: {
      expected: 'ゆえに',
      tokens: [
        {
          surface_form: '故に',
          pos: '接続詞',
          basic_form: '故に',
          reading: 'ユエニ',
        },
      ],
    },
    close: {
      expected: '故に',
      tokens: [
        {
          surface_form: 'ゆえ',
          pos: '名詞',
          pos_detail_1: '接尾',
          basic_form: 'ゆえ',
          reading: 'ユエ',
        },
        {
          surface_form: 'に',
          pos: '助詞',
          basic_form: 'に',
          reading: 'ニ',
        },
      ],
    },
  },
  {
    close: {
      expected: 'その上',
      tokens: [
        {
          surface_form: 'そのうえ',
          pos: '接続詞',
          basic_form: 'そのうえ',
          reading: 'ソノウエ',
        },
      ],
    },
  },
];
