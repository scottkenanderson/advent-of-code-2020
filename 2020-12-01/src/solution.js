/* eslint-disable no-restricted-syntax */

const part1 = (input) => {
  for (const [i, first] of input.entries()) {
    for (const second of input.slice(i + 1)) {
      if (first + second === 2020) {
        return first * second;
      }
    }
  }
  return null;
};

const part2 = (input) => {
  for (const [i, first] of input.entries()) {
    for (const second of input.slice(i + 1)) {
      for (const third of input.slice(i + 2)) {
        if (first + second + third === 2020) {
          return first * second * third;
        }
      }
    }
  }
  return null;
};

module.exports = { part1, part2 };
