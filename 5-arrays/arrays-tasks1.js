// tasks 5.5
// task 1
const camelize = (str) => {
  let arr = str.split("-");

  let arrStrCamelize = arr.map((item, index) => {
    return item != "" && index != 0
      ? item[0].toUpperCase() + item.slice(1)
      : item;
  });

  let arrItemToString = arrStrCamelize.join("");

  return arrItemToString;
};

// task 2
let arrRan = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
  return arr.filter((item) => item >= a && item <= b);
};

let filtered = filterRange(arrRan, 1, 4);

// task 3

let arrRand = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {};

filterRangeInPlace(arrRand, 1, 4);

console.log(arrRand);

// task 4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => {
  return b - a;
});

alert(arr);

// task 5
let arr1 = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
  const copyArr = arr.slice();
  copyArr.sort((a, b) => {
    return a.length - b.length;
  });
  return copyArr;
};
let sorted = copySorted(arr1);

alert(sorted);
alert(arr1);

// task 6
function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function (str) {
    let arr = str.split(" ");
    let operator = arr[1];
    let a = +arr[0];
    let b = +arr[2];
    return this.methods[operator](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
alert(calc.calculate("3 + 7"));

// task 7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = [];

users.forEach((user) => names.push(user.name));

alert(names); // Вася, Петя, Маша

// task 8
let vasyaTwo = { name: "Вася", surname: "Пупкин", id: 1 };
let petyaTwo = { name: "Петя", surname: "Иванов", id: 2 };
let mashaTwo = { name: "Маша", surname: "Петрова", id: 3 };

let usersTwo = [vasyaTwo, petyaTwo, mashaTwo];

let usersMapped = usersTwo.map((user) => ({
  fullName: user.name + " " + user.surname,
  id: user.id,
}));

console.log(usersMapped);

// task 9
let vasyaThree = { name: "Вася", age: 25 };
let petyaThree = { name: "Петя", age: 30 };
let mashaThree = { name: "Маша", age: 28 };

let arrThree = [vasyaThree, petyaThree, mashaThree];

const sortByAge = (arr) => {
  arr.sort((a, b) => a.age - b.age);
};

sortByAge(arrThree);

console.log(arrThree[0].name); // Вася
console.log(arrThree[1].name); // Маша
console.log(arrThree[2].name); // Петя

// доделать 3 и 10-13 таски
