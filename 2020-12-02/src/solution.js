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
    const firstIndex = this.minOccurence-1;
    const secondIndex = this.maxOccurrence-1;
    const firstChar = password.charAt(firstIndex);
    const secondChar = password.charAt(secondIndex);
    const matches = [firstChar.match(new RegExp(this.character)) !== null, secondChar.match(new RegExp(this.character)) !== null];
    const numMatches = matches.filter(x => !!x).length;
    return numMatches === 1;
  }
}

const splitData = (element) => {
  const [ policyString, password ] = element.split(':');
  return [ new Policy(policyString), password.trim() ];
}

const part1 = (input) => {
  const data = input.map(x => splitData(x))
  const matches = data.map(([policy, password]) => policy.isMetByPart1(password));
  return matches.filter(x => !!x).length;
};

const part2 = (input) => {
  const data = input.map(x => splitData(x))
  const matches = data.map(([policy, password]) => policy.isMetByPart2(password));
  return matches.filter(x => !!x).length;
};

module.exports = { part1, part2 };
