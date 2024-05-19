import {describe, expect, test} from '@jest/globals';
import {twoNumbers} from "@/utils/twonumbers";

describe('Two Sum: Input Array is Sorted', () => {
  test('Numbers 2,7,11,15 target 9 return 1,2', () => {
    expect(twoNumbers([2,7,11,15], 9)).toStrictEqual([1,2]);
  });

  test('Numbers 2,3,4 target 6 return 1,3', () => {
    expect(twoNumbers([2,3,4], 6)).toStrictEqual([1,3]);
  });

  test('Numbers -1,0 target -1 return -1', () => {
    expect(twoNumbers([-1,0], -1)).toStrictEqual([1,2]);
  });

  test('Numbers 4, 11, 17, 25 target 21 return 1,3', () => {
    expect(twoNumbers([4, 11, 17, 25], 21)).toStrictEqual([1,3]);
  });

  test('Numbers 0, 1, 2, 2, 3, 5 target 4 return 2,5', () => {
    expect(twoNumbers([0, 1, 2, 2, 3, 5], 4)).toStrictEqual([2,5]);
  });
});