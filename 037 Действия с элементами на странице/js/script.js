'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');


// console.dir(box);

// box.style.backgroundColor = 'green';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // создание элемента, r странице html он пока не имеет отношения.
const text = document.createTextNode('Тут был я')// создание узла (ноды), createTextNode используется редко

div.classList.add('black'); // добавили нашему элементу класс black

// document.body.append(div); // взяли тэг body и в конце добавили div

// document.querySelector('.wrapper').append(div); // подход, по которому мы выполняем сразу несколько действий

// const wrapper = document.querySelector('.wrapper'); // добавили новую переменную, тк часто используем
wrapper.append(div); // вставить в начало какого-либо документа
// wrapper.prepend(div); // вставить в начало какого-либо документа

// hearts[0].before(div); // перед первым сердечком
// hearts[0].after(div); // после превого сердечка

// circles[0].remove(); // удаление элемента\

// hearts[0].replaceWith(circles[0]); // замена одного элемента другим

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]); // сначала указываем что мы хотим поместить, а потом после какого элемента

// wrapper.removeChild(hearts[1]); 

// wrapper.replaceChild(circles[0], hearts[0]); // заменяем один круг сердечком

// div.innerHTML = "Hello world!";
// div.innerHTML = "<h1>Hello world!</h1>";
// div.textContent = '<h1>Hello!</h1>';
// div.insertAdjacentHTML('beforebegin', '<h1>Hello!</h1>');

