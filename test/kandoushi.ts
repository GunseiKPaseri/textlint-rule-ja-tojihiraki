import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['有難うございました', 'ありがとうございました', [[[0, 1], '有難う(アリガトウ)']]],
];

runTestOpenClose('感動詞', 'kandoushi', [], invalidTestCases);
