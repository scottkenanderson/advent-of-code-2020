const { part1, part2 } = require('./solution');

it('passes the test', () => (expect(1).toBe(1)));

const input = [
  1721,
  979,
  366,
  299,
  675,
  1456,
];

describe('part1', () => {
  it('returns expected input', () => {
    const output = part1(input);
    expect(output).not.toBe(undefined);
    expect(output).toBe(514579);
  });
});

describe('part2', () => {
  it('returns expected input', () => {
    const output = part2(input);
    expect(output).not.toBe(undefined);
    expect(output).toBe(241861950);
  });
});
