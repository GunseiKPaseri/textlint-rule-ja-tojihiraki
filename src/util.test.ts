import assert from 'node:assert/strict';
import test, { describe } from 'node:test';
import { hiraToKana } from './util.ts';

describe('util', () => {
  test('#hiraToKana', () => {
    assert.equal(hiraToKana('あいうえお'), 'アイウエオ');
  });
});
