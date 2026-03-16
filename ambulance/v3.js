// добавил функции заполнения

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
      квартра k2= ${k2}
      подъезд p2= ${p2}
      на этаже n2=${n2}`
    );

    // функция заполнения площадки квартирами
    function fillingTheFloor(curEntr, curFl, apsOnFloor, Bulding) {
      console.log(`заполняем площадку с данными `);
      console.log(curEntr, curFl, apsOnFloor);
      let fillingCompleted = false;

      for (let apOnFloor = 1; apOnFloor <= apsOnFloor; apOnFloor++) {
        let lastAp = Bulding.at(-1);
        console.log(
          `последняя квартира помещенная в дом:lastAp = Bulding.at(-1)  = ${lastAp} `
        );
        let currentApNumber = lastAp[0]++;
        console.log(
          `помещаем в дом квартиру с номером currentApNumber = ${currentApNumber} `
        );
        if (currentApNumber === k2) {
          fillingCompleted = true;
        } else if (currentApNumber < k2) {
          currentApNumber++;
        }

        Bulding.push([
          currentApNumber,
          curEntr,
          curFl,
          apOnFloor,
          fillingCompleted,
        ]);
      }
      return;
    }

    // функция заполнения подъезда этажами
    function fillingTheEntrance(curEntr, maxFl, apsOnFloor, Bulding) {
      // console.log(
      //   `заполняем подъезд, данные: подъезд, макс этаж, кв на этаже, здание`
      // );
      // console.log(curEntr, maxFl, apsOnFloor, Bulding);
      for (let currentFloor = 1; currentFloor <= maxFl; currentFloor++) {
        // идем по площадке на этаже заполняем квартирами
        fillingTheFloor(curEntr, currentFloor, apsOnFloor, Bulding);
      }
      console.log(`после заполнения, данные:`);
      console.log(curEntr, maxFl, apsOnFloor);
    }

    // подбираем количество квартир на площадке (начальное 1), увеличиваем пока не совпадет со входными данными

    for (let apsOnFloor = 1; apsOnFloor <= 4; apsOnFloor++) {
      console.log(`квартир на этаже = ${apsOnFloor}`);
      // заполняем дом квартирами с 1 до k2
      // каждая квартира это массив,
      // номер квартиры, номер подъезда, номер этажа, номер квартиры на этаже, признак окончанипя

      let apartmentNumber = 1;
      let entrance = 1;
      let fillingCompleted = false;
      let floor = 1;
      let apOnFloor = 1;
      if (apartmentNumber === k2) {
        fillingCompleted = true;
      }
      // let lastFilledAp = [
      //   apartmentNumber,
      //   entrance,
      //   floor,
      //   apOnFloor,
      //   fillingCompleted,
      // ];

      let Bulding = [
        [apartmentNumber, entrance, floor, apOnFloor, fillingCompleted],
      ];
      console.log(Bulding);
      for (
        let currentEntrance = 1;
        currentEntrance <= p2 - 1;
        currentEntrance++
      ) {
        console.log(`заполняем подъезд = ${currentEntrance}`);
        // идем по подъезду по этажам, до последнего,
        fillingTheEntrance(currentEntrance, m, apsOnFloor, Bulding);
        // if (fillingCompleted) {
        //   break;
        // }
      }

      /*


      // идем по подъездам кроме последнего


      // идем по последнему подъезду p2 по этажам до n2
      if (!fillingCompleted) {
        console.log(`заполняем подъезд = ${p2}`);
        fillingTheEntrance(p2, n2, apsOnFloor, Bulding);
      }

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
                `номер этажа совпадает: ${lastFilledAp[2]} === n2 = ${n2}\nполного совпадения добились при количестве квартир на этаже apsOnFloor = ${apsOnFloor};`
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
      }*/
    }
  }
});
