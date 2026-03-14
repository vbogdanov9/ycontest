const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', (input) => {
  lines.push(input); // Добавляем строку в массив

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
    }

    // если больше 1 компании и они не одинаковые проверяем поглощение
    else {
      // инициирцем и заполняем результат нулями
      resultArray = Array(arrayLength).fill(0);

      // первая компания самая маленькая и она проигрывает, начинаем проверять со второй, способен ли i-тый элемент поглотить все остальные
      for (let i = 1; i <= arrayLength - 1; i++) {
        // если элемент равен такому который уже не смог поглотть все остальные, то он тоже не способен поглотить все
        if (losingElements.includes(numbersArray[i])) {
          continue;
        }
        //если элемент равен последнему он побеждает
        else if (numbersArray[i] === lastElement) {
          // фиксируем индекс компании  которой удалось поглотить все остальные
          successResultIndex = i;

          break;
        }
        // если еще не проверяли, пробуем поглотить все начиная с первого
        else {
          //создаем массив элементы которого будем поглощать , без искомого элемента
          let testArray = [
            ...numbersArray.slice(0, i),
            ...numbersArray.slice(i + 1),
          ];

          let currentValue = numbersArray[i];

          // идем по массиву начиная с первого элемента пытаясь их поглотить
          for (let j = 0; j <= testArray.length - 1; j++) {
            // можем поглотить текущий элемент
            if (currentValue > testArray[j]) {
              currentValue += testArray[j];

              // если в какой то момент наша сумма больше чем сумма последнего элемента, значит элемент способен поглотить все остальные
              if (currentValue > lastElement) {
                // фиксируем индекс на котором удалось поглотить все остальные
                successResultIndex = i;

                //выходим из цикла проверки поглощений
                break;
              }
            }

            // не можем поглотить текущий елемент, значит не можем поглотить и следующие за ним, выходим из цикла поглощений
            else {
              // запоминаем элемент который не смогли поглотить

              losingElements.push(numbersArray[i]);

              break;
            }
          }
          // конец попытки поглощений

          // если найден элемент способный поглотить остальные то все что за ним тоже способны поглотить остальные выходим из цикла проверки элементов
          if (successResultIndex) {
            break;
          }
          // конец блока проверки элемента если он  больше первого
        }
        //конец цикла проверки элементов
      }

      resultArray.fill(1, successResultIndex);
      // конец блока проверки случая не относящегося к граничным
    }

    // вывод
    resultArray.map((result) => console.log(result));
    rl.close(); // Закрываем интерфейс после прочтения
  }
});
