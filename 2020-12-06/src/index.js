/* eslint-disable no-console */
const fs = require('fs');
const { argv } = require('process');

const { parseInput } = require('./parse-input');
const { part1, part2 } = require('./solution');

const main = async () => {
  if (process.argv.length < 3) {
    throw new Error('need a filename');
  }
  console.log(process.argv[2]);
  const rawData = fs.readFileSync(argv[2], 'utf-8');
  const parsedData = parseInput(rawData);
  console.log('Part 1:', part1(parsedData));
  console.log('Part 2:', part2(parsedData));
};

main();
