// Требуется объяснения

outer: for (let i = 2; i < 10; i++) {
  console.log(`Цикл 1 - ${i}`);
  for (let j = 2; j < i; j++) {
    console.log(`Цикл 2 - ${j} `);
    if (i % j == 0) continue outer;
  }
  alert(i);
  console.log(i);
}
