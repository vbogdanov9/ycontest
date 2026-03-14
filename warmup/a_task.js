const readline = require('readline');

symbols1 = {
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  e: '5',
  f: '6',
  g: '7',
  h: '8',
  i: '9',
  j: '10#',
  k: '11#',
  l: '12#',
  m: '13#',
  n: '14#',
  o: '15#',
  p: '16#',
  q: '17#',
  r: '18#',
  s: '19#',
  t: '20#',
  u: '21#',
  v: '22#',
  w: '23#',
  x: '24#',
  y: '25#',
  z: '26#',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // console.log(input);
  let result = '';
  let currentSymbolValue = '';
  let currentSymbolKey = '';
  for (let i = input.length - 1; i >= 0; i--) {
    // console.log(input[i]); // Выводит: т, е, в, и, р, П
    if (input[i] === '#') {
      currentSymbolValue =
        String(input[i - 2]) + String(input[i - 1]) + String(input[i]);
      i -= 2;
    } else {
      currentSymbolValue = String(input[i]);
    }

    // console.log('i = ', i);
    // console.log('currentSymbolValue = ', currentSymbolValue);

    currentSymbolKey = Object.keys(symbols1).find(
      (k) => symbols1[k] === currentSymbolValue
    );
    // console.log('currentSymbolKey = ', currentSymbolKey);
    result = currentSymbolKey + result;
  }

  console.log(result);
  /*
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    const n = parseInt(input);
    console.log(n);
    */

  rl.close();
});


/*

Задание:

Раскодируй строку
Ограничение времени
1 с
Ограничение памяти
256.0 Мб
Ввод
стандартный ввод или input.txt
Вывод
стандартный вывод или output.txt
Вася начал изучать кодирование. В этот раз он изобрёл свой шифр, который меняет каждый символ строки по следующему правилу:

Символы с «a» по «i» отображаются в числа от «1» до «9» соответственно

Символы с «j» по «z» отображаются в числа от «10#» до «26#» соответственно

Например, строка «hello» по этому правилу будет закодирована последовательностью «8512#12#15#».

Вася научился кодировать строки. А вот с раскодированием у него проблемы. Помогите Васе раскодировать строку!

Формат ввода
В первой строке дана закодированная последовательность
s
s (
1
≤
∣
s
∣
≤
100
1≤∣s∣≤100), состоящая из цифр и символа «#».

Гарантируется, что последовательность получена кодированием какой-то исходной строки, состоящей из строчных латинских букв.

Формат вывода
Выведите единственную строку — раскодированную последовательность
s
s.

Пример 1
Ввод

1212#
Вывод

abl
Пример 2
Ввод

8512#12#15#23#15#18#12#4
Вывод

helloworld

*/