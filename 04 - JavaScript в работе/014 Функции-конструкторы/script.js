'use strict';

// const num = new Number(3);

// console.log(num);

// const num = new Function(3);

// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 22);

console.log(ivan);
console.log(alex);

ivan.hello();

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушёл`);
}

ivan.exit(); // Пользователь Ivan ушёл