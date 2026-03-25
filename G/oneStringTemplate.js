// шаблон ввода с одной строкой

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

rl.on('line', (line) => {
  let input = line.split(' ').map(Number);
  console.log(input);
});
