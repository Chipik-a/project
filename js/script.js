'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt('Один из последние просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцениваете его?', ''),
// 	c = prompt('Один из последние просмотренных фильмов?', ''),
// 	// eslint-disable-next-line indent
//     d = prompt('На сколько оцениваете его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//Second part

//Автоматизировать вопросы пользователю с помощью цикла

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последние просмотренных фильмов?', ''),
		b = prompt('На сколько оцениваете его?', ''); 

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);


//Циклы и массивы тренировка
// function firstTask() {
// 	for (let i = 5; i <= 10; i++) {
// 		console.log (i);
// 	}
// 	console.log(firstTask);
// }


// for (let i = 20; i >= 10; i--) {
// 	console.log (i);
// }

// for (let i = 2; i < 11; i ++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// let i = 2;

// while (i <= 16) {
// 	if (i % 2 === 0) {
// 		i++;
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// 	i++;
// }

// const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

// 	console.log (arrayOfNumbers);
// 	return arrayOfNumbers;

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
// 	result [i] = arr [i];
// }
// console.log (result);
// // Не трогаем
// return result;

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
// 	if (typeof(data[i]) === 'number') {
// 		data[i] = data [i] * 2;
// 	} else if (typeof(data[i]) === 'string') {
// 		data[i] = `${data[i]} - done`;
// 	}
// 	}
// 	console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

// 	for (let i = 1; i <= data.length; i++) {
// 		result[i - 1] = data[data.length - i]
// 	}

// 	console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result)

