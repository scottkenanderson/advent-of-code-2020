const { part1, part2, parseGroup } = require('./solution');

const input = `abc

a
b
c

ab
ac

a
a
a
a

b`

const groups = [
  [
    `abcx
abcy
abcz`, 6
  ],
];

// describe('part1', () => {
//   it('returns expected input', () => {
//     const output = part1(input);
//     expect(output).not.toBe(undefined);
//     expect(output).toBe(7);
//   });
// });

describe('parseBoardingPass', () => {
  it('parses the boarding passes', () => {
    groups.forEach(([group, expected]) => {
      expect(parseGroup(group)).toStrictEqual(expected);
    });
  });
});

// describe('part2', () => {
//   it('returns expected input', () => {
//     const output = part2(input);
//     expect(output).not.toBe(undefined);
//     expect(output).toBe(336);
//   });
// });
