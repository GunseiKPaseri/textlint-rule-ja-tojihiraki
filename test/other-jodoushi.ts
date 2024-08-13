import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['三日とろろ美味しゅう御座いました', '三日とろろ美味しゅうございました', [[[10, 11], '御座い(ゴザイ)']]],
];

runTestOpenClose('助動詞', 'jodoushi', [], invalidTestCases);
