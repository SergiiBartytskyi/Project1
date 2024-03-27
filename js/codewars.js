//					Task 1.
// //				------
//
// Простий, заданий рядок слів, повертає довжину найкоротшого слова(ів).
// Рядок ніколи не буде порожнім, і вам не потрібно враховувати різні типи даних.
//

// function findShort(s) {
// 	// s = s.split(" ");

// 	// let res = [];
// 	// for (let i = 0; i < s.length; i += 1) {
// 	// 	res.push(s[i].length);
// 	// }

// 	// res = Math.min(...res);

// 	return Math.min(...s.split(" ").map(s => s.length));
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(findShort("turns out random test cases are easier than writing out basic ones"));
// console.log(findShort("Let's travel abroad shall we"));
//

// /----------------------------------

//					Task 2.
// //				------
//
// Створіть функцію, яка повертає суму двох найменших додатних чисел із заданим масивом
// із мінімум 4 додатних чисел.Числа з плаваючою точкою чи недодатні цілі числа
// не передадуться.
// Наприклад, коли масив передається як [19, 5, 42, 2, 77], вихід має бути 7.

// function sumTwoSmallestNumbers(numbers) {
// 	for (let i = 0; i < numbers.length; i += 1) {
// 		for (n = 1; n < numbers.length - i; n += 1) {
// 			const first = numbers[n - 1];
// 			const second = numbers[n];

// 			if (first > second) {
// 				numbers[n - 1] = second;
// 				numbers[n] = first;
// 			}
// 		}
// 	}
// 	return numbers[0] + numbers[1];
// }

// function sumTwoSmallestNumbers(numbers) {
// 	const [a, b] = numbers.sort((a, b) => a - b);
// 	return a + b;
// }
// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); //має повернутися 3453455.
//

// -----------------------------------

// 					Task 3.
// //				------
//
// Знайди пропущену букву
// Напишіть метод, який приймає масив послідовних(зростаючих) літер як вхідні дані та
// повертає відсутню літеру в масиві.
// Ви завжди отримаєте дійсний масив.І завжди буде бракувати лише однієї літери.
// Довжина масиву завжди буде не менше 2.
// Масив завжди міститиме літери тільки в одному регістрі.

// приклад:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Використовуйте англійський алфавіт із 26 букв!)
//
// function findMissingLetter(array) {
// 	let missingLetter = "";

// 	for (let i = 1; i < array.length; i += 1) {
// 		const second = array[i].charCodeAt();
// 		const first = array[i - 1].charCodeAt();

// 		if (second - first !== 1) {
// 			missingLetter = second - 1;
// 			console.log(missingLetter);
// 		}
// 	}
// 	return String.fromCharCode(missingLetter);
// }
// console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // 'e'
// console.log(findMissingLetter(["O", "Q", "R", "S"])); // 'P'
//

// -------------------------------------

// 					Task 4. Квадрат із квадратів
//  				--------------------------
//
// Вам подобаються будівельні блоки.Вам особливо подобаються будівельні блоки,
// які є квадратами.І що вам подобається ще більше, так це складати їх у квадрат
// із квадратних будівельних блоків!
// Однак іноді ви не можете розташувати їх у квадрат.Замість цього ви отримаєте
// звичайний прямокутник! Ці прокляті речі! Якби у вас був спосіб дізнатися,
// чи даремно ви зараз працюєте… Зачекайте! Це воно! Вам просто потрібно перевірити,
// чи кількість будівельних блоків є ідеальним квадратом.

// Завдання
// Дано ціле число, визначте, чи є воно квадратним числом :
// У математиці квадратне число або повний квадрат — це ціле число, яке є квадратом
// цілого числа; іншими словами, це добуток деякого цілого числа на самого себе.
// Тести завжди використовуватимуть деяке ціле число, тому не турбуйтеся про це в мовах
// динамічної типізації.

// Приклади
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
//
// 1 спосіб
// const isSquare = function (n) {
// 	const number = Math.floor(Math.sqrt(n));
// 	if (Math.pow(number, 2) === n) {
// 		return true;
// 	}
// 	return false;
// };

// // 2 спосіб
// function isSquare(n) {
// 	return Math.sqrt(n) % 1 === 0;
// }

// console.log(isSquare(-1)); // false
// console.log(isSquare(0)); // true
// console.log(isSquare(3)); // false
// console.log(isSquare(4)); // true
// console.log(isSquare(25)); // true
// console.log(isSquare(26)); // false
// console.log(isSquare(17)); // false
//

// -------------------------------------

// 					Task 5. Підрахунок голосних
//  				-------------------------
//
// Повертає кількість (кількість) голосних у заданому рядку.
// Ми розглядатимемо a, e, i, o, u, як голосні для цієї ката (але не y).
// Рядок введення складатиметься лише з малих літер та/або пробілів.

// function getCount(str) {
// 	const VOWELS = "aeiou";
// 	let count = 0;
// 	for (const letter of str) {
// 		if (VOWELS.includes(letter)) {
// 			count += 1;
// 		}
// 	}
// 	return count;
// }

// console.log(getCount("abracadabra")); // 5
//

// -------------------------------------

// 					Task 6. Регулярний вираз перевірки PIN-коду
//  				-----------------------------------------
//
// Банкомати дозволяють використовувати 4 - або 6 - значні PIN - коди, а PIN - коди можуть містити
// лише 4 або 6 цифр.
// Якщо функція передає дійсний рядок PIN-коду, return true, інакше return false.

// Приклади ( Вхід --> Вихід)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
//
// 1 спосіб
// function validatePIN(pin) {
// 	if (/[^0-9]/.test(pin)) {
// 		return false;
// 	}

// 	if (pin >= 0 && !(pin % 1) && (pin.length === 4 || pin.length === 6)) {
// 		return true;
// 	}
// 	return false;
// }

// 2 спосіб
// function validatePIN(pin) {
// 	return !/[^0-9]/.test(pin) && (pin.length === 4 || pin.length === 6);
// }

// 3 спосіб
// function validatePIN(pin) {
// 	const n = pin.length;
// 	if (n != 4 && n != 6) return false;
// 	for (var i in pin) if (pin[i] > "9" || pin[i] < "0") return false;
// 	return true;
// }
// console.log(validatePIN("1")); // false
// console.log(validatePIN("12")); // false
// console.log(validatePIN("123")); // false
// console.log(validatePIN("12345")); // false
// console.log(validatePIN("1234567")); // false
// console.log(validatePIN("-1234")); // false
// console.log(validatePIN("1.234")); // false
// console.log(validatePIN("-1.234")); // false
// console.log(validatePIN("00000000")); // false

// console.log(validatePIN("a234")); // false
// console.log(validatePIN(".234")); // false

// console.log(validatePIN("1234")); // true
// console.log(validatePIN("0000")); // true
// console.log(validatePIN("1111")); // true
// console.log(validatePIN("123456")); // true
// console.log(validatePIN("098765")); // true
// console.log(validatePIN("000000")); // true
// console.log(validatePIN("123456")); // true
// console.log(validatePIN("090909")); // true
// console.log(validatePIN("12.0")); // false
//

// -------------------------------------

// 					Task 7. Кількість людей в автобусі
//  				-----------------------------------------
//
// По місту рухається автобус, який підвозить і висаджує людей на кожній зупинці.
// Вам надається список(або масив) пар цілих чисел.Елементи кожної пари представляють кількість людей,
// які сходять в автобус(перший елемент) і кількість людей, які виходять з автобуса(другий елемент)
// на автобусній зупинці.
// Ваше завдання — повернути кількість людей, які ще залишаються в автобусі після останньої зупинки
// (після останнього масиву).Незважаючи на те, що це остання автобусна зупинка, автобус може бути
// не порожнім, і деякі люди все ще можуть бути в автобусі, вони, ймовірно, сплять там: D
// Подивіться на тестові випадки.
// Майте на увазі, що тестові випадки гарантують, що кількість людей в автобусі завжди >= 0.
// Тому повернуте ціле число не може бути від’ємним.
// Друге значення в першій парі в масиві дорівнює 0, оскільки автобус порожній на першій автобусній
// зупинці.
//
// const number = function (busStops) {
// 	let passEntry = 0;
// 	let passGotOut = 0;
// 	for (let i = 0; i < busStops.length; i += 1) {
// 		passEntry += busStops[i][0];
// 		passGotOut += busStops[i][1];
// 	}
// 	return passEntry - passGotOut;
// };

// console.log(
// 	number([
// 		[10, 0],
// 		[3, 5],
// 		[5, 8],
// 	]),
// ); // 5
// console.log(
// 	number([
// 		[3, 0],
// 		[9, 1],
// 		[4, 10],
// 		[12, 2],
// 		[6, 1],
// 		[7, 10],
// 	]),
// ); // 17
// console.log(
// 	number([
// 		[3, 0],
// 		[9, 1],
// 		[4, 8],
// 		[12, 2],
// 		[6, 1],
// 		[7, 8],
// 	]),
// ); // 21
// console.log(number([[0, 0]])); // 0
//

// -------------------------------------

// 					Task 8. Бурмотіння
//  				------------------
//
// Цього разу ні історії, ні теорії. Наведені нижче приклади показують, як написати функцію accum:

// приклади:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Параметр accum — це рядок, який містить лише літери з a..zі A..Z.
//
// 1 спосіб
// function accum(s) {
// 	let res = "";
// 	for (let i = 0; i < s.length; i += 1) {
// 		res += s[i].toUpperCase();
// 		for (let n = 0; n < i; n += 1) {
// 			res += s[i].toLowerCase();
// 		}
// 		res += "-";
// 	}
// 	return res.replaceAll("-", " ").trimEnd().replaceAll(" ", "-");
// }

// 2 спосіб
// function accum(s) {
// 	return s
// 		.split("")
// 		.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
// 		.join("-");
// }

// console.log(accum("ZpglnRxqenU")); //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// console.log(accum("NyffsGeyylB")); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// console.log(accum("MjtkuBovqrU")); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
// console.log(accum("EvidjUnokmM")); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
// console.log(accum("HbideVbxncC")); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
//

// -------------------------------------

// 					Task 9.
//  				------------------
// Основна ідея полягає в тому, щоб підрахувати всі символи, що зустрічаються в рядку.
// Якщо у вас є такий рядок aba, то результатом має бути { 'a': 2, 'b': 1 }.
// Що робити, якщо рядок порожній? Тоді результатом має бути порожній літерал об’єкта, {}.

// function count(str) {
// 	const counts = {};
// 	for (const letter of str) {
// 		if (counts[letter]) {
// 			counts[letter] += 1;
// 		} else {
// 			counts[letter] = 1;
// 		}
// 	}
// 	return counts;
// }
// console.log(count("")); // {}
// console.log(count("a")); // {'a': 1}
// console.log(count("ab")); // {'a': 1, 'b': 1}
// console.log(count("aba")); // {'a': 2, 'b': 1}
// console.log(count("ABC")); // {'A': 1, 'B': 1, 'C': 1}
