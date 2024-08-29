import TextLintTester from 'textlint-tester';
import rule from '../src/index';

type InvalidTestCase =
  | [closedText: string, openText: string, [range: [number, number], message: string, pos?: string][]]
  | [
      closedText: string,
      openText: string,
      [range: [number, number], message: string, pos?: string][],
      'closeOnly' | 'openOnly' | 'both',
      unfix: boolean,
    ];
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
      .map(([closedText, openText, openErrors, _mode, unfix]) => ({
        text: closedText,
        output: unfix ? closedText : openText,
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
          ruleId: 'ja-tojihiraki',
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
        .map(([closedText, openText, closeErrors, _mode, unfix]) => ({
          text: openText,
          output: unfix ? openText : closedText,
          errors: closeErrors.map(([range, message, pos]) => ({
            message: `漢字に閉じるべき${pos ?? name}です: ${message}`,
            range,
          })),
        })),
    },
  );
};
