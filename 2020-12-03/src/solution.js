class Grid {
  constructor(data) {
    this.grid = data;
    this.length = data.length;
    this.width = data[0].length;
  }

  isTree(c) {
    const character = this.grid[c.y][(c.x % this.width)];
    return character === '#';
  }
}

class Coordinates {
  constructor(right, down) {
    this.x = 0;
    this.y = 0;
    this.right = right;
    this.down = down;
  }

  increment() {
    this.x += this.right;
    this.y += this.down;
  }
}

const splitData = row => row.split('');

const toboggan = (grid, right, down) => {
  const c = new Coordinates(right, down);
  let trees = 0;

  while (c.y < grid.length) {
    if (grid.isTree(c)) {
      trees += 1;
    }
    c.increment();
  }
  return trees;
};

const makeGrid = input => (
  new Grid(input.map(x => splitData(x)))
);

const product = (acc, i) => acc * i;

const part1 = input => toboggan(makeGrid(input), 3, 1);

const part2 = (input) => {
  const grid = makeGrid(input);
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  return slopes.map(([right, down]) => toboggan(grid, right, down)).reduce(product);
};

module.exports = { part1, part2 };
