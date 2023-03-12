'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последние просмотренных фильмов?', ''),
	b = prompt('На сколько оцениваете его?', ''),
	c = prompt('Один из последние просмотренных фильмов?', ''),
	// eslint-disable-next-line indent
    d = prompt('На сколько оцениваете его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);