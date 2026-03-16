// решение из разбора

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
    let ent = -1;
    let floor = -1;
    let good_flag = false;
    let n_ent, n_floor;

    function get_entrance_and_floor(flat_no, flats_on_floor, floors) {
      console.log(
        'flat_no, flats_on_floor, floors = ',
        flat_no,
        flats_on_floor,
        floors
      );
      let floors_before = Math.floor((flat_no - 1) / flats_on_floor);
      console.log('floors_before = ', floors_before);

      let entrance = Math.floor(floors_before / floors) + 1;
      console.log('entrance = ', entrance);

      let floor = (floors_before % floors) + 1;
      return [entrance, floor];
    }

    // функция check
    function check(k1, m, k2, p2, n2, flatsOnFloor) {
      console.log(
        'k1, m, k2, p2, n2, flatsOnFloor = ',
        k1,
        m,
        k2,
        p2,
        n2,
        flatsOnFloor
      );
      let [entrance2, floor2] = get_entrance_and_floor(k2, flatsOnFloor, m);
      // console.log(
      //   'entrance2, floor2, flatsOnFloor= ',
      //   entrance2,
      //   floor2,
      //   flatsOnFloor
      // );
      if (entrance2 === p2 && floor2 === n2) {
        return get_entrance_and_floor(k1, flatsOnFloor, m);
      }
      return [-1, -1];
    }

    let flatsOnFloorMax = 10;

    for (
      let flatsOnFloor = 1;
      flatsOnFloor <= flatsOnFloorMax;
      flatsOnFloor++
    ) {
      [n_ent, n_floor] = check(k1, m, k2, p2, n2, flatsOnFloor);
      console.log(n_ent, n_floor);
      if (n_ent !== -1) {
        good_flag = true;
        if (ent === -1) {
          ent = n_ent;
          floor = n_floor;
        } else if (ent !== n_ent && ent !== 0) {
          ent = 0;
        } else if (floor !== n_floor && floor !== 0) {
          floor = 0;
        }
      }
    }

    if (good_flag) {
      console.log(ent, floor);
    } else {
      console.log(-1, -1);
    }

    console.log(
      `номер искомой квартиры k1 =  ${k1},
      этажей в доме m = ${m}
      квартра k2= ${k2}
      подъезд p2= ${p2}
      на этаже n2=${n2}`
    );
  }
});
