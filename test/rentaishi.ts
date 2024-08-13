import { type InvalidTestCases, runTestOpenClose } from './testutil';

const invalidTestCases: InvalidTestCases = [
  ['色々な色がある', 'いろいろな色がある', [[[0, 1], '色々(イロイロ)']]],
  ['色んな色がある', 'いろんな色がある', [[[0, 1], '色んな(イロンナ)']]],
  // ['所謂オタサーである', 'いわゆるオタサーである', [[[0, 1], '所謂']]],
  ['此の前友達と会った', 'この前友達と会った', [[[0, 1], '此の前(コノマエ)']]],
  ['其の一', 'その一', [[[0, 1], '其の(ソノ)']]],
];

runTestOpenClose('連体詞', 'rentaishi', [], invalidTestCases);
