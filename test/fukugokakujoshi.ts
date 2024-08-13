import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['nostrを始めとする分散SNS', 'nostrをはじめとする分散SNS', [[[5, 6], 'を始め(ヲハジメ)']]],
];

runTestOpenClose('複合格助詞', 'fukugoukakujoshi', [], invalidTestCases);
