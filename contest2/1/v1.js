/*

Ахаха


Вася пишет бота на основе LLM для знакомства с девушками. Бот будет посылать девушке мем, а в ответ девушка, по идее, должна смеяться. Для повышения качества работы бота необходимо организовать обучение с подкреплением. Для этого нужно оценить самую длинную последовательность из смеха над мемом.

Вася считает, что смех — это последовательность чередующихся букв "a" и "h". Так например, "ahahaha", "hah" и "a" являются смехом, а "abacaba" и "hh" — нет.

Необходимо выделить из строки-ответа девушки самую длинную подстроку, которая является смехом, и вывести ее длину.

Формат ввода
В первой строке находится одно натуральное число
n — длина строки с ответом девушки.

Во второй строке находится строка из строчных латинских букв длины

n
n — ответ девушки.

Формат вывода
Выведите одно число — наибольшую длину смеха в разговоре.


https://new.contest.yandex.ru/contests/89534/problems?id=30404%2F2026_03_01%2FlSDcPWTDzA

*/

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

let lines = [];

rl.on('line', (line) => {
  // lines.push(line.split(/\s+/).map(Number));
  // lines.push(line.split(/\s+/));
  lines.push(line);

  if (lines.length === 2) {
    lines[0] = Number(lines[0]);

    let letters = lines[1].split('');

    let current = [];
    let max = [];

    letters.forEach((letter) => {
      if (letter === 'a') {
        // console.log(`letter, current, max = `);
        // console.log(letter, current, max);
        if (current.length === 0) {
          current.push(letter);
          // console.log(current, max);
        } else {
          if (current.at(-1) === 'h') {
            current.push(letter);
          } else {
            if (current.length > max.length) {
              max = current.slice();
            }
            current = [];
            current.push(letter);
          }
        }
      } else if (letter === 'h') {
        // console.log(`letter, current, max = `);
        // console.log(letter, current, max);
        if (current.length === 0) {
          current.push(letter);
        } else {
          if (current.at(-1) === 'a') {
            current.push(letter);
          } else {
            if (current.length > max.length) {
              max = current.slice();
            }
            current = [];
            current.push(letter);
          }
        }
      } else {
        // console.log(`letter, current, max = `);
        // console.log(letter, current, max);
        if (current.length > max.length) {
          max = current.slice();
        }
        current = [];
      }
    });
    if (current.length > max.length) {
      max = current.slice();
    }
    // console.log(letters);
    // console.log(max);
    // console.log(current);
    console.log(max.length);
  }
});
