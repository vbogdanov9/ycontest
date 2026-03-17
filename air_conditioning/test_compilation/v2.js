// генерация теста которое приняли - нужно рассмотреть все случаи

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  количество тестов
let N = 12;
console.log(N);

// режимы работы
const modes = ['freeze', 'heat', 'auto', 'fan'];

modes.forEach((mode) => {
  //получаем 2 разных температуры
  let t1, t2;
  t1 = getRandomInt(-50, 50);
  do {
    t2 = getRandomInt(-50, 50);
  } while (t1 === t2);

  // вариант когда в комнате холоднее чем в кондиционере
  if (t1 < t2) {
    console.log(`${t1} ${t2} ${mode}`);
  } else {
    console.log(`${t2} ${t1} ${mode}`);
  }

  //получаем 2 разных температуры
  t1 = getRandomInt(-50, 50);
  do {
    t2 = getRandomInt(-50, 50);
  } while (t1 === t2);
  // вариант когда в комнате теплее чем в кондиционере
  if (t1 > t2) {
    console.log(`${t1} ${t2} ${mode}`);
  } else {
    console.log(`${t2} ${t1} ${mode}`);
  }

  // вариант с одинаковой температурой
  t1 = getRandomInt(-50, 50);
  console.log(`${t1} ${t1} ${mode}`);
});
