/*

Уравнение с корнем


a, b, c – данные целые числа: найдите все решения или сообщите, что решений в целых числах нет.

Формат ввода
Вводятся три числа a, b и c по одному в строке.

Формат вывода
Программа должна вывести все решения уравнения в порядке возрастания, либо NO SOLUTION (заглавными буквами), если решений нет. Если решений бесконечно много, вывести MANY SOLUTIONS.

Пример 1
Ввод

1
0
0
Вывод

0
Пример 2
Ввод

1
2
3
Вывод

7
Пример 3
Ввод

1
2
-3
Вывод

NO SOLUTION
*/

// ввод с 3 строками

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
  if (lines.length === 3) {
    let [a, b, c] = lines.map(Number);
    // console.log(a, b, c);
    let res;

    if (c < 0) {
      res = 'NO SOLUTION';
    } else if (a === 0) {
      if (c * c === b) {
        res = 'MANY SOLUTIONS';
      } else {
        res = 'NO SOLUTION';
      }
    } else {
      let x = (c * c - b) / a;
      if (Math.trunc(x) === x) {
        res = x;
      } else {
        res = 'NO SOLUTION';
      }
    }

    console.log(res);
  }
});
