import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();
tester.run('連体詞', rule, {
  invalid: [
    {
      text: '色々な色がある',
      output: 'いろいろな色がある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '色んな色がある',
      output: 'いろんな色がある',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    // {
    //   text: '所謂オタサーである',
    //   output: 'いわゆるオタサーである',
    //   errors: [
    //     {
    //       message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
    //       range: [0, 1],
    //     },
    //   ],
    // },
    {
      text: '此の前友達と会った',
      output: 'この前友達と会った',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
    {
      text: '其の一',
      output: 'その一',
      errors: [
        {
          message: '平仮名にひらいたほうが読みやすい漢字を使用しています。',
          range: [0, 1],
        },
      ],
    },
  ],
});
