const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', (input) => {
  // Добавляем строку в массив
  lines.push(input);

  if (lines.length === 2) {
    let Ai_s = lines[1];
    let a = Ai_s.split(' ');
    let arrayLength = a.length;
    let numbersArray = a.map((element) => parseInt(element));
    const lastElement = numbersArray.at(-1);

    // результат
    let successResultIndex;
    let resultArray;

    // рассматриваем разные случаи

    // если  у нас 1 компания она побеждает
    if (arrayLength === 1) {
      resultArray = [1];
    }

    // если все компании одинаковые все проигрывают
    else if (numbersArray.every((val) => val === lastElement)) {
      resultArray = Array(arrayLength).fill(0);
    }

    // если больше 1 компании и они не одинаковые проверяем поглощение
    else {
      // инициирцем и заполняем результат нулями
      resultArray = Array(arrayLength).fill(0);

      // строим массив в котором содержаться суммы элементов
      let sumsArray = Array(arrayLength).fill(0);
      let currentSum = 0;
      for (let i = 0; i <= arrayLength - 1; i++) {
        currentSum += numbersArray[i];

        //если сумма получилась больше чем последний элемент, то оставшиеся элементы заполняем этой суммой
        if (currentSum > lastElement) {
          sumsArray.fill(currentSum, i);
          break;
        }

        // иначе просто добавляем в массив эту сумму
        else {
          sumsArray[i] = currentSum;
        }
      }

      //строим массив сравнений суммы со следующим элементом
      compareArray = Array(arrayLength).fill(0);

      //последний элемент всегда единица
      compareArray[arrayLength - 1] = 1;

      for (let i = arrayLength - 2; i >= 0; i--) {
        if (sumsArray[i] > numbersArray[i + 1]) {
          compareArray[i] = 1;
        }
      }

      let lastIndexOfZero = compareArray.lastIndexOf(0);
      successResultIndex = lastIndexOfZero + 1;
      resultArray.fill(1, successResultIndex);

      // конец блока проверки случая не относящегося к граничным
    }

    // вывод
    resultArray.map((result) => console.log(result));
    rl.close(); // Закрываем интерфейс после прочтения
  }
});
