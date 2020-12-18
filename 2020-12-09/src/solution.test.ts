import { part1, part2 } from './solution';

const input = [
  'FFFFBBBRLR',
  'BFBBFBFRRR',
  'FFBFBBFRRL',
  'BFBFBBFRRR',
];

const boardingPasses = [
  ['FBFBBFFRLR', 44, 5, 357],
  ['BFFFBBFRRR', 70, 7, 567],
  ['FFFBBBFRRR', 14, 7, 119],
  ['BBFFBBFRLL', 102, 4, 820],
];

describe('part1', () => {
  it('returns expected input', () => {
    const output = part1(input);
    expect(output).not.toBe(undefined);
    expect(output).toBe(727);
  });
});

describe('part2', () => {
  it('returns expected input', () => {
    const output = part2(input);
    expect(output).not.toBe(undefined);
    expect(output).toBe(182);
  });
});
