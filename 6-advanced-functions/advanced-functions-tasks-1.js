// tasks 6.1
// task 1
// cycle
const sumToCycle = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
};

sumToCycle(10);

// recursion
const sumToRecursion = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return n + sumToRecursion(n - 1);
  }
};

sumToRecursion(10);

// task 2
const factorial = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

factorial(5);

// task 3
const fib = (n) => {
  if (n == 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

fib(3); // error callstack full :\

// task 4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// recursion
function printListRecursion(list) {
  console.log(list.value);
  if (list.next) {
    printListRecursion(list.next);
  }
}

printListRecursion(list);

// task 5
function printListRecursion2(list) {
  if (list.next) {
    printListRecursion2(list.next);
  }
  console.log(list.value);
}

printListRecursion2(list);
