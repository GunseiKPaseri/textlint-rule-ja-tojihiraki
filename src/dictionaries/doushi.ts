import type { DictionaryInputs } from '../type';
import { generateDoushiHenkaku } from './util';

export const doushi: DictionaryInputs[] = [
  ...generateDoushiHenkaku({ type: 'doji', gokan: { str: '弄' }, gokanHira: ['いじ', 'いじく', 'まさぐ'] }, 'る', '5'),
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
      expected: 'できれ',
      tokens: [
        {
          surface_form: '出来れ',
          pos: '動詞',
          basic_form: '出来る',
          reading: 'デキレ',
        },
      ],
    },
    close: {
      expected: '出来れ',
      tokens: [
        {
          surface_form: 'できれ',
          pos: '動詞',
          basic_form: 'できる',
          reading: 'デキレ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'できろ',
      tokens: [
        {
          surface_form: '出来ろ',
          pos: '動詞',
          basic_form: '出来る',
          reading: 'デキ',
        },
      ],
    },
    close: {
      expected: '出来ろ',
      tokens: [
        {
          surface_form: 'できろ',
          pos: '動詞',
          basic_form: 'できる',
          reading: 'デキ',
        },
      ],
    },
  },
  {
    open: {
      expected: 'できよ',
      tokens: [
        {
          surface_form: '出来よ',
          pos: '動詞',
          basic_form: '出来る',
          reading: 'デキヨ',
        },
      ],
    },
    close: {
      expected: '出来よ',
      tokens: [
        {
          surface_form: 'できよ',
          pos: '動詞',
          basic_form: 'できる',
          reading: 'デキヨ',
        },
      ],
    },
  },
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '為', joyogai: 'hyogai' }, gokanHira: 'な' }, 'す', '5'),
  ...generateDoushiHenkaku(
    {
      type: 'doon',
      gokan: [
        { str: '準', joyogai: 'hyogai' },
        { str: '准', joyogai: 'hyogai' },
        { str: '擬', joyogai: 'hyogai' },
      ],
      gokanHira: 'なぞら',
    },
    'える',
    '下1',
  ),
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '纏', joyogai: 'hyogai' }, gokanHira: 'まと' }, 'める', '下1'),
  ...generateDoushiHenkaku(
    { type: 'doji', gokan: { str: '拘', joyogai: 'hyogai' }, gokanHira: ['こだわ', 'かかわ'] },
    'る',
    '5',
  ),
  ...generateDoushiHenkaku(
    {
      type: 'doon',
      gokan: [
        { str: '依', joyogai: 'hyogai' },
        { str: '拠', joyogai: 'hyogai' },
      ],
      gokanHira: 'よ',
    },
    'る',
    '5',
  ),
  ...generateDoushiHenkaku({ type: 'only', gokan: { str: '分か' }, gokanHira: 'わか' }, 'る', '5'),
];
