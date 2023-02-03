'use strict'


// let id = Symbol("id");

// const obj = {
//     'name': 'Test',
//     [id]: 1,
//     getId: function () {
//         return this[id];
//     }
// }

// // console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // 1

// let id = Symbol("id");
// let id2 = Symbol("id");
// console.log(id == id2); // false
// obj[id] = 1;

// console.log(obj); // объект
// console.log(obj['id']); // undefined




// for (let value in obj) console.log(value);


const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
}

// Стронний код библиотеки

myAwesomeDB.id = '2323233'; // случайная перезапись

console.log(myAwesomeDB[Symbol.for('id')]); // 2323233

console.log(myAwesomeDB); // 






























