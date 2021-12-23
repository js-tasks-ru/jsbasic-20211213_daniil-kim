let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(object) {
  let sum = 0;
  for (let prop in object) {
    if (Number.isFinite(object[prop])) {
      sum += object[prop];
    }
  }
  return sum;
}

sumSalary(salaries);