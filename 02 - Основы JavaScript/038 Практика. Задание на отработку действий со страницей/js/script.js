/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo__adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    poster = document.querySelector('.promo__bg'),
    lastFilms = document.querySelectorAll('.promo__interactive-list li');

promo__adv.forEach(item => {
    item.remove();
});

// Не через стрелочную функцию, а через обычную
// promo__adv.forEach(function (item) {
//     item.remove();
// });


genre.textContent = 'Драма';
poster.style.background = 'url("img/bg.jpg") center top/cover no-repeat';

console.log(lastFilms);

movieDB.movies.sort();

lastFilms.forEach((item, i) => {
    item.textContent = (i + 1) + ". " + movieDB.movies[i];
});

// Вариант из видео
// const movieList = document.querySelector('.promo__interactive-list');

// movieList.innerHTML = "";

// movieDB.movies.forEach((item, i) => {
//     movieList.innerHTML += `
//     <li class="promo__interactive-item">${i + 1} ${item}
//         <div class="delete"></div>
//     </li>
//     `;
// });




