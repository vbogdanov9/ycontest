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

    //количество квартир в доме  = количетсво подъездов* количество этаже, количество квартир на площадке

    // количество квартир на площадке (начальное 1), вначале при заполнении дома подбираем это значение,, ричем несколько раз пытаемся найти каие подойдут
    let maxApartmentsOnTheLanding = 8;
    // полное количество квартир в подъезде
    // let maxApartmentsInEntrance = apartmentsOnTheLanding * m;

// функция з


    // заполняем дом подъездами и квартирами
    // каждая квартира это массив,
    // номер квартиры, номер подъезда, номер этажа, номер квартиры на этаже
    Bulding = [];

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
      for (let currentFloor = 1; currentFloor <= m; currentFloor++) {
        // идем по площадке на этаже квартирам
        for (
          let apartmentOnLanding = 1;
          apartmentOnLanding <= maxApartmentsOnTheLanding;
          apartmentOnLanding++
        ) {
          console.log(`apartmentNumber  = ${apartmentNumber}`);
          Bulding.push([
            apartmentNumber,
            currentEntrance,
            currentFloor,
            apartmentOnLanding,
          ]);
          console.log(Bulding);
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
        if (fillingCompleted) {
          break;
        }
      }
    }

    // идем по последнему подъезду p2 по этажам
    for (let currentFloor = 1; currentFloor <= n2; currentFloor++) {
      for (
        let apartmentOnLanding = 1;
        apartmentOnLanding <= maxApartmentsOnTheLanding;
        apartmentOnLanding++
      ) {
        console.log(
          `apartmentNumber  = ${apartmentNumber}, последняя квартира k2 = ${k2},добавляем в массив:`
        );
        console.log([apartmentNumber, p2, currentFloor, apartmentOnLanding]);

        Bulding.push([apartmentNumber, p2, currentFloor, apartmentOnLanding]);

        if (apartmentNumber < k2) {
          apartmentNumber++;
        } else if (apartmentNumber === k2) {
          console.log(
            `apartmentNumber === k2 === ${k2} дошли до квартиры k2, прекращаем запполнение`
          );
          fillingCompleted = true;
          break;
        }
      }
      if (fillingCompleted) {
        break;
      }
    }

    // начинаем с первого подъездда и до p2- 1, в подъезде p2 неизвестно до какого этажа идти
    console.log(Bulding);
  }
});
