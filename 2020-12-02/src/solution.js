class Policy {
  constructor(policyString) {
    const [ occurrenceKey, character ] = policyString.split(' ');
    const [ minOccurence, maxOccurrence ] = occurrenceKey.split('-').map((i) => parseInt(i, 10));
    this.minOccurence = minOccurence;
    this.maxOccurrence = maxOccurrence;
    this.character = character;
  }

  isMetByPart1(password) {
    const matches = (password.match(new RegExp(this.character, 'g')) || []).length;
    return this.minOccurence <= matches && this.maxOccurrence >= matches;
  }

  isMetByPart2(password) {
    return [
      password.charAt(this.minOccurence-1).match(new RegExp(this.character)) !== null, 
      password.charAt(this.maxOccurrence-1).match(new RegExp(this.character)) !== null,
    ].filter(x => !!x).length === 1;
  }
}

const splitData = (element) => {
  const [ policyString, password ] = element.split(':');
  return [ new Policy(policyString), password.trim() ];
}

const solve = (input, func) => {
  const data = input.map(x => splitData(x))
  return data.map(func).filter(x => !!x).length;
};

const part1 = (input) => {
  return solve(input, ([policy, password]) => policy.isMetByPart1(password));
};

const part2 = (input) => {
  return solve(input, ([policy, password]) => policy.isMetByPart2(password));
};

module.exports = { part1, part2 };
