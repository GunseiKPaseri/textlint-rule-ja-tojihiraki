import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['nostrを始めとする分散SNS', 'nostrをはじめとする分散SNS', [[[5, 6], 'を始め(ヲハジメ)']]],
  ['これを以て開会の挨拶とする', 'これをもって開会の挨拶とする', [[[2, 3], 'を以て(ヲモッテ)']]],
];

runTestOpenClose('複合格助詞', 'fukugoukakujoshi', [], invalidTestCases);
