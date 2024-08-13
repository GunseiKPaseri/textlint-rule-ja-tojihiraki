import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['暑さ寒さも彼岸迄', '暑さ寒さも彼岸まで', [[[7, 8], '迄(マデ)']]],
  ['あんた程の実力者がそういうのなら…', 'あんたほどの実力者がそういうのなら…', [[[3, 4], '程(ホド)']]],
];

runTestOpenClose('副助詞', 'fukujoshi', [], invalidTestCases);
