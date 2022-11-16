
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?'),
            ratingFilm = prompt('На сколько оцените его?');
        if (lastWatchedFilm == null || ratingFilm == null || lastWatchedFilm == '' || ratingFilm == '' || lastWatchedFilm.length > 50) {
            alert('Вы ввели некорректное значение, попробуйте еще раз')
            i--;
        } else {
            personalMovieDB.movies[lastWatchedFilm] = ratingFilm;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

// detectPersonalLevel();

let showMyDB = (hidden) => {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

let writeYourGenres = function () {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();
console.log(personalMovieDB);