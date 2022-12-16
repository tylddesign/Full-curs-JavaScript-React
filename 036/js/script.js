'use strict';

//Методы используемые раньше
const box = document.getElementById('box'); // Получить элемент по id
console.log(box);

const btns = document.getElementsByTagName('button'); // Получить все элпементы по тэгу
console.log(btns[1]);

const circles = document.getElementsByClassName('circle'); // Получить все лементы по классу
console.log(circles);

//Современные методы
const hearts = document.querySelectorAll('.heart'); //Все элементы по селектору
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
})

const oneHeart = document.querySelector('.heart'); // Позволяет получить только один первый элемент
console.log(oneHeart);

