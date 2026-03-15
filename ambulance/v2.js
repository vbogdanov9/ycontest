// вариант из решения

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  terminal: false,
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);

  if (lines.length === 1) {
    let [k1, m, k2, p2, n2] = lines[0].split(' ').map(Number);
    console.log(
      `номер искомой квартиры k1 =  ${k1},
      этажей в доме m = ${m}
      известно что квартира
      с номером k2= ${k2}
      находится в подъезде p2= ${p2}
      на этаже n2=${n2}`
    );

    // функция заполнения площадки квартирами
    function fillingTheFloor(curEntr, curFl) {
      for (
        let apartmentOnLanding = 1;
        apartmentOnLanding <= maxApartmentsOnTheLanding;
        apartmentOnLanding++
      ) {
        Bulding.push([apartmentNumber, curEntr, curFl, apartmentOnLanding]);
        if (apartmentNumber < k2) {
          apartmentNumber++;
        } else if (apartmentNumber === k2) {
          console.log(
            `apartmentNumber === k2 === ${k2} дошли до квартиры k2, прекращаем заполнение`
          );
          fillingCompleted = true;
          break;
        }
      }
    }

    // функция заполнения подъезда этажами
    function fillingTheEntrance(curEntr, maxFl) {
      for (let currentFloor = 1; currentFloor <= maxFl; currentFloor++) {
        // идем по площадке на этаже квартирам
        fillingTheFloor(curEntr, currentFloor);
        if (fillingCompleted) {
          break;
        }
      }
    }

    // подбираем количество квартир на площадке (начальное 1), увеличиваем пока не совпадет со входными данными
    let maxApartmentsOnTheLanding = 4;

    // заполняем дом подъездами и квартирами
    // каждая квартира это массив,
    // номер квартиры, номер подъезда, номер этажа, номер квартиры на этаже
    let Bulding = [];
    let lastFilledAp;

    // заполняем дом квартирами с 1 до n2
    let apartmentNumber = 1;
    let fillingCompleted = false;

    // идем по подъездам кроме последнего
    for (
      let currentEntrance = 1;
      currentEntrance <= p2 - 1;
      currentEntrance++
    ) {
      console.log(`currentEntrance  = ${currentEntrance}`);
      // идем по подъезду по этажам, до последнего,
      fillingTheEntrance(currentEntrance, m);
      if (fillingCompleted) {
        break;
      }
    }

    // идем по последнему подъезду p2 по этажам до n2
    if (!fillingCompleted) {
      fillingTheEntrance(p2, n2);
    }

    // начинаем с первого подъездда и до p2- 1, в подъезде p2 неизвестно до какого этажа идти
    console.log(
      `анализируем заполнение, Bulding =\n[номер квартиры, номер подъезда, номер этажа, номер квартиры на этаже]`
    );
    console.log(Bulding);
    lastFilledAp = Bulding.at(-1);
    console.log(`последняя квартира lastFilledAp =  ${Bulding.at(-1)}`);

    // проверка что заполнили все квартиры
    if (fillingCompleted) {
      console.log(`заполнили все квартиры до k2 = ${k2}`);

      //проверка совпадения с исходными данными
      // проверка номера последней заполненой квартиры
      if (lastFilledAp[0] === k2) {
        console.log(`номер кв. совпадает: lastFilledAp[0] === k2 = ${k2}`);
        // проверка подъезда
        if (lastFilledAp[1] === p2) {
          console.log(
            `номер подъезда совпадает: ${lastFilledAp[1]} === p2 = ${p2}`
          );

          // проверка номера этажа
          if (lastFilledAp[2] === n2) {
            console.log(
              `номер этажа совпадает: ${lastFilledAp[2]} === n2 = ${n2}\nсовпадения добились при количестве квартир на этаже maxApartmentsOnTheLanding = ${maxApartmentsOnTheLanding};`
            );
          } else {
            console.log(
              `номер этажа НЕ совпадает: ${lastFilledAp[2]} !== n2 = ${n2}`
            );
          }
        } else {
          console.log(
            `номер подъезда НЕ совпадает: ${lastFilledAp[1]} !==  ${p2}`
          );
        }
      } else {
        console.log(
          `номер кв. НЕ совпадает: (lastFilledAp[0] = ${lastFilledAp[0]}) !== (k2 = ${k2})`
        );
      }
    } else {
      console.log(`НЕ дошли до квартиры номер k2 = ${k2}`);
    }
  }
});
