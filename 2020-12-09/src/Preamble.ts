export default class Preamble {
  numbers: Array<number>;

  preambleLength: number;

  constructor(numbers: Array<number>, preambleLength: number) {
    this.numbers = numbers;
    this.preambleLength = preambleLength;
  }

  contains(start: number, num: number) : boolean {
    for (let i = start - this.preambleLength; i < start; i += 1) {
      const number1 = this.numbers[i];
      for (let j = i + 1; j < start; j += 1) {
        const number2 = this.numbers[j];
        if (num === (number1 + number2)) {
          return true;
        }
      }
    }
    return false;
  }
}
