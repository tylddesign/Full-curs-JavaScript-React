let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

alert(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
}

let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?');
let ratingFilm = prompt('На сколько оцените его?');
let lastWatchedFilm1 = prompt('Один из последних просмотренных фильмов?');
let ratingFilm1 = prompt('На сколько оцените его?');

personalMovieDB.movies[lastWatchedFilm] = ratingFilm;
personalMovieDB.movies[lastWatchedFilm1] = ratingFilm1;

console.log(personalMovieDB);
console.log(personalMovieDB);
console.log(personalMovieDB);