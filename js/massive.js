// const clients = ["Mango", "Ajax", "Poly"];
//
// for (const client of clients) {
// 	console.log(client);
// }
//
// const string = "javascript";
//
// for (const character of string) {
// 	console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;
//
// for (const client of clients) {
// 	// На кожній ітерації будемо перевіряти чи збігається елемент масиву з
// 	// іменем клієнта. Якщо збігається - записуємо в message повідомлення
// 	// про успіх і робимо break, щоб далі не шукати
// 	if (client === clientNameToFind) {
// 		message = "Клієнт з таким ім'ям є в базі даних!";
// 		break;
// 	}
//
// 	// Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
// 	message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }
//
// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";
//
// for (const client of clients) {
// 	if (client === clientNameToFind) {
// 		message = "Клієнт з таким ім'ям є в базі даних!";
// 		break;
// 	}
// 	// Якщо не збігається, то на цій ітерації нічого не робимо
// }
//
// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
//
// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
// 	if (numbers[i] < threshold) {
// 		continue;
// 	}
//
// 	console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
//
// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (const number of numbers) {
// 	if (number < threshold) {
// 		continue;
// 	}
//
// 	console.log(`Число більше за ${threshold}: ${number}`); // 18, 29, 34
// }

// let a = 3;
// let b = a;
// a += 2;
// console.log("1: ", a, b);

// let c = [3];
// const d = c;
// c.push(5);
// console.log("2: ", c, d);

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5
//
// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5

// const a = ["Mango"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// // Метод split(delimiter)
//
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]
//
// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// // Метод масивів join(delimiter)
//
// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// // Метод indexOf()
//
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// // Метод includes()
//
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false
// Виносимо варіанти в масив

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);
//
// if (hasFruit) {
// 	console.log(`${fruit} is a red fruit!`);
// }

// Методи push() і pop()
// Метод push()
// const numbers = [];
//
// numbers.push(1);
// console.log(numbers); // [1]
//
// numbers.push(2);
// console.log(numbers); // [1, 2]
//
// numbers.push(3);
// console.log(numbers); // [1, 2, 3]
//
// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]
//
// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// Метод pop()
// const numbers = [1, 2, 3, 4, 5];
//
// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]
//
// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]
//
// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]
//
// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]
//
// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// Метод slice()
// slice(begin, end)
//
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
//
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]
//
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// Метод splice()
//
// Видалення - splice(position, num);
// - position - вказує на позицію (індекс) першого елемента для видалення
// - num - визначає кількість елементів, що видаляються
//
// const scores = [1, 2, 3, 4, 5];
//
// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);
//
// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]
//
// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// Додавання - splice(position, 0, new_element_1, new_element_2, ...)
// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
//
// const colors = ["red", "green", "blue"];
//
// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// Заміна - splice(position, num, new_element_1, new_element_2, ...)
// position - вказує на позицію (індекс) першого елемента для видалення
// - num - визначає кількість елементів, що видаляються
// - Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
//
// const languages = ["C", "C++", "Java", "JavaScript"];
//
// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]
//
// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// Метод concat()
//const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];
//
// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
//
// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]
//
// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// //Псевдомасив arguments
// Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments,
// яка доступна тільки всередині функції і зберігає всі аргументи у якості псевдомасиву.
//
// Псевдомасив - колекція з властивістю length і можливістю звернутися до елементу за індексом,
// але відсутністю більшості методів для роботи з масивом.
// Розглянемо приклад використання arguments у функції, яка множить будь-яку кількість аргументів:
//
// function multiply() {
// 	let total = 1;
// 	for (const argument of arguments) {
// 		total *= argument;
// 	}
// 	return total;
// }
//
// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// //Перетворення псевдомасиву
// Зазвичай псевдомасив необхідно перетворити у повноцінний масив, оскільки у псевдомасиву відсутні
// методи масиву, наприклад slice() або includes().На практиці застосовують декілька основних способів.
// Використовуючи метод Array.from(), який створить масив із псевдомасиву.
//
// function fn() {
//   // Змінна args буде містити повноцінний масив
//   const args = Array.from(arguments);
// }
// Використовуючи операцію ... (rest), вона дозволяє зібрати будь-яку кількість елементів,
//у нашому випадку аргументів, в масив, і зберегти його в змінну.Збираємо всі аргументи,
//використовуючи операцію rest безпосередньо в підписі функції.
//
// function fn(...args) {
//   // Змінна args буде містити повноцінний масив
// }

// function multiply() {
// 	let total = 1;
// 	const args = Array.from(arguments);
// 	for (const argument of args) {
// 		total *= argument;
// 	}
// 	return total;
// }
//
// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

//     // Task 1. Патерн «Раннє повернення»
//
//  Патерн «Раннє повернення» - це спосіб використовувати можливість дострокового повернення з функції
// за допомогою оператора return.
//
//     function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }
//
// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// //Рефакторинг з патерном «Раннє повернення».
//
// function withdraw(amount, balance) {
// 	// Якщо умова виконується, викликається console.log
// 	// і вихід із функції. Код після тіла if не виконається.
// 	if (amount === 0) {
// 		console.log("Для проведення операції введіть суму більшу за нуль");
// 		return;
// 	}
//
// 	// Якщо умова першого if не виконалась, його тіло пропускається
// 	// та інтерпретатор доходе до другого if.
// 	// Якщо умова виконується, викликається console.log і вихід із функції.
// 	// Код, що знаходиться після тіла if, не виконається.
// 	if (amount > balance) {
// 		console.log("Недостатньо коштів на рахунку");
// 		return;
// 	}
//
// 	// Якщо жоден із попередніх if не виконався,
// 	// інтерпретатор доходить до цього коду і виконує його.
// 	console.log("Операція зняття коштів проведена");
// }
//
// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена"

// // Функціональний вираз
//
//Функціональний вираз (function expression) - звичайне оголошення змінної, значенням якої буде функція.
//Різниця в тому, що функціональний вираз не можна викликати до місця його створення, тільки після нього,
// тому що це буквально оголошення const змінної.
//Альтернативний спосіб оголошення функції.
//
// Оголошення функції (function declaration)
// function multiply(x, y, z) {
// 	console.log(`Результат множення дорівнює ${x * y * z}`);
// }
//
// // Функціональний вираз (function expression)
// const multiply = function (x, y, z) {
// 	console.log(`Результат множення дорівнює ${x * y * z}`);
// };

// Стек - структура даних, яка працює за принципом LIFO (Last-In-First-Out),
//тобто останнім прийшов - першим пішов.

// Стек викликів (call stack) - це механізм для відстеження поточного місцезнаходження інтерпретатора
// в коді, який викликає декілька функцій.Яка із функцій виконується на цей момент, які функції
// викликаються всередині функції, що виконується, яка функція буде викликана наступною тощо.
//
// - Коли скрипт викликає функцію, інтерпретатор додає її в стек викликів і починає виконання.
// - Будь - які функції, викликані функцією, що виконується, додаються у стек викликів і виконуються,
// щойно відбувається їх виклик.
// - Коли виконання функції завершено, інтерпретатор знімає її зі стека викликів і відновлює виконання коду
// з тієї точки, де зупинився до цього.Тобто починає виконуватися функція, запис якої наступний у стеку.

// Stack frame(кадр стека, запис стека) - структура, яка додається у стек на момент виклику функції.
// Зберігає службову інформацію, наприклад, ім'я функції і номер рядка, в якому був виклик.

// function bar() {
// 	console.log("bar");
// }
//
// function baz() {
// 	console.log("baz");
// }
//
// function foo() {
// 	console.log("foo");
// 	bar();
// 	baz();
// }
//
// foo();
//

//  //Переповнення стека викликів
//
// Стек викликів - не безмежний, йому відводиться кінцевий об'єм пам'яті. Іноді в консолі можна побачити
// помилку "Uncaught RangeError: Maximum call stack size exceeded" - переповнення стека(stack overflow).
// Це може статися у випадку неправильного використання рекурсії або зациклення викликів функцій,
// тобто, якщо відбуваються нескінченні виклики функцій і результат не повертається, - стек збільшується.
// Така помилка виникне після досягнення ліміту кількості записів стека, і скрипт «падає».

// let arr = [1, 2, 3, 4];
// let total = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
// 	total += arr[i];
// }
// console.log(total); // 10

// arr[6] = 0;
// console.log(arr);

// function add(...arg) {
// 	let total = 0;
// 	const arr = Array.from(...arg);
//
// 	for (const ar of arr) {
// 		total += ar;
// 	}
// 	return total;
// }
//
// console.log(add([1, 2, 3, 4, 5]));
// console.log(add([2, 4, 6, 8, 10]));

// Task 2. Скрипт, який перераховує суму всіх парних чисел в масиві.
//
// const a = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// function addEven(...args) {
// 	const arguments = Array.from(...args);
// 	let totalEven = 0;
// 	for (const arg of arguments) {
// 		if (!(arg % 2)) {
// 			totalEven += arg;
// 		}
// 	}
// 	return totalEven;
// }
//
// console.log(addEven([1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11])); //72
// console.log(addEven([1, 3, 4, 5, 7, 9, 20, 11, 13, 15, 19, 6])); //30

// Task 3. Пошук логіна
//
// - Якщо логіна немає вивести повідомлення: "Користувач (логін) не знайдений!";
// - Якщо знайшли логін, вивести повідомлення: "Користувач (логін) знайдений!";
// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3mn4"];
// function findLogin(...args) {
// 	const arguments = Array.from(...args);
// 	const loginToFind = "poly1scute";
// 	// let message = `Користувач ${loginToFind} не знайдений!`;
//
// 	// for
// 	//
// 	// for (let i = 0; i < arguments.length; i += 1) {
// 	// 	if (loginToFind === arguments[i]) {
// 	// 		message = `Користувач ${loginToFind} знайдений!`;
// 	// 		break;
// 	// 	}
// 	// }
//
// 	// for of
// 	//
// 	// for (const arg of arguments) {
// 	// 	if (loginToFind === arg) {
// 	// 		message = `Користувач ${loginToFind} знайдений!`;
// 	// 		break;
// 	// 	}
// 	// }
//
// 	// ternar operator
// 	//
// 	// const message = arguments.includes(loginToFind)
// 	// 	? `Користувач ${loginToFind} знайдений!`
// 	// 	: `Користувач ${loginToFind} не знайдений!`;
//
// 	return message;
// }
//
// console.log(findLogin(logins));

// Task 4. Скрипт для пошуку найменшого числа в масиві.
// число унікальне (не повторяється).
// //
// const numbers = [51, 18, 13, 24, 7, 85, 1, 19];
//
// function minNumber(...args) {
// 	const arguments = Array.from(...args);
//
// 	// 1 спосіб
// 	// const minNum = Math.min(...arguments);
// 	// return minNum;
//
// 	// 2 спосіб
// 	// let minNum = arguments[0];
// 	// for (const num of arguments) {
// 	// 	if (num < minNum) {
// 	// 		minNum = num;
// 	// 	}
// 	// }
// 	// return minNum;
// }
// console.log(minNumber(numbers));
//
// // const numbers = [51, 18, 13, 24, 7, 85, 29];
// // const a = (1, 2, 3, 4, 6, 9, 8, 7);
// // const min = Math.min(...numbers);
// // console.log(min);

// Task 5. Скрипт, який обєднує всі ел. масиву в один рядок
//
// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// function makeString(...args) {
// 	const arguments = Array.from(...args);
// 	let str = "";
//
// 	// // 1 спосіб
// 	// str = arguments.join(",");
// 	// return str; //Mango,Poly,Kiwi,Ajax
//
// 	// // 2 спосіб
// 	// for (let i = 0; i < arguments.length; i += 1) {
// 	// 	str += arguments[i] + ",";
// 	// }
// 	// 	str = str.slice(0, -1);
// 	// return str; //Mango,Poly,Kiwi,Ajax
//
// 	// // 3 спосіб
// 	// for (const arg of arguments) {
// 	// 	str += arg + ",";
// 	// }
// 	// str = str.slice(0, -1);
// 	// return str; //Mango,Poly,Kiwi,Ajax
// }
// console.log(makeString(friends));

// Task 6. Скрипт змінює рігістр символів на протилежний.
//
// const string = "JavaScript";
// function invertedStrings(str) {
// 	let invertedString = "";
//
// // 1 спосіб
// for (let i = 0; i < str.length; i += 1) {
// 	if (str[i] === str[i].toLowerCase()) {
// 		invertedString += str[i].toUpperCase();
// 	} else {
// 		invertedString += str[i].toLowerCase();
// 	}
// }
// return invertedString; //jAVAsCRIPT
//
// // 2 спосіб
// for (const letter of str) {
// 	if (letter === letter.toLowerCase()) {
// 		invertedString += letter.toUpperCase();
// 	} else {
// 		invertedString += letter.toLowerCase();
// 	}
// }
// return invertedString; //jAVAsCRIPT
//
// // // 3 спосіб
// const letters = str.split("");
// // console.log(letters); //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
//
// for (const letter of letters) {
// 	if (letter === letter.toLowerCase()) {
// 		invertedString += letter.toUpperCase();
// 	} else {
// 		invertedString += letter.toLowerCase();
// 	}
// }
// return invertedString; //jAVAsCRIPT
//
// // 4 спосіб
// const letters = str.split("");
// for (const letter of letters) {
// 	const isEqual = letter === letter.toLowerCase();
// 	invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// return invertedString; //jAVAsCRIPT
// }
// console.log(invertedStrings(string));

// Task 7. Зробити слаг в URL із назви статті (напрю dev.to)
// Заголовок скл. тільки з букв і пробілів.
// function makeSlug(string) {
// //1 спосіб
// const slug = string.toLowerCase().replaceAll(" ", "-");
// return slug;
//
// //2 спосіб
// const slug = string.toLowerCase().split(" ").join("-") ;
// return slug; //top-10-benefits-of-react-framework
// }
// const title = "Top 10 benefits of React framework";
// console.log(makeSlug(title));

// Task 8. Скрипт підраховує суму ел. двох масивів.
//
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const array3 = array1.concat(array2);
// console.log(array3);
// let sum = 0;
// for (const el of array3) {
// 	sum += el;
// }
// console.log(sum);

// Task 9. Splice()
//
// const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];
//
// Видалення по індексу
// const cardToRemove = "Card-3";
// const index = cards.indexOf(cardToRemove); //2
// // console.log(index);
// cards.splice(index, 1);
// console.table(cards);

// Додавання по індексу
// const cardTInsert = "Card-6";
// const index = 3;
// cards.splice(index, 0, cardTInsert);
// console.table(cards);

//Заміна
// const cardToUpdate = "Card-4";
// const index = cards.indexOf(cardToUpdate);
// cards.splice(index, 1, "Refresh card-4");
// console.table(cards);

//  // Функції
//
// Task 1. SНаписати ф-ю calculateTotalPrice(items),
// яка приймає масив цін (чисел) і повертає їх суму.
//
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
//
// const calculateTotalPrice = function (items) {
// 	let total = 0;
// 	for (const item of items) {
// 		total += item;
// 	}
// 	return total;
// };
//
// console.log(calculateTotalPrice(cart)); // 613
// console.log(calculateTotalPrice([1, 2, 3])); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600

// Task 2. ф-я logItems(items) для перебору і логування масиву
//
// function logItems(items) {
// 	for (const item of items) {
// 		console.log(item);
// 	}
// }
// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5]);
// logItems(["keyboard", "headphones", "watch"]);

// Task 3. Ф-я findLogin(allLogins, login) для пошуку логіну.
// - Якщо логіна немає вивести повідомлення: "Користувач (логін) не знайдений!";
// - Якщо знайшли логін, вивести повідомлення: "Користувач (логін) знайдений!";
//
// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3mn4"];
//
// // 1 спосіб
// const findLogin = function (allLogins, loginToFind) {
// 	return allLogins.includes(loginToFind)
// 		? `Користувач ${loginToFind} знайдений!`
// 		: `Користувач ${loginToFind} не знайдений!`;
// };
//
// 2 спосіб
// const findLogin = function (allLogins, loginToFind) {
// 	for (const login of allLogins) {
// 		if (login === loginToFind) {
// 			return `Користувач ${loginToFind} знайдений!`;
// 		}
// 	}
//
// 	return `Користувач ${loginToFind} не знайдений!`;
// };
//
// console.log(findLogin(logins, "aj4xth3mn4"));
// console.log(findLogin(logins, "avocod3r"));
// console.log(findLogin(logins, "k1widab3st"));
// console.log(findLogin(logins, "jam4l"));
// console.log(findLogin(logins, "poly1scute"));

// Task 4. Ф-я findSmallesNumber(numbers) шукає найменше число в масиві.
// - числа унікальні (не повторюються)
//
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// // 1 спосіб
// const findSmallesNumber = function (numbers) {
// 	let smallesNumber = numbers[0];
// 	for (const number of numbers) {
// 		if (number < smallesNumber) {
// 			smallesNumber = number;
// 		}
// 	}
// 	return smallesNumber;
// };
//
// 2 спосіб
// const findSmallesNumber = function (numbers) {
// 	let smallesNumber = Math.min(...numbers);
// 	return smallesNumber;
// };
// console.log(findSmallesNumber(numbers)); // 7
// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// Task 5. Ф-я changeCase(string) змінює регістр кожного елементу в рядку на протилежний.
//
// 1 спосіб
// const changeCase = function (string) {
// 	const letters = string.split("");
// 	let invertedString = "";
// 	for (const letter of letters) {
// 		const isInLowerCase = letter === letter.toLowerCase();
// 		invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
// 	}
// 	return invertedString;
// };
//
// 2 спосіб
// const changeCase = function (string) {
// 	let invertedString = "";
// 	for (const letter of string) {
// 		if (letter === letter.toLowerCase()) {
// 			invertedString += letter.toUpperCase();
// 		} else {
// 			invertedString += letter.toLowerCase();
// 		}
// 	}
// 	return invertedString;
// };
//
// console.log(changeCase("qweRTY")); // QWErty
// console.log(changeCase("mAnGo")); // MaNgO
// console.log(changeCase("AjAx")); // aJaX
// console.log(changeCase("QwertY")); // qWERTy

// Task 6. Ф-я slugify(string) отримує рядок і повертає URL-slug.
// Рядок складається лише з пробілів.
//
// const title = "Top 10 benefits of React framework";
//
// const slugify = function (string) {
// 	return string.toLowerCase().split(" ").join("-");
// };
//
// console.log(slugify(title)); // top-10-benefits-of-react-framework
// console.log(slugify("Where are yOu?")); // where-are-you?

// // // // Псевдомасив arguments
//
// const add = function (...args) {
// 	let total = 0;
// 	for (const arg of args) {
// 		total += arg;
// 	}
// 	return total;
// };
// console.log(add(1, 2, 3, 4, 5)); // 15
// console.log(add(10, 20, 30, 40, 50)); // 150
// console.log(add(1, 12, 33, 44, 55)); // 145
// console.log(add(1, 22, 35, 47, 59)); // 164
//
// const add = function (x, ...args) {
// 	// console.log(x);
// 	let total = 0;
// 	for (const arg of args) {
// 		total += arg;
// 	}
// 	return console.log(x, total);
// };
// add("hello", 1, 2, 3, 4, 5); // hello 15
// add("hi", 10, 20, 30, 40, 50); // hi 150
// add("world", 1, 12, 33, 44, 55); // world 145
// add("aloha", 1, 22, 35, 47, 59); // aloha 164

//     Task 6. Ф - я filterNumbers(array[, number1, ...]), яка:
// - першим арг приймає масив;
// - після першого арг може бути довільна к - сть інших арг чисел;
// - ф-я повинна повернути масив в якому будуть тільки арг, починаючи з другого,
// для яких є аналог в оригінальному масиві.
// const filterNumbers = function (array, ...args) {
// 	let filtredNumbers = [];
//
// 1 спосіб
// for (let i = 0; i < args.length; i += 1) {
// 	for (let j = 0; j < array.length; j += 1) {
// 		if (array[j] === args[i]) {
// 			filtredNumbers.push(array[j]);
// 		}
// 	}
// }
//
// 2 спосіб
// 	for (const element of args) {
// 		if (array.includes(element)) {
// 			filtredNumbers.push(element);
// 		}
// 	}
//
// 	return filtredNumbers;
// };
//
// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2,3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30,15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

//                  Перевірка на тип даних масив!!!
//
// const array = [1, "Hello", null, true, [1, 2, 3, 4, 5]];
// console.log(Array.isArray(array)); // true
// ------
// перший ел масиву
// const first = array[0]; //
// console.log(first);
// ------------
// останній ел масиву
// const last = array[array.length - 1]; // 5
// console.log(last);

// for (let i = 0; i < array.length; i += 1) {
// 	// console.log(array[i]); //    1 Hello null true (5) [1, 2, 3, 4, 5]
// 	if (Array.isArray(array[i])) {
// 		for (let j = 0; j < array[i].length; j += 1) {
// 			console.log(array[i][j]); // 1 2 3 4 5
// 		}
// 		continue;
// 	}
// 	console.log(array[i]); // 1 Hello null true 1 2 3 4 5
// }

// for (let i = 0; i < array.length; i += 1) {
// 		if (typeof array[i] === "string") {
// 		array[i] = false;
// 	}
// 	console.log(array[i]); // 1 false null true 1 2 3 4 5
// }

// while
// let i = 0;
// while (i < array.length) {
// 	console.log(array[i]); //    1 Hello null true (5) [1, 2, 3, 4, 5]

// 	if (Array.isArray(array[i])) {
// 		let j = 0;
// 		while (j < array[i].length) {
// 			console.log(array[i][j]);
// 			j += 1;
// 			continue;
// 		}
// 	}
// 	// console.log(array[i]);
// 	i += 1;
// }

// let i = 0;
// while (i < array.length) {
// 	if (typeof array[i] === "string") {
// 		array[i] = false;
// 	}

// 	i += 1;
// }
// console.log(array); //    [1, false, null, true, Array(5)]

//                      Теорія
//
// Всі примітивні типи даних мають присвоєння за значенням.
// Примітиви не мутабельні
//
// Всі складні типи даних(масиви, обєкти) є мутабельними.
// Можна змінити зміст даних масивів(тощо) не перевизначивши змінну.
// наприклад, array.push(3) - додасть 3 в кінець масиву без перевизначення оператором =.

// const string = "Hello world";
// const arr = string.split(" ");
// const result = arr.reverse().join(" ");

// console.log(string); // Hello world
// console.log(arr); // ['world', 'Hello']
// console.log(result); // world Hello

// const result2 = string.split("").reverse().join(" ");
// console.log(result2); // d l r o w   o l l e H

// const array = ["Hello", "world"];
//
// if (array.indexOf("world") === -1) {
// 	console.log("немає");
// } else {
// 	console.log("є"); // є
// }
//
// if (array.includes("world")) {
// 	console.log("є"); // є
// } else {
// 	console.log("немає");
// }

// Task 1.
//
// Ств масив
// const genres = ["Jazz", "Blues"];
// console.log(genres); // (2)[("Jazz", "Blues")];
// // add 'Rock&Roll'
// // genres.push("Rock&Roll");
// genres.splice(genres.length, 0, "Rock&Roll");
// console.log(genres); // (3) ['Jazz', 'Blues', 'Rock&Roll']
// // вивести на консоль перший ел масиву
// console.log(genres[0]); // Jazz
// // вивести ост ел масиву
// console.log(genres[genres.length - 1]); // Rock&Roll
// // видалити перший ел масиву і вивести його в консоль
// // console.log(genres.shift()); // Jazz
// console.log(genres.splice(0, 1)); // Jazz
// // вставити 'Country' i 'Reggae' на початок масиву
// // genres.unshift("Country", "Reggae");
// genres.splice(0, 0, "Country", "Reggae");
// console.log(genres); // (4) ['Country', 'Reggae', 'Blues', 'Rock&Roll']

// Task 2.
// Написати скрипт для обчислення площі прямокутника зі сторонами, значення яких
// зберігаються у змінних values у вигляді рядка. Значення розділені пробілом.
//
// const values = "8 11";
// const sides = values.split(" ");
// const S = Number(sides[0]) * Number(sides[sides.length - 1]);
// console.log(S);

// Task 3. Перебір масиву.
// Скрипт для перебору масиву fruits циклом for.Для кожного ел масиву
// виведи в консоль рядок у форматі номер_ел: значення_ел.
// Нумерація ел. має поч з 1.
//
// const fruits = ["apple", "grape", "peach", "banana", "lemon"];

// for (let i = 0; i < fruits.length; i += 1) {
// 	console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
// 	console.log(`${n}: ${fruits[i]}`); // 1: apple 2: grape 3: peach 4: banana 5: lemon
// }

// Task 4. Масиви та цикли.
// Скрипт вивод у консоль імя і тел.номер користувача.
// У змінних names та phones зберігаються рфдки імен та тел номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.
//
// let names = "Jacob,William,Solomon,Artemis";
// let phones = "89001234567,89001112233,890055566377,890055566300";
//
// names = names.split(",");
// phones = phones.split(",");
// let result = [];
// // одинакова к-сть імен і телефонів
// for (let i = 0; i < names.length; i += 1) {
// 	console.table(`${names[i]} : ${phones[i]}`);
// }
// різна к-сть імен і телефонів
// for (let i = 0; i < names.length, i < phones.length; i += 1) {
// 	console.table(`${names[i]} : ${phones[i]}`);
// }
//

// Task 5. Масиви та рядки.
//
// Скрипт, виводить у консоль всі слова рядка, крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символом пробілу.
// Скрипт повинен працбвати для будь якого рядка.
//
// const string = "Welcome to the future";
// // 1 спосіб
// // const array = string.split(" ");
// // array.pop();
// // array.shift();
// // const result = array.join(" ");
// // 2 посіб
// const result = string.split(" ").slice(1, -1).join(" ");
// //
// console.log(result);
//
// Task 6. Масиви та рядки.
//
// Скрипт "розгортає" рядок (зворотній порядок букв) і виводить його в консоль.
//
// const string = "Welcome to the future";
// const result = string.split("").reverse().join("");
// console.log(result);
//
// Task 7. Сортування масиву із циклом.
//
// Написати скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
//
// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
//
// for (let i = 0; i < langs.length - 1; i += 1) {
// 	for (let j = i + 1; j < langs.length; j += 1) {
// 		if (langs[i] > langs[j]) {
// 			const tmp = langs[i];
// 			langs[i] = langs[j];
// 			langs[j] = tmp;
// 		}
// 	}
// }
// console.log(langs);
// 2 спосіб
// const abc = ["f", "b", "d", "a", "e", "c"];
// let count = 0;

// for (let i = 0; i < abc.length - 1; i += 1) {
// 	let arrayWasChanged = false;

// 	for (let j = i + 1; j < abc.length; j += 1) {
// 		if (abc[i] > abc[j]) {
// 			arrayWasChanged = true;

// 			const tmp = abc[i];
// 			abc[i] = abc[j];
// 			abc[j] = tmp;
// 		}
// 		count += 1;
// 	}
// 	if (!arrayWasChanged) {
// 		break;
// 	}
// }
// console.log(abc);
// console.log("count: ", count);
//
// const abc = ["a", "b", "d", "f", "e", "c"];

// let count = 0;
// // //
// for (let i = 0; i < abc.length; i += 1) {
// 	let arrayWasChanged = false;

// 	for (let j = 1; j < abc.length - i; j += 1) {
// 		const firstValue = abc[j - 1];
// 		const secondValue = abc[j];

// 		if (firstValue > secondValue) {
// 			arrayWasChanged = true;

// 			abc[j - 1] = secondValue;
// 			abc[j] = firstValue;
// 		}
// 		count += 1;
// 	}
// 	if (!arrayWasChanged) {
// 		break;
// 	}
// }
// console.log(abc);
// console.log("count: ", count);

// Task 8.
// Скрипт пошуку найменшого числа в масиві.
// Код повинен працювати для будь якого масиву чисел.
// Використаний цикл
//
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (const number of numbers) {
// 	if (min > number) {
// 		min = number;
// 	}
// }
// console.log(min); //1

// 2 спосіб без циклу
// console.log(Math.min(...numbers)); // 1
// // console.log(numbers);

// F u n c t i o n
// let a = 10;
// function foo(x) {
// 	x = 45;
// 	console.log(x); //45
// }

// foo(a);
// console.log(a); //10

// let b = [1, 2, 3];
// function arr(ar) {
// 	ar.splice(0, 1);
// 	console.log(ar); // [2,3]
// }
// // console.log(a);

// arr(b);
// console.log(b); // [2,3]

// function create(name, year) {
// 	const res = add(year);
// 	return `${name} - ${res} years!`;
// }
//
// function add(arr) {
// 	let sum = 0;
// 	for (const value of arr) {
// 		sum += value;
// 	}
// 	return sum;
// }
//
// console.log(create("Mango", [12, 4, 5]));

// 			Task 1. Ігдекс маси тіла
//
// 	Ф - я calcBMI(weight, height), розраховує і повертає індекс маси тіла людини.
// Потрібно розділити вагу в кг на квадрат висоти людини в метрах.
// Вага та висота будуть спеціально передані, як рядки.
// Не цілі числа можуть бути задані у вигляді 24..7 або 24, 7.
// Індекс маси тіла потрібно округлити до однієї цифри після коми.
//
// const bmi = calcBMI("88,3", "1.75");
//
// function calcBMI(weight, height) {
// 	weight = Number(weight.replace(",", "."));
// 	height = Number(height.replace(",", "."));
// 	// const bmi = (weight / height ** 2).toFixed(1);
// 	const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// 	return bmi;
// }
// console.log(bmi);

//              Task 2.Найменше з чисел
//
// Ф-я min(a,b) повертає найменше з чисел a i b.
// //
// function min(a, b) {
// 	return a < b ? `З чисел ${a} i ${b} менше ${a}` : `З чисел ${a} i ${b} менше ${b}`;
// }
//
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
//

//                  Task 3. Площа прямокутника.
//
// Ф - я getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
//     значення яких будуть передані до параметра dimensions у вигляді рядка.
// Значення гарантовано розділенні пробілом.
//
// function getRectArea(dimensions) {
// dimensions = dimensions.split(" ");
//
// 1 спосіб
// const first = Number(dimensions[0]);
// const second = Number(dimensions[1]);
// return first * second;
//
// 2 спосіб
// return Number(dimensions[0]) * Number(dimensions[1]);
//
// 3 спосіб
// let S = 1;
// for (const iterator of dimensions) {
// 	S *= iterator;
// }
// return S;
// }
//
// console.log(getRectArea("8 11"));
// console.log(getRectArea("46 11"));
// console.log(getRectArea("8 112"));
//
//                  Task 4. Логування елементів.
//
// Ф - я logItems(items), отримує масив і використ цикл for, який для кожного
// ел.масиву буде виводити в консоль повідомлення у форматі
// < номер ел > - <значення елемента>.
// Нумерація з 1
// Наприклад, для першого ел. масиву ['Mango', 'Poly', 'Ajax'] з індексом 0
// буде виведено 1 - Mango,  а для індексу 2 виведе 3 - Ajax.
//
// function logItems(items) {
// 	for (let i = 0, n = 1; i < items.length; i++, n++) {
// 		console.log(`${n} - ${items[i]}`);
// 	}
// }
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["Apple", "Grapes", "Peach", "Banana", "Lemon"]);
//
//                  Task 5. Логування контактів.
//
// Ф - я printContactInfo(names, phones), яка виводить у консоль імя та
// телефонний номер користувача.
// У параметри names та phones будуть передані рядки імен та телефонних номерів,
// розділених комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// К-сть імен та телефонів гарантовано однакова.
//
// function printContactInfo(names, phones) {
// 	names = names.split(",");
// 	phones = phones.split(",");
// 	for (let i = 0; i < names.length, i < phones.length; i++) {
// 		console.log(`${names[i]} - ${phones[i]}`);
// 	}
// }
// printContactInfo("Jacob,William,Solomon,Artemis", "89001234567, 89001112233, 8900055566377, 890055566300");
//

//                  Task 6. Пошук найбільшого елемента.
//
// Ф-я findLargestNumber(numbers) шукає найбільше число в масиві.
//
// 1 спосіб (приймає масив)
// function findLargestNumber(numbers) {
// 	let max = numbers[0];
// 	for (const number of numbers) {
// 		if (number > max) {
// 			max = number;
// 		}
// 	}
// 	return max;
// }
//
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
//
// 2 спосіб (приймає набір чисел)
// function findLargestNumber() {
// 	// const arr = Array.from(arguments);
// 	const arr = [...arguments];
// 	let max = arr[0];
// 	for (const number of arr) {
// 		if (number > max) {
// 			max = number;
// 		}
// 	}
// 	return max;
// }
//
// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83
//
// // 3 спосіб (...arg)
// function findLargestNumber(...arg) {
// 	let max = arg[0];
// 	for (const number of arg) {
// 		if (number > max) {
// 			max = number;
// 		}
// 	}
// 	return max;
// }
//
// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83
//
// function findLargestNumber() {
// 	let max;
// 	for (const num of arguments) {
// 		if (typeof num === "number") {
// 			max = num;
// 			break;
// 		}
// 	}
// 	for (const num of arguments) {
// 		if (typeof num === "number") {
// 			if (num > max) {
// 				max = num;
// 			}
// 		} else {
// 			max = findLargestNumber(...num);
// 		}
// 	}
//
// 	return max;
// }
//
// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83
// console.log(findLargestNumber([1, 143, [500, 5]], 6, 7, [90, 1000], 88, 123)); // 123
//
//

//                  Task 7. Середнє значення.
//
// Ф - я calAverage(), яка приймає довільну к - ть аргументів і повертає їхнє серед.знач.
// Усі аргументи будуть дише числами.
//
// function calAverage() {
// 	let total = 0;
// 	for (const num of arguments) {
// 		total += num;
// 	}
//
// 	return (total /= arguments.length);
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2, 4)); // 7
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
//
//                  Task 8. Форматування часу.
//
// Ф - я formatTime(minutes), яка переведе значення minutes(к - ть хв) у рядок
//у форматі годин та хвилин НН: ММ.
//
// function formatTime(totalMinutes) {
// 	let hours = Math.floor(totalMinutes / 60);
// 	let minutes = totalMinutes % 60;
// 	hours = String(hours).padStart(2, "0");
// 	minutes = minutes.toString().padStart(2, "0");
// 	console.log(`${hours} : ${minutes}`);
// }
//
// formatTime(70);
// formatTime(450);
// formatTime(1441);
//
//
//
//
//         !!!!!         Task 9. Колекція курсів.           !!!!!
//
//
//
// Ф - ї для роботии з колекцією навчальних курсів courses:
// addCourse(name);
// removeCourse(name);
// updateCourse(oldName, newName);
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function getCourse(courses) {
// 	console.log(courses);
// }

// function addCourse(name) {
// 	if (courses.includes(name)) {
// 		console.log(`${name} - Ви вже маєте такий курс`);
// 	}
// 	courses.push(name);
// }

// function removeCourse(name) {
// 1 спосіб
// if (courses.includes(name)) {
// 	const index = courses.indexOf(name);
// 	courses.splice(index, 1);
// 	return;
// }
// console.log(`${name} - Курс з таким ім'ям не знайдено`);

// 2 спосіб
// const index = courses.indexOf(name);
//   // ~ працює за формулою -(х+1):
//   // якщо є ел то -(індекс ел. + 1) = число => true
//   // якщо ел перший то -(0 + 1) = -1  => true
//   // якщо немає ел то -(-1 + 1) = -0 => false

//  // !!~courses.indexOf(course);  це то ж саме що і includes()
//  // !!~перетворює побітово індекс(0 або 1) до буля.
//  // Якщо ел.є в списку то повертає true і видаляє.
//  // Якщо немає в списку то повертає false ш переходить далі.
// 	if (!!~index) {
// 		courses.splice(index, 1);
// 		return;
// 	}
// 	console.log(`${name} - Курс з таким ім'ям не знайдено`);
// }

// function updateCourse(oldName, newName) {
// 	const index = courses.indexOf(oldName);
// 	if (!!~index) {
// 		courses.splice(index, 1, newName);
// 		return;
// 	}
// 	console.log(`${oldName} - Курс з таким ім'ям не знайдено`);
// }

// getCourse(courses);

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // Ви вже маєте такий курс

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // Курс з таким ємям не знайдено;

// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
//
//
//
//
// Замикання ф-ї
// function foo() {
// 	let a = 18;

// 	console.log(a);
// 	return function () {
// 		a += 2;
// 		console.log(a);
// 	};
// }

// const foo2 = foo();
// foo2(); // 18 20
// foo(); //18
// foo2(); // 22
// foo2(); //24;
// foo(); //18

// Факторіал числа
// const x = 7;
// let res = 1;
// for (let i = 1; i < x; i += 1) {
// 	res *= i;
// }
// console.log(res); // 720

// function factorials(x) {
// 	if (x === 1) return 1;
// 	return x * factorials(x - 1);
// }
// console.log(factorials(5));

// Деструктуризація
//
// function getRectArea(dimensions) {
// 	const [width, height] = dimensions.split(" ");

// 	return width * height;
// }

// console.log(getRectArea("8 11")); // 88

// function printContactsInfo(names, phones, splitter = ",") {
// 	const name = names.split(splitter);
// 	const phone = phones.split(splitter);

// 	for (let i = 0; i < name.length, i < phone.length; i += 1) {
// 		console.log(`${name[i]} - ${phone[i]}`);
// 	}
// }

// printContactsInfo("a-b-c-d", "1-2-3-4", "-");

// Рекурсія
// let count = 0;

// function foo() {
// 	if (count === 5) return;
// 	count += 1;
// 	console.log(count);
// 	foo();
// }
// foo();

// function factorial(x) {
// 	if (x === 1) return 1;
// 	return x * factorial(x - 1);
// }
// console.log(factorial(6));
// function factorial(x) {
// 	if (x === 1 || typeof x === "string") return 1;
// 	return x * factorial(x - 1);
// }
// console.log(factorial("dsfsdf"));

// function evenNumber(min, max) {
// 	let totalEven = 0;

// 	for (let i = min; i <= max; i += 1) {
// 		if (!(i % 2)) {
// 			totalEven += i;
// 		}
// 	}
// 	return totalEven;
// }
// console.log(evenNumber(0, 50));

// let userNumber = prompt("Введи число: ");
// let total = 0;
// let condition = false;
// do {
// 	if (userNumber) {
// 		condition = true;
// 		total += +userNumber;
// 		userNumber = prompt("Введи число: ");
// 	} else {
// 		alert(`Загальна сума чисел - ${total}`);
// 		condition = false;
// 	}
// } while (condition);

// Call-back
//
// const array = [1, 2, 3];
// function map(elements, fn) {
// 	const newArray = [];
// 	for (const el of elements) {
// 		newArray.push(fn(el));
// 	}
// 	return newArray;
// }
// function elPow(x) {
// 	return x ** 2;
// }

// console.log(map(array, elPow));

// function checkStorage(available, ordered) {
// 	// Change code below this line

// 	if (ordered === 0) {
// 		return "Your order is empty!";
// 	}

// 	if (ordered > available) {
// 		return "Your order is too large, not enough goods in stock!";
// 	}

// 	return "The order is accepted, our manager will contact you";
// 	// Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// Task 1. КРАЙНІ ЕЛЕМЕНТИ МАСИВУ
//
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив
// елементів довільної довжини.Функція повинна повертати масив з двох елементів -
// першого і останнього елемента параметра array.
//
// function getExtremeElements(array) {
// 	const newArray = [];
// 	newArray.push(array[0], array[array.length - 1]);
// 	return newArray;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5])); // повертає [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // повертає ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // повертає ["apple", "banana"]
//

// Task 2. ГРАВІРУВАННЯ ПРИКРАС
//
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
// залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок,
// що складається зі слів, розділених лише пробілами(параметр message) та ціну гравірування
// одного слова(параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
//
// function calculateEngravingPrice(message, pricePerWord) {
// 	let totalPrice = 0;
// 	return (totalPrice = message.split(" ").length * pricePerWord);
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // повертає 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // повертає 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // повертає 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // повертає 80
//

// Task 3. ГЕНЕРАТОР SLUG
//
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug,
// створений з цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
//
// function slugify(title) {
// 	const stringSlug = title.toLowerCase().split(" ").join("-");
// 	return stringSlug;
// }
// console.log(slugify("Arrays for begginers")); // повертає "arrays-for-begginers"
// console.log(slugify("English for developer")); // повертає "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // повертає "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // повертає "how-to-become-a-junior-developer-in-two-weeks"
//

// Task 4. КОМПОЗИЦІЯ МАСИВІВ
//
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву
// з усіма елементами двох вихідних firstArray і secondArray.Параметр maxLength містить
// максимально допустиму довжину нового масиву.
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути
// копію масиву довжиною maxLength елементів.В іншому випадку функція повинна повернути
// новий масив повністю.
//
// function makeArray(firstArray, secondArray, maxLength) {
// 	let newArray = firstArray.concat(secondArray);
// 	if (newArray.length > maxLength) {
// 		return (newArray = newArray.slice(0, maxLength));
// 	}
// 	return newArray;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // повертає ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // повертає ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // повертає ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // повертає ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // повертає []
//

// Task 5. СУМА ЧИСЕЛ (ЦИКЛ FOR)
//
// Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і
// повертає суму всіх цілих чисел від одиниці і до цього числа.Наприклад,
// якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
//
// function calculateTotal(number) {
// 	let total = 0;
// 	for (let i = 0; i <= number; i++) {
// 		total += i;
// 	}
// 	return total;
// }
// console.log(calculateTotal(1)); // повертає 1
// console.log(calculateTotal(3)); // повертає 6
// console.log(calculateTotal(7)); // повертає 28
// console.log(calculateTotal(18)); // повертає 171
// console.log(calculateTotal(24)); // повертає 300
// console.log(calculateTotal(10)); // з випадковим числом повертає правильне значення
//

// Task 6.ОБЧИСЛЕННЯ СУМИ ПОКУПКИ
//
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел,
// і обчислює загальну суму його елементів.Загальна сума елементів повинна зберігатися
// у змінній total, яка повертається як результат роботи функції.
//
// function calculateTotalPrice(order) {
// 	let total = 0;
// 	for (let i = 0; i < order.length; i += 1) {
// 		total += order[i];
// 	}
// 	return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116
// console.log(calculateTotalPrice()); // з випадковим масивом повертає правильне значення
//

// Task 7.ПОШУК НАЙДОВШОГО СЛОВА
//
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається
// тільки зі слів, розділених пробілом(параметр string), і повертає найдовше
// слово в цьому рядку.
//
// function findLongestWord(string) {
// 	const array = string.split(" ");
// 	let maxWord = array[0];
// 	for (let i = 0; i < array.length; i += 1) {
// 		if (array[i].length > maxWord.length) {
// 			maxWord = array[i];
// 		}
// 	}
// 	return maxWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // повертає jumped
// console.log(findLongestWord("Google do a roll")); // повертає Google
// console.log(findLongestWord("May the force be with you")); // повертає force
// console.log(findLongestWord()); // з випадковим рядком повертає правильне значення
//

// Task 8.ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
//
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers)
// і повертає новий масив, в якому будуть тільки ті елементи масиву numbers,
// які більші за значення параметра value(число).
//
// function filterArray(numbers, value) {
// 	const array = [];
// 	for (let i = 0; i < numbers.length; i += 1) {
// 		if (numbers[i] > value) {
// 			array.push(numbers[i]);
// 		}
// 	}
// 	return array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
// console.log(filterArray()); // з випадковим масивом і числом повертає правильний масив
//

// function checkFruit(fruit) {
// 	const fruits = ["apple", "plum", "pear", "orange"];
//
// 	// return fruits.includes(fruit); // Change this line
// 	const idx = fruits.indexOf(fruit);
// 	return !!~idx;
// }
//
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));

// Task 9. СПІЛЬНІ ЕЛЕМЕНТИ
//
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
// оскільки вони присутні в обох вихідних масивах.А числа 0, 1 і 8 присутні тільки в
// одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної
// довжини в параметри array1 і array2, і повертає новий масив, що складається з тих
// елементів, які присутні в обох вихідних масивах.
//
// function getCommonElements(array1, array2) {
// 	const newArray = [];
// 	for (let i = 0, j = 0; i < array1.length, j < array2.length; i += 1, j += 1) {
// 		if (array2.includes(array1[i])) {
// 			newArray.push(array1[i]);
// 		}
// 	}
// 	return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
// console.log(getCommonElements()); //з випадковими двома масивами повертає правильний масив
// // В циклі for використовувалися методи includes і push
//

// Task 10. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
//
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.
//
// function filterArray(numbers, value) {
// 	const newArray = [];
// 	for (const iterator of numbers) {
// 		if (iterator > value) {
// 			newArray.push(iterator);
// 		}
// 	}
// 	return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
// console.log(filterArray()); // з випадковим масивом і числом повертає правильний масив
// // Функція filterArray() використовує цикл for..of
//

// Task 11. ПАРНІ ЧИСЛА
//
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від
// start до end.Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).
//
// function getEvenNumbers(start, end) {
// 	const newArray = [];
// 	for (let i = start; i <= end; i += 1) {
// 		if (!(i % 2)) {
// 			newArray.push(i);
// 		}
// 	}
// 	return newArray;
// }
// console.log(getEvenNumbers(2, 5)); // повертає [2, 4]
// console.log(getEvenNumbers(3, 11)); // повертає [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // повертає [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // повертає [8]
// console.log(getEvenNumbers(7, 7)); // повертає []
// console.log(getEvenNumbers()); // з випадковими start і end повертає правильний масив
//

// Task 12. ФУНКЦІЯ INCLUDES()
//
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.
// includes(значення) - перевіряє, чи присутнє в масиві array значення value,
// повертаючи true, якщо присутнє, і false в іншому випадку.
//
// При виконанні цього завдання в тілі функції includes() не можна використовувати
// метод масив.includes(значення).
//
// 1 спосіб
// function includes(array, value) {
// 	const idx = array.indexOf(value);
// 	return !!~idx ? true : false;
// }
//
// 2 спосіб
// function includes(array, value) {
// 	for (const el of array) {
// 		if (el === value) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
//
// console.log(includes([1, 2, 3, 4, 5], 3)); // повертає true
// console.log(includes([1, 2, 3, 4, 5], 17)); // повертає false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // повертає true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")); // повертає false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // повертає true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // повертає false
// console.log(includes()); // для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes
//
// let a = 1;
// let b = 2;

// function hoist() {
// 	a = 20;
// 	var b = 100;
// }

// hoist();

// console.log(a);
// /*
// Доступ как к глобальной переменной вне функции hoist()
// Выводит: 20
// */
// console.log(b);
// /*
// Как только b была назначена, она заключена в рамки области видимости функции hoist(). Что означает то, что мы не можем вывести её за рамки функции.
// Вывод: ReferenceError: b is not defined
// */

// console.log(hoist); // Вывод: undefined
//
// var hoist = "The variable has been hoisted.";

// function hoist() {
// 	console.log(message);
// 	var message = "Hoisting is all the rage!";
// }
// hoist();

// var double;
// function double(num) {
// 	return num * 2;
// }
// console.log(typeof double); // Вывод: function

// var double = 22;
// function double(num) {
// 	return num * 2;
// }
// console.log(typeof double); // Вывод: number
