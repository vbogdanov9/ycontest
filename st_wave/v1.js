/*

Стоячая волна

https://new.contest.yandex.ru/contests/89533/problems?id=30404%2F2026_03_01%2FP9YvSLqof7


перекатал из решения

*/

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line.split(/\s+/).map(Number));

  if (lines.length === 1) {
    [n, m] = lines[0];
    // console.log(n, m);
  }

  if (lines.length === n + m + 1) {
    // console.log(lines);
    let events = [];
    for (let i = 1; i <= n; i++) {
      events.push(lines[i]);
    }
    // console.log('events = ');
    // console.log(events);

    let ans = [];
    for (let i = n + 1; i <= m + n; i++) {
      let point = lines[i];
      // console.log('point = ');
      // console.log(point);
      let now = 0;
      events.forEach(([l, r, x]) => {
        if (l <= point && point <= r) {
          if ((point - l) % 2 === 0) {
            now += x;
          } else {
            now -= x;
          }
        }
      });
      ans.push(now);
    }
    // console.log(`ans = `);
    // console.log(ans);
    ans.forEach((el) => console.log(el));
  }
});
