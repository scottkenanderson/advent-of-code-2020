class Instruction {
  constructor(operation, argument) {
    this.operation = operation;
    this.executed = false;
    this.argument = argument;
  }

  getArgument() {
    const arg = this.argument;
    if (arg.startsWith('+')) {
      return parseInt(arg.substring(1), 10);
    }
    return parseInt(arg, 10);
  }

  execute() {
    this.executed = true;
  }
}

const getInstructions = (input) => {
  return input.map((instructionString) => {
    const [ operation, argument ] = instructionString.split(' ');
    return new Instruction(operation, argument)
  });
};

const executeInstructions = (instructions) => {
  let index = 0;
  let accumulator = 0;
  while(index < instructions.length) {
    console.log(index)
    const instruction = instructions[index]
    const { operation, executed } = instruction;
    let jumpValue = 1;
    if (!!executed) {
      return accumulator;
    }
    instruction.execute();
    if (operation === 'acc') {
      accumulator += instruction.getArgument();
    }
    if (operation === 'jmp') {
      jumpValue = instruction.getArgument();
    }
    index += jumpValue;
  }
  return accumulator;
};

const part1 = (input) => {
  console.log(input)
  const instructions = getInstructions(input);
  console.log(instructions)
  return executeInstructions(instructions);
};

const part2 = (input) => {
  // const instructions = getInstructions(input);
};

module.exports = { part1, part2 };
