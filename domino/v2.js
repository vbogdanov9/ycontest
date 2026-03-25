// первый вариант вылетал по времени пробую этот ускорить

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

let lines = [];
//строки
let n;
// символы
let m;

rl.on('line', (line) => {
  lines.push(line);

  // let input = line.split(' ').map(Number);
  // console.log(lines);

  if (lines.length === 1) {
    [n, m] = lines[0].split(' ').map(Number);
  }

  if (lines.length === n + 1) {
    // создааем массив
    let arr = [];
    for (let i = 1; i <= n; i++) {
      let linearr = lines[i].split('');
      linearr.push('#');
      arr.push(linearr);
    }
    underline = new Array(n + 2).fill('#');
    arr.push(underline);

    let res = 0;

    // проходим по массиву пробуем вставить доминошки
    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        if (arr[i][j] === '.') {
          // проверяем клетку снизу
          if (arr[i + 1][j] === '.') {
            res++;
          }

          // проверяем клетки справа
          if (arr[i][j + 1] === '.') {
            res++;
          }
        }
      }
    }
    // console.log(arr);
    // console.log(resarr);
    console.log(res);
  }
});
