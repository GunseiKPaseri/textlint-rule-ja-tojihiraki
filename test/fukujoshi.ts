import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['あんた程の実力者がそういうのなら…', 'あんたほどの実力者がそういうのなら…', [[[3, 4], '程(ホド)']]],
  ['暑さ寒さも彼岸迄', '暑さ寒さも彼岸まで', [[[7, 8], '迄(マデ)']]],
];

runTestOpenClose('副助詞', 'fukujoshi', [], invalidTestCases);
