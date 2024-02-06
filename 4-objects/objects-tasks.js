// 4.1 tasks
// task 1
const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

// task 2

const isEmpty = (obj) => {
  for (let key in obj) {
    return true;
  }

  return false;
};

let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule));

// task 3

const user = {
  name: "John",
};

user.name = "Pete"; // true

// task 4

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumSalaries = (obj) => {
  let sum = 0;

  for (salarie in obj) {
    sum += obj[salarie];
  }

  return sum;
};

console.log(sumSalaries(salaries));

// task 5

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
};

multiplyNumeric(menu);

console.log(menu);

// 4.4 tasks
// task 1

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // Error name undefined

// task 2
let calculator = {
  read() {
    this.a = +prompt("Enter A");
    this.b = +prompt("Enter B");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// task 3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
