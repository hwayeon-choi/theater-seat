let reserved = [ [ 1, 1, 1, 1, 2, 2, 2, 3, 3 ], [ 0, 2, 3, 4, 2, 3, 4, 3, 4 ] ];
let arr = [ 4, 5 ];

function allSeat() {

    let seats = [[], []];

    for(let p = 0; p < arr[0]; p++) {
        for(let q = 0; q < arr[1]; q++) {
            seats[0].push(p);
            seats[1].push(q);
        }
    }

    return seats;
}

let all = allSeat();
// console.log(all);

function isFilter() {

    let reservable = all;
    let allCount = 20;
    let reservedCount = 9;

    console.log(reservable);

    for(let i = 0; i < allCount; i++) {
        for(let j = 0; j < reservedCount; j++) {

            if(reservable[0][i] === reserved[0][j] && reservable[1][i] === reserved[1][j]) {
                delete reservable[0][i];
                delete reservable[1][i];
                // reservable.splice(0[i], 1);
                // reservable.splice(1[i], 1);
            }
        }
    }
    return reservable;
}

let reservableSeat = isFilter();

// function bestSeat() {
//     let result = '';

//     for(let i = 0; i < 20; i++) {
//         if(reservableSeat[0])
//     }
// }