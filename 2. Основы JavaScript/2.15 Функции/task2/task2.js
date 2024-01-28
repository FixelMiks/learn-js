function checkAge(age) {
  age > 18 ? true : confirm("Родители разрешили?");
}

// function checkAge(age) {
//   age > 18 || confirm("Родители разрешили?");
// }

checkAge(19);
