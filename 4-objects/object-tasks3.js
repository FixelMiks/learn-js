/* ОТВЕТ НА ДОЛГИ
- Существует 3 основные ошибки:
SyntaxError: ошибка в синтаксисе (не поставили закрывающую скобку, точку с запятой там где не надо и т.п.);
ReferenceError: ошибка при обращении к несуществующей ссылке (переменной);
TypeError: ошибка при обращении к несуществующему свойству, при попытке изменить значение,
которое нельзя изменить, значение переменной или параметра представляют некорректный тип;

- Если создать функцию, которая будет возвращать объект, то this будет ссылаться на глобальный объект,
тем самым можно переопределить глобальные переменные, что не очень хорошо. Вот для этого и нужно ключевое слово new.
*/
const arr = [{ method: () => null }, { method: () => null }];
arr[3]?.method(); // Проверяем существует ли данный индекс; undefined

// task 5.1

let str = "Привет";

str.test = 5;

console.log(str.test); // undefined; при использовании строго режима ошибка

// learn code

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
console.log(NaN === NaN); // false

console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.3
console.log(1e500); // Infinity

// tasks 5.2

// task 1
const a = +prompt("a?", 0);
const b = +prompt("b?", 0);

alert(a + b);

// task 2

alert(Math.round(6.35 * 10) / 10);

// task 3

function readNumber() {
  let number;
  do {
    number = prompt("Введите число", 0);
  } while (!isFinite(number));

  if (number === null || number === "") {
    return null;
  } else {
    return +number;
  }
}
readNumber();

// task 4

let i = 0;
while (i != 10) {
  i += 0.2;
} // цикл бесконечный в связи с тем, что i никогда не будет равна 10, из-за прибавления дроби 0.2
