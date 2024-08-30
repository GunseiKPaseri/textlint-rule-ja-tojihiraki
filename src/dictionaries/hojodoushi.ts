import type { DictionaryInputs } from '../type';
import { generateDoushiHenkaku } from './util';

export const hojodoushi: DictionaryInputs[] = [
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '上' }, gokanHira: 'あ' }, 'げる', '下1', {
    pos: '動詞',
    pos_detail_1: '非自立',
  }),
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '有' }, gokanHira: 'あ' }, 'る', '5', {
    pos: '動詞',
    pos_detail_1: '非自立',
  }),
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '行' }, gokanHira: 'い' }, 'く', '5', {
    pos: '動詞',
    pos_detail_1: '非自立',
  }),
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '頂' }, gokanHira: 'いただ' }, 'く', '5', {
    pos: '動詞',
    pos_detail_1: '非自立',
  }),
  // 居る
  {
    open: {
      expected: 'い',
      tokens: [
        {
          surface_form: '居',
          pos: '動詞',
          basic_form: '居る',
          reading: 'イ',
        },
      ],
    },
    close: {
      expected: '居',
      tokens: [
        {
          surface_form: 'い',
          pos: '動詞',
          basic_form: 'いる',
          reading: 'イ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'いよ',
      tokens: [
        {
          surface_form: '居よ',
          pos: '動詞',
          basic_form: '居る',
          reading: 'イヨ',
        },
      ],
    },
    close: {
      expected: '居よ',
      tokens: [
        {
          surface_form: 'いよ',
          pos: '動詞',
          basic_form: 'いる',
          reading: 'イヨ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'いる',
      tokens: [
        {
          surface_form: '居る',
          pos: '動詞',
          basic_form: '居る',
          reading: 'イル',
        },
      ],
    },
    close: {
      expected: '居る',
      tokens: [
        {
          surface_form: 'いる',
          pos: '動詞',
          basic_form: 'いる',
          reading: 'イル',
        },
      ],
    },
  },
  {
    open: {
      expected: 'いれ',
      tokens: [
        {
          surface_form: '居れ',
          pos: '動詞',
          basic_form: '居る',
          reading: 'イレ',
        },
      ],
    },
    close: {
      expected: '居れ',
      tokens: [
        {
          surface_form: 'いれ',
          pos: '動詞',
          basic_form: 'いる',
          reading: 'イレ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'いろ',
      tokens: [
        {
          surface_form: '居ろ',
          pos: '動詞',
          basic_form: '居る',
          reading: 'イロ',
        },
      ],
    },
    close: {
      expected: '居ろ',
      tokens: [
        {
          surface_form: 'いろ',
          pos: '動詞',
          basic_form: 'いる',
          reading: 'イロ',
        },
      ],
    },
  },
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '置' }, gokanHira: 'お' }, 'く', '5', {
    pos: '動詞',
    pos_detail_1: '非自立',
  }),
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '下さ' }, gokanHira: 'くださ' }, 'る', '5', {
    pos: '動詞',
    pos_detail_1: '非自立',
  }),
  {
    open: {
      expected: 'ください',
      tokens: [
        {
          surface_form: '下さい',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '下さる',
          reading: 'クダサイ',
        },
      ],
    },
    close: {
      expected: '下さい',
      tokens: [
        {
          surface_form: 'ください',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'くださる',
          reading: 'クダサイ',
        },
      ],
    },
  },
  // 来る
  {
    open: {
      expected: 'き',
      tokens: [
        {
          surface_form: '来',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '来る',
          reading: 'キ',
        },
      ],
    },
    close: {
      expected: '来',
      tokens: [
        {
          surface_form: 'き',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'くる',
          reading: 'キ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'くる',
      tokens: [
        {
          surface_form: '来る',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '来る',
          reading: 'クル',
        },
      ],
    },
    close: {
      expected: '来る',
      tokens: [
        {
          surface_form: 'くる',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'くる',
          reading: 'クル',
        },
      ],
    },
  },
  {
    open: {
      expected: 'くれ',
      tokens: [
        {
          surface_form: '来れ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '来る',
          reading: 'クレ',
        },
      ],
    },
    close: {
      expected: '来れ',
      tokens: [
        {
          surface_form: 'くれ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'くる',
          reading: 'クレ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'こ',
      tokens: [
        {
          surface_form: '来',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '来る',
          reading: 'コ',
        },
      ],
    },
    close: {
      expected: '来',
      tokens: [
        {
          surface_form: 'こ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'くる',
          reading: 'コ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'こい',
      tokens: [
        {
          surface_form: '来い',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '来る',
          reading: 'コイ',
        },
      ],
    },
    close: {
      expected: '来い',
      tokens: [
        {
          surface_form: 'こい',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'くる',
          reading: 'コイ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'こよ',
      tokens: [
        {
          surface_form: '来よ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '来る',
          reading: 'コヨ',
        },
      ],
    },
    close: {
      expected: '来よ',
      tokens: [
        {
          surface_form: 'こよ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'くる',
          reading: 'コヨ',
        },
      ],
    },
  },
  // 見る
  {
    open: {
      expected: 'み',
      tokens: [
        {
          surface_form: '見',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '見る',
          reading: 'ミ',
        },
      ],
    },
    close: {
      expected: '見',
      tokens: [
        {
          surface_form: 'み',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'みる',
          reading: 'ミ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'みよ',
      tokens: [
        {
          surface_form: '見よ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '見る',
          reading: 'ミヨ',
        },
      ],
    },
    close: {
      expected: '見よ',
      tokens: [
        {
          surface_form: 'みよ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'みる',
          reading: 'ミヨ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'みる',
      tokens: [
        {
          surface_form: '見る',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '見る',
          reading: 'ミル',
        },
      ],
    },
    close: {
      expected: '見る',
      tokens: [
        {
          surface_form: 'みる',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'みる',
          reading: 'ミル',
        },
      ],
    },
  },
  {
    open: {
      expected: 'みれ',
      tokens: [
        {
          surface_form: '見れ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '見る',
          reading: 'ミレ',
        },
      ],
    },
    close: {
      expected: '見れ',
      tokens: [
        {
          surface_form: 'みれ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'みる',
          reading: 'ミレ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'みろ',
      tokens: [
        {
          surface_form: '見ろ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: '見る',
          reading: 'ミロ',
        },
      ],
    },
    close: {
      expected: '見ろ',
      tokens: [
        {
          surface_form: 'みろ',
          pos: '動詞',
          pos_detail_1: '非自立',
          basic_form: 'みる',
          reading: 'ミロ',
        },
      ],
    },
  },
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '貰' }, gokanHira: 'もら' }, 'う', '5', {
    pos: '動詞',
    pos_detail_1: '非自立',
  }),
];
