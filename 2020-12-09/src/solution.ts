import Preamble from './Preamble';

function findFirstNumber(
  preamble: Preamble, xmasData: Array<number>, preambleLength: number,
) : number {
  for (let i = preambleLength; i < xmasData.length; i += 1) {
    const element = xmasData[i];
    if (!preamble.contains(i, element)) {
      return element;
    }
  }
  return 0;
}

function findFirstAndLastNumber(invalidNumber: number, numbers: Array<number>) : number {

  for (let i = 0; i < numbers.length; i += 1) {
    let sum = numbers[i];
    for (let j = i + 1; j < numbers.length; j += 1) {
      sum += numbers[j];
      if (invalidNumber === sum) {
        const range = numbers.slice(i, j);
        const min = range.reduce((acc, cur) => Math.min(acc, cur));
        const max = range.reduce((acc, cur) => Math.max(acc, cur));
        return min + max;
      }
    }
  }
  return invalidNumber;
}

export function part1(input: Array<string>, preambleLength: number = 5): number {
  const inputNumbers = input.map((x) => parseInt(x, 10));
  const preamble = new Preamble(inputNumbers, preambleLength);
  const firstNumber = findFirstNumber(preamble, inputNumbers, preambleLength);
  return firstNumber;
}

export function part2(input: Array<string>, preambleLength: number = 5) : number {
  const invalidNumber = part1(input, preambleLength);
  const inputNumbers = input.map((x) => parseInt(x, 10));
  return findFirstAndLastNumber(invalidNumber, inputNumbers);
}
