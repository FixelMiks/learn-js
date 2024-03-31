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
