const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        console.log('function start');
        this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        while (this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?'),
                ratingFilm = prompt('На сколько оцените его?');
            if (lastWatchedFilm == null || ratingFilm == null || lastWatchedFilm == '' || ratingFilm == '' || lastWatchedFilm.length > 50) {
                alert('Вы ввели некорректное значение, попробуйте еще раз');
                i--;
            } else {
                this.movies[lastWatchedFilm] = ratingFilm;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов")
        } else if (this.counthist >= 10 && this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            this.genres[i] = prompt(`Ваш любимый жанр под номером ${i}`);
            if (this.genres[i] == null || this.genres[i] == '') {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            }
        }
        this.genres.forEach(function (item, i, arr) {
            console.log(`Любимый жанр №${i} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};

// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();


