/* eslint-disable no-console */
import { part1, part2 } from './solution';

import parseInput from './parse-input';

const fs = require('fs');
const { argv } = require('process');

const main = async () => {
  if (process.argv.length < 3) {
    throw new Error('need a filename');
  }
  const preambleLength = parseInt(process.argv[3], 10);
  const rawData = fs.readFileSync(argv[2], 'utf-8');
  const parsedData = parseInput(rawData);
  console.log('Part 1:', part1(parsedData, preambleLength));
  console.log('Part 2:', part2(parsedData, preambleLength));
};

main();
