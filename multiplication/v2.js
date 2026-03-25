// рабочая верчия без вывода

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

rl.on('line', (line) => {
  let input = line.split(' ').map(Number);

  // ищем максимальный элемент
  let max1 = input[0];
  let max1Index = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] > max1) {
      max1 = input[i];
      max1Index = i;
    }
  }

  // заменим самый большой элемент любым другим
  for (let i = 0; i < input.length; i++) {
    if (i !== max1Index) {
      input[max1Index] = input[i];
      break;
    }
  }

  // ищем второй самый большой элемент
  let max2 = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] > max2) {
      max2 = input[i];
    }
  }

  // произведение двух наибольших
  let maxmult = max1 * max2;

  // вернем массив в исходное состояние
  input[max1Index] = max1;

  // ищем минимальный элемент
  let min1 = input[0];
  let min1Index = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] < min1) {
      min1 = input[i];
      min1Index = i;
    }
  }

  // заменим самый маленький элемент любым другим
  for (let i = 0; i < input.length; i++) {
    if (i !== min1Index) {
      input[min1Index] = input[i];
      break;
    }
  }

  // в измененном массиве найдем минимальный , второй минимальный в исходном
  let min2 = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] < min2) {
      min2 = input[i];
    }
  }

  // произведение двух самых маленьких
  let minmult = min1 * min2;

  //сравниваем и выводим результат
  if (maxmult >= minmult) {
    console.log(max2, max1);
  } else {
    console.log(min1, min2);
  }
});
