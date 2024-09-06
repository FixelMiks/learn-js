// повторение this
const fun = () => {
  "use strict";
  return this;
};

fun() === window; // true

const fun2 = () => {
  return this;
};

fun() === window; // true

function foo() {
  "use strict";
  return this;
}

foo() === window; // false, т.к. будет = undefined

function foo2() {
  return this;
}

foo2() === window; // true

console.log(this === window); // true

// закрепление apply, call, bind
function foo() {
  return "biba";
}

foo.apply(); // сразу вызывается; biba

foo.call(); // сразу вызывается; biba

function zopa() {
  return "zopa";
}

zopa.bind(); // возвращает новую функцию zopa() { return "zopa"; }

function zopa2() {
  "use strict";
  return "zopa2";
}

zopa2.bind(); // возвращает новую функцию zopa() { "use strict"; return "zopa"; }

function showThis() {
  "use strict";
  console.log(this);
}

const boundFunc = showThis.bind();
boundFunc(); // undefined, без "use strict" будет undefined

const obj1 = { name: "biba" };
const obj2 = { name: "boba" };
const obj3 = { name: "baby" };

function showName() {
  console.log(this.name);
}

const one = showName.bind(obj1); // Привязываем к obj1
const two = one.bind(obj2); // Пытаемся привязать к obj2
const three = two.bind(obj3); // Пытаемся привязать к obj3

three(); // 'Obj1'

const obj11 = { name: "biba" };
const obj22 = { name: "boba" };

const oneOne = showName.apply(obj11).apply(obj22); // Error
