// tasks 5.9
// task 1
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (salaries) => {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
};

console.log(sumSalaries(salaries));

// task 2
function count(obj) {
  return Object.keys(obj).length;
}

// tasks 5.10
// task 1
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

// task 2
let salaries2 = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (salaries) => {
  let maxEmpl = null;
  let max = 0;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxEmpl = name;
    }
  }

  return maxEmpl;
};

// tasks 5.11
// task 1
let date = new Date(2012, 1, 20, 3, 12);

alert(date);

// task 2
const getWeekDay = (date) => {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
};

let date2 = new Date(2012, 0, 3);

console.log(getWeekDay(date2));

// task 3
const getLocalDay = (date) => {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
};

let date3 = new Date(2012, 0, 3);

// task 4
const getDateAgo = (date, days) => {
  date.setDate(date.getDate() - days);
  return date.getDate();
};

let date4 = new Date(2015, 0, 2);

// tasks 5.12
// task 1
let user3 = {
  name: "Василий Иванович",
  age: 35,
};

let user4 = JSON.parse(JSON.stringify(user3));

// task 2
let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
