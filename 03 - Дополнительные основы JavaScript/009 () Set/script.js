'use strict'


const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set = new Set(arr);

set.add('Ivan');
set.add('Oleg');


// console.log(set);

// for (let value of set) console.log(value);

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// })

// console.log(set.values());

function unique(arr) {
    return Array.from(new Set(arr));
}