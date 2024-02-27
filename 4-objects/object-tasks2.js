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
const obj5 = {};

let objectToNumber = +obj5;

console.log(typeof objectToNumber); // number
console.log(objectToNumber); // NaN
//
const obj6 = {};

let objectToString = obj6.toString();

console.log(typeof objectToString); // string
console.log(objectToString); // [object Object]
//
const objNum1 = {};
const objNum2 = {};
console.log(objNum1 > objNum2); // false
console.log(objNum1 < objNum2); // false
console.log(objNum1 == objNum2); // false
console.log(objNum1 === objNum2); // false
console.log(objNum1 <= objNum2); // true
console.log(objNum1 >= objNum2); // true
//
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
//
let user1 = {
  name: "John",
  money: 1000,

  // для хинта равного "string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  },
};

alert(user1); // toString -> {name: "John"}
alert(+user1); // valueOf -> 1000
alert(user1 + 500); // valueOf -> 1500
//
let objEqualsString = {
  toString() {
    return "2";
  },
};

console.log(objEqualsString == "2"); // true
//
let objEqualsNum = {
  valueOf() {
    return 2;
  },
};

console.log(objEqualsNum == 2); // true
//
let objMoreZero = {
  valueOf() {
    return 2;
  },
};

console.log(objEqualsNum > 0); // true
//
{
}
+[] + {} + [1]; // '0[object Object]1'
console.log({} + [] + {} + [1]); // [object Object][object Object]1
