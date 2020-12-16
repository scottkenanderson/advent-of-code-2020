class Instruction {
  constructor(operation, argument) {
    this.operation = operation;
    // this.executed = false;
    this.argument = argument;
  }

  getArgument() {
    const arg = this.argument;
    if (arg.startsWith('+')) {
      return parseInt(arg.substring(1), 10);
    }
    return parseInt(arg, 10);
  }

  execute(acc) {
    let jumpValue = 1;
    // this.executed = true;

    let accumulator = acc;
    if (this.operation === 'acc') {
      accumulator += this.getArgument();
    }
    if (this.operation === 'jmp') {
      jumpValue = this.getArgument();
    }
    return { accumulator, jumpValue };
  }

  flippable() {
    return this.operation === 'jmp' || this.operation === 'nop';
  }

  flip() {
    if (this.operation === 'jmp') {
      this.operation = 'nop';
      return true;
    }
    if (this.operation === 'nop') {
      this.operation = 'jmp';
      return true;
    }
    return false;
  }
}

const getInstructions = (input) => input.map((instructionString) => {
  const [operation, argument] = instructionString.split(' ');
  return new Instruction(operation, argument);
});

const executeInstructions = (instructions) => {
  let index = 0;
  let accumulator = 0;
  const executed = [];
  while (index < instructions.length) {
    if (executed.indexOf(index) !== -1) {
      return { accumulator, infiniteLoop: true, index };
    }
    const instruction = instructions[index];
    const output = instruction.execute(accumulator);
    accumulator = output.accumulator;
    executed.push(index)
    index += output.jumpValue;
  }
  return { accumulator, infiniteLoop: false, index };
};

const findFlippable = (instructions) => {
  const indexes = [];
  instructions.forEach((instruction, i) => {
    if (instruction.flippable()) {
      indexes.push(i);
    }
  });
  return indexes;
};

const part1 = (input) => {
  console.log(input);
  const instructions = getInstructions(input);
  const { accumulator } = executeInstructions(instructions);
  return accumulator;
};

const part2 = (input) => {
  const instructions = getInstructions(input);
  const flippedValues = findFlippable(instructions);

  const outputs = flippedValues.map((flipInstruction, i) => {
    const instructionsCopy = [...instructions];
    instructionsCopy[flipInstruction].flip();
    const result = executeInstructions(instructionsCopy);
    instructionsCopy[flipInstruction].flip();
    return {i, flipInstruction, ...result};
  });
  return outputs.filter(x => x.infiniteLoop === false)[0].accumulator
};

module.exports = { part1, part2 };
