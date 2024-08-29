import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['オレに分かるように説明しろ', 'オレにわかるように説明しろ', [[[3, 4], '分かる(ワカル)']]],
  [
    'ぜんぜん分からない 俺たちは雰囲気で株をやっている',
    'ぜんぜんわからない 俺たちは雰囲気で株をやっている',
    [[[4, 5], '分から(ワカラ)']],
  ],
  ['分かり手', 'わかり手', [[[0, 1], '分かり(ワカリ)']]],
  ['分かろうとする努力が足りない', 'わかろうとする努力が足りない', [[[0, 1], '分かろ(ワカロ)']]],
  ['お願いだから分かってほしい', 'お願いだからわかってほしい', [[[6, 7], '分かっ(ワカッ)']]],
  ['ひとりで出来るもん', 'ひとりでできるもん', [[[4, 5], '出来る(デキル)']]],
  ['ひとりで出来ないもん', 'ひとりでできないもん', [[[4, 5], '出来(デキ)']]],
  ['みんなを一つに纏める', 'みんなを一つにまとめる', [[[7, 8], '纏める(マトメル)']]],
  ['みんなを一つに纏めたい', 'みんなを一つにまとめたい', [[[7, 8], '纏め(マトメ)']]],
  ['みんなを一つに纏めようとした', 'みんなを一つにまとめようとした', [[[7, 8], '纏めよ(マトメヨ)']]],
  [
    '拘りスカーフ',
    'こだわりスカーフ',
    [[[0, 1], '拘り(コダワリ|カカワリ)', undefined, '拘り(コダワリ)']],
    'both',
    'closeOnly',
  ],
  [
    '機械を弄る',
    '機械をいじる',
    [[[3, 4], '弄る(イジル|イジクル|マサグル)', undefined, '弄る(イジル)']],
    'both',
    'closeOnly',
  ],
];

runTestOpenClose('動詞', 'doushi', [], invalidTestCases);
