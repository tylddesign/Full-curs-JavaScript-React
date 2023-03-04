'use strict';

// function showThis() {
//     console.log(this);
// }

// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     // this.hello = function () {
//     //     console.log(`Hello ${this.name}`);
//     // }
// }

// let ivan = new User('Ivan', 23);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2); // 2 переходит в this
// console.log(double(3));
// console.log(double(13));

// user.sayName = sayName;
// user.sayName();


// Вызов функции четырьмя способами
// 1) Вызов функции.Обычная функция имеет контекст вызова: this = window, но если 'use strict' - undefined
// 2) Вызов метода. Контекст у методов объекта - сам объект
// 3) Вызов конструктора. this в конструкторах и классах - это новый экземпляр объекта. Имеется в виду, что у каждого нового объекта, созданного с помощью конструктора будет свой this.name
// 4) Непрямой вызов. Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
});


const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this); // берет контекст своего родителя, а тот в своб очередь контекст объекта
        };
        say();
    }
};

obj.sayNumber();

const double = a => a * 2;
console.log(double(4));
const calc = (a, b) => a * b;
console.log(calc(2, 4));



