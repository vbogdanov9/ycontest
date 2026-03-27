/*
Майки и носки
https://new.contest.yandex.ru/contests/89515/

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
  if (lines.length === 4) {
    let [a, b, c, d] = lines.map(Number);
    // console.log(a, b, c, d);
    let ans = [];
    if (a > 0 && c > 0) {
      ans.push([b + 1, d + 1]);
    }
    if (b > 0 && d > 0) {
      ans.push([a + 1, c + 1]);
    }
    if (a > 0 && b > 0) {
      ans.push([Math.max(a, b) + 1, 1]);
    }
    if (c > 0 && d > 0) {
      ans.push([1, Math.max(c, d) + 1]);
    }

    // console.log(ans);
    // let sums = ans.map(([a, b]) => a + b);
    // console.log(sums);
    let res = ans.reduce(([a0, b0], [a, b]) =>
      a + b < a0 + b0 ? [a, b] : [a0, b0]
    );
    console.log(...res);
  }
});
