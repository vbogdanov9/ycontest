/*
Параллелограмм
https://new.contest.yandex.ru/contests/89515/problems?id=30404%2F2021_08_19%2FQ28VmrWEnn

*/

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

let lines = [];

function check(pack) {
  // console.log(pack);
  let flag = true;
  for (index = 0; index < 2; index++) {
    flag =
      flag &&
      pack[1][index] - pack[0][index] === pack[3][index] - pack[2][index];
  }
  if (flag) {
    return 'YES';
  } else {
    return 'NO';
  }
}

function check2(pack) {
  console.log(pack);
  let [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = pack;
  console.log(x0, y0, x1, y1, x2, y2, x3, y3);
  let res = 'NO';
  if (x1 - x0 === x3 - x2) {
    console.log(`x1-x0===x3-x2`);
    if (y1 - y0 === y3 - y2) {
      console.log('y1 - y0 === y3 - y2');
      if (x2 - x0 === x3 - x1) {
        console.log('x2 - x0 === x3 - x1');
        if (y2 - y0 === y3 - y1) {
          console.log('y2 - y0 === y3 - y1');
          res = 'YES';
        }
      }
    }
  }
  return res;
}

rl.on('line', (line) => {
  lines.push(line.trim().replace(/\s+/g, ' ').split(' ').map(Number));
  if (lines.length === 1) {
    N = Number(lines[0]);
  }

  if (lines.length === N + 1) {
    console.log(lines);
    for (let i = 1; i <= N; i++) {
      let coords = lines[i];
      let points = [];
      for (let j = 0; j <= 7; j += 2) {
        points.push([coords[j], coords[j + 1]]);
      }

      points.sort((a, b) => a[1] - b[1]);
      points.sort((a, b) => a[0] - b[0]);
      let res = check2(points);
      console.log(res);
      // if (res === 'NO') {
      //   console.log(...lines[i]);
      // }
    }
  }
});
