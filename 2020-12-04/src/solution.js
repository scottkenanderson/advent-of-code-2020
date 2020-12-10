class ValidateInteger {
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;
  }

  validate(value) {
    const intValue = parseInt(value, 10);
    if (!intValue) {
      return false;
    }
    return this.lower <= intValue && intValue <= this.upper;
  }
}

class ValidateRegex {
  constructor(pattern) {
    this.regex = new RegExp(pattern, 'g');
  }

  validate(value) {
    return !!value.match(this.regex);
  }
}

class ValidateHeight {
  constructor() {
    this.cmRegex = new RegExp('1[0-9]{2}cm');
    this.cmValidator = new ValidateInteger(150, 193);
    this.inRegex = new RegExp('[5-7][0-9]in');
    this.inValidator = new ValidateInteger(59, 76);
  }

  validate(value) {
    if (value.match(this.cmRegex)) {
      return this.cmValidator.validate(value.split('cm')[0]);
    }
    if (value.match(this.inRegex)) {
      return this.inValidator.validate(value.split('in')[0]);
    }
    return false;
  }
}

const fields = {
  byr: new ValidateInteger(1920, 2002),
  iyr: new ValidateInteger(2010, 2020),
  eyr: new ValidateInteger(2020, 2030),
  hgt: new ValidateHeight(),
  hcl: new ValidateRegex('^\#[0-9a-f]{6}$'),
  ecl: new ValidateRegex('^(amb|blu|brn|grn|gry|hzl|oth)$'),
  pid: new ValidateRegex('^[0-9]{9}$'),
  cid: { validate: () => true }, // optional
};

const validatePassportFields = (passport) => {
  const matches = Object.keys(fields).filter((x) => x !== 'cid').map(
    (field) => !!passport.match(new RegExp(field, 'g')),
  );
  return matches.filter((x) => !x).length === 0;
};

const validatePassportValue = (passport) => {
  if (!validatePassportFields(passport)) {
    return false;
  }
  const result = passport.split(/\s/g).map((v) => {
    const [fieldName, value] = v.split(':');
    const validator = fields[fieldName];
    return validator.validate(value);
  });
  return result.filter((x) => !x).length === 0;
};

const runSolution = (input, func) => {
  input.forEach((x) => x.replace('\n', ' '));
  return input.map(func).filter((x) => !!x).length;
};

const part1 = (input) => runSolution(input, validatePassportFields);

const part2 = (input) => runSolution(input, validatePassportValue);

module.exports = { part1, part2, validatePassportValue };
