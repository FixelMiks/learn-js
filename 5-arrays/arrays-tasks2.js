// tasks 5.9
// task 1
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (salaries) => {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
};

console.log(sumSalaries(salaries));

// task 2
function count(obj) {
  return Object.keys(obj).length;
}
