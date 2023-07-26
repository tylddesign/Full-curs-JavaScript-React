/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        lastFilms = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addingInput = document.querySelector('form.add .adding__input'),
        // checkbox = document.querySelector('form.add checkbox'); // так нельзя выбрать, потмоу что нет такого тэга "checkbox"
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addingInput.value;
        let favorite = checkbox.checked;

        if (newFilm) {

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 21) + '…';
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            // console.log(movieDB.movies);
            // console.log(lastFilms);
            createMoveList(movieDB.movies, lastFilms);
        }

        console.log("чистка");
        event.target.reset(); //чистка формы, можно и через addForm.reset()
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };



    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.background = 'url("img/bg.jpg") center top/cover no-repeat';
    };


    const sortArr = (arr) => {
        arr.sort();
    };


    function createMoveList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, index) => {

            parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1}. ${film}
            <div class="delete"></div>
            </li>
            `;

            // Попытка сделать через querySelectorAll
            // if (index >= 5) {
            //     return;
            // }
            // parent[index].innerHTML = `${index + 1}. ${item}
            //     <div class="delete"></div>
            //     `
            // parent[i].innerHTML = "";
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {

                item.parentElement.remove();
                delete films[i];
                createMoveList(films, parent);

                // movieDB.movies.forEach((film, i) => {
                //     console.log(item.parentElement.textContent.slice(3).toLowerCase());
                //     console.log(film.toLowerCase());
                //     if (film.toLowerCase() == item.parentElement.textContent.slice(3).toLowerCase()) {
                //         // console.log(item.parentElement.textContent.slice(3));
                //         console.log('ura');
                //         delete movieDB.movies[i];
                //     }
                // });
            });
        });

    }



    deleteAdv(adv);
    makeChanges();
    createMoveList(movieDB.movies, lastFilms);





});

