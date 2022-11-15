"use strict";

let num = 50;

// while (num < 55) {
//     console.log(num); // 50 51 52 53 54
//     num++;
// }

do { // сначала сделай, потом проверь условия
    console.log(num); // 50 51 52 53 54
    num++;
}
while (num < 55);


// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i); // 1 2 4 5
// }

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i); // 1 2 4 5 7 
}
