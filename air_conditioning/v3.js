/*

пробую задачу кондиционер
Формат ввода
Первая строка входного файла содержит два целых числа troom, и tcond, разделенных ровно одним пробелом

Вторая строка содержит одно слово, записанное строчными буквами латинского алфавита — режим работы кондиционера.

Формат вывода
Выходной файл должен содержать одно целое число — температуру, которая установится в комнате через час.

Пример 1
Ввод

10 20
heat

Вывод
20
*/

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);

  if (lines.length === 2) {
    // исходные данные
    // console.log(lines);
    let [troom, tcond] = lines[0].split(' ').map(Number);
    // console.log(troom, tcond);
    let mode = lines[1];
    // console.log(mode);

    switch (mode) {
      case 'freeze': {
        troom = troom > tcond ? tcond : troom;
        break;
      }
      case 'heat': {
        troom = troom < tcond ? tcond : troom;
        break;
      }
      case 'auto': {
        troom = tcond;
        break;
      }
      case 'fan': {
        break;
      }
      default: {
        console.log('unknown mode');
      }
    }
    console.log(troom);
  }
});
