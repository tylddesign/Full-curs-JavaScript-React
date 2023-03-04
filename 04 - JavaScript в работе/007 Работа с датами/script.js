'use strict'


// const now = new Date('2023-02-13');
// new Date.parse('2023-02-13');



// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(now);
// console.log(now.setHours(40));
// console.log(now);


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // новый оператор - возвести в степень
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунды`); // Цикл отработал за 2 миллисекунды