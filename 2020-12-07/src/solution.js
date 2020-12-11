class Rule {
  constructor(colour) {
    this.colour = colour;
    this.contains = {};
    this.isContainedIn = {};
  }

  addContains(colour, count) {
    this.contains[colour] = count;
  }

  addIsInside(colour, count) {
    this.isContainedIn[colour] = count;
  }
}

const walkIsContainedInTreeHelper = (visited, rules, firstRule) => {
  Object.keys(firstRule.isContainedIn).forEach((colour) => {
    visited.push(colour);
    walkIsContainedInTreeHelper(visited, rules, rules[colour]);
  });
  return visited;
};

const walkIsContainedInTree = (rules, firstRule) => {
  const visited = [];
  walkIsContainedInTreeHelper(visited, rules, firstRule);
  return new Set(visited).size;
};

const walkContainsTreeHelper = (visited, rules, firstRule) => {
  Object.entries(firstRule.contains).forEach(([colour, count]) => {
    for (let i = 0; i < count; i += 1) {
      visited.push(colour);
      walkContainsTreeHelper(visited, rules, rules[colour]);
    }
  });
  return visited;
};

const walkContainsTree = (rules, firstRule) => {
  const visited = [];
  walkContainsTreeHelper(visited, rules, firstRule);
  return visited.length;
};

const getRules = (input) => {
  const allRules = {};
  const ruleRegExp = new RegExp(
    /^([a-z]+ [a-z]+) bags contain (no other bags|(?:[0-9]+ [a-z]+ [a-z]+ bags?(?:, [0-9]+ [a-z]+ [a-z]+ bags?)*))\.$/,
  );
  input.forEach((ruleString) => {
    const match = ruleString.match(ruleRegExp);
    const colour = match[1];
    const containsString = match[2];

    if (!Object.prototype.hasOwnProperty.call(allRules, colour)) {
      allRules[colour] = new Rule(colour);
    }
    const rule = allRules[colour];

    if (containsString !== 'no other bags') {
      const bagRegExp = new RegExp(
        /([0-9]+) ([a-z]+ [a-z]+) bags?/,
      );
      containsString.split(', ').forEach((bagString) => {
        const bagMatch = bagString.match(bagRegExp);
        const bagCount = parseInt(bagMatch[1], 10);
        const bagColour = bagMatch[2];
        rule.addContains(bagColour, bagCount);
        if (!Object.prototype.hasOwnProperty.call(allRules, bagColour)) {
          allRules[bagColour] = new Rule(bagColour);
        }
        allRules[bagColour].addIsInside(colour, 0);
      });
    }
    allRules[colour] = rule;
  });

  return allRules;
};

const part1 = (input) => {
  const rules = getRules(input);
  return walkIsContainedInTree(rules, rules['shiny gold']);
};

const part2 = (input) => {
  const rules = getRules(input);
  return walkContainsTree(rules, rules['shiny gold']);
};

module.exports = { part1, part2 };
