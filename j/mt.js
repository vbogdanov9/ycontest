// делаю тест

const min = -10;
const max = 10;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let x0, y0, x1, y1, x2, y2, x3, y3, dx1, dy1, dx2, dy2, res;

for (i = 0; i < 5; i++) {
  x0 = randomInt(min, max);
  y0 = randomInt(min, max);
  dx1 = randomInt(min, max);
  dy1 = randomInt(min, max);
  dx2 = randomInt(min, max);
  dy2 = randomInt(min, max);
  x1 = x0 + dx1;
  y1 = y0 + dy1;
  x3 = x0 + dx2;
  y3 = y0 + dy2;
  x2 = x1 + dx2;
  y2 = y1 + dy2;
  res = [
    [x0, y0],
    [x1, y1],
    [x2, y2],
    [x3, y3],
  ];

//перемешиваем точкки
  for (let i = 3; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Случайный индекс от 0 до i
    [res[i], res[j]] = [res[j], res[i]]; // Деструктуризация (меняем местами)
  }

  console.log(
    res[0][0],
    res[0][1],
    res[1][0],
    res[1][1],
    res[2][0],
    res[2][1],
    res[3][0],
    res[3][1]
  );
}
