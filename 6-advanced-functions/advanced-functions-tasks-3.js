// tasks 6.6
// task 1
function makeCounter() {
  makeCounter.count = 0;

  function counter() {
    return makeCounter.count++;
  }

  counter.decrease = (val) => makeCounter.count--;

  counter.set = (val) => (makeCounter.count = val);

  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)

// tasks 6.8
// task 1
const printNumbersInterval = (from, to) => {
  let now = from;
  const timer = setInterval(() => {
    if (now === to) {
      console.log(now);
      clearInterval(timer);
    } else {
      console.log(now);
      now++;
    }
  }, 2000);
};

printNumbers(0, 10);

const printNumbersTimeout = (from, to) => {
  let now = from;
  setTimeout(function weakSamatPodsmotrelRecursiu() {
    console.log(now);
    if (now < to) {
      setTimeout(weakSamatPodsmotrelRecursiu, 1000);
    }
    now++;
  }, 2000);
};

// task 2
let i = 0;

setTimeout(() => alert(i), 100); // будет выведена после выполнения цикла

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}

// learn code
let sayHi = function (who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest");
  }
};

sayHi();
