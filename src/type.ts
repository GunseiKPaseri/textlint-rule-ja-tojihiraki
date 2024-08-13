import type { ExpectedTokenWithCapture } from 'morpheme-match-textlint';

export type Dictionary = {
  message: string;
  expected: string;
  tokens: ExpectedTokenWithCapture[];
};

export type DictionaryInput = Omit<Dictionary, 'message'>;
export type DictionaryInputs = DictionaryInput | { open?: DictionaryInput; close?: DictionaryInput };

export interface DictOpts {
  ignore: string[];
  'force-close': string[];
  'force-open': string[];
}

export type Opts = DictOpts;
