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

    //  просто добавим в массив, и потом будем добавлять второй массив

    //масив для васи
    //номер первого дерева Васи
    const firstVasyas = P - V;
    let treeNumber = firstVasyas;
    let Trees1 = [];

    // добавляем деревья в массив тВаси
    for (let i = 1; i <= sum1; i++) {
      Trees1.push(treeNumber++);
    }

    //массив для маши
    //первый элемент маши
    const firstMashas = Q - M;
    let Trees2 = [];
    treeNumber = firstMashas;

    // добавляем деревья в массив Маши
    for (let i = 1; i <= sum2; i++) {
      Trees2.push(treeNumber++);
    }

    //Объединяем массивы
    const Trees = [...new Set([...Trees1, ...Trees2])];

    // вывод
    console.log(Trees.length);
  }
});
