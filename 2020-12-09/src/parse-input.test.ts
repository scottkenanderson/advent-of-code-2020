import parseInput from './parse-input';

it('splits the input data', () => {
  expect(parseInput('1\n2\n3\n4')).toEqual(['1', '2', '3', '4']);
});
