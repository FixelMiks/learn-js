// tasks 6.3
// task 1
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // Pete

// task 2
function makeWorker() {
  let name2 = "Pete";

  return function () {
    alert(name2);
  };
}

let name2 = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // Pete

// task 3
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1

// task 4
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter3 = new Counter();

alert(counter3.up()); // 1
alert(counter3.up()); // 2
alert(counter3.down()); // 1

// task 5
// используется "use strict"
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // error

// task 6
const sum = (num) => {
  return function (num2) {
    return num + num2;
  };
};

console.log(sum(1)(2));

// task 7
let x = 1;

function func() {
  console.log(x); // ReferenceError переменная объявлена позже, чем была использована

  let x = 2;
}

func();

// task 8
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (c) {
    return c >= a && x <= c;
  };
}

function inArray(arr) {
  return function (c) {
    return arr.includes(c);
  };
}

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

// task 9
let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" },
];

function byField(fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  };
}

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));

// task 10
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      alert(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}
