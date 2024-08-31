import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  [
    '拘りスカーフ',
    'こだわりスカーフ',
    [[[0, 1], '拘り(コダワリ|カカワリ)', undefined, '拘り(コダワリ)']],
    'closeOnly',
    'closeOnly',
  ],
  ['この世全ての悪', 'この世すべての悪', [[[3, 4], '全て(スベテ)']]],
  //['物の例えだ', '物のたとえだ', [[[2, 3], '例え(タトエ)', undefined, '例え(タトエ)|譬え(タトエ)|喩え(タトエ)']], 'both', 'openOnly'],
  [
    '物の譬えだ',
    '物のたとえだ',
    [[[2, 3], '譬え(タトエ)', undefined, '例え(タトエ)|譬え(タトエ)|喩え(タトエ)']],
    'openOnly',
    'openOnly',
  ],
  [
    '物の喩えだ',
    '物のたとえだ',
    [[[2, 3], '喩え(タトエ)', undefined, '例え(タトエ)|譬え(タトエ)|喩え(タトエ)']],
    'openOnly',
    'openOnly',
  ],
  ['焼き芋を食べるなんてもっての外だ', '焼き芋を食べるなんてもってのほかだ', [[[10, 11], 'もっての外(モッテノホカ)']]],
  ['僅かに増加した', 'わずかに増加した', [[[0, 1], '僅か(ワズカ)']]],
];

runTestOpenClose('名詞', 'meishi', [], invalidTestCases);
