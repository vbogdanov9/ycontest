// алгоритмический вариант

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
    let [P, V] = lines[0].split(' ').map(Number);
    let [Q, M] = lines[1].split(' ').map(Number);

    //количество деревьев для васи
    let sum1 = V * 2 + 1;
    //для маши
    let sum2 = M * 2 + 1;
    //общее количество при отсутствии пересечений
    const maxSum = sum1 + sum2;

    // растояние между центрами
    const Distance = Math.abs(P - Q);

    //сумма радиусов
    const rSum = V + M;

    // пересечение
    let Diff = rSum - Distance + 1;
    Diff = Diff > 0 ? Diff : 0;

    // результат
    let result = maxSum - Diff;
    console.log(result);
  }
});
