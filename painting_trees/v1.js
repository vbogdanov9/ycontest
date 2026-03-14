// const fs = require('fs');

// // Асинхронное чтение файла
// fs.readFile('input.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Ошибка при чтении файла:', err);
//     return;
//   }

//   console.log(`Содержимое файла:\n${data}`);
// });

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

    // инициализируем результат
    let result = 0;

    // растояние между центрами
    const Distance = Math.abs(P - Q);

    //сумма радиусов
    const rSum = V + M;

    // разница расстояние - сумма радиусов
    const Diff = Distance - rSum;

    //количество деревьев для васи
    let sum1 = V * 2 + 1;
    //для маши
    let sum2 = M * 2 + 1;

    //количество при отсутствии пересечений
    const maxSum = sum1 + sum2;

    console.log(
      `Вася\nдерево P = ${P} , удаляется на V = ${V} метров, красит sum1 = ${sum1} деревьев`
    );
    console.log(
      `Маша\nдерево Q = ${Q}  , удаляется M = ${M} метров, красит sum2 = ${sum2} деревьев`
    );

    console.log(
      `растояние между центрами Distance = Math.abs(P - Q) = ${Distance}`
    );

    console.log(`сумма радиусов rSum = V + M = ${rSum}`);

    console.log(
      `разница расстояние - сумма радиусов Diff = Distance - rSum = ${Diff}`
    );

    console.log(
      `количество при отсутствии пересечений maxSum =  sum1 + sum2 = ${maxSum}`
    );

    // а если просто добавим в массив, и потом будем добавлять второй массив

    //масив для васи
    //номер первого дерева
    const firstVasyas = P - V;
    console.log(
      `номер первого дерева для васи firstVasyas = P-V; = ${firstVasyas}`
    );

    let treeNumber = firstVasyas;
    let Trees1 = [];

    // добавляем деревья в массив
    for (let i = 1; i <= sum1; i++) {
      Trees1.push(treeNumber++);
    }
    console.log(`массив Васи = ${Trees1}`);

    //массив для маши
    //первый элемент маши
    const firstMashas = Q - M;
    console.log(
      `номер первого дерева для маши firstMashas = Q-M; = ${firstMashas}`
    );
    let Trees2 = [];

    treeNumber = firstMashas;

    // добавляем деревья в массив Маши
    for (let i = 1; i <= sum2; i++) {
      Trees2.push(treeNumber++);
    }
    console.log(`массив Маши = ${Trees2}`);

    //Объединяем массивы

    const Trees = [...new Set([...Trees1, ...Trees2])];

    console.log(
      `Объединенный массив Trees = ${Trees} , его длина = ${Trees.length}`
    );

    // рассмотрим разные случаи

    // последний элемент маши < первого васи тогда результат - простая сумма
    const lastMashas = Q + M;
    console.log(`последнее дерево для маши ${lastMashas}`);

    if (lastMashas < firstVasyas) {
      result = sum1 + sum2;
    }
  }
});

// разница расстояний >=1 решение - простая сумма

// Пример: от 1 до 10

// растояние между центрами

/*
// рассмотрим разные случаи
let Distance1;
let Distance2;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (i = 1; i < 30; i++) {
  P = getRandomInt(-10000, 10000);
  Q = getRandomInt(-10000, 10000);
  Distance1 = Math.abs(P - Q);
  Distance2 = Math.abs(Q - P);
  console.log(
    `Distance1 === Distance2 = ${
      Distance1 === Distance2
    }  ,  P = ${P}  , Q = ${Q} , Distance1 = Math.abs(P - Q) = ${Distance1} , , Distance2 = Math.abs(Q-P) = ${Distance2}`
  );
}

*/
