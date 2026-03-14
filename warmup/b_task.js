///   здесь неудачная работа с попыткой сохранить суммы, алгоритм некорректный, откать к пердыдущей рабочей версии  b_v2, нужно переписать ээто на рабочую версию..

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
lines = ['4', '1 1 3 4'];
lines = ['5', '1 1 1 1 2'];
lines = ['10', '1 1 1 1 2 2 3 4 5 20'];

rl.on('line', (input) => {
  // lines.push(input); // Добавляем строку в массив

  // console.log(`Прочитана строка: ${input}`);
  // console.log('lines = ', lines);

  /*
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    const n = parseInt(input);
    console.log(n);
    */

  if (lines.length === 2) {
    let N = lines[0];
    console.log('N = ', N);

    let Ai_s = lines[1];
    let a = Ai_s.split(' ');

    let arrayLength = a.length;
    let numbersArray = a.map((element) => parseInt(element));

    console.log('arrayLength = ', arrayLength);
    console.log('numbersArray = ', numbersArray);

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
      resultArray = Array(arrayLength).fill(0);
      let currentValue = 0;
      let successIndex = -1;
      // первая компания самая маленькая и она проигрывает, начинаем проверять со второй

      for (let i = 1; i <= arrayLength - 1; i++) {
        // проверяем способен ли i-тый элемент поглотить все остальные

        // если элемент равен такому который не смог поглотть все остальные, то он тоже не способен поглоить все

        if (losingElements.includes(numbersArray[i])) {
          continue;
        }
        //если элемент равен последнему он побеждает
        // else if (numbersArray[i] === lastElement) {
        //   // фиксируем индекс на котором удалось поглотить все остальные
        //   successResultIndex = i;

        //   //выходим из цикла проверки поглощений
        //   console.log(`выходим из цикла проверки поглощений`);
        //   break;
        // }
        // если элемент больше первого, пробуем поглотить все начиная с первого
        else if (i > successIndex + 1) {
          console.log(`проверяем numbersArray[${i}] = ${numbersArray[i]}
            currentValue = ${currentValue}
             losingElements = ${losingElements}
  successIndex=  ${successIndex}`);
          //создаем массив элементы которого будем поглощать , без искомого элемента
          let testArray = [
            ...numbersArray.slice(0, i),
            ...numbersArray.slice(i + 1),
          ];
          console.log('testArray = ', testArray);
          if (successIndex < 0) {
            currentValue = numbersArray[i];
          }

          console.log(`до поглощния:
              i= ${i}, numbersArray[i] = ${numbersArray[i]}, successIndex= ${successIndex}, currentValue = ${currentValue}`);

          // идем по массиву начиная с первого элемента пытаясь их поглотить
          for (let j = successIndex + 1; j <= testArray.length - 1; j++) {
            if (currentValue > testArray[j]) {
              // можем поглотить текущий элемент
              currentValue += testArray[j];

              console.log(`успешное поглощение:
                i= ${i}, numbersArray[i] = ${numbersArray[i]}, j= ${j}, currentValue = ${currentValue}`);

              // если в какой то момент наша сумма больше чем сумма последнего элемента, значит элемент способен поглотить все остальные
              if (currentValue > lastElement) {
                console.log(
                  `элемент ${numbersArray[i]}  с индексом ${i} поглощениями набрал вес ${currentValue} и способен поглотить все остальные`
                );

                // фиксируем индекс на котором удалось поглотить все остальные
                successResultIndex = i;

                //выходим из цикла проверки поглощений
                console.log(`выходим из цикла проверки поглощений`);
                break;
              }
            }

            // не можем поглотить текущий елемент, значит не можем поглотить и следующие за ним, выходим из цикла поглощений
            else {
              // запоминаем элемент который не смогли поглотить

              losingElements.push(numbersArray[i]);
              successIndex = j - 1;
              console.log(
                `не можем поглотить текущий елемент numbersArray[${i}] = ${
                  numbersArray[i]
                }, currentValue = ${currentValue} значит не можем поглотить и следующие за ним, losingElements = ${losingElements}
  выходим из цикла поглощений,  successIndex=  ${j - 1}`
              );
              break;
            }
          }
          // конец попытки поглощений

          // если найден элемент способный поглотить остальные то все что за ним тоже способны поглотить остальные выходим из цикла проверки элементов
          if (successResultIndex) {
            console.log(
              `если найден элемент способный поглотить остальные то все что за ним тоже способны поглотить остальные выходим из цикла проверки элементов`
            );
            break;
          }
          // конец блока проверки элемента если он  больше первого
        }
        //конец цикла проверки элементов
      }

      resultArray.fill(1, successResultIndex);
      console.log(`resultArray = ${resultArray}`);
      // конец блока проверки слусая не относящегося к граничным
    }

    // let lastIndex = arrayLength - 1;
    // let lastElement = parseInt(a[lastIndex]);

    // let maxResultIndex;
    // resultArray.fill(1, maxResultIndex, arrayLength);

    // console.log('resultArray = ', resultArray);

    // вывод
    console.log('результат:');
    resultArray.map((result) => console.log(result));
    rl.close(); // Закрываем интерфейс после прочтения
  }
});

// let i;
// let currentWinnerCapitalization;
// let currentWinnerIndex;
// let currentCapitalization;
// let currentWins;

// console.log('lines = ', lines);

// console.log('Ai_s = ', Ai_s);
// console.log('a = ', a);
// console.log('lastElement = ', lastElement);

// let currentArray = [...a];
// let newArray;

// let currentElementIndex;
// let nextElementIndex;
// let currentIndex;

//начинаем с последнего элемента,
// for (i = lastIndex; i >= 0; i--) {
//   currentElementIndex = i;
//   nextElementIndex = i - 1;

//   console.log('currentArray = ', currentArray);
// console.log('currentElement = ', currentElement);
// console.log('currentElementIndex = ', currentElementIndex);
// console.log('nextElementIndex = ', nextElementIndex);
// console.log('maxResultIndex = ', maxResultIndex);

//   if (currentArray[currentElementIndex] > currentArray[nextElementIndex]) {
//     newElement =
//       parseInt(currentArray[currentElementIndex]) +
//       parseInt(currentArray[nextElementIndex]);
//     console.log('newElement = ', newElement);
//     if (newElement > lastElement) {
//       maxResultIndex = currentElementIndex;
//       console.log('maxResultIndex = ', maxResultIndex);
//       continue;
//     } else {
//       let newArray1 = currentArray.slice(0, nextElementIndex);
//       let newArray2 = currentArray.slice(
//         nextElementIndex + 1,
//         currentElementIndex
//       );
//       let newArray = newArray1.concat(newArray2).concat(newElement);

//       console.log('newArray = ', newArray);

//       //произвести поглощение
//     }
//   }
// }

//получаем оставшийся массив
// let restArr = a.slice(0, -1); // [1, 2, 3]

// console.log('restArr = ', restArr);

//проверить что у нас последний элемент больше максимального из оставшихся, тогдак он способен поглотить, результат 1, еслине больше (равно), тогда пробуем поглотить первый элемент, сравниваем с первым, если текущий больше, то текущий элемент это сумма первого и текущего, если поглотить не можем (все равно) тогда этому элементу в результат ноль и всем кто меньше - тоже ноль.., если поглотили то новый массив этотекущий массив без первого элемента и с текущим элементомравным сумметекуущего и первого, сравниваем с макисмальным если больше макисмального, в резуьтат единицу, если не больше, пробуем текущим элеменотм поглощение воставшемся массиве (тут рекурсия уже?)

// если текущая капитализация больше максимальной в оставшемся массиве, то данный элемент способен выиграть, прекращаем переходим к следующему в исходном массиве, если нет пробуем поглотить следующий элемент

// for (let i = 0; i <= aLength - 2; i++) {
//   // сравниваем текущий элемент с минимальным из оставшегося массива, если текущий меньше или равен минимальному в результат оставляем ноль переходим к следующему
//   const restArr = a.slice(i + 1);
//   const restMin = restArr.reduce((a, b) => Math.min(a, b));
//   console.log(
//     'i = ',
//     i,
//     '     restArr = ',
//     restArr,
//     '     restMin = ',
//     restMin
//   );
// }

// function tryMerge(array, cap, originalIndex) {

//   array.map(el, ind, ar => {
//     if
//     if (cap>el) {
// cap +=el;

//   }})

// }

//     for (let i = a.length - 1; i >= 0; i--) {
//       if (a[i] > a[i - 1]) {
//         console.log('a[i] = ', a[i]);
//         console.log('a[i-1] = ', a[i - 1]);

//         currentCapitalization = a[i - 1] + a[i];

//         currentWins =
//           currentCapitalization > currentWinnerCapitalization ||
//           currentWinnerCapitalization === undefined;
//         if (currentWins) {
//           currentWinnerCapitalization = a[i];
//           currentWinnerIndex = i;
//         }
//       }
//       // console.log('a[i] = ', a[i]);
//     }
