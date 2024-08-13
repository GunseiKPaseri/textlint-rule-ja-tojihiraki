import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();

tester.run(
  'ignore options (all)',
  {
    rules: [
      {
        ruleId: 'ja-tojihiraki',
        rule,
        options: {
          ignore: ['all'],
        },
      },
    ],
  },
  {
    valid: [
      'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
      '丁度良かった。色々話を聞いて頂きたいと思っていた所でした。',
      '丁度よかった。色々話を聞いていただきたいと思っていたところでした。',
    ],
  },
);

tester.run(
  'ignore options (all) (ignoreが最優先)',
  {
    rules: [
      {
        ruleId: 'ja-tojihiraki',
        rule,
        options: {
          ignore: ['all'],
          'force-open': ['all'],
          'force-close': ['all'],
        },
      },
    ],
  },
  {
    valid: [
      'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
      '丁度良かった。色々話を聞いて頂きたいと思っていた所でした。',
      '丁度よかった。色々話を聞いていただきたいと思っていたところでした。',
    ],
  },
);

tester.run(
  'ignore options (形態素)',
  {
    rules: [
      {
        ruleId: 'ja-tojihiraki',
        rule,
        options: {
          ignore: ['fukushi'],
        },
      },
    ],
  },
  {
    invalid: [
      {
        text: '丁度良かった。いろいろ話を聞いて頂きたいと思っていた所でした。',
        output: '丁度よかった。いろいろ話を聞いていただきたいと思っていたところでした。',
        errors: [
          {
            message: 'ひらがなに開かれるべき形容詞です: 良かっ(ヨカッ)',
            range: [2, 3],
          },
          {
            message: 'ひらがなに開かれるべき補助動詞です: 頂き(イタダキ)',
            range: [16, 17],
          },
          {
            message: 'ひらがなに開かれるべき形式名詞です: 所(トコロ)',
            range: [26, 27],
          },
        ],
      },
    ],
  },
);

tester.run(
  'ignore options (形態素) (ignoreが最優先)',
  {
    rules: [
      {
        ruleId: 'ja-tojihiraki',
        rule,
        options: {
          ignore: ['fukushi', 'イ'],
          'force-close': ['all'],
          'force-open': ['fukushi'],
        },
      },
    ],
  },
  {
    invalid: [
      {
        text: '丁度よかった。いろいろ話を聞いていただきたいと思っていたところでした。',
        output: '丁度良かった。いろいろ話を聞いて頂きたいと思っていた所でした。',
        errors: [
          {
            message: '漢字に閉じるべき形容詞です: 良かっ(ヨカッ)',
            range: [2, 3],
          },
          {
            message: '漢字に閉じるべき補助動詞です: 頂き(イタダキ)',
            range: [16, 17],
          },
          {
            message: '漢字に閉じるべき形式名詞です: 所(トコロ)',
            range: [28, 29],
          },
        ],
      },
    ],
  },
);

tester.run(
  'ignore options (単語)',
  {
    rules: [
      {
        ruleId: 'ja-tojihiraki',
        rule,
        options: {
          ignore: ['イタダキ'],
        },
      },
    ],
  },
  {
    invalid: [
      {
        text: '丁度良かった。色々話を聞いて頂きたいと思っていた所でした。',
        output: 'ちょうどよかった。いろいろ話を聞いて頂きたいと思っていたところでした。',
        errors: [
          {
            message: 'ひらがなに開かれるべき副詞です: 丁度(チョウド)',
            range: [0, 1],
          },
          {
            message: 'ひらがなに開かれるべき形容詞です: 良かっ(ヨカッ)',
            range: [2, 3],
          },
          {
            message: 'ひらがなに開かれるべき副詞です: 色々(イロイロ)',
            range: [7, 8],
          },
          {
            message: 'ひらがなに開かれるべき形式名詞です: 所(トコロ)',
            range: [24, 25],
          },
        ],
      },
    ],
  },
);
