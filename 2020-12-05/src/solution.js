class SeatRange {
  recalculateMid() {
    this.mid = Math.floor((this.min + this.max) / 2);
  }

  constructor({ min, max }, { lower, upper }) {
    this.min = min;
    this.max = max;
    this.lower = lower;
    this.upper = upper;
    this.recalculateMid();
  }

  consider(char) {
    if (char === this.lower) {
      this.max = this.mid;
    } else if (char === this.upper) {
      this.min = this.mid + 1;
    }
    this.recalculateMid();
  }

  finalValue() {
    if (this.min === this.max) {
      return this.min;
    }
    return -1;
  }
}

const parseRange = (rowString, range, lowerUpper) => {
  const seatRange = new SeatRange(range, lowerUpper);
  Array.from(rowString).forEach((_, i) => {
    seatRange.consider(rowString.charAt(i));
  });
  return seatRange.finalValue();
};

const parseBoardingPass = (boardingPass) => {
  const row = parseRange(boardingPass.substring(0, 7), { min: 0, max: 127 }, { lower: 'F', upper: 'B' });
  const column = parseRange(boardingPass.substring(7, 10), { min: 0, max: 7 }, { lower: 'L', upper: 'R' });
  const seatId = row * 8 + column;
  return { row, column, seatId };
};

const getSeatIds = (input) => {
  return input.map((x) => {
    const { seatId } = parseBoardingPass(x);
    return parseInt(seatId, 10);
  });
};

const part1 = (input) => getSeatIds(input).reduce((acc, i) => (i > acc ? i : acc));

const part2 = (input) => {
  let min = 0;
  let max = 0;
  const sortedSeatIds = getSeatIds(input).sort((a, b) => a - b);
  sortedSeatIds.slice(1, sortedSeatIds.length - 1).forEach((_, index) => {
    if (index !== 0 && sortedSeatIds[index - 1] !== sortedSeatIds[index] - 1) {
      min = sortedSeatIds[index];
    }
    if (sortedSeatIds[index + 1] !== sortedSeatIds[index] + 1) {
      max = sortedSeatIds[index];
    }
  });
  return (min + max) / 2;
};

module.exports = { part1, part2, parseBoardingPass };
