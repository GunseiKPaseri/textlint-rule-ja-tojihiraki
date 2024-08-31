import type { ExpectedTokenWithCapture } from 'morpheme-match-textlint';
import type { DictionaryInputs, JOYOGAI } from '../type.ts';
import { hiraToKana } from '../util.ts';

const table5: { [key: string]: readonly string[] } = {
  く: ['か', 'き', 'く', 'け', 'こ', 'い'],
  ぐ: ['が', 'ぎ', 'ぐ', 'げ', 'ご', 'い'],
  す: ['さ', 'し', 'す', 'せ', 'そ'],
  つ: ['た', 'ち', 'つ', 'て', 'と', 'っ'],
  ぬ: ['な', 'に', 'ぬ', 'ね', 'の', 'ん'],
  ぶ: ['ば', 'び', 'ぶ', 'べ', 'ぼ', 'ん'],
  む: ['ま', 'み', 'む', 'め', 'も', 'ん'],
  る: ['ら', 'り', 'る', 'れ', 'ろ', 'っ'],
  う: ['わ', 'い', 'う', 'え', 'を', 'っ'],
} as const;

const tablek1: { [key: string]: readonly string[] } = {
  いる: ['い', 'いる', 'いれ', 'いろ', 'いよ'],
  きる: ['き', 'きる', 'きれ', 'きろ', 'きよ'],
  ちる: ['ち', 'ちる', 'ちれ', 'ちろ', 'ちよ'],
  にる: ['に', 'にる', 'にれ', 'にろ', 'によ'],
  ひる: ['ひ', 'ひる', 'ひれ', 'ひろ', 'ひよ'],
  びる: ['び', 'びる', 'びれ', 'びろ', 'びよ'],
  みる: ['み', 'みる', 'みれ', 'みろ', 'みよ'],
  りる: ['り', 'りる', 'りれ', 'りろ', 'りよ'],
} as const;

const tables1: { [key: string]: readonly string[] } = {
  える: ['え', 'える', 'えれ', 'えろ', 'えよ'],
  ける: ['け', 'ける', 'けれ', 'けろ', 'けよ'],
  げる: ['げ', 'げる', 'げれ', 'げろ', 'げよ'],
  せる: ['せ', 'せる', 'せれ', 'せろ', 'せよ'],
  ぜる: ['ぜ', 'ぜる', 'ぜれ', 'ぜろ', 'ぜよ'],
  てる: ['て', 'てる', 'てれ', 'てろ', 'てよ'],
  でる: ['で', 'でる', 'でれ', 'でろ', 'でよ'],
  ねる: ['ね', 'ねる', 'ねれ', 'ねろ', 'ねよ'],
  へる: ['へ', 'へる', 'へれ', 'へろ', 'へよ'],
  べる: ['べ', 'べる', 'べれ', 'べろ', 'べよ'],
  める: ['め', 'める', 'めれ', 'めろ', 'めよ'],
  れる: ['れ', 'れる', 'れれ', 'れろ', 'れよ'],
} as const;

const tablesh: { [key: string]: readonly string[] } = {
  する: ['し', 'せ', 'する', 'すれ', 'しろ', 'せよ'],
  ずる: ['じ', 'ぜ', 'ずる', 'ずれ', 'じろ', 'ぜよ'],
} as const;

const tablekh = ['こ', 'き', 'く', 'くる', 'くれ', 'こい'] as const;

type DoushiHenkan = '5' | '上1' | '下1' | 'サ変' | 'カ変';

const getDoushiHenkanTable = (gokanHira: string | string[], gobi: string, henkan: DoushiHenkan) => {
  if (gokanHira === 'い' && gobi === 'く') return ['か', 'き', 'く', 'け', 'こ', 'っ'];
  switch (henkan) {
    case '5':
      return table5[gobi] ?? [];
    case '上1':
      return tablek1[gobi] ?? [];
    case '下1':
      return tables1[gobi] ?? [];
    case 'サ変':
      return tablesh[gobi] ?? [];
    case 'カ変':
      return tablekh;
  }
};

export const generateDoushiHenkaku = (
  gokanset:
    | { type: 'only'; gokan: { str: string; joyogai?: JOYOGAI }; gokanHira: string }
    | { type: 'doon'; gokan: { str: string; joyogai?: JOYOGAI }[]; gokanHira: string }
    | { type: 'doji'; gokan: { str: string; joyogai?: JOYOGAI }; gokanHira: string[] },
  gobi: string,
  henkan: DoushiHenkan,
  token: ExpectedTokenWithCapture = { pos: '動詞' },
): DictionaryInputs[] => {
  const table = getDoushiHenkanTable(gokanset.gokanHira, gobi, henkan);
  return table.map((henka) => {
    switch (gokanset.type) {
      case 'doon': {
        const { gokan: gokans, gokanHira } = gokanset;
        return {
          open: gokans.map((gokan) => ({
            expected: `${gokanHira}${henka}`,
            tokens: [
              {
                ...token,
                surface_form: `${gokan.str}${henka}`,
                basic_form: `${gokan.str}${gobi}`,
                reading: hiraToKana(`${gokanHira}${henka}`),
              },
            ],
            joyogai: gokan.joyogai,
          })),
          close: {
            warnOnly: true,
            expected: gokans.map((gokan) => `${gokan.str}${henka}`),
            tokens: [
              {
                ...token,
                surface_form: `${gokanHira}${henka}`,
                basic_form: `${gokanHira}${gobi}`,
                //reading: hiraToKana(`${gokanHira}${henka}`),
              },
            ],
            joyogai: gokans[0].joyogai,
          },
        };
      }
      case 'doji': {
        const { gokan, gokanHira: gokanHiras } = gokanset;
        return {
          open: gokan.joyogai
            ? {
                warnOnly: true,
                expected: gokanHiras.map((gokanHira) => `${gokanHira}${henka}`),
                tokens: [
                  {
                    ...token,
                    surface_form: `${gokan.str}${henka}`,
                    basic_form: `${gokan.str}${gobi}`,
                  },
                ],
                joyogai: gokan.joyogai,
              }
            : {
                warnOnly: true,
                expected: gokanHiras.map((gokanHira) => `${gokanHira}${henka}`),
                tokens: [
                  {
                    ...token,
                    surface_form: `${gokan.str}${henka}`,
                    basic_form: `${gokan.str}${gobi}`,
                  },
                ],
              },
          close: gokanHiras.map((gokanHira) =>
            gokan.joyogai
              ? {
                  expected: `${gokan.str}${henka}`,
                  tokens: [
                    {
                      ...token,
                      surface_form: `${gokanHira}${henka}`,
                      basic_form: `${gokanHira}${gobi}`,
                      reading: hiraToKana(`${gokanHira}${henka}`),
                    },
                  ],
                  joyogai: gokan.joyogai,
                }
              : {
                  expected: `${gokan.str}${henka}`,
                  tokens: [
                    {
                      ...token,
                      surface_form: `${gokanHira}${henka}`,
                      basic_form: `${gokanHira}${gobi}`,
                      reading: hiraToKana(`${gokanHira}${henka}`),
                    },
                  ],
                },
          ),
        };
      }
      case 'only': {
        const { gokan, gokanHira } = gokanset;
        return {
          open: gokan.joyogai
            ? {
                expected: `${gokanHira}${henka}`,
                tokens: [
                  {
                    ...token,
                    surface_form: `${gokan.str}${henka}`,
                    basic_form: `${gokan.str}${gobi}`,
                    reading: hiraToKana(`${gokanHira}${henka}`),
                  },
                ],
                joyogai: gokan.joyogai,
              }
            : {
                expected: `${gokanHira}${henka}`,
                tokens: [
                  {
                    ...token,
                    surface_form: `${gokan.str}${henka}`,
                    basic_form: `${gokan.str}${gobi}`,
                    reading: hiraToKana(`${gokanHira}${henka}`),
                  },
                ],
              },
          close: gokan.joyogai
            ? {
                expected: `${gokan.str}${henka}`,
                tokens: [
                  {
                    ...token,
                    surface_form: `${gokanHira}${henka}`,
                    basic_form: `${gokanHira}${gobi}`,
                    reading: hiraToKana(`${gokanHira}${henka}`),
                  },
                ],
                joyogai: gokan.joyogai,
              }
            : {
                expected: `${gokan.str}${henka}`,
                tokens: [
                  {
                    ...token,
                    surface_form: `${gokanHira}${henka}`,
                    basic_form: `${gokanHira}${gobi}`,
                    reading: hiraToKana(`${gokanHira}${henka}`),
                  },
                ],
              },
        };
      }
    }
  });
};

export const genToken = (
  form: string,
  reading: string,
  pos: string,
  pos_detail_1?: string,
): ExpectedTokenWithCapture =>
  pos_detail_1
    ? {
        surface_form: form,
        pos,
        pos_detail_1,
        basic_form: form,
        reading,
      }
    : {
        surface_form: form,
        pos,
        basic_form: form,
        reading,
      };
