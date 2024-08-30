import assert from 'node:assert/strict';
import test, { describe } from 'node:test';
import { generateDoushiHenkaku } from './util.ts';

describe('util', () => {
  test('#generateDoushiHenkaku', () => {
    assert.deepEqual(generateDoushiHenkaku({ type: 'only', gokan: { str: '分か' }, gokanHira: 'わか' }, 'る', '5'), [
      {
        open: {
          expected: 'わから',
          tokens: [
            {
              surface_form: '分から',
              pos: '動詞',
              basic_form: '分かる',
              reading: 'ワカラ',
            },
          ],
        },
        close: {
          expected: '分から',
          tokens: [
            {
              surface_form: 'わから',
              pos: '動詞',
              basic_form: 'わかる',
              reading: 'ワカラ',
            },
          ],
        },
      },
      {
        open: {
          expected: 'わかり',
          tokens: [
            {
              surface_form: '分かり',
              pos: '動詞',
              basic_form: '分かる',
              reading: 'ワカリ',
            },
          ],
        },
        close: {
          expected: '分かり',
          tokens: [
            {
              surface_form: 'わかり',
              pos: '動詞',
              basic_form: 'わかる',
              reading: 'ワカリ',
            },
          ],
        },
      },
      {
        open: {
          expected: 'わかる',
          tokens: [
            {
              surface_form: '分かる',
              pos: '動詞',
              basic_form: '分かる',
              reading: 'ワカル',
            },
          ],
        },
        close: {
          expected: '分かる',
          tokens: [
            {
              surface_form: 'わかる',
              pos: '動詞',
              basic_form: 'わかる',
              reading: 'ワカル',
            },
          ],
        },
      },
      {
        open: {
          expected: 'わかれ',
          tokens: [
            {
              surface_form: '分かれ',
              pos: '動詞',
              basic_form: '分かる',
              reading: 'ワカレ',
            },
          ],
        },
        close: {
          expected: '分かれ',
          tokens: [
            {
              surface_form: 'わかれ',
              pos: '動詞',
              basic_form: 'わかる',
              reading: 'ワカレ',
            },
          ],
        },
      },
      {
        open: {
          expected: 'わかろ',
          tokens: [
            {
              surface_form: '分かろ',
              pos: '動詞',
              basic_form: '分かる',
              reading: 'ワカロ',
            },
          ],
        },
        close: {
          expected: '分かろ',
          tokens: [
            {
              surface_form: 'わかろ',
              pos: '動詞',
              basic_form: 'わかる',
              reading: 'ワカロ',
            },
          ],
        },
      },
      {
        open: {
          expected: 'わかっ',
          tokens: [
            {
              surface_form: '分かっ',
              pos: '動詞',
              basic_form: '分かる',
              reading: 'ワカッ',
            },
          ],
        },
        close: {
          expected: '分かっ',
          tokens: [
            {
              surface_form: 'わかっ',
              pos: '動詞',
              basic_form: 'わかる',
              reading: 'ワカッ',
            },
          ],
        },
      },
    ]);
  });

  assert.deepStrictEqual(
    generateDoushiHenkaku({ type: 'doji', gokan: { str: '弄' }, gokanHira: ['いじ', 'いじく', 'まさぐ'] }, 'る', '5'),
    [
      {
        open: {
          warnOnly: true,
          expected: ['いじら', 'いじくら', 'まさぐら'],
          tokens: [
            {
              surface_form: '弄ら',
              pos: '動詞',
              basic_form: '弄る',
            },
          ],
        },
        close: [
          {
            expected: '弄ら',
            tokens: [
              {
                surface_form: 'いじら',
                pos: '動詞',
                basic_form: 'いじる',
                reading: 'イジラ',
              },
            ],
          },
          {
            expected: '弄ら',
            tokens: [
              {
                surface_form: 'いじくら',
                pos: '動詞',
                basic_form: 'いじくる',
                reading: 'イジクラ',
              },
            ],
          },
          {
            expected: '弄ら',
            tokens: [
              {
                surface_form: 'まさぐら',
                pos: '動詞',
                basic_form: 'まさぐる',
                reading: 'マサグラ',
              },
            ],
          },
        ],
      },
      {
        open: {
          warnOnly: true,
          expected: ['いじり', 'いじくり', 'まさぐり'],
          tokens: [
            {
              surface_form: '弄り',
              pos: '動詞',
              basic_form: '弄る',
            },
          ],
        },
        close: [
          {
            expected: '弄り',
            tokens: [
              {
                surface_form: 'いじり',
                pos: '動詞',
                basic_form: 'いじる',
                reading: 'イジリ',
              },
            ],
          },
          {
            expected: '弄り',
            tokens: [
              {
                surface_form: 'いじくり',
                pos: '動詞',
                basic_form: 'いじくる',
                reading: 'イジクリ',
              },
            ],
          },
          {
            expected: '弄り',
            tokens: [
              {
                surface_form: 'まさぐり',
                pos: '動詞',
                basic_form: 'まさぐる',
                reading: 'マサグリ',
              },
            ],
          },
        ],
      },
      {
        open: {
          warnOnly: true,
          expected: ['いじる', 'いじくる', 'まさぐる'],
          tokens: [
            {
              surface_form: '弄る',
              pos: '動詞',
              basic_form: '弄る',
            },
          ],
        },
        close: [
          {
            expected: '弄る',
            tokens: [
              {
                surface_form: 'いじる',
                pos: '動詞',
                basic_form: 'いじる',
                reading: 'イジル',
              },
            ],
          },
          {
            expected: '弄る',
            tokens: [
              {
                surface_form: 'いじくる',
                pos: '動詞',
                basic_form: 'いじくる',
                reading: 'イジクル',
              },
            ],
          },
          {
            expected: '弄る',
            tokens: [
              {
                surface_form: 'まさぐる',
                pos: '動詞',
                basic_form: 'まさぐる',
                reading: 'マサグル',
              },
            ],
          },
        ],
      },
      {
        open: {
          warnOnly: true,
          expected: ['いじれ', 'いじくれ', 'まさぐれ'],
          tokens: [
            {
              surface_form: '弄れ',
              pos: '動詞',
              basic_form: '弄る',
            },
          ],
        },
        close: [
          {
            expected: '弄れ',
            tokens: [
              {
                surface_form: 'いじれ',
                pos: '動詞',
                basic_form: 'いじる',
                reading: 'イジレ',
              },
            ],
          },
          {
            expected: '弄れ',
            tokens: [
              {
                surface_form: 'いじくれ',
                pos: '動詞',
                basic_form: 'いじくる',
                reading: 'イジクレ',
              },
            ],
          },
          {
            expected: '弄れ',
            tokens: [
              {
                surface_form: 'まさぐれ',
                pos: '動詞',
                basic_form: 'まさぐる',
                reading: 'マサグレ',
              },
            ],
          },
        ],
      },
      {
        open: {
          warnOnly: true,
          expected: ['いじろ', 'いじくろ', 'まさぐろ'],
          tokens: [
            {
              surface_form: '弄ろ',
              pos: '動詞',
              basic_form: '弄る',
            },
          ],
        },
        close: [
          {
            expected: '弄ろ',
            tokens: [
              {
                surface_form: 'いじろ',
                pos: '動詞',
                basic_form: 'いじる',
                reading: 'イジロ',
              },
            ],
          },
          {
            expected: '弄ろ',
            tokens: [
              {
                surface_form: 'いじくろ',
                pos: '動詞',
                basic_form: 'いじくる',
                reading: 'イジクロ',
              },
            ],
          },
          {
            expected: '弄ろ',
            tokens: [
              {
                surface_form: 'まさぐろ',
                pos: '動詞',
                basic_form: 'まさぐる',
                reading: 'マサグロ',
              },
            ],
          },
        ],
      },
      {
        open: {
          warnOnly: true,
          expected: ['いじっ', 'いじくっ', 'まさぐっ'],
          tokens: [
            {
              surface_form: '弄っ',
              pos: '動詞',
              basic_form: '弄る',
            },
          ],
        },
        close: [
          {
            expected: '弄っ',
            tokens: [
              {
                surface_form: 'いじっ',
                pos: '動詞',
                basic_form: 'いじる',
                reading: 'イジッ',
              },
            ],
          },
          {
            expected: '弄っ',
            tokens: [
              {
                surface_form: 'いじくっ',
                pos: '動詞',
                basic_form: 'いじくる',
                reading: 'イジクッ',
              },
            ],
          },
          {
            expected: '弄っ',
            tokens: [
              {
                surface_form: 'まさぐっ',
                pos: '動詞',
                basic_form: 'まさぐる',
                reading: 'マサグッ',
              },
            ],
          },
        ],
      },
    ],
  );

  //throw new Error(JSON.stringify(generateDoushiHenkaku({ type: 'doon', gokan: [{str: '依', joyogai: 'hyogai'}, {str: '拠', joyogai: 'hyogai'}], gokanHira: 'よ' }, 'る', '5'), null, 2))

  assert.deepStrictEqual(
    generateDoushiHenkaku(
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
    [
      {
        open: [
          {
            expected: 'よら',
            tokens: [
              {
                surface_form: '依ら',
                pos: '動詞',
                basic_form: '依る',
                reading: 'ヨラ',
              },
            ],
            joyogai: 'hyogai',
          },
          {
            expected: 'よら',
            tokens: [
              {
                surface_form: '拠ら',
                pos: '動詞',
                basic_form: '拠る',
                reading: 'ヨラ',
              },
            ],
            joyogai: 'hyogai',
          },
        ],
        close: {
          warnOnly: true,
          expected: ['依ら', '拠ら'],
          tokens: [
            {
              surface_form: 'よら',
              pos: '動詞',
              basic_form: 'よる',
            },
          ],
          joyogai: 'hyogai',
        },
      },
      {
        open: [
          {
            expected: 'より',
            tokens: [
              {
                surface_form: '依り',
                pos: '動詞',
                basic_form: '依る',
                reading: 'ヨリ',
              },
            ],
            joyogai: 'hyogai',
          },
          {
            expected: 'より',
            tokens: [
              {
                surface_form: '拠り',
                pos: '動詞',
                basic_form: '拠る',
                reading: 'ヨリ',
              },
            ],
            joyogai: 'hyogai',
          },
        ],
        close: {
          warnOnly: true,
          expected: ['依り', '拠り'],
          tokens: [
            {
              surface_form: 'より',
              pos: '動詞',
              basic_form: 'よる',
            },
          ],
          joyogai: 'hyogai',
        },
      },
      {
        open: [
          {
            expected: 'よる',
            tokens: [
              {
                surface_form: '依る',
                pos: '動詞',
                basic_form: '依る',
                reading: 'ヨル',
              },
            ],
            joyogai: 'hyogai',
          },
          {
            expected: 'よる',
            tokens: [
              {
                surface_form: '拠る',
                pos: '動詞',
                basic_form: '拠る',
                reading: 'ヨル',
              },
            ],
            joyogai: 'hyogai',
          },
        ],
        close: {
          warnOnly: true,
          expected: ['依る', '拠る'],
          tokens: [
            {
              surface_form: 'よる',
              pos: '動詞',
              basic_form: 'よる',
            },
          ],
          joyogai: 'hyogai',
        },
      },
      {
        open: [
          {
            expected: 'よれ',
            tokens: [
              {
                surface_form: '依れ',
                pos: '動詞',
                basic_form: '依る',
                reading: 'ヨレ',
              },
            ],
            joyogai: 'hyogai',
          },
          {
            expected: 'よれ',
            tokens: [
              {
                surface_form: '拠れ',
                pos: '動詞',
                basic_form: '拠る',
                reading: 'ヨレ',
              },
            ],
            joyogai: 'hyogai',
          },
        ],
        close: {
          warnOnly: true,
          expected: ['依れ', '拠れ'],
          tokens: [
            {
              surface_form: 'よれ',
              pos: '動詞',
              basic_form: 'よる',
            },
          ],
          joyogai: 'hyogai',
        },
      },
      {
        open: [
          {
            expected: 'よろ',
            tokens: [
              {
                surface_form: '依ろ',
                pos: '動詞',
                basic_form: '依る',
                reading: 'ヨロ',
              },
            ],
            joyogai: 'hyogai',
          },
          {
            expected: 'よろ',
            tokens: [
              {
                surface_form: '拠ろ',
                pos: '動詞',
                basic_form: '拠る',
                reading: 'ヨロ',
              },
            ],
            joyogai: 'hyogai',
          },
        ],
        close: {
          warnOnly: true,
          expected: ['依ろ', '拠ろ'],
          tokens: [
            {
              surface_form: 'よろ',
              pos: '動詞',
              basic_form: 'よる',
            },
          ],
          joyogai: 'hyogai',
        },
      },
      {
        open: [
          {
            expected: 'よっ',
            tokens: [
              {
                surface_form: '依っ',
                pos: '動詞',
                basic_form: '依る',
                reading: 'ヨッ',
              },
            ],
            joyogai: 'hyogai',
          },
          {
            expected: 'よっ',
            tokens: [
              {
                surface_form: '拠っ',
                pos: '動詞',
                basic_form: '拠る',
                reading: 'ヨッ',
              },
            ],
            joyogai: 'hyogai',
          },
        ],
        close: {
          warnOnly: true,
          expected: ['依っ', '拠っ'],
          tokens: [
            {
              surface_form: 'よっ',
              pos: '動詞',
              basic_form: 'よる',
            },
          ],
          joyogai: 'hyogai',
        },
      },
    ],
  );
});
