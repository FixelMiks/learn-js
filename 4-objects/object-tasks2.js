// tasks 4.5

// task 1

function A() {
  return this; // возвращает текущий объект в зависимости от контекста
}
function B() {
  return a;
}

let a = new A();
let b = new B();

alert(a == b); // true

// task 2

function Calculator() {
  this.read = function () {
    this.a = +prompt("Введите число А", 0);
    this.b = +prompt("Введите число B", 0);
    return this.a, this.b;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// task 3

const Accumulator = function (startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.newValue = +prompt("Введите значение", 0);
    return (this.value += this.newValue);
  };
};

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);

// learning code
//
const obj1 = { fruit: "apple" };
const obj2 = { fruit: "banana" };

const obj3 = obj1 + obj2; // [object Object][object Object]
//
const obj4 = {};
const anotherObj = {};

alert(obj4); // вывод [object Object]

anotherObj[obj4] = 123; // используем объект в качестве ключа

console.log(anotherObj); // {[object Object]: 123}
console.log(typeof anotherObj[obj4]); // number
console.log(Boolean(anotherObj)); // true
//
