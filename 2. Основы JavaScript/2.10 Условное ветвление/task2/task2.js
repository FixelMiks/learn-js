const officialJavaScriptName = prompt(
  "Какое «официальное» название JavaScript?"
)
  .toLowerCase()
  .trim();

if (officialJavaScriptName === "ecmascript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}
