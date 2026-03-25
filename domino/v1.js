// это вылетело по времени'

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
      // console.log(linearr);
    }
    underline = new Array(n + 2).fill('#');
    arr.push(underline);
    // console.log(arr);
    // console.log(arr[0][0]);
    // console.log(arr[0][2]);
    // console.log(arr[1][0]);

    // массив с положениями доминошек
    // положение доминошки массив, положение одного конца [i1,j1] и положение другого конца [i2,j2], [[i1,j1][i2,j2]]
    let resarr = [];

    // проходим по массиву пробуем вставить доминошки
    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        if (arr[i][j] === '.') {
          let side1 = [i, j];
          // проверяем клетку снизу
          if (arr[i + 1][j] === '.') {
            let side2 = [i + 1, j];
            let sides = [side1, side2];
            // console.log(i, j);
            // console.log(arr[i][j]);
            // console.log(`клетка снизу arr[${i + 1}][${j}] свободна`);
            //вставляем доминошку

            resarr.push(sides);
            //помечаем клетки как занятые
            // arr[i][j] = '#';
            // arr[i + 1][j] = '#';
            // break;
          }

          // проверяем клетки справа
          if (arr[i][j + 1] === '.') {
            let side2 = [i, j + 1];
            let sides = [side1, side2];
            // console.log(i, j);
            // console.log(`клетка справа arr[${i + 1}][${j}] свободна`);
            //вставляем доминошку

            resarr.push(sides);
            //помечаем клетки как занятые
            // arr[i][j] = '#';
            // arr[i + 1][j] = '#';
            // break;
          }
        }
      }
    }
    // console.log(arr);
    // console.log(resarr);
    console.log(resarr.length);
  }
});
