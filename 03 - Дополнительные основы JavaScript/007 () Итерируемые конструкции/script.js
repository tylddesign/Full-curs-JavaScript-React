'use strict'


// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function () { };


// // console.dir(arr);

// // for (let key of user) {
// //     console.log(user[key]);
// // }

// for (let key in arr) {
//     console.log(key);
// }

// for (let key of arr) {
//     console.log(key);
// }
// const str = 'string';

// for (let key in str) {
//     console.log(str[key]);
// }

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function () {
        console.log('Hellp');
    }
}

salaries[Symbol.iterator] = function () { // при вызове for..of, когда дойдет до этого свойсва, пойдет выполняться функция
    return { // функция возвращает объект и запускает next()
        current: this.john,
        last: this.ann,

        next() { // результат этого метода всегда объект, прчем либо цикл работает, либо завершен
            if (this.current < this.last) {
                this.current += 500;
                return { done: false, value: this.current } // done - объект, который говорит говорит о том, что либо цикл еще работает, либо завершен
            } else {
                return { done: true } // for of прекратит конструкцию
            }
        }
    }
}

for (let res of salaries) {
    console.log(res);
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator);