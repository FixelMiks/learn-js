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

// task 4 (busted)
function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      // запоминаем последние аргументы для вызова после задержки
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    // в противном случае переходим в состояние задержки
    func.apply(this, arguments);

    isThrottled = true;

    // настройка сброса isThrottled после задержки
    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        // если были вызовы, savedThis/savedArgs хранят последний из них
        // рекурсивный вызов запускает функцию и снова устанавливает время задержки
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// tasks 6.10
// task 1
function f() {
  alert(this); // null
}

let user = {
  g: f.bind(null),
};

user.g();

// task 2
function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f(); // Вася

// task 3
function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test); // undefined

// task 4
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let userVasya = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(
  userVasya.loginOk.bind(userVasya),
  userVasya.loginFail.bind(userVasya)
);

// task 5
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let userJohn = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(
  userJohn.login.bind(userJohn, true),
  userJohn.login.bind(userJohn, false)
);
