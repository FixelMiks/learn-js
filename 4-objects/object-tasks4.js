// tasks 5.3

// task 1
const ucFirst = (str) => {
  if (str != "") {
    const firstLetter = str[0].toUpperCase();
    const newStr = (firstLetter + str.slice(1)).trim();
    return newStr;
  } else {
    return str;
  }
};

ucFirst("pupa");

// task 2
const checkSpam = (str) => {
  if (
    str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
  ) {
    return true;
  } else {
    return false;
  }
};

checkSpam("pupa xxx");

// task 3
const truncate = (str, maxlength) => {
  if (str.length > maxlength) {
    let cutStr = str.slice(0, maxlength - 1);
    cutStr += "…";

    return cutStr;
  } else {
    return str;
  }
};

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

// task 4
const extractCurrencyValue = (str) => {
  return +str.slice(1);
};

extractCurrencyValue("$120");

// tasks 5.4

// task 1
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // 4

// task 2
const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.trunc(styles.length / 2)] = "Классика";

console.log(styles.shift());

styles.unshift("Рэп", "Регги");

// task 3
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // выведет весь массив, т.к. массив является особым типом объекта

// task 4
const sumInput = () => {
  const array = [];
  while (true) {
    const value = prompt("Введите значение", 0);
    if (value === "" || value === null || isNaN(value)) {
      console.log("Done");
      break;
    } else {
      array.push(+value); // сделать цикл запроса prompt, пока занчение не станет null
    }
  }
  let sum = 0;
  for (num of array) {
    sum += num;
  }
  console.log(array);
  console.log(sum);
};

sumInput();

// task 5
const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let sumNum = 0;

  for (num of arr) {
    sumNum += num;
    maxSum = Math.max(maxSum, sumNum);
    if (sumNum < 0) {
      sumNum = 0;
    }
  }
  return maxSum;
};
