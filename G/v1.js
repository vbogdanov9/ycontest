// вариант из разбора, зачтено

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

rl.on('line', (line) => {
  let d = line.split(' ').map(Number);
  let len_d = d.length;
  let left = new Array(len_d).fill(0);
  let shop_pos = -20;
  for (let i = 0; i < len_d; i++) {
    if (d[i] === 2) {
      shop_pos = i;
    }
    if (d[i] === 1) {
      left[i] = i - shop_pos;
    }
  }

  let ans = 0;
  shop_pos = 30;

  for (let i = len_d - 1; i >= 0; i--) {
    if (d[i] === 2) {
      shop_pos = i;
    }
    if (d[i] === 1) {
      let min_dist = Math.min(shop_pos - i, left[i]);
      ans = Math.max(ans, min_dist);
    }
  }

  console.log(ans);
});
