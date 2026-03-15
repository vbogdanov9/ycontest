// пробую повторить вариант из решения

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
    let [p, v] = lines[0].split(' ').map(Number);
    let [q, m] = lines[1].split(' ').map(Number);

    let minv = p - v,
      maxv = p + v,
      minm = q - m,
      maxm = q + m;
    if (Math.max(minv, minm) <= Math.min(maxv, maxm)) {
      console.log(Math.max(maxv, maxm) - Math.min(minv, minm) + 1);
    } else {
      console.log(maxv - minv + 1 + (maxm - minm + 1));
    }
  }
});
