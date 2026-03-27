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

rl.on('line', (line) => {
  lines.push(line.split(' ').map(Number));
  if (lines.length === 1) {
    N = Number(lines[0]);
  }

  if (lines.length === N + 1) {
    for (let i = 1; i <= N; i++) {
      let coords = lines[i];
      let points = [];
      for (let j = 0; j <= 7; j += 2) {
        points.push([coords[j], coords[j + 1]]);
      }
      points.sort((a, b) => a[0] - b[0]);
      points.sort((a, b) => a[1] - b[1]);
      let res = check(points);
      console.log(res);
    }
  }
});
