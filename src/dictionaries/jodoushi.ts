import type { DictionaryInputs } from '../type';

export const jodoushi: DictionaryInputs[] = [
  {
    open: {
      expected: 'ござい',
      tokens: [
        {
          surface_form: '御座い',
          pos: '助動詞',
          basic_form: '御座る',
          reading: 'ゴザイ',
        },
      ],
    },
    close: {
      expected: '御座い',
      tokens: [
        {
          surface_form: 'ござい',
          pos: '助動詞',
          basic_form: 'ござる',
          reading: 'ゴザイ',
        },
      ],
    },
  },
];
