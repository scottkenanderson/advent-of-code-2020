const parseGroup = (group) => {
  const questionsAnswered = {};
  const passengers = group.split('\n')
  passengers.forEach((x) => {x.split('').forEach(y => !!questionsAnswered[y] ? questionsAnswered[y] += 1 : questionsAnswered[y] = 1)});
  return { questionsAnswered, passengerCount: passengers.length };
};

const getGroupCounts = (input) => {
  return input.map((x) => {
    return parseGroup(x);
  });
};

const part1 = (input) => getGroupCounts(input).map((x) => Object.keys(x.questionsAnswered).length).reduce((acc, i) => (i + acc));

const part2 = (input) => {
  return getGroupCounts(input).map(({questionsAnswered, passengerCount}) => {
    const entries = Object.entries(questionsAnswered)
    return entries.filter(([ _, count ]) => count === passengerCount).length;
  }).reduce((acc, i) => (i + acc))};

module.exports = { part1, part2, parseGroup };
