import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['この世全ての悪', 'この世すべての悪', [[[3, 4], '全て(スベテ)']]],
  ['焼き芋を食べるなんてもっての外だ', '焼き芋を食べるなんてもってのほかだ', [[[10, 11], 'もっての外(モッテノホカ)']]],
  ['僅かに増加した', 'わずかに増加した', [[[0, 1], '僅か(ワズカ)']]],
];

runTestOpenClose('名詞', 'meishi', [], invalidTestCases);
