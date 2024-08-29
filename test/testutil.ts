import TextLintTester from 'textlint-tester';
import rule from '../src/index';

type InvalidTestCase =
  | [closedText: string, openText: string, [range: [number, number], message: string, pos?: string][]]
  | [
      closedText: string,
      openText: string,
      [range: [number, number], message: string, pos?: string, trueMessage?: string][],
      testMode: 'none' | 'closeOnly' | 'openOnly' | 'both',
      fixMode: 'none' | 'closeOnly' | 'openOnly' | 'both',
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
      .filter((opts) => opts[3] === 'openOnly' || opts[3] === 'both')
      .map(([closedText, openText, openErrors, _testMode, fixMode]) => ({
        text: closedText,
        output: fixMode === 'none' || fixMode === 'closeOnly' ? closedText : openText,
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
        .filter((opts) => opts[3] === 'closeOnly' || opts[3] === 'both')
        .map(([closedText, openText, closeErrors, _testMode, fixMode]) => ({
          text: openText,
          output: fixMode === 'none' || fixMode === 'openOnly' ? openText : closedText,
          errors: closeErrors.map(([range, message, pos, trueMessage]) => ({
            message: `漢字に閉じるべき${pos ?? name}です: ${trueMessage ?? message}`,
            range,
          })),
        })),
    },
  );
};
