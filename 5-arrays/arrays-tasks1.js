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

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};

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

// task 10
const arrRandom = [1, 2, 3];

const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
};

shuffle(arrRandom);
console.log(arrRandom);

// task 11
let vasyaFour = { name: "Вася", age: 25 };
let petyaFour = { name: "Петя", age: 30 };
let mashaFour = { name: "Маша", age: 29 };

let arrUsers = [vasyaFour, petyaFour, mashaFour];

const getAverageAge = (users) => {
  const sumAges = users.reduce((acc, user) => {
    acc += user.age;
    return acc;
  }, 0);
  return sumAges / users.length;
};

getAverageAge(arrUsers);

// task 12
function unique(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) === index);
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O

// task 13
let usersFromServer = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (arr) => {
  return arr.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
};

let usersById = groupById(usersFromServer);

console.log(usersById);

// Live Coding

// 1. Возвращает результат шаблона строки и заданных параметров firstName и LastName.
// * Пожалуйста, не используйте конкатенацию, используйте строку шаблона:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

console.log(getStringFromTemplate("John", "Doe")); // => 'Hello, John Doe!'
console.log(getStringFromTemplate("Chuck", "Norris")); //=> 'Hello, Chuck Norris!'

// 2. Найдите самое длинное слово в предложении. Если существует несколько самых длинных слов, функция возвращает первое встретившееся.

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  const sortedWords = words.sort((a, b) => {
    return b.length - a.length;
  });
  return sortedWords[0];
}

console.log(findLongestWord("The quick brown fox")); // => 'quick'
console.log(findLongestWord("A long and winding road")); //=> 'winding'
console.log(findLongestWord("No words here")); //=> 'words'

// 3. Возвращает количество гласных в строке.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  const strArr = str.split("");
  let counter = 0;

  vowels.find((letter) => {
    strArr.forEach((item) => {
      if (letter == item) {
        counter += 1;
      }
    });
  });
  return counter;
}

console.log(countVowels("apple")); //=> 2
console.log(countVowels("banana")); //=> 3
console.log(countVowels("cherry")); //=> 2
console.log(countVowels("aEiOu")); //=> 5
console.log(countVowels("XYZ")); //=> 1

// 4. Возвращает строку времени в формате «мм:сс».

function formatTime(minutes, seconds) {
  if (minutes >= 0 && minutes <= 9) {
    if (seconds >= 0 && seconds <= 9) {
      return `0${minutes}:0${seconds}`;
    }
    return `0${minutes}:${seconds}`;
  }
  if (seconds >= 0 && seconds <= 9) {
    return `0${minutes}:0${seconds}`;
  }
  return `0${minutes}:${seconds}`;
}

console.log(formatTime(5, 30)); //=> "05:30"
console.log(formatTime(1, 15)); //=> "01:15"
console.log(formatTime(0, 45)); //=> "00:45"
console.log(formatTime(0, 0)); //=> "00:00"

// 5. Возвращает сумму цифр заданного числа

function getSumOfDigits(num) {
  const numArr = String(num).split("");
  return numArr.reduce((acc, item) => {
    acc += +item;
    return acc;
  }, 0);
}

console.log(getSumOfDigits(123)); // => 6   (1+2+3)
console.log(getSumOfDigits(202)); // => 4   (2+0+2)
console.log(getSumOfDigits(5)); // => 5   5

// 6. Возвращает сумму всех чисел от 1 до n.

function getSumToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSumToN(5)); //  => 15 (1+2+3+4+5)
console.log(getSumToN(10)); // => 55  (1+2+3+...+10)
console.log(getSumToN(1)); //  => 1

// 7. Возвращает число, округленное до указанной степени 10.

function roundToPowerOfTen(num, pow) {
  return Math.round(num / 10 ** pow) * 10 ** pow;
}

console.log(roundToPowerOfTen(1234, 0)); // => 1234
console.log(roundToPowerOfTen(1234, 1)); //=> 1230
console.log(roundToPowerOfTen(1234, 2)); //=> 1200
console.log(roundToPowerOfTen(1234, 3)); //=> 1000
console.log(roundToPowerOfTen(1678, 0)); //=> 1678
console.log(roundToPowerOfTen(1678, 1)); //=> 1680
console.log(roundToPowerOfTen(1678, 2)); // => 1700
console.log(roundToPowerOfTen(1678, 3)); // => 2000
