// learn code
// decorator function
const allArgsValid = function (fn) {
  return function (...args) {
    if (args.length != fn.length) {
      throw new Error("Only submit required number of params");
    }
    const validArgs = args.filter((arg) => Number.isInteger(arg));
    if (validArgs.length < fn.length) {
      throw new TypeError("Argument cannot be a non-integer");
    }
    return fn(...args);
  };
};

// ordinary multiply function
let multiply = function (a, b) {
  return a * b;
};

// decorated multiply function that only accepts the required number of params and only integers
multiply = allArgsValid(multiply);

multiply(6, 8);
// 48

multiply(6, 8, 7);
// Error: Only submit required number of params

multiply(3, null);
// TypeError: Argument cannot be a non-integer

multiply("", 4);
// TypeError: Argument cannot be a non-integer

// tasks 6.9
// task 1
function spy(func) {
  wrapper.calls = [];
  let calls = wrapper.calls;
  function wrapper(...args) {
    calls.push(args);
    return func.apply(this, args);
  }
  return wrapper;
}

// task 2
function delay(func, time) {
  return function (...args) {
    setTimeout(() => {
      func.apply(this, args);
    }, time);
  };
}

function f(x) {
  alert(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test2");

// task 3 (busted)
function debounce(func, time) {
  let timerId; // создаётся таймер id
  return function (...args) {
    clearTimeout(timerId); // при возврате функции очищаем
    timerId = setTimeout(() => func.apply(this, args), time); // присваиваем таймерайди
  };
}

let f = debounce(alert, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);

// task 4 (доделать)
function throttle(func, time) {
  let timerId;
  if (timerId === undefined) {
    return function (...args) {
      func.apply(this, args);
    };
  }
  return function (...args) {
    setTimeout(() => {
      clearTimeout(timerId);
      func.apply(this, args);
    }, time);
  };
}
