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
      // первая компания самая маленькая и она проигрывает, начинаем проверять со второй
      resultArray = Array(arrayLength).fill(0);
      for (let i = 1; i <= arrayLength - 1; i++) {
        // console.log(a, a[i]);
        // проверяем способен ли i-тый элемент поглотить все остальные

        // если элемент равен первому то никого поглотить не способен
        if (numbersArray[i] === firstElement) {
          continue;
        }

        // если элемент больше первого, пробуем поглотить все начиная с первого
        else {
          //создаем массив элементы которого будем поглощать , без искомого элемента
          let testArray = [
            ...numbersArray.slice(0, i),
            ...numbersArray.slice(i + 1),
          ];

          let currentValue = numbersArray[i];

          // идем по массиву начиная с первого элемента пытаясь их поглотить
          for (let j = 0; j <= testArray.length - 1; j++) {
            if (currentValue > testArray[j]) {
              // можем поглотить текущий элемент
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

      // конец блока проверки слусая не относящегося к граничным
    }

    // вывод

    resultArray.fill(1, successResultIndex);
    resultArray.map((result) => console.log(result));
    rl.close(); // Закрываем интерфейс после прочтения
  }
});
