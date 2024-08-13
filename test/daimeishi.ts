import { type InvalidTestCases, runTestOpenClose } from './testutil';

const validTestCases = [
  '私が町長です',
  '僕が町長です',
  '我が町長です',
  '君が町長です',
  '彼が町長です',
  '彼女が町長です',
  '自分が町長です',
];

const invalidTestCases: InvalidTestCases = [
  ['貴方にはわからないでしょうね', 'あなたにはわからないでしょうね', [[[0, 1], '貴方(アナタ)']]],
  [
    '此処は何処？',
    'ここはどこ？',
    [
      [[0, 1], '此処(ココ)'],
      [[3, 4], '何処(ドコ)'],
    ],
  ],
  ['何方様でも入会できます', 'どなた様でも入会できます', [[[0, 1], '何方(ドナタ)']]],
];

runTestOpenClose('代名詞', 'daimeishi', validTestCases, invalidTestCases);
