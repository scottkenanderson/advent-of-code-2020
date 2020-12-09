const { part1, part2 } = require('./solution');

it('passes the test', () => (expect(1).toBe(1)));

const input = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

describe('part1', () => {
  it('returns expected input', () => {
    const output = part1(input);
    expect(output).not.toBe(undefined);
    expect(output).toBe(7);
  });
});

describe('part2', () => {
  it('returns expected input', () => {
    const output = part2(input);
    expect(output).not.toBe(undefined);
    expect(output).toBe(1);
  });
});
