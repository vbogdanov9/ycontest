// решение из разбора не понял

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// случайное количество тестов от 1 до 20
let N = getRandomInt(1, 20);
console.log(N);
// режимы работы
const modes = ['freeze', 'heat', 'auto', 'fan'];

for (let i = 1; i <= N; i++) {
  let tRoom = getRandomInt(-50, 50);
  let tCond = getRandomInt(-50, 50);
  let mode = modes[getRandomInt(0, 3)];
  // console.log(`Исходно: ${tRoom} ${tCond} ${mode}`);

  if (mode === 'auto') {
    tRoom = tCond;
  } else if (mode === 'fan') {
  } else if (mode === 'freeze') {
    if (tCond < tRoom) {
      tRoom = tCond;
    }
  } else if (mode === 'heat') {
    if (tCond > tRoom) {
      tRoom = tCond;
    }
  }
  console.log(`${tRoom} ${tCond} ${mode}`);
}
