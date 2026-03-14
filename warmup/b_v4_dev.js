const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

// тестирование
lines = ['4', '1 1 1 1'];
// lines = ['5', '1 1 1 1 2'];
// lines = ['10', '1 1 1 1 2 2 2 2 2 20'];
// lines = ['10', '1 1 1 1 2 20 20 20 20 20'];

rl.on('line', (input) => {
  // Добавляем строку в массив
  // lines.push(input);

  if (lines.length === 2) {
    let N = lines[0];
    let Ai_s = lines[1];
    let a = Ai_s.split(' ');
    let arrayLength = a.length;
    let numbersArray = a.map((element) => parseInt(element));
    const firstElement = numbersArray.at(0);
    let losingElements = [firstElement];
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
      console.log(`resultArray = ${resultArray}`);
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

        //если сумма получилась больше чем последниц элемент, то оставшиеся элементы заолняем этой суммой
        if (currentSum > lastElement) {
          console.log(
            `сумма ${currentSum} получилась больше чем последний  элемент ${lastElement}, оставшиеся элементы заполняем этой суммой и выходим из цикла`
          );

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

      //последний элемент всегда единица единица
      compareArray[arrayLength - 1] = 1;

      for (let i = arrayLength - 2; i >= 0; i--) {
        if (sumsArray[i] > numbersArray[i + 1]) {
          compareArray[i] = 1;
        }
      }

      let lastIndexOfZero = compareArray.lastIndexOf(0);
      successResultIndex = lastIndexOfZero + 1;
      resultArray.fill(1, successResultIndex);

      console.log(`numbersArray = ${numbersArray}`);
      console.log(`sumsArray = ${sumsArray}`);
      console.log(`compareArray = ${compareArray}`);
      console.log(`lastIndexOfZero = ${lastIndexOfZero}`);

      // конец блока проверки случая не относящегося к граничным
    }

    // вывод

    resultArray.map((result) => console.log(result));
    rl.close(); // Закрываем интерфейс после прочтения
  }
});
