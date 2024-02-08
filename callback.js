// // Колбек-функція
// function greet(name) {
// 	console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
// 	console.log(`Реєструємо гостя ${name}.`);
// 	callback(name);
// }

// registerGuest("Манго", greet);

//
// Інлайн колбеки
// function registerGuest(name, callback) {
// 	console.log(`Реєструємо гостя ${name}.`);
// 	callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
// 	console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
// 	console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });
//

//
// Декілька колбеків
// function processCall(recipient) {
// 	// Імітуємо доступність абонента випадковим числом
// 	const isRecipientAvailable = Math.random() > 0.5;

// 	if (!isRecipientAvailable) {
// 		console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
// 		// Логіка активації автовідповідача
// 	} else {
// 		console.log(`З'єднуємо з ${recipient}, очікуйте...`);
// 		// Логіка прийняття дзвінка
// 	}
// }

// processCall("Манго");
//

//
// function processCall(recipient, onAvailable, onNotAvailable) {
// 	// Імітуємо доступність абонента випадковим числом
// 	const isRecipientAvailable = Math.random() > 0.5;

// 	if (!isRecipientAvailable) {
// 		onNotAvailable(recipient);
// 		return;
// 	}

// 	onAvailable(recipient);
// }

// function takeCall(name) {
// 	console.log(`З'єднуємо з ${name}, очікуйте...`);
// 	// Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
// 	console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
// 	// Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
// 	console.log(`Абонент ${name} недоступний, записуємо голограму.`);
// 	// Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);
//

// //
// function printValue(value) {
// 	console.log(value);
// }

// function prettyPrint(value) {
// 	console.log("Logging value: ", value);
// }

// function add(n) {
// 	n += n;
// 	return n;
// }

// function repeat(n, action) {
// 	for (let i = 0; i < n; i += 1) {
// 		action(i);
// 	}
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// console.log(repeat(3, add));
// // Logging value: 0
// // Logging value: 2
// // Logging value: 4
//

//
//                              Метод forEach
//                              -------------
//
//              массив.forEach(function callback(element, index, array) {
// 	                // Тіло колбек-функції
//              });
//
// - Поелементно перебирає масив.
// - Викликає колбек-функцію для кожного елемента масиву.
// - Нічого не повертає.
// - Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
//
// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
// 	console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// Метод перебирання forEach
// numbers.forEach(function (number, index) {
// 	console.log(`Індекс ${index}, значення ${number}`);
// });

//                              Стрілочна функція
//                              ----------------
//
// numbers.forEach((number, index) => console.log(`Індекс ${index}, значення ${number}`));
//

//
// const arrowAdd = (a, b, c) => a + b + c;

// console.log(arrowAdd(1, 2, 3));
//

// Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно явно поставити return.
// Це називається явне повернення(explicit return). Такий синтаксис використовується у разі,
// якщо в тілі функції потрібно виконати ще якісь інструкції, крім повернення значення.
//
// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>.
// Це називається неявне повернення(implicit return).
//
//                      Псевдомасив arguments
//                      --------------------
//
// У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи.
// Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.
//
// const add = (...args) => {
// 	console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]
//

//                      Стрілочні функції як колбеки
//                      ---------------------------
//
// Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих методів масиву
// завдяки коротшому синтаксису оголошення, особливо, якщо не потрібне тіло функції.
//
// const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
// numbers.forEach(function (number, index) {
// 	console.log(`Індекс ${index}, значення ${number}`);
// });

// Анонімна стрілочна функція
// numbers.forEach((number, index) => console.log(`Індекс ${index}, значення ${number}`));

// Стрілочну колбек - функцію також можна оголошувати окремо і передавати на неї посилання.
// Це варто робити, якщо одна функція використовується у декількох місцях програми або
// якщо вона громіздка.
//
// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
// 	console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);
//

//
//                              Чисті функції
//                              --------------
//
// Чиста функція(pure function) - це функція, результат якої залежить тільки від значень
// переданих аргументів.За умови однакових аргументів вона завжди повертає один і
// той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.
//
// const pureMultiply = (array, value) => {
// 	const newArray = [];

// 	array.forEach(element => {
// 		newArray.push(element * value);
// 	});

// 	return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//

//
//                              Перебираючі методи масиву
//                              -------------------------
//
//                  array.method(callback[(currentValue, index, array)]);
//

//
//                              Метод map()
//                              ---------
//
// Метод map(callback) використовується для трансформації масиву.
// Він викликає колбек - функцію для кожного елемента вихідного масиву,
// а результат її роботи записує у новий масив, який і буде результатом виконання методу.
// //
// - Поелементо перебирає оригінальний масив.
// - Не змінює оригінальний масив.
// - Результат роботи колбек-функції записується у новий масив.
// - Повертає новий масив однакової довжини.
//  Його можна використовувати для того, щоб змінити кожен елемент масиву.
// Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']
//
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = arr.map((item, idx, arr) => item * 2);
// console.log(result); // [2, 4, 6, 8, 10, 12, 14]

// const resultEven = arr.map(item => {
// 	if (!(item % 2)) {
// 		return item * 2;
// 	}
// 	return item;
// });
// console.log(resultEven); // [1, 4, 3, 8, 5, 12, 7]

// const refResultEven = arr.map(item => (!(item % 2) ? item * 2 : item));
// console.log(refResultEven); // [1, 4, 3, 8, 5, 12, 7]

//					кастомеий map
//
// const arr = [1, 2, 3, 4, 5, 6, 7];

// function customMap(arr, callback) {
// 	const result = [];
// 	for (let i = 0; i < arr.length; i += 1) {
// 		const item = arr[i];
// 		result.push(callback(item, i, arr));
// 	}
// 	return result;
// }
// console.log(customMap(arr, foo)); // [1, 4, 3, 8, 5, 12, 7]

// function foo(item, idx, arr) {
// 	if (!(item % 2)) {
// 		return item * 2;
// 	}
// 	return item;
// }
//
//                      Масив об'єктів
//                       -------------
//
// const students = [
// 	{ name: "Манго", score: 83 },
// 	{ name: "Полі", score: 59 },
// 	{ name: "Аякс", score: 37 },
// 	{ name: "Ківі", score: 94 },
// 	{ name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// const values = students.map(student => student.score + 20);
// console.log(values); // [103, 79, 57, 114, 84]
//

//
//                              Метод flatMap()
//                              -------------
// //
// Метод flatMap(callback) - аналогічний методу map(), але застосовується у випадках,
// коли результат - це багатовимірний масив, який необхідно «розгладити».
//
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// students.map(student => student.courses);
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
//

// const users = [
// 	{ name: "Манго", skills: ["html", "css"] },
// 	{ name: "Полі", skills: ["python", "js"] },
// 	{ name: "Аякс", skills: ["node", "css"] },
// 	{ name: "Ківі", skills: ["js", "typeScript"] },
// 	{ name: "Х'юстон", skills: ["html", "react"] },
// ];

// const flatArr = users.flatMap(user => user.skills);
// console.log(flatArr); // ['html', 'css', 'python', 'js', 'node', 'css', 'js', 'typeScript', 'html', 'react']
//
//                              Метод filter()
//                              -------------
//
// Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто,
// коли необхідно вибрати більше одного елемента з колекції за певним критерієм.
//
// - Не змінює оригінальний масив.
// - Поелементо перебирає оригінальний масив.
// - Повертає новий масив.
// - Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
// - Якщо колбек повернув true, елемент додається у масив, що повертається.
// - Якщо колбек повернув false, елемент не додається у масив, що повертається.
// - Якщо жоден елемент не задовольнив умову, повертає порожній масив.
//
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
//

//                          Фільтрація унікальних елементів
//                          ----------------------------
//
//  Використовуючи метод filter(), можна виконати фільтрацію масиву таким чином,
// що у ньому залишаться тільки унікальні елементи.Цей прийом працює тільки з масивом
// примітивних значень - не об'єктів.
//
// const students = [
// 	{ name: "Манго", courses: ["математика", "фізика"] },
// 	{ name: "Полі", courses: ["інформатика", "математика"] },
// 	{ name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
// // ['математика', 'фізика', 'інформатика', 'біологія'];
//

//
//                          Масив об'єктів
//                          -------------
//
// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості.
// У підсумку, утворюється новий масив відфільтрованих об'єктів.
//
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
// 	{ name: "Манго", score: 83 },
// 	{ name: "Полі", score: 59 },
// 	{ name: "Аякс", score: 37 },
// 	{ name: "Ківі", score: 94 },
// 	{ name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон
//

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const filtredArr = arr.filter(item => item % 2);
// console.log(filtredArr); // [1, 3, 5, 7]

// const filtredArrEvenFromTwo = arr.filter((item, idx) => {
// 	if (idx > 1) {
// 		return !(item % 2);
// 	}
// });
// console.log(filtredArrEven); // [4, 6]

//
//                              Метод find()
//                              ----------
//
// Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову,
// то метод find(callback) дозволяє знайти і повернути перший відповідний елемент,
// після чого перебирання масиву припиняється.Тобто він шукає до першого збігу.
//
// - Не змінює оригінальний масив.
// - Поелементо перебирає оригінальний масив.
// - Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
// - Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false,
// метод повертає undefined.
//
// Метод find() використовується для одного завдання - пошуку елемента за унікальним
// значенням властивості.
//
// const colorPickerOptions = [
// 	{ label: "red", color: "#F44336" },
// 	{ label: "green", color: "#4CAF50" },
// 	{ label: "blue", color: "#2196F3" },
// 	{ label: "pink", color: "#E91E63" },
// 	{ label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined
//

// const arr = [1, 2, 3, 4, 5, 6, 7];
// // const findEl = arr.find(el => el > 5);
// // console.log(findEl); // 6
// const fi = arr.find((item, idx) => {
// 	if (idx > 0) {
// 		return item > 0;
// 	}
// });
// console.log(fi);

// const students = [
// 	{ name: "Манго", courses: ["html", "css"] },
// 	{ name: "Полі", courses: ["js", "html", "css"] },
// 	{ name: "Ківі", courses: ["js", "react"] },
// ];

// const knowJS = students.find(student => student.courses.includes("js"));
// console.log(knowJS); // {name: 'Полі', courses: Array(3)}

// const knowJSFalse = students.find(student => student.courses.includes("jss"));
// console.log(knowJSFalse); // undefined

//
//                              Метод findIndex()
//                              -----------------
//
// Метод findIndex(callback) - це сучасна заміна методу indexOf().
// Дозволяє виконувати пошук за складнішими умовами, ніж просто рівність.
// Використовується як для пошуку у масиві примітивів, так і в масиві об'єктів.
//
// - Не змінює оригінальний масив.
// - Поелементо перебирає оригінальний масив.
// - Повертає індекс першого елемента, що задовольняє умову, тобто, коли колбек повертає true.
// - Якщо жоден елемент не задовольняє умову, тобто для всіх елементів колбек повернув false,
// метод повертає - 1.
//
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.findIndex(option => option.label === "blue"); // 2
// colorPickerOptions.findIndex(option => option.label === "pink"); // 3
// colorPickerOptions.findIndex(option => option.label === "white"); // -1
//

// const students = [
// 	{ name: "Манго", courses: ["html", "css"] },
// 	{ name: "Полі", courses: ["js", "html", "css"] },
// 	{ name: "Ківі", courses: ["js", "react"] },
// ];

// const result = students.findIndex(student => student.courses.includes("js"));
// console.log(result); // 1

// const resultFalse = students.findIndex(student => student.courses.includes("jss"));
// console.log(resultFalse); // -1
//
//                              Метод every()
//                               ------------
// Перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.
//
// - Не змінює оригінальний масив.
// - Поелементо перебирає оригінальний масив.
// - Повертає true, якщо всі елементи масиву задовольняють умову.
// - Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
// - Перебирання масиву припиняється, якщо колбек повертає false.

// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false
//

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const everyEven = arr.every(item => !(item % 2));
// console.log(everyEven); // false

// const users = [
// 	{ userName: "User1", age: 18 },
// 	{ userName: "User2", age: 14 },
// 	{ userName: "User3", age: 38 },
// ];

// const isEveryAdult = users.every(user => user.age >= 18);
// console.log(isEveryAdult); // false

//                              Метод some()
//                              ------------
//
// Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.
//
// - Не змінює оригінальний масив.
// - Поелементо перебирає оригінальний масив.
// - Повертає true, якщо хоча б один елемент масиву задовольняє умову.
// - Повертає false, якщо жоден елемент масиву не задовольняє умову.
// - Перебирання масиву припиняється, якщо колбек повертає true.
//
// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true
//
//
//                               Масив об'єктів
//                              -------------
// //
// Під час роботи з масивом об'єктів перевіряється значення певної їх властивості.
// Наприклад, у нас є масив об'єктів фруктів, необхідно дізнатися, чи є фрукти в наявності
// та чи є в наявності хоча б якісь фрукти, тобто більше 0 штук.
//
// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true
//

// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const someEven = arr2.some(item => !(item % 2));
// console.log(someEven); // true

// const users = [
// 	{ userName: "User1", age: 18 },
// 	{ userName: "User2", age: 14 },
// 	{ userName: "User3", age: 38 },
// ];

// const isSomeAdult = users.some(({ age }) => age >= 18);
// console.log(isSomeAdult); // true
//
//                              Метод reduce()
//                              ----------------
//
// Метод reduce(callback, initialValue) використовується для послідовної обробки
// кожного елемента масиву із збереженням проміжного результату, як акумулятор.
//
//              масив.reduce((previousValue, element, index, array) => {
// 	                // Тіло колбек-функції
//              }, initialValue);
//
// - Не змінює оригінальний масив.
// - Поелементо перебирає оригінальний масив.
// - Повертає все, що завгодно.
// - Робить все, що завгодно.
//
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
// 	return previousValue + number;
// }, 0);

// console.log(total); // 32
//
// Перший параметр колбек - функції(previousValue) - це акумулятор, тобто проміжний результат.
// Значення, яке поверне колбек - функція на поточній ітерації, буде значенням цього параметра
// на наступній ітерації.

// Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора -
// параметр initialValue.
//
// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32
//

//                                          Масив об'єктів
//                                           ------------
//
// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості.
//
// const students = [
// 	{ name: "Манго", score: 83 },
// 	{ name: "Полі", score: 59 },
// 	{ name: "Аякс", score: 37 },
// 	{ name: "Ківі", score: 94 },
// 	{ name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
// 	return total + student.score;
// }, 0); // 337

// const averageScore = totalScore / students.length; // 67.4
//

//                              Просунутий reduce
//                                  ----------
//  Припустимо у нас є наступна задача: з масиву постів твіттера окремого користувача
// необхідно порахувати суму усіх лайків.Можна перебрати циклом for або forEach,
// кожне з цих рішень вимагатиме написання додаткового коду.А можна використовувати reduce
//
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості likes
// // до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// // для підрахунку лайків з колекції
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32
//

//
// const tweets = [
// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
// 	allTags.push(...tweet.tags);

// 	return allTags;
// }, []);

// console.log(tags);
// // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = tweets =>
// 	tweets.reduce((allTags, tweet) => {
// 		allTags.push(...tweet.tags);

// 		return allTags;
// 	}, []);

// console.log(getTags(tweets));
// // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
//

// const tweets = [
// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
// 	tweets.reduce((allTags, tweet) => {
// 		allTags.push(...tweet.tags);

// 		return allTags;
// 	}, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
// 	if (!acc.hasOwnProperty(tag)) {
// 		acc[tag] = 0;
// 	}

// 	acc[tag] += 1;

// 	return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
//

// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item, isx, arr) => {
// 	console.log("acc - ", acc);
// 	console.log("item - ", item);
// 	console.log("-------------------------------");
// 	return acc + item;
// });

// const result = numbers.reduce((acc, item) => {
// 	console.log("acc - ", acc);
// 	console.log("item - ", item);
// 	console.log("-------------------------------");
// 	acc.push(item * 2);
// 	return acc;
// }, []);

// console.log(result); // [22, 8, 18, 6, 108, 46, 24]
//
//                              Метод sort()
//                              ----------
//
// Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання,
// він сортує вихідний масив.

// - Сортує і змінює вихідний масив.
// - Повертає змінений масив, тобто посилання на відсортований вихідний.
// - За замовчуванням сортує за зростанням.
// - Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових
// номерів у таблиці Unicode.
// Такий масив чисел буде відсортований за зростанням.
//
// Через те, що сортується вихідний масив, перед сортуванням роблять повну копію вихідного масиву
// і сортують вже її.
//

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]
//

//                      Свій порядок сортування чисел
//                         ---------------------
//
// Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати
// колбек - функцію з двома параметрами.Це функція порівняння(compare function),
// порядок сортування залежить від її результату.Метод sort() буде викликати її для двох
// довільних елементів.
//
// массив.sort((a, b) => {
//   // Тіло колбек-функції
// });
//
// a - перший елемент для порівняння.
// b - другий елемент для порівняння.
// Якщо виклик compareFunction(a, b) повертає будь - яке від'ємне значення, тобто a менше b,
// сортування поставить a перед b.Це сортування за зростанням.
//
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
//
// Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля, тобто b більше a,
// сортування поставить b перед a.Це сортування за спаданням.
//
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
//

//                              Свій порядок сортування рядків
//                              -----------------------
//
// Для сортування рядків в алфавітному порядку, за зростанням або спаданням,
// використовується метод рядків localeCompare().
//
// firstString.localeCompare(secondString);
//
// Він викликається на рядку, який потрібно порівняти(firstString) з тим,
// що був переданий йому як аргумент(secondString).
//
// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0
//
// - Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
// - Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
// - Якщо рядки однакові, повертається нуль.
// - Це зручно використовувати для сортування рядків, оскільки метод sort() очікує такі самі
// значення від колбек - функції.
//
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']
//

//
//                              Сортування об'єктів
//                              -----------------
//
// Під час роботи з масивом об'єктів, сортування виконується за числовим або рядковим значенням
// певної властивості.Наприклад, у нас є група студентів з балами за тест.
// Необхідно відсортувати масив об'єктів за зростанням і спаданням кількості балів, і за ім'ям студента.
//
// const students = [
// 	{ name: "Манго", score: 83 },
// 	{ name: "Полі", score: 59 },
// 	{ name: "Аякс", score: 37 },
// 	{ name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort((firstStudent, secondStudent) => firstStudent.score - secondStudent.score);
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort((firstStudent, secondStudent) => secondStudent.score - firstStudent.score);
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
// 	firstStudent.name.localeCompare(secondStudent.name),
// );
// console.log(inAlphabeticalOrder);
//

// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = [...numbers].sort((a, b) => a - b);
// console.log(result); // [3, 4, 9, 11, 12, 23, 54];

// const result2 = [...numbers].sort((a, b) => b - a);
// console.log(result2); // [54, 23, 12, 11, 9, 4, 3];
// console.log(numbers); // [11, 4, 9, 3, 54, 23, 12];

// const arr = [11, 1, 111, 9, 2, 23, 256, 3, 4, 0];
// console.log(arr.sort()); // [0, 1, 11, 111, 2, 23, 256, 3, 4, 9]

// const str = ["s", "a", "f", "B", "A", "S"];

// const result = str.sort((a, b) => a - b);
// console.log(result); // ['s', 'a', 'f', 'B', 'A', 'S']

// const result2 = str.sort();
// console.log(result2); // ['A', 'B', 'S', 'a', 'f', 's']

// const result3 = str.sort((a, b) => a.localeCompare(b));
// console.log(result3); // ['a', 'A', 'B', 'f', 's', 'S']

// const result4 = str.sort((a, b) => b.localeCompare(a));
// console.log(result4); // ['S', 's', 'f', 'B', 'A', 'a']

// const users = [
// 	{ userName: "Leo", age: 18 },
// 	{ userName: "Donny", age: 17 },
// 	{ userName: "Mikey", age: 16 },
// 	{ userName: "Raph", age: 18 },
// ];

// const userSort = users.sort((a, b) => a.userName.localeCompare(b.userName));
// console.log(userSort);
/*
(4) [{…}, {…}, {…}, {…}]
0: {userName: 'Donny', age: 17}
1: {userName: 'Leo', age: 18}
2: {userName: 'Mikey', age: 16}
3: {userName: 'Raph', age: 18}
*/

//
//                                  Ланцюжки методів
//                                  -----------------
//
// const students = [
// 	{ name: "Манго", score: 83, courses: ["математика", "фізика"] },
// 	{ name: "Полі", score: 59, courses: ["інформатика", "математика"] },
// 	{ name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
// 	{ name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];
// Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
// З цією метою ми відсортуємо копію масиву методом sort(), після чого методом map()
// створимо масив значень властивості name з відсортованого масиву.

// const names = [...students].sort((a, b) => a.score - b.score).map(student => student.name);
// console.log(names);

// - Робимо копію вихідного масиву перед сортуванням.
// - На копії викликаємо метод sort().
// - До результату роботи методу sort() застосовуємо метод map().
// - Змінній names присвоюється результат роботи методу map().
//
// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
//
// const uniqueSortedCourses = students
// 	.flatMap(student => student.courses)
// 	.filter((course, index, array) => array.indexOf(course) === index)
// 	.sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']
//
// - На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
// - До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
// - На результаті методу filter() викликаємо sort().
// - Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
//
//
// const showThis = () => {
// 	console.log("this in showThis: ", this);
// };

// function showThis() {
// 	console.log("this in showThis: ", this);
// }
// showThis();

// const user = { name: "Mango" };
// user.showContext = showThis;
// user.showContext();

// const objA = {
// 	x: 5,
// 	showX() {
// 		console.log("this in objA.showX: ", this);
// 		console.log("showX: ", this.x);

// 		const objB = {
// 			y: 10,
// 			showThis() {
// 				console.log("this in objB.showTgis: ", this);
// 				console.log("showThis: ", this.y);
// 			},
// 		};

// 		objB.showThis();

// 		// const foo = () => {
// 		// 	console.log(this);
// 		// };

// 		// foo();
// 	},
// };

// objA.showX();

// const doMath = function (a, b, callback) {
// 	const result = callback(a, b);
// 	return result;
// };

// const add = function (x, y) {
// 	return x + y;
// };

// const sub = function (x, y) {
// 	return x - y;
// };
// console.log(doMath(2, 3, add));
// console.log(doMath(7, 3, add));
// console.log(doMath(7, 3, sub));
// console.log(doMath(5, 2, sub));

// const buttonRef = document.querySelector(".btn");
// const handleBtnClick = function () {
// 	console.log("Click!");
// };
// buttonRef.addEventListener("click", handleBtnClick);

// const foo = function () {
// 	console.log("Викликається через 2 сек");
// };

// console.log("Before foo");

// setTimeout(foo, 2000);

// console.log("After foo");

// const onRequestSuccess = function (response) {
// 	console.log("Виклик ф-ї onRequestSucces після відповідді бекенду");
// 	console.log(response);
// };

// fetch("https://pokeapi.co/api/v2/pokemon")
// 	.then(res => res.json)
// 	.then(onRequestSuccess);

// const arr = [1, 2, 3, 4, 5];

// function filter(arr, callback) {
// 	const newArr = [];

// 	for (el of arr) {
// 		const passed = callback(el);
// 		if (passed) {
// 			newArr.push(el);
// 		}
// 	}

// 	return newArr;
// }

// const fooBigger = value => value >= 3;

// const fooSmaller = value => value < 3;

// console.log(filter(arr, fooBigger));
// console.log(filter(arr, fooSmaller));

// const fruits = [
// 	{ name: "apples", quantity: 200, isFresh: true },
// 	{ name: "grapes", quantity: 150, isFresh: false },
// 	{ name: "bananas", quantity: 100, isFresh: true },
// 	{ name: "lemon", quantity: 50, isFresh: true },
// ];

// const setFruitsWithQuantity = fruit => fruit.quantity >= 150;
// const setFruitsWithoutQuantity = fruit => fruit.quantity < 150;

// console.log(filter(fruits, setFruitsWithQuantity));
// console.log(filter(fruits, setFruitsWithoutQuantity));

// const fnA = function () {
// 	const innerVariable = "Значення внутрішньої змінної ф-ї fnA";
// 	// const powParameter = parameter ** 2;

// 	const innerFunction = function (parameter) {
// 		console.log(parameter);
// 		console.log(innerVariable);
// 		console.log("Виклик ф-ї innerFunction");
// 	};

// 	return innerFunction;
// };

// const fnB = fnA();

// fnB(5);
// console.log(fnB);

// -------------------------------

// 						Замикання
//
// const makeDish = function (sheffName, dish) {
// 	console.log(`${sheffName} готує ${dish}`);
// };

// makeDish("Mango", "пиріжок");
// makeDish("Mango", "омлет");
// makeDish("Mango", "чай");

// const makeSheff = function (name) {
// 	const makeDish = function (dish) {
// 		console.log(`${name} готує ${dish}`);
// 	};
// 	return makeDish;
// };

// const mango = makeSheff("Mango");
// mango("hot-dog");

// ----------------------------

// const a = function (x) {
// 	const b = function (y) {
// 		const res = x ** y;
// 		return res;
// 	};
// 	return b;
// };
// const A = a(2);
// console.log(A(3));
// console.dir(A);

// --------------------------------

// 							Округлятор
// 							---------
// //

// const rounder = function (places) {
// 	return function (number) {
// 		return Number(number.toFixed(places));
// 	};
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.456789));
// console.log(rounder3(3.456789));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));

// ------------------------------

// //
// const salaryManagerFactory = function (employeeName, baseSalary) {
// 	let salary = baseSalary;

// 	// const changeBy = function (amount) {
// 	// 	salary += amount;
// 	// };

// 	return {
// 		raise(amount) {
// 			salary += amount;
// 		},

// 		lower(amount) {
// 			salary -= amount;
// 		},

// 		current() {
// 			return `Поточна зарплата ${employeeName} - ${salary}`;
// 		},
// 	};
// };

// const salaryManager = salaryManagerFactory("Mango", 5000);
// console.log(salaryManager.current());
// salaryManager.raise(1000);
// console.log(salaryManager.current());
// salaryManager.lower(3000);
// console.log(salaryManager.current());

// ------------------------------

// const myLibFactory = function () {
// 	let value = 0;

// 	const add = function (num) {
// 		value += num;
// 	};

// 	return {
// 		add,
// 		getValue() {
// 			return value;
// 		},
// 	};
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue()); // 0
// myLib.add(10);
// console.log(myLib.getValue()); // 10
// console.log(myLib.value); // undefind
//

// ---------------------------

//
// const fnA = function () {
// 	return {
// 		arrow: 5,
// 	};
// };
// console.log(fnA());

// const fnB = () => ({ arrow: 10 });
// console.log(fnB());

// const numbers = [5, 10, 15, 20, 25];

// 				forEach
//
// numbers.forEach(function (number) {
// 	console.log("number", number);
// });
//

// 				Map
//
// const doubleNumbers = numbers.map(number => number * 2);
// console.log(doubleNumbers); // [10, 20, 30, 40, 50]
//

// const players = [
// 	{ id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
// 	{ id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
// 	{ id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
// 	{ id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
// 	{ id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const playersName = players.map(player => player.name);
// console.log(playersName); // ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Chelsy']

// const updatesPlayers = players.map(player => {
// 	return {
// 		...player,
// 		points: player.points * 1.1,
// 	};
// });
// console.log(updatesPlayers);

// const playerIdToUpdate = "player-3";

// const updatePlayerThree = players.map(player => {
// 	// 1 спосіб
// 	// if (player.id === playerIdToUpdate) {
// 	// 	return {
// 	// 		...player,
// 	// 		timePlayed: player.timePlayed + 100,
// 	// 	};
// 	// }
// 	// return player;

// 	// 2 спосіб
// 	return player.id === playerIdToUpdate
// 		? {
// 				...player,
// 				timePlayed: player.timePlayed + 100,
// 		  }
// 		: player;
// });

// console.log(updatePlayerThree);

// const filtred = players.filter(player => player.timePlayed > 200);
// console.log(filtred);

// const falsePlayers = players.filter(player => !player.online);
// console.log(falsePlayers);

// const foundPlayerThree = players.find(player => player.name === "Kiwi");
// const foundPlayerThree = players.find(({ id }) => id === playerIdToUpdate);

// console.log(foundPlayerThree); //{id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true}

// const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline); // false

// const isSomeOnline = players.some(player => player.online);
// console.log(isSomeOnline); // true

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 100);
// console.log(total); // 175

// const salary = {
// 	mango: 100,
// 	poly: 50,
// 	ajax: 150,
// };

// const totalSalary = Object.values(salary);
// const sumary = totalSalary.reduce((acc, salary) => acc + salary, 0);
// console.log(sumary); // 300

// const totalPoints = players.reduce((acc, { points }) => acc + points, 0);
// // const totalPoints = players.reduce((acc, player) => acc + player.points, 0);

// console.log(totalPoints); // 313

// const cart = [
// 	{ label: "Apples", price: 100, quantity: 2 },
// 	{ label: "Bananas", price: 120, quantity: 3 },
// 	{ label: "Lemons", price: 70, quantity: 4 },
// ];
// const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
// console.log(totalAmount); // 840

// const tweets = [
// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const tags = tweets.flatMap(tweet => tweet.tags);

// console.log(tags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// const allTags = tweets.reduce((tags, tweet) => {
// 	tags.push(...tweet.tags);
// 	return tags;
// }, []);
// console.log(allTags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// const uniqTags = allTags.reduce(
// 	(acc, tag) => ({
// 		...acc,
// 		[tag]: acc[tag] ? acc[tag] + 1 : 1,
// 	}),
// 	{},
// );
// console.log(uniqTags); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// const abc = [5, 9, 3, 7, 2, 0, 8];
// for (let i = 0; i < abc.length; i += 1) {
// 	for (let n = 1; n < abc.length - i; n += 1) {
// 		const first = abc[n - 1];
// 		const second = abc[n];
// 		if (first > second) {
// 			abc[n - 1] = second;
// 			abc[n] = first;
// 		}
// 	}
// }
// console.log(abc);

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(numbers); // [1, 2, 3, 6, 9]

// numbers.sort((a, b) => a - b);
// console.log(numbers); // [1, 2, 3, 6, 9]

// const copyNumbers = [...numbers].sort((a, b) => b - a);
// console.log(copyNumbers); // [9, 6, 3, 2, 1]

// const letters = ["b", "B", "a", "A"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'a', 'b']

// const players = [
// 	{ id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
// 	{ id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
// 	{ id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
// 	{ id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
// 	{ id: "player-5", name: "Chelsy", timePlayed: 80, points: 49, online: true },
// ];

// const sortedByTimePlayers = [...players].sort(
// 	(prevPlayers, nextPlayers) => prevPlayers.timePlayed - nextPlayers.timePlayed,
// );
// console.log(sortedByTimePlayers);

// const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => prevPlayer.points - nextPlayer.points);
// console.log(sortedByBestPlayers);

// const sortedByMostResultPlayer = [...players].sort(
// 	(prevPlayer, nextPlayer) => prevPlayer.timePlayed / prevPlayer.points - nextPlayer.timePlayed / nextPlayer.points,
// );
// console.log(sortedByMostResultPlayer);

// const sortByName = [...players].sort((prevPlayer, nextPlayer) => {
// 	const res = prevPlayer.name[0] > nextPlayer.name[0];
// 	if (res) {
// 		return 1;
// 	}
// 	if (!res) {
// 		return -1;
// 	}
// });
// console.log(sortByName);

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array); // [1, 2, Array(2), Array(2)]
// console.log(array.flat()); // [1, 2, 4, Array(1), 6, Array(3)]
// console.log(array.flat(2)); // [1, 2, 4, 5, 6, 7, 8, Array(1)]
// console.log(array.flat(3)); // [1, 2, 4, 5, 6, 7, 8, 9]

// const tweets = [
// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// // const tags = tweets.map(t => t.tags).flat();
// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

// const stats = tweets
// 	.flatMap(tweet => tweet.tags)
// 	.reduce(
// 		(acc, tag) => ({
// 			...acc,
// 			[tag]: acc[tag] ? acc[tag] + 1 : 1,
// 		}),
// 		{},
// 	);

// console.log(stats);
// const numbers = [1, 5, 2, 4, 3];

// const sortedMultyplyGreaterThenTwoNumbers = numbers
// 	.filter(n => n > 2)
// 	.map(n => n * 3)
// 	.sort((a, b) => a - b);

// console.log(sortedMultyplyGreaterThenTwoNumbers); // [9, 12, 15]

// const onlineAndSorted = players
// 	.filter(player => player.online)
// 	.sort((prevPlayer, nextPlayer) => prevPlayer.points - nextPlayer.points);
// console.log(onlineAndSorted);
/*
(3) [{…}, {…}, {…}]
0: {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true}
1: {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 49, online: true}
2: {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true}
*/

//
// 						Lodash
// 						-----
//

//
// 						_.isEmpty(value)
// 						-------
//
// console.log(_.isEmpty({}));
// console.log(_.isEmpty(1));
// console.log(_.isEmpty(tweets));

// const user = {
// 	name: "Mango",
// 	age: 18,
// 	location: {
// 		city: "Lviv",
// 		street: "Nazaruka",
// 	},
// };
// console.log(user?.location?.city); // Lviv
// console.log(user?.location?.buildings); // undefined

//
// 								_.sortBy(collection, [iteratees=[_.identity]])
// 								-------
//
// const users = [
// 	{ user: "fred", age: 48 },
// 	{ user: "barney", age: 36 },
// 	{ user: "fred", age: 34 },
// 	{ user: "barney", age: 40 },
// ];
// console.log(_.sortBy(users, ["user", "age"]));
/*
[{…}, {…}, {…}, {…}]
0: {user: 'barney', age: 36}
1: {user: 'barney', age: 40}
2: {user: 'fred', age: 34}
3: {user: 'fred', age: 48}
*/

// 						_.sum(array)
// 						----
//
// console.log(_.sum([1, 2, 3, 4, 5])); // 15
//

//
// 					_.sumBy(array, [iteratee=_.identity])
// 					-----
//
// const tweets = [
// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// console.log(_.sumBy(tweets, tweet => tweet.likes)); //32
//

//
// 					_.union([arrays])
// 					------
//
// console.log(_.union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
//

//
// 					_.uniq(array)
// 					------------
//
// console.log(_.uniq([1, 3, 5, 6, 3, 5, 2, 1])); // [1, 3, 5, 6, 2]
//

// 					_.minBy(array, [iteratee=_.identity])
// 					----------------------------------
//
// console.log(_.minBy(tweets, tweet => tweet.likes)); // {id: '004', likes: 0, tags: Array(3)}
//

//
// 						_.camelCase([string=''])
// 					----------------------------------
//
// console.log(_.camelCase("a b c")); // aBC
//

//
// 						Callback
// 						-------
//
// const array = [2, 6, 1, 7, 3];
// function each(arr) {
// 	let total = 0;
// 	for (const item of arr) {
// 		total += item;
// 		// console.log(item);
// 	}
// 	return total;
// }

// function each(arr, callback) {
// 	let total = arr[0];
// 	for (let i = 1; i < arr.length; i += 1) {
// 		total = callback(total, arr[i]);
// 	}
// 	return total;
// }
// // console.log(each(arr)); // 19

// function add(x, y) {
// 	return x + y;
// }

// function sub(x, y) {
// 	return x - y;
// }

// function multi(x, y) {
// 	return x * y;
// }

// function div(x, y) {
// 	return x / y;
// }

// console.log(each(arr, add)); // 19
// console.log(each(arr, sub)); // -15
// console.log(each(arr, multi)); // 252
// console.log(each(arr, div)); // 0.015873015873015872

// const array = [2, 6, 1, 7, 3];

// array.forEach((item, idx, arr) => (arr[idx] = item * 2));
// console.log(array); // [4, 12, 2, 14, 6]

//
// 						Arrow function
//
// const foo = (...rest) => {
// 	console.log(rest);
// };
// foo(1, 2, 3, 4, 5);
//

//
// 						Task 1. Callback
// 						---------------
//
// - createProduct(obj, callback) - приймає об.товару без id, а також callback.
// 	Ф - я ств.об.товару, додаючи йому унікальний ідентифікатор у влстивість id
// та викликає колбек передаючи йому ств.об.
// - logProduct(product) - коллбек приймаючий об.продукту і логуючий його в консоль.
// - logTotalPrice(product) - колбек, що приймає об.продукту і логіює заг.вартість
// товару в консоль.
//
// function createProduct(obj, callback) {
// 	const product = {
// 		id: Date.now(),
// 		...obj,
// 	};
// 	callback(product);
// }

// function logProduct(product) {
// 	console.log(`Product ${product.name}`);
// }

// function logTotalPrice({ price, quantity }) {
// 	console.log(`Total price ${price * quantity}`);
// }

// createProduct(
// 	{
// 		name: "apple",
// 		price: 30,
// 		quantity: 3,
// 	},
// 	logProduct,
// );

// createProduct(
// 	{
// 		name: "lemon",
// 		price: 20,
// 		quantity: 5,
// 	},
// 	logProduct,
// );

// createProduct(
// 	{
// 		name: "apple",
// 		price: 30,
// 		quantity: 3,
// 	},
// 	logTotalPrice,
// );

// createProduct(
// 	{
// 		name: "lemon",
// 		price: 20,
// 		quantity: 5,
// 	},
// 	logTotalPrice,
// );
//

//
// 						Task 2. Callback
// 						---------------
//
// Додайте в об.account методи withdraw(amount, onSucces, onError)  та
// deposit(amount, onSucces, onError), де перший параметр - сума операції,
// а другий та третій колбеки.
// Метод Withdraw виклткає onError, якщо amount більше TRANSACTION_LIMIT або
// this.balance, і onSucces в іншому випадку.
// Метод deposit викликає onError, якщо amount більше TRANSACTION_LIMIT або
// менше або дорівнює нулю, і onSucces в іншому випадку.
//
// const TRANSACTION_LIMIT = 1000;

// const account = {
// 	userName: "Jacob",
// 	balance: 400,

// 	getBalance() {
// 		console.log(this.balance);
// 	},

// 	withdraw(amount, onSucces, onError) {
// 		if (amount > TRANSACTION_LIMIT) {
// 			return onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`);
// 		} else if (amount > this.balance) {
// 			return onError(`Not enough in the balance!`);
// 		}

// 		this.balance -= amount;
// 		return onSucces(`Сash withdrawn ${amount}`);
// 	},

// 	deposit(amount, onSucces, onError) {
// 		if (amount > TRANSACTION_LIMIT) {
// 			return onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`);
// 		} else if (amount <= 0) {
// 			return onError(`Put your money!`);
// 		}

// 		this.balance += amount;
// 		return onSucces(`Deposit replenished on ${amount}`);
// 	},
// };

// function handleSuccess(message) {
// 	console.log(`✔ Success! ${message}`);
// }
// function handleError(message) {
// 	console.log(`❌ Error! ${message}`);
// }
// account.getBalance();
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.getBalance();
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// account.getBalance();
//

//
// 						Task 3. Callback
// 						---------------
//
// Написати ф - ю each(array, callback), яка першим параметром очікує масив,
// а другим - ф - ю, яка застосовується до кожного ел.масиву.Ф - я each
// повинна повернути новий масив, ел. якого будуть результати виклику колбека.
//
// function each(array, callback) {
// 	const newArray = [];
// 	for (let i = 0; i < array.length; i += 1) {
// 		newArray.push(callback(array[i]));
// 	}
// 	return newArray;
// }
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value * 2;
// 	}),
// );
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value - 10;
// 	}),
// );
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return Math.sqrt(value);
// 	}),
// );
// console.log(
// 	each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// 		return Math.ceil(value);
// 	}),
// );
//

//
// 						Task 4. Aarow functions
// 						---------------
//
// Виконайте рефакторинг за допомогою стрілочних ф - й
//
// const createProduct = (obj, callback) =>
// 	callback({
// 		id: Date.now(),
// 		...obj,
// 	});

// const logProduct = product => console.log(`Product ${product.name}`);

// const logTotalPrice = ({ price, quantity }) => console.log(`Total price ${price * quantity}`);

// createProduct(
// 	{
// 		name: "🍎",
// 		price: 30,
// 		quantity: 3,
// 	},
// 	logProduct,
// );

// createProduct(
// 	{
// 		name: "🍋",
// 		price: 20,
// 		quantity: 5,
// 	},
// 	logProduct,
// );

// createProduct(
// 	{
// 		name: "🍎",
// 		price: 30,
// 		quantity: 3,
// 	},
// 	logTotalPrice,
// );

// createProduct(
// 	{
// 		name: "🍋",
// 		price: 20,
// 		quantity: 5,
// 	},
// 	logTotalPrice,
// );
//

//
// 						Task 5. Aarow functions
// 						---------------
//
// Виконати рефакторинг колбеків за допомогою стрілочних ф-й
//
// const TRANSACTION_LIMIT = 1000;

// const account = {
// 	userName: "Jacob",
// 	balance: 400,

// 	getBalance() {
// 		console.log(this.balance);
// 	},

// 	withdraw(amount, onSucces, onError) {
// 		if (amount > TRANSACTION_LIMIT) {
// 			return onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`);
// 		} else if (amount > this.balance) {
// 			return onError(`Not enough in the balance!`);
// 		}

// 		this.balance -= amount;
// 		return onSucces(`Сash withdrawn ${amount}`);
// 	},

// 	deposit(amount, onSucces, onError) {
// 		if (amount > TRANSACTION_LIMIT) {
// 			return onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`);
// 		} else if (amount <= 0) {
// 			return onError(`Put your money!`);
// 		}

// 		this.balance += amount;
// 		return onSucces(`Deposit replenished on ${amount}`);
// 	},
// };

// const handleSuccess = message => console.log(`✔ Success! ${message}`);

// const handleError = message => console.log(`❌ Error! ${message}`);

// account.getBalance();
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.getBalance();
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// account.getBalance();
//

//
// 						Task 6. Inline Aarow functions
// 						---------------
//
// Виконати рефакторинг колбеків за допомогою стрілочних ф-й
//
// function each(array, callback) {
// 	const newArray = [];
// 	for (let i = 0; i < array.length; i += 1) {
// 		newArray.push(callback(array[i]));
// 	}
// 	return newArray;
// }
// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
//

//
// 						Task 7. Метод forEach
// 						---------------
//
// Виконати рефакторинг коду за допомогою методу forEach та стріл. ф-й
//
// const logItems = array => array.forEach((el, idx) => console.log(`${idx + 1} - ${el}`));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
//

//
// 						Task 8. Метод forEach
// 						---------------
//
// Виконати рефакторинг коду за допомогою методу forEach та стріл. ф-й
//
// const calculateAverage = (...rest) => {
// 	let total = 0;
// 	rest.forEach(el => (total += el));
// 	return total / rest.length;
// };

// const calculateAverage = (...rest) => rest.reduce((acc, el) => acc + el, 0) / rest.length;

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// const cars = [
// 	{ make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 22045, onSale: true },
// 	{ make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
// 	{ make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
// 	{ make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
// 	{ make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
// 	{ make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
// 	{ make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
// 	{ make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
// 	{ make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
// 	{ make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false },
// ];
// //

// //
// // 						Task 1. Map()
// // 							-------
// //
// // Ф-я getModels повертає масив моделей всіх авто
// //
// // function getModels(arr) {
// // 	return arr.map(({ model }) => model);
// // }

// // const getModels = arr => arr.map(({ model }) => model);

// // console.log(getModels(cars)); // ['CR-V', 'Accord', 'Mazda 6', 'CX-9', '4Runner', 'Sequoia', 'Tacoma', 'F-150', 'Fusion', 'Explorer']
// //

// //
// // 						Task 2. Map()
// // 							-------
// //
// // Ф - я makeCarsWithDiscount  повертає новий масив об.із змінним значенням властивості price
// // залежно від переданої знижки
// //
// // const makeCarsWithDiscount = (cars, discount) => {
// // 	return cars.map(car => ({
// // 		...car,
// // 		price: car.price * (1 - discount),
// // 	}));
// // };

// // console.log(makeCarsWithDiscount(cars, 0.2));
// // console.log(makeCarsWithDiscount(cars, 0.4));
// //

// //
// // 						Task 3. Filter()
// // 							-------
// //
// // Ф-я filterByPrice() повертає масив авто ціна яких менша ніж зазначена в параметрі threshold
// //
// // const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold);
// // console.log(filterByPrice(cars, 30000));
// // console.log(filterByPrice(cars, 25000));
// //

// //
// // 						Task 4. Filter()
// // 							-------
// //
// // Ф-я getCarsWIthDiscount() повертає масив авто властивість onSale яких true
// //
// // const getCarsWIthDiscount = cars => cars.filter(({ onSale }) => onSale);
// // console.log(getCarsWIthDiscount(cars));
// //

// //
// // 						Task 5. Filter()
// // 							-------
// //
// // Ф-я getCarsWIthTypet() повертає масив авто тип яких збігається із значенням параметра type
// //
// // const getCarsWIthType = (cars, type) => cars.filter(({ type: carType }) => carType === type);
// // console.log(getCarsWIthType(cars, "suv"));
// // console.log(getCarsWIthType(cars, "sedan"));
// // console.log(getCarsWIthType(cars, "truck"));
// //

// //
// // 						Task 6. Find()
// // 							-------
// //
// // Ф-я getCarByModdel() повертає авто модель якого зазначена в параметрі model
// //
// // const getCarByModdel = (cars, model) => cars.find(({ model: carModel }) => carModel === model);

// // console.log(getCarByModdel(cars, "F-150"));
// // console.log(getCarByModdel(cars, "Accord"));
// // console.log(getCarByModdel(cars, "Sequoia"));
// // console.log(getCarByModdel(cars, "Fusion"));
// //

// //
// // 						Task 7. Sort()
// // 							-------
// //
// // Ф-я sortByAscendingAmount() повертає новий масив авто відсортований за зростанням
// // значення якості amount
// //
// // const sortByAscendingAmount = cars => cars.sort((a, b) => a.amount - b.amount);
// // const sortByAscendingAmount = cars => [...cars].sort(({ amount: a }, { amount: b }) => a - b);

// // console.log(sortByAscendingAmount(cars));
// //

// //
// // 						Task 8. Sort()
// // 							-------
// //
// // Ф-я sortByDescendingPrice повертає новий масив авто відсортований за зменшенням
// // значення властивості price
// //
// // const sortByDescendingPrice = cars => cars.sort((a, b) => b.price - a.price);
// // const sortByDescendingPrice = cars => [...cars].sort(({ price: a }, { price: b }) => b - a);

// // console.log(sortByDescendingPrice(cars));
// //

// //
// // 						Task 9. Sort()
// // 							-------
// //
// // Ф-я sortByModel повертає новий масив авто відсортований за назвою моделі в алфавітному та
// // зворотньоалфавітному порядку, в залежності від значення параметра order
// //
// // const sortByModel = (cars, order) =>
// // 	[...cars].sort(({ model: a }, { model: b }) => {
// // 		if (order === "asc") {
// // 			return a.localeCompare(b);
// // 		} else if (order === "desc") {
// // 			return b.localeCompare(a);
// // 		}
// // 	});
// // console.log(sortByModel(cars, "asc"));
// // console.log(sortByModel(cars, "desc"));
// //

// //
// // 						Task 10. Reduce()
// // 							-------
// //
// // Ф-я getTotalAmount повертає загальну к-сть авто (значення властивості amount)
// //
// // const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);
// // const getTotalAmount = cars => cars.reduce((acc, { amount }) => acc + amount, 0);

// // function getTotalAmount(cars) {
// // 	let total = 0;
// // 	for (let i = 0; i < cars.length; i += 1) {
// // 		total += cars[i].amount;
// // 	}
// // 	return total;
// // }

// // console.log(getTotalAmount(cars));
// //

// //
// // 						Task 11. Ланцюжки методів
// // 							-------------------
// //
// // Ф-я getAvailableCarNames повертає масив моделей авто, але тільки тих, які зараз на розпродажі
// //
// // const getAvailableCarNames = cars => [...cars].filter(({ onSale }) => onSale).map(({ model }) => model);
// // console.log(getAvailableCarNames(cars)); // ['CR-V', 'Accord', 'CX-9', 'Tacoma', 'F-150', 'Fusion']

// // const getAvailableCarModelNames = cars =>
// // 	cars.filter(({ onSale }) => onSale).map(({ make, model }) => `${make} ${model}`);
// // console.log(getAvailableCarModelNames(cars));
// // ['Honda CR-V', 'Honda Accord', 'Mazda CX-9', 'Toyota Tacoma', 'Ford F-150', 'Ford Fusion']

// //
// // 						Task 12. Ланцюжки методів
// // 							-------------------
// //
// // Ф-я getSortedCarsOnSale повертає масив авто на розпродажі (влстивість onSale), відсортованих
// // за зростанням ціни
// //
// /**
//  * Get cars on sale and sort them
//  * @param {Array} cars - Array with object
//  * @returns {Array} - sorted array on sale
//  */
// // const getSortedCarsOnSale = cars => cars.filter(({ onSale }) => onSale).sort(({ price: a }, { price: b }) => a - b);
// // console.table(getSortedCarsOnSale(cars));

// // const str = "sdgfhskrnteruahutiahaskjfbjharebgagnrg";
// // /**
// //  *
// //  * @param {str} str
// //  * @returns object
// //  */
// // const getValueLetter = str =>
// // 	str.split("").reduce((acc, letter) => {
// // 		acc.hasOwnProperty(letter) ? (acc[letter] += 1) : (acc[letter] = 1);
// // 		return acc;
// // 	}, {});
// // console.log(getValueLetter(str));

// // const arr = ["Honda", "Audi", "BMW", "Skoda", "Ford", "VolksWagen"];
// // const arr2 = [];
// // const result = arr =>
// // 	arr.reduce(
// // 		(acc, car, idx) => {
// // 			return acc + `${idx + 1} - ${car}\n`;
// // 		},
// // 		arr.length ? `Загальна кількість авто  ${arr.length}: \n` : `Вибачте авто немає!`,
// // 	);

// // console.log(result(arr));
// // console.log(result(arr2));

// // function changeEven(numbers, value) {
// // 	const newArr = [];
// // 	numbers.forEach(element => {
// // 		if (!(element % 2)) {
// // 			newArr.push((element += value));
// // 		} else newArr.push(element);
// // 	});
// // 	return newArr;
// // }
// // const arr = [1, 2, 3, 4, 5];
// // const changeEven = (arr, value) => arr.map(el => (!(el % 2) ? (el += value) : el));
// // console.log(changeEven(arr, 10)); // [1, 12, 3, 14, 5]
// // console.log(arr);

// // const TRANSACTION_LIMIT = 1000;
// // const account = {
// // 	__username: "Jacob",
// // 	balance: 400,
// // 	withdraw(amount, onError, onSuccess) {
// // 		if (amount > TRANSACTION_LIMIT) {
// // 			return onError("Your limit is smaller");
// // 		} else if (amount > this.balance) {
// // 			return onError("Your balance is smaller");
// // 		}
// // 		this.balance -= amount;

// // 		return onSuccess(`Operation - success! Your balance is ${this.balance}`);
// // 	},
// // 	deposit(amount, onError, onSuccess) {
// // 		if (amount > TRANSACTION_LIMIT) {
// // 			return onError("Your limit is smaller");
// // 		} else if (amount <= 0) {
// // 			return onError("Put some money, dude");
// // 		}
// // 		this.balance += amount;

// // 		return onSuccess(`Operation - success! Your balance is ${this.balance}`);
// // 	},
// // };
// // const handleError = message => console.log(`❌ Error! ${message}`);

// // const hundleSuccess = message => console.log(`✔ Success! ${message}`);

// // account.withdraw(600, handleError, hundleSuccess);
// // account.withdraw(200, handleError, hundleSuccess);
// // console.log(account.balance);
// // account.deposit(1200, handleError, hundleSuccess);
// // account.deposit(900, handleError, hundleSuccess);
// // console.log(account.balance);
// // console.log(account.__username);
// // // account.__username = "Paul";
// // // console.log(account.username);

// // function each(arr, callback) {
// // 	return arr.map(el => callback(el));
// // }
// // const multiplyOnTwo = el => el * 2;
// // const subtractionTen = el => el - 10;
// // const sqrtEl = el => Math.sqrt(el);
// // const ceilEl = el => Math.ceil(el);
// // const floorEl = el => Math.floor(el);
// // const arr = [1, 2, 3, 4, 5];
// // const arr2 = [1.4, 2.26, 3.954, 4.036, 5.5126];

// // console.log(each(arr, multiplyOnTwo));
// // console.log(each(arr, subtractionTen));
// // console.log(each(arr, sqrtEl));
// // console.log(each(arr2, ceilEl));
// // console.log(each(arr2, floorEl));
// // console.log(arr);
// // console.log(arr2);

// // const printContacts = ({ names, phones }) => {
// // 	const nameList = names.split(",");
// // 	const phoneList = phones.split(",");

// // 	nameList.forEach((name, idx) => {
// // 		console.log(`${idx + 1} - ${name}: ${phoneList[idx]}`);
// // 	});
// // };

// // printContacts({
// // 	names: "Jacob,William,Bob",
// // 	phones: "000000000,111111111,222222222",
// // });

// // const calculateAverage = (...rest) => {
// // 	let total = 0;
// // 	rest.forEach(item => (total += item));
// // 	return total / rest.length;
// // };
// // console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// // console.log(calculateAverage(14, 8, 2)); // 8
// // console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// // const customForEach = (arr, callback) => {
// // 	for (let i = 0; i < arr.length; i += 1) {
// // 		const el = arr[i];
// // 		callback(el, i, arr);
// // 	}
// // };
// // const forEachIterator = (value, i) => console.log(value, i);
// // customForEach([11, 22, 43, 54, 65], forEachIterator);

// // const sortByAscendingAmount = (cars = []) => [...cars].sort(({ amount: a }, { amount: b }) => a - b);
// // console.log(sortByAscendingAmount(cars));
// // const sortByModel = (cars, order) => {
// // 	switch (order) {
// // 		case "asc":
// // 			return [...cars].sort(({ model: a }, { model: b }) => a.localeCompare(b));
// // 		case "desc":
// // 			return [...cars].sort(({ model: a }, { model: b }) => b.localeCompare(a));
// // 		default:
// // 			return cars;
// // 	}
// // };
// // console.log(sortByModel(cars, "asc"));
// // console.log(sortByModel(cars, "desc"));
// // console.log(sortByModel(cars, "d"));

// // console.log(cars);

// // const getTotalAmount = (cars = []) => cars.reduce((acc, { amount }) => acc + amount, 0);
// // console.log(getTotalAmount(cars));

// // console.log(cars);
// const getAvailableCarNames = (cars = []) => cars.filter(car => car.onSale).map(car => car.model);
// console.log(getAvailableCarNames(cars));

// const getSortedCarsOnSale = (cars = []) => cars.filter(car => car.onSale).sort(({ price: a }, { price: b }) => a - b);
// console.log(getSortedCarsOnSale(cars));

// 									Task 1
// 									-----
//
// Необхідно написати логіку обробки замовлення піци.Виконай рефакторинг методу order
// таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order
// повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок
// "There is no pizza with a name <имя пиццы> in the assortment."
//
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order
// повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву
// замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка,
// нічого там не міняй.
//

// const pizzaPalace = {
// 	pizzas: ["Ultracheese", "Smoked", "Four meats"],
// 	order(pizzaName, onSuccess, onError) {
// 		const isPizza = this.pizzas.find(pizza => pizza === pizzaName);
// 		if (!isPizza) {
// 			return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
// 		}
// 		return onSuccess(`${pizzaName}`);
// 	},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
// 	return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
// 	return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
//

//
// 							Task 2. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// 							------
//
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив,
// в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach

// const filterArray = (numbers, value) => {
// 	const newArr = [];
// 	numbers.forEach(number => {
// 		if (number > value) {
// 			newArr.push(number);
// 		}
// 	});
// 	return newArr;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
// //

//
// 							Task 3. СПІЛЬНІ ЕЛЕМЕНТИ
// 							-----------------------
//
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в
// параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих,
// які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція getCommonElements(firstArray, secondArray)
// Для перебирання параметра(масиву) використаний метод forEach

// const getCommonElements = (firstArray, secondArray) => {
// 	const commonElements = [];
// 	firstArray.forEach(firstItem => {
// 		const foundItem = secondArray.find(secondItem => secondItem === firstItem);
// 		if (foundItem) {
// 			commonElements.push(firstItem);
// 		}
// 	});
// 	return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
// //

//
// 							Task 4. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// 							-----------------------------------
//
// const changeEven = (numbers, value) => {
// 	const newArr = [];
// 	numbers.forEach(number => (!(number % 2) ? newArr.push(number + value) : newArr.push(number)));
// 	return newArr;
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]
// //

//
// 							Task 5.
// 							-----------------------------------
//
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		skills: ["ipsum", "lorem"],
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		skills: ["nulla", "anim", "proident", "ipsum", "elit"],
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		skills: ["adipisicing", "irure", "velit"],
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		skills: ["ex", "culpa", "nostrud"],
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		skills: ["non", "amet", "ipsum"],
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		skills: ["lorem", "veniam", "culpa"],
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив
// користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається
// у властивості friends.

// Оголошена змінна getUsersWithFriend
// Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає масив об'єктів
// користувачів з іменами Sharlene Bush і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає масив об'єктів
// користувачів з іменами Elma Head і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// 1 спосіб
// const getUsersWithFriend = (users, friendName) =>
// 	users.filter(({ friends }) => friends.some(name => name === friendName));

// 2 спосіб
// const getUsersWithFriend = (users, friendName) =>
// 	users.filter(({ friends }) => friends.includes(friendName));

// console.log(getUsersWithFriend(users, "Briana Decker")); // Sharlene Bush і Sheree Anthony
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // Elma Head і Sheree Anthony
// console.log(getUsersWithFriend(users, "Adrian Cross")); // []
// //

//
// 							Task 6.
// 							-----------------------------------
//
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів
// (властивість friends).У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив,
// що повертається, не містив повторень.

// Оголошена змінна getFriends
// Змінній getFriends присвоєна стрілочна функція з параметром (users)
// Виклик функції із зазначеним масивом користувачів повертає масив["Sharron Pace", "Briana Decker",
// "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran",
// "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
// 1 спосіб
// const getFriends = users =>
// 	users.flatMap(({ friends }) => friends).filter((friend, idx, arr) => arr.indexOf(friend) === idx);
// console.log(getFriends(users)); // ['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman']

// 2 спосіб
// const friends = Object(users.flatMap(user => user.friends));

// const getFriends = [...new Set(friends)];
// console.log(getFriends); // ['ct.valueSharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman']
// //

//
// 							Task 7.
// 							-----------------------------------
//
// const getUserWithEmail = (users, email) => users.find(({ email: userEmeil }) => userEmeil === email);
// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // Sheree Anthony
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // Elma Head
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com")); // Blackburn Dotson
// console.log(getUserWithEmail(users, "black@furnigeer.com")); // undefined
//

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(el => !(el % 2));
// console.log(eachElementInFirstIsEven); // true
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2);
// console.log(eachElementInFirstIsOdd); // false

// const eachElementInSecondIsEven = secondArray.every(el => !(el % 2));
// console.log(eachElementInSecondIsEven); // false
// const eachElementInSecondIsOdd = secondArray.every(el => el % 2);
// console.log(eachElementInSecondIsOdd); // true

// const eachElementInThirdIsEven = thirdArray.every(el => !(el % 2));
// console.log(eachElementInThirdIsEven); // false
// const eachElementInThirdIsOdd = thirdArray.every(el => el % 2);
// console.log(eachElementInThirdIsOdd); // false
// //

//
// 							Task 8.
// 							-----------------------------------
//
// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244,
// };
// const playtimes = Object.values(players);
// console.log(playtimes); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, number) => acc + number);
// console.log(totalPlayTime); // 2692

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime); // 673
// //

//
// 							Task 9.
// 							-----------------------------------
// //
// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну
// кількість друзів(властивість friends) усіх користувачів з масиву users.

// Оголошена змінна getTotalFriendCount
// Змінній getTotalFriendCount присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 14
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
// const getTotalFriendCount = users => users.reduce((acc, { friends }) => acc + friends.length, 0);
// console.log(getTotalFriendCount(users)); // 14
// //

//
// 							Task 9.
// 							-----------------------------------
// //
// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів,
// відсортований за спаданням кількості їхніх друзів(властивість friends).

// Оголошена змінна sortByDescendingFriendCount
// Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований
// за спаданням кількості їхніх друзів
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
// const sortByDescendingFriendCount = users => [...users].sort(({ friends: a }, { friends: b }) => b.length - a.length);
// console.table(sortByDescendingFriendCount(users));
// //

//
// 							Task 10.
// 							-----------------------------------
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів
// Оголошена змінна MIN_BOOK_RATING
// Значення змінної MIN_BOOK_RATING - це число 8
// Оголошена змінна names
// Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
// Використовується ланцюжок методів filter, map, sort
//
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{
// 		title: "The Dreams in the Witch House",
// 		author: "Howard Lovecraft",
// 		rating: 8.67,
// 	},
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// 	.filter(({ rating }) => rating > MIN_BOOK_RATING)
// 	.sort(({ author: a }, { author: b }) => a.localeCompare(b))
// 	.map(({ author }) => author);

// console.log(names);
// //

//
// 							Task 11.
//
// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен
// користувачів, відсортований за зростанням кількості їхніх друзів(властивість friends).

// Оголошена змінна getNamesSortedByFriendCount
// Змінній getNamesSortedByFriendCount присвоєна стрілочна функція з параметром (users)
// У тілі функції використовується ланцюжок методів
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає масив['Moore Hensley', 'Sharlene Bush',
// 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez']
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
// const getNamesSortedByFriendCount = users =>
// 	[...users].sort(({ friends: a }, { friends: b }) => a.length - b.length).map(({ name }) => name);

// console.log(getNamesSortedByFriendCount(users)); // ['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez']
// //

//
// 							Task 12.
//
// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів
// (властивість friends), відсортований за алфавітом.

// Оголошена змінна getSortedFriends
// Змінній getSortedFriends присвоєна стрілочна функція з параметром (users)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає масив["Adrian Cross", "Aisha Tran",
// "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman",
// "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
// const getSortedFriends = users =>
// 	[...users]
// 		.flatMap(({ friends }) => friends)
// 		.filter((friend, idx, arr) => arr.indexOf(friend) === idx)
// 		.sort((a, b) => a.localeCompare(b));
// console.log(getSortedFriends(users));
// //

//
// 							Task 13.
//
// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний
// баланс користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням
// параметра gender.

// Оголошена змінна getTotalBalanceByGender
// Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами (users, gender)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Якщо значення параметра gender - це рядок "male", функція повертає число 12053
// Якщо значення параметра gender - це рядок "female", функція повертає число 8863
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
// const getTotalBalanceByGender = (users, gender) =>
// 	users.filter(({ gender: userGender }) => userGender === gender).reduce((acc, { balance }) => acc + balance, 0);
// console.log(getTotalBalanceByGender(users, "female")); // 8863
// console.log(getTotalBalanceByGender(users, "male")); // 12053

//
// 							Замикання
// 							--------
//

// function bind(context, fn) {
// 	return function (...args) {
// 		fn.apply(context, args);
// 	};
// }

// function logPerson() {
// 	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: "John", age: 22, job: "Frontend" };
// const person2 = { name: "Mary", age: 21, job: "SMM" };

// // bind(person1, logPerson)();
// // bind(person2, logPerson)();

// const a = bind(person1, logPerson);
// const b = bind(person2, logPerson);

// a();
// b();
//

// function showMessage(text, name, som) {
// 	console.log(`${text}, ${name}, ${som}`);
// 	setTimeout(showMessage, 3000, "Hello", "World", "Boo!");
// }
// setTimeout(showMessage, 3000, "Hello", "World", "Boo!");
// setInterval(showMessage, 2000, "Hello", "World", "Boo!");

// function showClock(num) {
// 	console.log(num);
// 	if (num < 10) {
// 		setTimeout(showClock, 1000, ++num);
// 	}
// }

// setTimeout(showClock, 1000, 1);

// function showClock(num) {
// 	console.log(num);
// 	let timeClock = setTimeout(showClock, 1000, ++num);
// 	if (num === 10) {
// 		clearTimeout(timeClock);
// 	}
// }

// setTimeout(showClock, 1000, 1);

// function multiplyBy(num1) {
// 	return function (num2) {
// 		return num1 * num2;
// 	};
// }
// const a = multiplyBy(3);
// console.log(a(2));

// 								Замикання
// 								---------
//
// function createCounter(n) {
// 	let counter = 0;
// 	const myFunction = function () {
// 		counter = counter + 1 + n;
// 		return counter;
// 	};
// 	return myFunction;
// }
// const increment = createCounter(1);
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log("example increment", c1, c2, c3);
// console.log(increment);
//

//
// let c = 4;
// const addX = x => n => n + x;
// const addThree = addX(3);
// let d = addThree(c);
// console.log("example partial application", d);
// console.log(addThree);
