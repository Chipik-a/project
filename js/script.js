'use strict';

//Third Part

let numberOfFilms;

function start () {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { //если пользователь ничего не ввел или нажал отмена или ввел не число
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //цикл выполняется пока одно из условий будет правдивым, тогда мы просто повторяем вопрос пользователю
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

//Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

/* Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres */

function writeYourGenres() {
	for (let i = 1; i <= 3; i ++) {
		// const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		// personalMovieDB.genres[i-1] = genre; //начали отсчет с 1, но массив начинается с нуля, чтоб выровнять - 1

		//запишем то что сверху в другом виде
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();


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

//task for lesson 27

//1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// function sayHello(name) {
//     return (`Привет, ${name}`);
// }

// sayHello('Alex');

//Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// console.log NeighboringNumbers(5);

//Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// function getMathResult(num, time) {
// 	if (typeof(time) !== 'number' || time <= 0) {
// 		return num;
// 	}
// 	let str = '';

// 	for (let i = 1; i <= time; i++) {
// 		if (i === time) {
// 			str += `${num * i}`;
// 		} else {
// 			str += `${num * i}---`;
// 		}
// 	}
// 	return str;

// }

// getMathResult(10, 5)

