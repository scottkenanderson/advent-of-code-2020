const { parseInput } = require('./parse-input');

it('splits the input data', () => {
  const input = `1721
979
366
299
675
1456`;

  const expected = [
    '1721',
    '979',
    '366',
    '299',
    '675',
    '1456',
  ];

  expect(parseInput(input)).toEqual(expected);
});
