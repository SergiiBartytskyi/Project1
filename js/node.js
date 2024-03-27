// Команди NPM:

// npm init - ініціалізує npm в проекті і створює файл package.json
// npm install - встановлює всі залежності, перелічені в package.json
// npm list--depth = 0 - виведе в терміналі список локально встановлених пакетів з номерами їх версій,
//     без залежностей
// npm install [package-name] - встановить пакет локально у папку node_modules
// npm uninstall [package-name] - видалить пакет, встановлений локально і оновить package.json
// npm start і npm test - запустить скрипт start або test, розташований в package.json
// npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
// npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе
// список доступних оновлень
// npm update - оновить всі пакети до максимально дозволеної версії
//
// Файл package.json можна створити npm-командою init, що ініціалізує проект в цій папці.
//
// npm init --yes або npm init -y - пропуск додаткових налаштувань( по замовченню буде створено)
//
// Встановлення пакетів
//
// npm install validator
//
// Щоб отримати інтерфейс пакета в Node.js - коді, необхідно викликати функцію require("ім'я-модуля"),
// передаючи аргументом їй ім'я модуля без визначення шляху - це називається абсолютний імпорт.
//
// Видалення пакетів
//
// npm uninstall validator
//
// Встановлення певної версії пакета
//
// npm install validator@1.0.0
//
// Типи залежностей
//
// Саме для цього команди npm install і npm uninstall мають три прапорці:
// - save - вказує, що додається залежність, яка увійде до фінального продукту.Пакет буде встановлений
// локально, в папку node_modules і буде доданий запис в поле dependencies в package.json.
// - save - dev - вказує, що додається залежність розробки.Пакет буде встановлений локально в папку
// node_modules, і буде доданий запис в поле devDependencies в package.json.
// - global - вказує, що додається глобальна залежність, тобто інструмент, який доступний для будь -
// якого проекту.Пакет буде встановлений глобально(в систему).
//
// Управління версіями пакетів

// Пакети мають пов'язаний з ними номер версії. Номери версій відповідають стандарту SemVer.
// npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно.
// npm update - оновить всі пакети до максимально дозволеної версії.
// npm update [ім'я-пакета] - оновить зазначений пакет.
//
// Управління кешем
//
// npm cache clean
//
//              Named export - іменований експорт
//
// Перший спосіб - це використовувати ключове слово export перед усіма сутностями, які необхідно
// експортувати.
//
// my - module.js;
// ------------
// const sqrt = Math.sqrt;
// export const square = x => x * x;
// export const diag = (x, y) => sqrt(square(x) + square(y));
//
// main.js
// ---------
// import { square, diag } from "./path/to/my-module";
//
// console.log(square(11));// 121
// console.log(diag(4, 3));// 5
//
//

// Другий спосіб - це явно вказати об'єкт з властивостями для експорту.
//
// my - module.js;
// ----------------
// const sqrt = Math.sqrt;
// const square = x => x * x;
// const diag = (x, y) => sqrt(square(x) + square(y));
//
// export { square, diag };
// ---------------
// main.js;
// ----------
// import { square, diag } from "./path/to/myModule";
//
// console.log(square(11));// 121
// console.log(diag(4, 3));// 5
//
//

//
// Default export - експорт за замовчуванням
//
// my-func.js;
// -------------
// export default function myFunc() {
// 	// ...
// }
//
// my-class.js
// ----------
// export default class MyClass {
// 	// ...
// }
//
// main.js;
// -----------
// import myFunc from "./path/to/my-func";
// import MyClass from "./path/to/my-class";
//
// myFunc();
//
// const inst = new MyClass();
//
//

// Використовуйте іменований експорт, якщо необхідно експортувати декілька сутностей, а експорт
// за замовчуванням - для експорту однієї сутності.
//

//
//                                      Webpack
//                                      -------
// Webpack став одним із найважливіших інструментів веб - розробника.В першу чергу - це менеджер
// модульних залежностей застосунку і збирач JS - файлів, але він може трансформувати усі
// ресурси(HTML і CSS, SASS тощо), оптимізувати зображення, компілювати шаблони, запускати локальний
// веб - сервер для розробки і багато іншого.
//
//

//
//
//                                      Формат JSON
//                                      -----------
//JSON (JavaScript Object Notation) - сучасний текстовий формат зберігання і передачі структурованих
// даних у текстовій формі.
//
// Синтаксис схожий на об'єкт, за винятком того, що ключі - це завжди рядки у подвійних лапках.
// Рядкові значення також обов'язково повинні бути взяті у подвійні лапки.Значеннями властивостей
// можуть бути типи: string, number, object, array, boolean і null.
//
// user.json;
// -------------
// {
//   "name": "Josh",
//   "weight": 175,
//   "age": 30,
//   "eyecolor": "brown",
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }
//

//
//                              Метод JSON.stringify()
//                              ---------------------
//
// Приймає значення і перетворює його у JSON.Значенням може бути число, буль, null, масив або об'єкт.
// Рядки - це вже валідний JSON, тому в їх перетворенні немає сенсу.
// Якщо в об'єкта є методи, то при перетворенні вони будуть проігноровані.
//
// const dog = {
// 	name: "Mango",
// 	age: 3,
// 	isHappy: true,
// 	bark() {
// 		console.log("Woof!");
// 	},
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"
//
// При спробі перетворити функцію в JSON, результатом буде undefined.
//
// JSON.stringify(() => console.log("Well, this is awkward"));// undefined
//
//

//
//
//                          Метод JSON.parse()
//                          -----------------
//
// Щоб отримати з JSON валідне JavaScript значення, його необхідно розпарсити(parse).Це операція
// зворотна перетворенню в рядок(stringify).Тепер, коли dog - це валідний об'єкт, з ним можна
// працювати звичайним чином.
//
// const json = '{"name":"Mango","age":3,"isHappy":true}';
//
// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isHappy: true}
// console.log(dog.name); // "Mango"
//
//

//
//
//                              Обробка помилок
//                              --------------\
//
// Якщо методам класу JSON передати невалідний JSON, то вони «викинуть» помилку і весь скрипт впаде.
// Для уникнення цього, використовується конструкція try...catch, яка дозволяє «ловити» і обробляти
// помилки виконання скрипта.
//
// try {
// 	// Code that may throw a runtime error
// } catch (error) {
// 	// Error handling
// }
//
// 1.Спочатку виконується код всередині блоку try.
// 2.Якщо помилки відсутні, блок catch ігнорується і управління передається далі.
// 3.Якщо в блоці try сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку catch.
//
// Змінна error - це об'єкт помилки з інформацією про те, що сталося. У цього об'єкта є кілька
// корисних властивостей:
// name - тип помилки. Для помилки парса - це SyntaxError.
// message - повідомлення про деталі помилки.
// stack - стек викликів функцій на момент помилки. Використовується для налагодження.
//
// Наприклад, парс рядка призведе до такого сценарію, тому що рядок з символами - це невалідний JSON,
// оскільки не може бути перетворений у валідне JavaScript значення.
// Script will crash during parse
// const data = JSON.parse("Well, this is awkward");
// console.log("❌ You won't see this log");

// Використовуючи конструкцію try...catch, ми можемо обробити цей виняток таким чином, щоб скрипт
// продовжив працювати, навіть у разі помилки.
// try {
// 	const data = JSON.parse("Well, this is awkward");
// } catch (error) {
// 	console.log(error.name); // "SyntaxError"
// 	console.log(error.message); // Unexpected token W in JSON at position 0
// }
// console.log("✅ This is fine, we handled parse error in try...catch");
//
//

//
// try {
// 	const data = JSON.parse('{username: "Mango"}');
// } catch (error) {
// 	console.log(error.name); // "SyntaxError"
// 	console.log(error.message); // "Unexpected token u in JSON at position 1"
// }
// console.log("✅ This is fine, we handled parse error in try...catch");
//
//

//
//
//                              Фази виконання коду
//                              ------------------
// Фаза інтерпретації або оцінки(compile time, evaluation time) - підготовка перед виконанням коду,
// рушій знаходить синтаксичні помилки, помилки типізації тощо.Тобто код ще не виконується, тільки
// оцінюється.Якщо ця фаза пройшла успішно, це як мінімум означає, що в коді відсутні синтаксичні
// помилки і його можна запустити для виконання.

// Фаза виконання(runtime) - скрипт починає виконуватися, виконуються інструкції викликів функцій і
// оцінки виразів, відбувається пошук необхідних ідентифікаторів у відповідних областях видимості тощо.

// Якщо ця фаза завершилася успішно, отже скрипт написаний без явних помилок і завершив свою роботу.
// На цій фазі можуть бути помилки, пов'язані з відсутніми властивостями і змінними, перетворенням типів
// тощо, тобто щось, що відбувається тільки під час виконання коду.
//
//

//
//
//                                      Web Storage API
//                                      ---------------
//
// Веб-сховище складається з локального сховища (localStorage) і сховища сеансів (sessionStorage).
//
// У веб-сховище не записують методи об'єктів або функції, тільки дані.
//
//                              Локальне сховище
//                              ---------------
//
// Дозволяє зберігати дані без закінчення терміну дії у форматі пар ключ:значення на комп'ютері
// користувача і читати їх при повторному відвідуванні сторінки.Локальне сховище і сховище сесії -
//     це частина браузера, тому вони доступні як властивості об'єкта window, мають однаковий набір
//     властивостей і методів, і відрізняються тільки поведінкою.
//
// setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// getItem(key) - повертає зі сховища значення з ключем key.
// removeItem(key) - видаляє зі сховища запис з ключем key.
// clear() - повністю очищає всі записи сховища.
// length - кількість записів у сховищі.
//

//                                  Збереження
//                                  ----------
//
// Використовуючи метод setItem(key, value), можна додати новий запис у вигляді пари ключ:значення.
// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");
//
// Якщо необхідно зберегти щось, крім рядка, наприклад, масив або об'єкт, необхідно перетворити їх
// у рядок методом JSON.stringify().
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));
//

//                                  Читання
//                                  -------
//
// Метод getItem(key) дозволяє прочитати зі сховища запис з ключем key.Якщо у сховищі відсутній запис
// з таким ключем, метод повертає null.Якщо значення - це звичайний рядок, немає потреби його парсити.
// localStorage.setItem("ui-theme", "dark");
// const theme = localStorage.getItem("ui-theme");
// console.log(theme); // "dark"
//
// В іншому випадку, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.
// const settings = {
// 	theme: "dark",
// 	isAuthenticated: true,
// 	options: [1, 2, 3],
// };
// console.log(settings); // {theme: 'dark', isAuthenticated: true, options: Array(3)}
// localStorage.setItem("settings", JSON.stringify(settings));
// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object
//
//

//
//
//                                  Видалення
//                                  ---------
// Метод removeItem(key) видаляє зі сховища вже існуючий запис з ключем key.
// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme")); // "dark"
// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null
//
//

//
//
//                          Очищення сховища
//                          ----------------
//
// Операція повного очищення сховища - небезпечна, оскільки може порушити записи, зроблені іншими
// розробниками проекту.Проте, якщо ви хочете повністю очистити сховище, потрібно викликати метод clear().
// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");
// console.log(localStorage.getItem("ui-theme")); // "light"
// console.log(localStorage.getItem("sidebar")); // "expanded"
// console.log(localStorage.getItem("notification-level")); // "mute"
// localStorage.clear();
// console.log(localStorage.getItem("ui-theme")); // null
// console.log(localStorage.getItem("sidebar")); // null
// console.log(localStorage.getItem("notification-level")); // null
//
//

//
//
// const form = document.querySelector(".feedback-form");
// const localStorageKey = "goit-example-message";

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", evt => {
// 	localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", evt => {
// 	evt.preventDefault();
// 	localStorage.removeItem(localStorageKey);
// 	form.reset();
// });
// console.log(localStorage);
//
//

//
//
//                              Сервіс для localStorage
//                              -----------------------
// Для того, щоб скоротити кількість повторюваного коду при роботі з веб-сховищем, можна
// написати сервіс зі стандартними методами, наприклад, save і load.Вони будуть абстрагувати
// повторюваний код перевірки помилок парса і подібну рутину.

// storage.js
// -----------
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };

// export default {
//   save,
//   load,
// };
//
//

//
//
//                                  Репета
//                                  ------
//
// - Відкрити:
//      -'control + ~'
//      -'view > terminal'
//      - через палітру 'command + shift + p'
// - Основні корисні команди:
//      - шлях (pwd)
//      - лист (ls)
//      - навігація (cd)
//      - очистка 'clear' або 'control + l'
//      - створення файлів (touch)
//      - створення папок (mkdir)
//      - перейменування / переміщення (mv)
//      - видалення пустої папки або фаула (rm)
//      - видалення всіх вложень (rm -rf [назва елемента на  видалення])

//              Дефолтне import & export
//              ------------------------
//
// По дефолту експортуємо тільки щось одне
//
//  В папці з якої беремо код:
//  export default [code]
//
// В папці в яку переносимо інмопрований код
//  import [назва імпортованого коду] from './....відносна адреса коду до даної папки'
//

//              Іменований експорт
//              ------------------
//
//  В папці з якої беремо код:
//  export [code] - для кожного експортованого елемента коду
//
// В папці в яку переносимо інмопрований код
//  import {точна назва імпортованого коду} from './....відносна адреса коду до даної папки'
//
// Забираємо все з експортованого модуля
// import * as [назва імпортованого коду] from './....відносна адреса коду до даної папки'
//

//                  Імпорт бібліотеки
//                  ------------------
//
// В папці в яку переносимо інмопровану бібліотеку
//  import [назва для імпортованоої бібліотеки] from 'назва імпортованої бібліотеки як в node'
//
//

//
//
//                          Task 1
//                          ------
//
// Ств. ф-ю, яка буде формувати чергу в магазин:
// 1-й параметр - масив, к-сть ел. це к-ть покупців, значення ел. масиву - це час,
// який витратить покупець на касі;
// 2-й параметр - це к-сть кас;
// Повертає об. де ключ - це номер каси, значення - це чвас черги в касі;
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// {1 : 29, 2 : 21}

// function fn(arr, cash) {
// 	const obj = {};

// 	for (let i = 1; i <= cash; i += 1) {
// 		obj[i] = 0;
// 	}
// 	arr.forEach(bayer => {
// 		const values = Object.values(obj);
// 		const minValue = Math.min(...values);
// 		const currentCase = values.indexOf(minValue) + 1;
// 		obj[currentCase] += bayer;
// 	});

// 	return obj;
// }
// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2)); // {1: 29, 2: 21}
//
//

//
//
// 							Рисіч
// 							----
//
// 							Task 1
// 							------
// Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// Not found
// const people1 = [
// 	{
// 		name: "Alex",
// 		know: ["Eva", "Jhon"],
// 	},
// 	{
// 		name: "Ivan",
// 		know: ["Jhon", "Alex"],
// 	},
// 	{
// 		name: "Eva",
// 		know: ["Alex", "Jhon"],
// 	},
// 	{
// 		name: "Jhon",
// 		know: ["Alex"],
// 	},
// ];
// //Not found

// const people2 = [
// 	{
// 		name: "Alex",
// 		know: ["Eva", "Jhon"],
// 	},
// 	{
// 		name: "Jhon",
// 		know: [],
// 	},
// 	{
// 		name: "Eva",
// 		know: [],
// 	},
// 	{
// 		name: "Ivan",
// 		know: ["Jhon", "Alex"],
// 	},
// ];

// // // jhon
// const people3 = [
// 	{
// 		name: "Alex",
// 		know: ["Eva", "Jhon"],
// 	},
// 	{
// 		name: "Jhon",
// 		know: [],
// 	},
// 	{
// 		name: "Eva",
// 		know: ["Alex", "Jhon"],
// 	},
// 	{
// 		name: "Ivan",
// 		know: ["Jhon", "Alex"],
// 	},
// ];

// function findNarcissus(arr) {
// 	for (const people of arr) {
// 		if (people.know.length === 0) {
// 			let count = 0;

// 			for (const whoKnows of arr) {
// 				if (whoKnows.know.includes(people.name)) {
// 					count += 1;
// 					if (count === arr.length - 1) {
// 						return `Нарцис - ${people.name}`;
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return "Not found narcissus";
// }

// console.log(findNarcissus(people1));
// console.log(findNarcissus(people2));
// console.log(findNarcissus(people3));

// --------------------------------------------------------------------------------------------------------//

// // Представлений масив фільмів (films) кожен елемент масиву являється об'єктом в якого є назва фільму та масив
// // з жанрами до яких він відноситься, але в масиві(genreIDs) тільки ID цих фільмів.
// // Потрібно в кожен об'єкт додати ключ genreNames який буде масивом з назвами жанрів до яких цей фільм відноситься.
// // Після чого відрендерити список фільмів як наведено в прикладі нижче(Expected result), якщо в списку жанрів
// // більш ніж 2 фільми тоді рендеримо назву перших двох жанрів, а всі інші замінюємо на "Others".
// // Співвідношення ID жанру та назви жанру знаходиться в об'єкті genresInfo.

// //Object example
// {
//     title: "Interceptor",
//     genreIDs: [
//         28,
//         53,
//         12,
//     ],
//     genreNames: [
//         "Action",
//         "Thriller",
//         "Adventure"
//     ]
// }

////  Expected result
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'

// const films = [
// 	{
// 		title: "Interceptor",
// 		genreIDs: [28, 53, 12],
// 	},
// 	{
// 		title: "Fantastic Beasts: The Secrets of Dumbledore",
// 		genreIDs: [14, 12, 28],
// 	},
// 	{
// 		title: "Last Seen Alive",
// 		genreIDs: [28, 53],
// 	},
// 	{
// 		title: "Jurassic World Dominion",
// 		genreIDs: [878, 28, 12, 53],
// 	},
// ];

// const genresInfo = {
// 	genres: [
// 		{
// 			id: 28,
// 			name: "Action",
// 		},
// 		{
// 			id: 12,
// 			name: "Adventure",
// 		},
// 		{
// 			id: 14,
// 			name: "Fantasy",
// 		},
// 		{
// 			id: 878,
// 			name: "Science Fiction",
// 		},
// 		{
// 			id: 53,
// 			name: "Thriller",
// 		},
// 		{
// 			id: 10752,
// 			name: "War",
// 		},
// 		{
// 			id: 37,
// 			name: "Western",
// 		},
// 	],
// };

// function newOb(arr1, arr2) {
// 	arr1.forEach(film => (film.genreNames = []));

// 	for (const el of arr1) {
// 		const val = Object.values(el.genreIDs);
// 		for (const v of val) {
// 			for (const ganre of arr2.genres) {
// 				if (v === ganre.id) {
// 					el.genreNames.push(ganre.name);
// 				}
// 			}
// 		}
// 	}
// }
// newOb(films, genresInfo);

// console.log("Films list:");
// films.forEach((film, i) => {
// 	let genresToShow = film.genreNames.slice(0, 2);
// 	if (film.genreNames.length > 2) {
// 		genresToShow.push("Others");
// 	}
// 	console.log(`${i + 1}. '${film.title}: ${genresToShow.join(", ")}.'`);
// });

//                  Норм варіант
//
// Створення мапи жанрів для швидкого доступу до назв жанрів за їхніми ID
// const genreMap = new Map(genresInfo.genres.map(genre => [genre.id, genre.name]));
// console.log(genreMap);
// Додавання ключа genreNames до кожного об'єкту фільму
// films.forEach(film => {
// 	film.genreNames = film.genreIDs.map(genreID => genreMap.get(genreID));
// });

// // Рендерінг списку фільмів
// console.log("Films list:");
// films.forEach((film, index) => {
// 	let genresToShow = film.genreNames.slice(0, 2);
// 	if (film.genreNames.length > 2) {
// 		genresToShow.push("Others");
// 	}
// 	console.log(`${index + 1}. '${film.title}: ${genresToShow.join(", ")}.${film.genreNames.length > 2 ? "'" : ""}`);
// });

// //     .

// --------------------------------------------------------------------------------------------------------//

// // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати
// такі властивості:
// // - name приватна властивість (ім'я, успадковується від User),
// // - surname приватна властивість (прізвище, успадковується від User),
// // - year (рік вступу до вузу).
// // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого
// можна вивести одночасно ім'я та прізвище студента.
// // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента
// (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу.
// Поточний рік отримаєте самостійно(читати документацію!!!).
// // Приклад ініціалізації екземпляру класа:
// // const student = new Student('Петрик', 'Пяточкин', 2019);

// // student.getFullName(); //поверне 'Петрик Пяточкин'
// // student.getCourse();   //поверне 3 (третій курс)

// class User {
// 	// static counter = 0;
// 	// static addUser() {
// 	// 	this.counter += 1;
// 	// 	console.log(`Number of users ${this.counter}`);
// 	// }
// 	#name;
// 	#surname;

// 	constructor(name, surname) {
// 		this.#name = name;
// 		this.#surname = surname;
// 	}

// 	getFullName() {
// 		console.log(`${this.#name} ${this.#surname}`);
// 	}
// }

// // const a = new User({ name: "Mango", surname: "AAAAAAAAAA" });
// // console.log(a.getFullName());

// class Student extends User {
// 	constructor(name, surname, year) {
// 		super(name, surname);
// 		this.year = year;
// 	}
// 	getCourse() {
// 		const currentYear = new Date().getFullYear();
// 		const cours = currentYear - this.year;

// 		if (cours < 5) {
// 			console.log(`${cours} курс!`);
// 		} else {
// 			console.log(`випускник!`);
// 		}
// 	}
// }

// const student = new Student("Петрик", "Пяточкин", 2021);
// student.getFullName(); //поверне 'Петрик Пяточкин'
// student.getCourse(); //поверне 3 (третій курс)

//
//
//                      Task 4. TO DO List
//                      ------------------
//
//  # Створити TO DO List
//  - Має бути поле вводу нового завдання;
//  - Має бути список створених завдань;
//  - Завдання можна позначити як виконане;
//  - Завдання можна видалити;

//  # Алгоритм
//  1. Зверстати форму для вводу нового завдання (інпут);
//  2. Зверстати список завдань (текстове значення, кнопка видалення, кнопка виконання);
//  3. Повішати подію нажаття на Enter в полі вводу завдання;
//  4. Записати нове завдання в localStorage по кліку на Enter в полі вводу;
//  5. Оновити список завдань в HTML;
//  6. По кліку на кнопку Виконано - закреслити завдання;
//  7. По кліку на кнопку Видалити - видалити завдання.

// const taskInputRef = document.querySelector("#newTask");
// const listRef = document.querySelector(".todo-list");
// const clearList = document.querySelector("#clearList");

// taskInputRef.addEventListener("keydown", onPress);
// listRef.addEventListener("click", onItemClick);
// clearList.addEventListener("click", onListClear);

// function onPress(e) {
// 	if (e.code !== "Enter") return;

// 	let data = JSON.parse(localStorage.getItem("todoList")) || [];

// 	// if (!data) {
// 	// 	data = [];
// 	// }
// 	if (e.target.value !== "") {
// 		data.push({
// 			state: "pending",
// 			value: e.target.value,
// 		});
// 	}
// 	// data.push(e.target.value);
// 	const jsonData = JSON.stringify(data);
// 	localStorage.setItem("todoList", jsonData);
// 	// e.target.value = "";

// 	// localStorage.setItem("task", e.target.value);

// 	e.target.value = null;
// 	updateToDoList();
// }

// const updateToDoList = () => {
// 	const todoList = JSON.parse(localStorage.getItem("todoList"));
// 	listRef.innerHTML = "";

// 	// todoList.forEach(task => {
// 	// 	const li = document.createElement("li");
// 	// 	const span = document.createElement("span");
// 	// 	const btnConfirm = document.createElement("button");
// 	// 	const btnRemove = document.createElement("button");

// 	// 	span.textContent = task;
// 	// 	btnConfirm.textContent = "Done";
// 	// 	btnConfirm.id = "confirmTask";
// 	// 	btnRemove.textContent = "Remove";
// 	// 	btnRemove.id = "removeTask";

// 	// 	li.append(span, btnConfirm, btnRemove);
// 	// 	listRef.append(li);
// 	// });

// 	if (todoList) {
// 		const markup = todoList
// 			.map(
// 				({ state, value }, i) => `
// 	<li class="task-item">
// 		<span class="${state}">${value}</span>
// 		<button type="button" data-taskid=${i} id="confirmTask">Done</button>
// 		<button type="button" data-taskid=${i} id="removeTask">Remove</button>
// 	</li>`,
// 			)
// 			.join("");

// 		listRef.insertAdjacentHTML("beforeend", markup);
// 	}
// };
// updateToDoList();

// function onItemClick(e) {
// 	if (e.target.id === "removeTask") {
// 		deleteTask(e.target.dataset.taskid);
// 	}
// 	if (e.target.id === "confirmTask") {
// 		completeTask(e.target.dataset.taskid);
// 	}
// }
// function onListClear() {
// 	localStorage.removeItem("todoList");
// 	listRef.innerHTML = "";
// }

// const deleteTask = id => {
// 	const data = JSON.parse(localStorage.getItem("todoList"));
// 	data.splice(id, 1);
// 	localStorage.setItem("todoList", JSON.stringify(data));
// 	updateToDoList();
// };

// const completeTask = id => {
// 	const data = JSON.parse(localStorage.getItem("todoList"));
// 	data[id] = {
// 		...data[id],
// 		state: "done",
// 	};
// 	localStorage.setItem("todoList", JSON.stringify(data));
// 	updateToDoList();
// };
//
//

//
//
// const user = {
// 	name: "John",
// 	age: 29,
// };

// function showUserInfo() {
// 	console.log(this.name);
// 	console.log(this.age);
// }
// const userInfo = showUserInfo.bind(user);

// userInfo();

// console.log(user);
//
//

//
//
// 						Task 1.Kozak
// 						-----
//
// Перебрати об. і вивести імя найкращого працівника
//
// const findBestEmployee = employees => Object.entries(employees).sort((a, b) => b[1] - a[1])[0][0];

// console.log(
// 	findBestEmployee({
// 		ann: 29,
// 		david: 35,
// 		helen: 1,
// 		lirence: 99,
// 	}),
// ); // lorence
// console.log(
// 	findBestEmployee({
// 		lux: 147,
// 		david: 21,
// 		kiwi: 19,
// 		chelsy: 38,
// 	}),
// ); // lux
// console.log(
// 	findBestEmployee({
// 		poly: 12,
// 		mango: 17,
// 		ajax: 4,
// 	}),
// ); // mango
//
//

//
//
// 							Task 2.Kozak
// 							------
//
// Виправити помилки
//
// const inventory = {
// 	items: ["Knife", "Gas mask"],

// 	add(itemName) {
// 		console.log(`Add ${itemName} to inventory`);

// 		this.items.push(itemName);
// 	},

// 	remove(itemName) {
// 		console.log(`Removing ${itemName} from inventory`);

// 		this.items = this.items.filter(item => item !== itemName);
// 	},
// };
// const invokeInventoryAction = (itemName, action) => {
// 	console.log(`Invoking action on ${itemName}`);
// 	// action.call(inventory, itemName);
// 	action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// console.log(inventory);
//
//

//
//
// 							Task 3. Kozak
// 							-------------
//
// class Counter {
// 	constructor(selector, initialValue, step) {
// 		this.wrapper = document.querySelector(selector);
// 		this.initialValue = initialValue;
// 		this.step = step;

// 		this.wrapper.insertAdjacentHTML(
// 			"beforeend",
// 			`
// 		<button class="decrement">-${this.step}</button>
// 		<span>${this.initialValue}</span>
// 		<button class="increment">+${this.step}</button>`,
// 		);
// 		this.addListeners();
// 	}

// 	addListeners = () => {
// 		this.wrapper.querySelector(".decrement").addEventListener("click", this.handleDecrement);
// 		this.wrapper.querySelector(".increment").addEventListener("click", this.handleIncrement.bind(this));
// 	};

// 	handleDecrement = () => {
// 		this.initialValue -= this.step;
// 		this.wrapper.querySelector("span").textContent = this.initialValue;
// 	};

// 	handleIncrement() {
// 		this.initialValue += this.step;
// 		this.wrapper.querySelector("span").textContent = this.initialValue;
// 	}
// }

// new Counter(".counterWrapper1", 0, 10);
// new Counter(".counterWrapper2", 100, 50);
//
//

//
//
// 										Task 4 Kozak.
// 										----------
//
// Зібрати стату по всіх вузлах в середині ел. переданого в параметрі root ш повернути її як об.
//	Стата повинна містити:
// - к-сть текстових вузлів;
// - к-сть ел. кожного класу;
// - к-сть ел. кожного тегу;
// Для роботи з класами використ. classList
//

// const container = document.querySelector(".container-mid");
// console.log("container.childNodes", container.childNodes);
// console.log("container.children", container.children);
// console.log("container.childElementCount", container.childElementCount);

// function collectDomStat(root) {
// 	const stat = {
// 		tags: {},
// 		classes: {},
// 		texts: 0,
// 	};

// 	const childNodes = root.childNodes;
// 	// console.log(childNodes);

// 	childNodes.forEach(node => {
// 		if (node.nodeType === 3) {
// 			stat.texts += 1;
// 		} else if (node.nodeType === 1) {
// 			const tag = node.tagName;

// 			stat.tags[tag] ? stat.tags[tag]++ : (stat.tags[tag] = 1);

// 			const classList = node.classList;
// 			classList.forEach(elClass => (stat.classes[elClass] ? stat.classes[elClass]++ : (stat.classes[elClass] = 1)));
// 		}
// 	});

// 	return stat;
// }
// console.log(collectDomStat(container));
//
//

//
//
// 										Task 2 Kozak.
// 										----------
//
// const board = document.querySelector("#board");
// const colors = ["#007fff", "#000ff", "#318ce7", "#6cb4ee", "#89cff0", "#007fff"];
// const SQUARES_NUMBER = 400;

// for (let i = 0; i < SQUARES_NUMBER; i++) {
// 	const square = document.createElement("div");
// 	square.classList.add("square");

// 	square.addEventListener("mouseover", () => setColor(square));
// 	square.addEventListener("mouseleave", () => removeColor(square));

// 	board.append(square);
// }

// function setColor(el) {
// 	const color = getRandomColor();
// 	el.style.backgroundColor = color;

// 	el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }
// function removeColor(el) {
// 	el.style.backgroundColor = "#1d1d1d";
// 	el.style.boxShadow = "0 0 2px #000";
// }

// function getRandomColor() {
// 	const index = Math.floor(Math.random() * colors.length);
// 	return colors[index];
// }
//
//

//
//
// class Superuser {
// 	static counter = 0;
// 	static addUser() {
// 		this.counter += 1;
// 		// Superuser.counter += 1;
// 		console.log(`Number of users ${this.counter}`);
// 	}

// 	#age;

// 	constructor({ name, age, email = "test@test.com", location = "World" } = {}) {
// 		this.name = name;
// 		this.#age = age;
// 		this.email = email;
// 		this.location = location;
// 		Superuser.addUser();
// 	}

// 	sayHello() {
// 		console.log(this.name);
// 	}

// 	get age() {
// 		return this.#age;
// 	}

// 	set age(number) {
// 		this.#age = number;
// 	}
// }

// const user = new Superuser({ name: "Mango", age: 20, location: "Lviv" });
// // console.log(user.sayHello());
// user.sayHello();
// user.qwerty = function () {
// 	console.log(this.location);
// };
// console.log(user);
// user.qwerty();

// user.age = 30;
// console.log(user.age);

// const user2 = new Superuser({ name: "Ajax", age: 34, location: "Kyiv" });
// console.log(user2);
// console.dir(user2.constructor);

// class User extends Superuser {
// 	constructor({ height, ...args }) {
// 		super(args);
// 		this.height = height;
// 	}

// 	jump() {
// 		console.log(`I jump ${this.height} cm`);
// 	}
// }
// // const bob = new User(name: 'Bob', age: 20, email: 'test2@test.com', location: 'Warshaw')
// const bob = new User({ height: 176, name: "Bob", age: 20, emeil: "test2@test.com", location: "Warshaw" });
// console.log(bob);
// bob.jump();
