import { type InvalidTestCases, runTestOpenClose } from './testutil';

const validTestCases = ['あなたの命が欲しい'];

const invalidTestCases: InvalidTestCases = [
  ['頼むから話を聞いて欲しい', '頼むから話を聞いてほしい', [[[9, 10], '欲しい(ホシイ)']]],
  ['頼むから話を聞いて欲しかった', '頼むから話を聞いてほしかった', [[[9, 10], '欲しかっ(ホシカッ)']]],
  [
    '話を聞いて欲しかろうが、俺には関係ない',
    '話を聞いてほしかろうが、俺には関係ない',
    [[[5, 6], '欲しかろ(ホシカロ)']],
  ],
  ['話を聞いて欲しくなった', '話を聞いてほしくなった', [[[5, 6], '欲しく(ホシク)']]],
  [
    '話を聞いて欲しければ、相応の態度をとることだ',
    '話を聞いてほしければ、相応の態度をとることだ',
    [[[5, 6], '欲しけれ(ホシケレ)']],
  ],
];

runTestOpenClose('補助形容詞', 'hojokeiyoushi', validTestCases, invalidTestCases);
