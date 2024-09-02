Function.prototype.myBind = function (context, ...args) {
  const calledFn = this; // сохраняю ссылку на функцию, к которой вызывается myBind;
  return function (...newArgs) {
    // возвращаю новую функцию с дополнительными аргументами
    return calledFn.apply(context, [...args, ...newArgs]); // вызываю исходную функцию,
    // устанавливаю её this с помощью apply и передаю объединённые аргументы
  };
};

function log(text1, text2) {
  console.log(this.name, text1, text2);
}

const biba = {
  name: "biba",
};

const test = log.myBind(biba, "and");

test("boba");
