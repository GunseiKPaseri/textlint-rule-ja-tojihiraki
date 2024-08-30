import type { ExpectedTokenWithCapture } from 'morpheme-match-textlint';

export type Dictionary = {
  message: string;
  expected?: string;
  tokens: ExpectedTokenWithCapture[];
};

export type JOYOGAI = 'hyogai' | 'joyogai';

export type DictionaryInput =
  | {
      warnOnly?: false;
      expected: string;
      tokens: ExpectedTokenWithCapture[];
      joyogai?: JOYOGAI;
    }
  | {
      warnOnly: true;
      expected: string[];
      tokens: ExpectedTokenWithCapture[];
      joyogai?: JOYOGAI;
    };
export type DictionaryInputs =
  | DictionaryInput
  | { open?: DictionaryInput | DictionaryInput[]; close: DictionaryInput | DictionaryInput[] }
  | { open: DictionaryInput | DictionaryInput[] };

export interface DictOpts {
  ignore: string[];
  'force-close': string[];
  'force-open': string[];
}

export type Opts = DictOpts;
