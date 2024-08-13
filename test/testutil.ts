import TextLintTester from 'textlint-tester';
import rule from '../src/index';

type InvalidTestCase =
  | [string, string, [[number, number], string, string?][]]
  | [string, string, [[number, number], string, string?][], 'closeOnly' | 'openOnly'];
export type InvalidTestCases = InvalidTestCase[];

const tester = new TextLintTester();

export const runTestOpenClose = (
  name: string,
  nameLoma: string,
  validTestCases: string[],
  invalidTestCases: InvalidTestCases,
) => {
  tester.run(`${name}(ひらく)`, rule, {
    valid: validTestCases,
    invalid: invalidTestCases
      .filter((opts) => opts[3] !== 'closeOnly')
      .map(([text, output, openErrors]) => ({
        text,
        output,
        errors: openErrors.map(([range, message, pos]) => ({
          message: `ひらがなに開かれるべき${pos ?? name}です: ${message}`,
          range,
        })),
      })),
  });

  tester.run(
    `${name}(とじる)`,
    {
      rules: [
        {
          ruleId: 'ja-kaihei',
          rule,
          options: {
            'force-close': [nameLoma],
          },
        },
      ],
    },
    {
      valid: validTestCases,
      invalid: invalidTestCases
        .filter((opts) => opts[3] !== 'openOnly')
        .map(([text, output, closeErrors]) => ({
          text: output,
          output: text,
          errors: closeErrors.map(([range, message, pos]) => ({
            message: `漢字に閉じるべき${pos ?? name}です: ${message}`,
            range,
          })),
        })),
    },
  );
};
