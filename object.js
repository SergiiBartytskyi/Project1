// const user = {
// 	name: "Jacques Gluke",
// 	tag: "jgluke",
// 	location: {
// 		country: "Jamaica",
// 		city: "Ocho Rios",
// 	},
// 	hobbies: ["swiming", "music", "sci-fi"],
// };

// звернення «через крапку»
//
// const country = user.location.country;
// console.log(country); // 'Jamaica'

// const locat = user.location;
// console.log(locat); // Об'єкт locat

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'
// const lastHobby = user.hobbies[hobbies.length - 1];
// console.log(lastHobby); // 'sci-fi'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };
// // звернення через «квадратні дужки»
// //
// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// Зміна значення властивості
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };

// let rat = book.rating;
// console.log(rat); // 8.38
// rat = 9;
// console.log(rat); // 9
// console.log(book.rating); // 8.38

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// Додавання властивостей
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "pl"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'pl']

// Синтаксис коротких властивостей(shorthand properties)
// дозволяє використовувати ім'я змінної у якості імені властивості,
// а її значення - у якості значення властивості.
// const name = "Генрі Сибола";
// const age = 25;
// const gender = "man";
// const user = {
// 	name,
// 	age,
// 	gender,
// };
// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// console.log(user.gender); // 'man'

// Обчислювальні властивості
// Синтаксис обчислювальних властивостей (computed properties)
// const propName = "name";
// const a = "abc";
// const user = {
// 	age: 25,
// 	// Ім'я цієї властивості буде взяте зі значення змінної propName
// 	[propName]: "Генрі Сибола",
// 	[a]: "rot",
// };
// console.log(user.name); // 'Генрі Сибола'
// console.log(user.abc); // 'rot'

// Методи об'єкта
// / ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };
// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// Доступ до властивостей об'єкта в методах
// const bookShelf = {
// 	books: ["The Last Kingdom"],
// 	getBooks() {
// 		console.log(this);
// 	},
// };
// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
// 	books: ["The Last Kingdom"],
// 	getBooks() {
// 		return this.books;
// 	},
// 	addBook(bookName) {
// 		this.books.push(bookName);
// 	},
// 	removeBook(bookName) {
// 		const bookIndex = this.books.indexOf(bookName);
// 		this.books.splice(bookIndex, 1);
// 	},
// };
// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	rating: 8.38,
// 	top: {
// 		a: 2,
// 		b: 3,
// 		c: 1,
// 	},
// };
//
// for (const key in book) {
// 	// Ключ
// 	console.log(key);
// 	// Значення властивості з таким ключем
// 	console.log(book[key]);
// }

// Метод hasOwnProperty()
// Для того, щоб дізнатись, чи містить об'єкт власну властивість, використовується
// метод hasOwnProperty(key), який повертає true або false.
//
// const animal = {
// 	legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4
//
// Метод Object.create(animal)
// створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal.
//
// // ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
//
// ---------------------------
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	rating: 8.38,
// };
//
// for (const key in book) {
// 	// Якщо це власна властивість - виконуємо тіло if
// 	if (book.hasOwnProperty(key)) {
// 		console.log(key);
// 		console.log(book[key]);
// 	}
//
// 	// Якщо це невласна властивість - нічого не робимо
// }
// const magazine = Object.create(book);
// magazine.top = "5 stars";
// magazine.isPublic = true;
//
// for (const key in magazine) {
// 	if (magazine.hasOwnProperty(key)) {
// 		console.log(key);
// 		console.log(magazine[key]);
// 	}
// }
//

// Метод Object.keys(obj)
//приймає об'єкт і повертає масив ключів його власних властивостей.
// Якщо об'єкт не має властивостей, метод поверне порожній масив.
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
//
// for (const key of keys) {
// 	// Ключ
// 	console.log(key);
// 	// Значення властивості
// 	console.log(book[key]);
// }
//

//
// Метод Object.values(obj)
//повертає масив значень його власних властивостей.
//Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']
//
// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
//
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };
// const values = Object.values(goods); // [6, 3, 4, 7]
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total); // 20
//

//Метод Object.entries(obj)
// повертає масив записів, кожен елемент якого, буде ще один масив з 2 - х елементів:
// імені властивості і значення цієї властивості з об'єкта obj.
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']
// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// --------------------------------------

// Масив об'єктів
//
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "На березі спокійних вод",
// 		author: "Роберт Шеклі",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "Сон смішної людини",
// 		author: "Федір Достоєвський",
// 		rating: 7.75,
// 	},
// ];
// //
// const bookNames = [];
// for (const book of books) {
// 	// // Об'єкт книги
// 	// console.log(book);
// 	// // Назва
// 	// console.log(book.title);
// 	// // Автор
// 	// console.log(book.author);
// 	// // Рейтинг
// 	// console.log(book.rating);
// 	// bookNames.push(book.title);
// }
// console.log(bookNames); // ['The Last Kingdom', 'На березі спокійних вод', 'Сон смішної людини']
// let totalRating = 0;
// for (const book of books) {
// 	totalRating += book.rating;
// }
// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2
//

// ----------------------------

//
//                  spread: передача аргументів
//                    ----------------
// Операція ... (spread) дозволяє розподілити колекцію елементів(масив, рядок або об'єкт)
// в місце, в якому очікується набір окремих значень.
//
// const temps = [14, -4, 25, 8, 11];
// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN
// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25
//
//                  spread: створення нового масиву
//                         -----------------
// const temps = [14, -4, 25, 8, 11];
// const abc = ["a", "b", "c", "d", "e"];
// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// const newArray = [...temps, ...abc];
// console.log(newArray); // [14, -4, 25, 8, 11, 'a', 'b', 'c', 'd', 'e']
//
//                  spread: створення нового об'єкта
//                    --------------------
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15, propA: 10 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 10, propB: 10, propC: 15 }
//
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };
// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }
// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
//

// ------------------------------------------

//                  rest: збирання всіх аргументів функції
//                      -------------------------
// Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію.
//
// розподіл - коли ... знаходиться у правій частині операції присвоювання;
// збирання - коли ... знаходиться в її лівій частині.
//
// function multiply(...args) {
// 	console.log(args); // масив усіх аргументів
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
//
// const a = [1, 2, 3];
// const b = ["a", "b", "c"];
// function multiply(...args) {
// 	console.log(args); // масив усіх аргументів
// }
// multiply(...a, ...b); // [1, 2, 3, 'a', 'b', 'c']
//

//                   rest: збирання частини аргументів функції
//                     -----------------------------
//
// Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів,
// яка необхідна, оголосивши параметри до «збирання».
//
// function multiply(firstNumber, secondNumber, ...otherArgs) {
// 	console.log(firstNumber); // Значення першого аргументу
// 	console.log(secondNumber); // Значення другого аргументу
// 	console.log(otherArgs); // Масив інших аргументів
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
//

// ------------------------------------------------------

//                      Деструктуризація об'єктів
//                        ---------------------
//
//Деструктуризація завжди знаходиться у лівій частині операції присвоєння.
//Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта.
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	genres: ["historical prose", "adventure"],
// 	isPublic: true,
// 	rating: 8.38,
// };
// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined
// console.log(author); // Bernard Cornwell
// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
//

//                          Значення за замовчуванням
//                              -------------------
//
// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// };
// // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
// const { title, coverImage = "https://via.placeholder.com/640/480", author } = book;
// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480
//

//                          Зміна імені змінної
//                              -------------
//
// const firstBook = {
// 	title: "The Last Kingdom",
// 	coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };
// const { title: firstTitle, coverImage: firstCoverImage = "https://via.placeholder.com/640/480" } = firstBook;
// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
// const secondBook = {
// 	title: "Сон смішної людини",
// };
// const { title: secondTitle, coverImage: secondCoverImage = "https://via.placeholder.com/640/480" } = secondBook;
// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480
//

//                          Деструктуризація в циклах
//                              ------------------
//
// Для того, щоб скоротити кількість повторень, можна деструктуризувати властивості
// об'єкта у локальні змінні в тілі циклу.
//
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "На березі спокійних вод",
// 		author: "Роберт Шеклі",
// 		rating: 8.51,
// 	},
// ];
// // // for (const book of books) {
// // // 	console.log(book.title);
// // // 	console.log(book.author);
// // // 	console.log(book.rating);
// // // }
// for (const book of books) {
// 	const { title, author, rating } = book;
// 	console.log(title);
// 	console.log(author);
// 	console.log(rating);
// }
// або
// for (const { title, author, rating } of books) {
// 	console.log(title);
// 	console.log(author);
// 	console.log(rating);
// }
//

//                      Глибока деструктуризація
//                          ------------------
//
// const user = {
// 	name: "Jacques Gluke",
// 	tag: "jgluke",
// 	stats: {
// 		followers: 5603,
// 		views: 4827,
// 		likes: 1308,
// 	},
// };

// const {
// 	name,
// 	tag,
// 	stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
//

// -------------------------------------------

//                  Деструктуризація масивів
//                  -----------------------
// //
// const rgb = [200, 255, 100, 50, 60];
// const [red, green, blue, ...alfa] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:255,B:100,Alfa:50,60"
// ----------------------
// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"
// -------------------------
// взяти тільки останнє значення
//
// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"
//

// -----------------------------------------

//                      Патерн «Об'єкт параметрів»
//                          ----------------
//замінює набір параметрів всього одним об'єктом з іменованими властивостями.
//
//              Не добре
//
//  doStuffWithBook(title, numberOfPages, downloads, rating, public) {
//   // Робимо щось з параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   // І так далі

// // ❌ Що таке 736? Що таке 10283? Що таке true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);
//
//                  Добре
//
// function doStuffWithBook(book) {
// 	// Робимо щось з властивостями об'єкта
// 	console.log(book.title);
// 	console.log(book.numberOfPages);
// 	// І так далі
// }
//
// У такому випадку, під час її виклику передаємо один об'єкт з необхідними властивостями.
// ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// і тоді можна деструктуризувати об'єкт в параметрі book. Це можна зробити в тілі функції.
//
// function doStuffWithBook(book) {
// 	const { title, numberOfPages, downloads, rating, isPublic } = book;
// 	console.log(title);
// 	console.log(numberOfPages);
// 	// І так далі
// }
//
//              Або відразу в сигнатурі (підписі) функції - немає різниці.
//
// function doStuffWithBook({ title, numberOfPages, downloads, rating, isPublic }) {
// 	console.log(title);
// 	console.log(numberOfPages);
// 	// І так далі
// }

//

// const inputName = "color";
// const inputValue = "tomato";
// const colorPicker = {
// 	[inputName]: inputValue,
// 	[inputValue]: inputName,
// };
// colorPicker.abc = "1";

// console.log(colorPicker); // {color: 'tomato', tomato: 'color', abc: '1'}

// Task 1.
//
// const friends = [
// 	{ name: "Mango", online: false },
// 	{ name: "Kiwi", online: true },
// 	{ name: "Poly", online: true },
// 	{ name: "Ajax", online: false },
// ];
// console.table(friends);
// console.log(friends);
// console.dir(friends);
//

//                  знайти друга
//                  -----------
//
// const findFriendByName = function (allFriends, name) {
// 	for (const friend of allFriends) {
// 		if (friend.name === name) {
// 			return `${name} - знайшов ім'я`;
// 		}
// 	}
// 	return `${name} - не знайшов ім'я`;
// 	// console.log(friends);
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));
//

//              список всіх імен друзів
//                 ------------------
//
// const getAllNames = function (allFriends) {
// 	const names = [];

// 	for (const friend of allFriends) {
// 		names.push(friend.name);
// 	}

// 	return names;
// };

// console.log(getAllNames(friends)); // ['Mango', 'Kiwi', 'Poly', 'Ajax']
//

//              список імен друзів, які онлайн / оффлайн
//                 ------------------
//
// const getOnlineFriends = function (allFriends) {
// 	const namesOnline = [];

// 	// for (const friend of allFriends) {
// 	// 	if (friend.online === true) {
// 	// 		namesOnline.push(friend.name);
// 	// 	}
// 	// }

// 	for (const { name, online } of allFriends) {
// 		if (online) {
// 			namesOnline.push(name);
// 		}
// 	}
// 	return namesOnline;
// };

// console.log(getOnlineFriends(friends)); // ['Kiwi', 'Poly']

// ---

// const getOfflineFriends = function (allFriends) {
// 	const namesOffline = [];

// 	// for (const friend of allFriends) {
// 	// 	if (friend.online === false) {
// 	// 		namesOnline.push(friend.name);
// 	// 	}
// 	// }

// 	for (const { name, online } of allFriends) {
// 		if (!online) {
// 			namesOffline.push(name);
// 		}
// 	}
// 	return namesOffline;
// };

// console.log(getOfflineFriends(friends)); // ['Mango', 'Ajax']

// ---

// 1 спосіб
//
// const getFriendsByOnlineStatus = function (allFriends) {
// 	const friendsOnline = [];
// 	const friendsOffline = [];
// 	const onlineStatus = {};

// 	for (const { name, online } of allFriends) {
// 		if (online) {
// 			friendsOnline.push(name);
// 		} else {
// 			friendsOffline.push(name);
// 		}
// 	}
// 	onlineStatus.online = friendsOnline;
// 	onlineStatus.offline = friendsOffline;

// 	return onlineStatus;
// };

// 2 спосіб
//
// const getFriendsByOnlineStatus = function (allFriends) {
// 	const friendsByStatus = {
// 		online: [],
// 		offline: [],
// 	};

// 	for (const { name, online } of allFriends) {
// 		if (online) {
// 			friendsByStatus.online.push(name);
// 			continue;
// 		}
// 		friendsByStatus.offline.push(name);
// 	}

// 	return friendsByStatus;
// };
// console.log(getFriendsByOnlineStatus(friends)); //

// 3 спосіб
//
// const getFriendsByOnlineStatus = function (allFriends) {
// 	const friendsByStatus = {
// 		online: [],
// 		offline: [],
// 	};
// 	for (const { name, online } of allFriends) {
// 		friendsByStatus[online ? "online" : "offline"].push(name);
// 	}
// 	return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends)); // {offline: ['Mango', 'Ajax'], online : ['Kiwi', 'Poly']}
//

// --------------------------

//                  Колекція товарів в корзині
//                      -------------------
//
// const cart = {
// 	items: [],

// 	getItems() {
// 		return this.items;
// 	},

// 	add(product) {
// 		const { items } = this;

// 		for (const item of items) {
// 			if (item.name === product.name) {
// 				item.quantity += 1;
// 				return;
// 			}
// 		}

// 		const newProduct = {
// 			...product,
// 			quantity: 1,
// 		};

// 		items.push(newProduct);
// 	},

// 	remove(productName) {
// 		const { items } = this;

// 		for (let i = 0; i < items.length; i += 1) {
// 			const { name } = items[i];

// 			if (name === productName) {
// 				items.splice(i, 1);
// 			}
// 		}
// 	},

// 	clear() {
// 		this.items = [];
// 	},

// 	countTotalPrice() {
// 		const { items } = this;
// 		let total = 0;

// 		for (const { price, quantity } of items) {
// 			total += price * quantity;
// 		}

// 		return total;
// 	},

// 	increaseQuantity(productName) {
// 		const { items } = this;

// 		for (const item of items) {
// 			if (item.name === productName) {
// 				item.quantity += 1;
// 				return;
// 			}
// 		}
// 	},

// 	decreaseQuantity(productName) {
// 		const { items } = this;

// 		for (const item of items) {
// 			if (item.name === productName) {
// 				item.quantity -= 1;
// 				if (!item.quantity) {
// 					this.remove(productName);
// 				}
// 				return;
// 			}
// 		}
// 	},
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "pear", price: 60 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "strawberry", price: 110 });
// cart.add({ name: "strawberry", price: 110 });

// console.table(cart.getItems()); //''

// cart.remove("apple");
// console.table(cart.getItems()); //

// cart.clear();
// console.table(cart.getItems()); //

// cart.increaseQuantity("pear");
// cart.increaseQuantity("apple");
// cart.increaseQuantity("pear");
// console.table(cart.getItems()); //

// cart.decreaseQuantity("pear");
// cart.decreaseQuantity("pear");
// console.table(cart.getItems()); //

// console.log("Total: ", cart.countTotalPrice());
//

// ------------------------------

// const playlist = {
// 	name: "My playlist",
// 	rating: 5,
// 	tracks: ["track-1", "track-2", "track-3"],
// 	trackCount: 3,
// };
// const { name, rating, tracks, trackCount, author = "J. J. Rowling" } = playlist;
// console.log(name, rating, tracks, trackCount, author);
// playlist.author = "S. King";
// console.log(playlist);

// const playlist = {
// 	name: "My playlist",
// 	rating: 5,
// 	tracks: ["track-1", "track-2", "track-3"],
// 	trackCount: 3,
// 	stats: {
// 		followers: 5603,
// 		views: 4827,
// 		likes: 1308,
// 	},
// };

// const {
// 	name,
// 	rating,
// 	tracks,
// 	trackCount,
// 	author = "J. J. Rowling",
// 	stats: { followers, views, likes },
// } = playlist;
// console.log(name, rating, tracks, trackCount, author, followers, views, likes);

// const enrties = Object.entries(playlist);
// for (const [key, value] of enrties) {
// 	// const { key, value } = playlist;
// 	console.log(key, value);
// }

// const user = {
// 	name: "Sergii",
// 	age: 37,
// 	languages: {
// 		html: false,
// 		css: false,
// 		js: true,
// 		"React Nstive": true,
// 	},
// };
// const users = Object.keys(user);
// const values = Object.values(user);
// for (const key of users) {
// 	// if (Object.hasOwnProperty.call(object, key)) {
// 	// 	const element = object[key];

// 	// }
// 	console.log(key);
// }

// for (const value of values) {
// 	// if (Object.hasOwnProperty.call(object, key)) {
// 	// 	const element = object[key];

// 	// }
// 	console.log(value);
// }

// user.city = "Rzeszów";
// console.log(user); // {name: 'Sergii', age: 37, languages: {…}, city: 'Rzeszów'}

// delete user.city;
// console.log(user); // {name: 'Sergii', age: 37, languages: {…}}

// Object.freeze(user);
// user.abc = "abc";
// user.age = 100;
// console.log(user); // {name: 'Sergii', age: 37, languages: {…}}

// const user = {
// 	name: "Sergii",
// 	age: 37,
// 	languages: {
// 		html: false,
// 		css: false,
// 		js: true,
// 		"React Nstive": true,
// 	},
// };
// // Object.freeze(user);
// const user2 = Object.create(user);
// user2.age = 40;
// user2.height = 1.75;
// console.log(user2);

// for (const key in user2) {
// 	if (user2.hasOwnProperty(key)) {
// 		console.log("Own ", user2[key]);
// 	}
// 	console.log("All ", user2[key]);
// }

// const user = {
// 	score: 0,
// };

// if (user.hasOwnProperty("score")) {
// 	console.log("Знайшов!");
// } else {
// 	console.log("Немає!");
// } // Знайшов!

// if (user.score) {
// 	console.log("Знайшов!");
// } else {
// 	console.log("Немає!");
// } // Немає! бо значення score = 0, false, undefined...

// if ("score" in user) {
// 	// знаходить всі властивості в обєкті(не власні і власні)
// 	console.log("Знайшов!");
// } else {
// 	console.log("Немає!");
// } // Знайшов!
//

// -------------------

//
// const user = {
// 	name: "Sergii",
// 	age: 37,
// 	languages: {
// 		html: false,
// 		css: false,
// 		js: true,
// 		ReactNative: true,
// 		abc: {
// 			a: "a",
// 			b: "b",
// 			c: "c",
// 		},
// 	},

// 	sayHallo() {
// 		console.log(this);
// 	},

// 	iKnow() {
// 		// for (const key in this.languages) {
// 		// 	if (this.languages[key]) {
// 		// 		console.log(key);
// 		// 	}
// 		// }
// 		// const keys = Object.keys(this.languages);
// 		// for (const key of keys) {
// 		// 	if (this.languages[key]) {
// 		// 		console.log(key);
// 		// 	}
// 		// }
// 		// const values = Object.values(this.languages);
// 		// for (const value of values) {
// 		// 	if (value) {
// 		// 		console.log(value);
// 		// 	}
// 		// }
// 		// const entries = Object.entries(this.languages);
// 		// for (const entrie of entries) {
// 		// 	console.log(entrie);
// 		// }

// 		// const keys = Object.keys(this);
// 		// for (const key of keys) {
// 		// 	if (typeof this[key] === "function") {
// 		// 		continue;
// 		// 	} else {
// 		// 		console.log(key);
// 		// 	}
// 		// }
// 	},
// };
// user.sayHallo();

// const user2 = Object.create(user);
// user2.name = "Alina";
// user2.sayHallo();

// user.iKnow();
// user2.iKnow();
//

// ---------------------------------

//					serchNumber
// 						-----
//
// const arr = [1, 3, 5, 7, 6, 2, 4, 8, 9];

// function serchNumber(arr, n) {
// 	for (let i = 0; i < arr.length; i += 1) {
// 		if (arr[i] === n) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }
// console.log(serchNumber(arr, 0));

// function serchElement(arr, el) {
// 	arr.sort((a, b) => a - b);
// 	console.log(arr);
// 	let left = -1;
// 	let right = arr.length;

// 	while (right - left > 1) {
// 		const mid = Math.floor((left + right) / 2);

// 		if (arr[mid] === el) {
// 			return mid;
// 		}

// 		if (arr[mid] > el) {
// 			right = mid;
// 		} else {
// 			left = mid;
// 		}
// 	}
// 	return -1;
// }
// console.log(serchElement(arr, 6));
//

// ------------------------------

//
// 						Task1
//
// Скрипт для об.user послідовно:
// - додає поле mood зі значенням 'happy';
// - замін.є значення hobby  на 'skydiving';
// - змінює значення premium  на false;
// - виводить вміст об. user у форматі ключ:значення використ. Object.keys() та for...of
//
// const user = {
// 	name: "Mango",
// 	age: 20,
// 	hobby: "html",
// 	premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user["premium"] = false;
// const keys = Object.keys(user);
// for (const key of keys) {
// 	console.log(key, user[key]);
// }
//

// 						Task 2
//
// В об.зберігаються зп команди.Написати код для підсумування всіх зп і
// зберегти рез.у змінній sum.Повинно вийти 390.
// Якщо об.salaries порожній, то рез = 0.
//
// const salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// };

// const salaries = {
// 	John: 0,
// 	Ann: 0,
// 	Pete: 0,
// };

// function totalSalaries(obj) {
// 	let sum = 0;
// 	const values = Object.values(obj);

// 	for (const value of values) {
// 		sum += value;
// 	}

// 	// for (const key in obj) {
// 	// 	sum += obj[key];
// 	// }
// 	return sum;
// }
// console.log(totalSalaries(salaries));
//

// -------------------------

//
// 					Task 3
//
// Ф - я calcTotalPrice(stones, stoneName) приймає масив об.та рядок із назвою каменю.
// Ф-я рахує і повертає заг. вартість каміння з таким імям, ціною і к-тю з об.
// //
// const stones = [
// 	{
// 		name: "Смарагд",
// 		price: 1300,
// 		quantity: 4,
// 	},
// 	{
// 		name: "Діамант",
// 		price: 2700,
// 		quantity: 3,
// 	},
// 	{
// 		name: "Сапфір",
// 		price: 400,
// 		quantity: 7,
// 	},
// 	{
// 		name: "Щебінь",
// 		price: 200,
// 		quantity: 2,
// 	},
// ];
// function calcTotalPrice(stones, stoneName) {
// 	let totalPrice = 0;

// 	for (const { name, price, quantity } of stones) {
// 		if (name === stoneName) {
// 			totalPrice = price * quantity;
// 			return totalPrice;
// 		}
// 	}
// 	return "Немає такого маменю!";
// }
// console.log(calcTotalPrice(stones, "Смарагд"));
// console.log(calcTotalPrice(stones, "Діамант"));
// console.log(calcTotalPrice(stones, "Сапфір"));
// console.log(calcTotalPrice(stones, "Щебінь"));
// console.log(calcTotalPrice(stones, "Gold"));
//

// -------------------------------------

//
// 					Task 4
//
// Скрипт управління ос.кабінетом інтернет банку.
// Є об.account в якому необх.реалізув методи для роботи з балансом
// та іст.транзакцій.

// Типи транзакцій:
// - покласти гроші на рахунок;
// - зняти гроші з рахунку.
// //
// const Transaction = {
// 	DEPOSIT: "deposit",
// 	WITHDRAW: "withdraw",
// };
// Object.freeze(Transaction);

// // Кожна транзакціія це об.із властивостями:
// // id, type, amount

// const account = {
// 	// Поточний баланс рахунку
// 	balance: 0,

// 	// Історія транзакцій
// 	transactions: [{ id: 16, amount: 145, type: "deposit" }],

// 	// Метод ств. і повертає об. транзакції
// 	// Приймає суми та тип транзакції
// 	createTransaction(amount, type) {
// 		return {
// 			id: Date.now(),
// 			amount,
// 			type,
// 		};
// 	},

// 	// Метод відповідає за додавання суми до балансу
// 	// Приймає суму транзакції
// 	// Викликає createTransaction для створення об. транзакції,
// 	// після чого додає його до історії транзакцій
// 	deposit(amount) {
// 		if (amount <= 0) {
// 			return "Error";
// 		}

// 		const item = this.createTransaction(amount, Transaction.DEPOSIT);
// 		this.balance += amount;
// 		this.transactions.push(item);
// 	},

// 	// Метод, що відповідає за зняття суми з балансу.
// 	// Приймає суму транзакції
// 	// Викликає createTransaction для ств об. транзакцій
// 	// і додає його до іторії транзакцій
// 	// Якщо amount більщше ніж поточний баланс, виводить повідомлення
// 	// про те, що зняття готівки не мождиве, не достатньо кощтів
// 	withdraw(amount) {
// 		if (amount > this.balance || amount <= 0) {
// 			return "Не вистачає коштів!";
// 		}

// 		const item = this.createTransaction(amount, Transaction.WITHDRAW);
// 		this.balance -= amount;
// 		this.transactions.push(item);
// 	},

// 	// Метод повертає поточний баланс
// 	getBalance() {
// 		return this.balance;
// 	},

// 	// Метод шукає та повертає об. транзакційпо id
// 	getTransactionDetails(id) {
// 		for (const transaction of this.transactions) {
// 			if (transaction.id === id) {
// 				return transaction;
// 			}
// 		}
// 		return "Empty";
// 	},

// 	// Метод повертає к-ть коштів певного типу
// 	//  транзакцій з усієї історії транзакцій
// 	getTransactionTotal(type) {
// 		let res = 0;
// 		for (const transaction of this.transactions) {
// 			if (transaction.type === type) {
// 				res += transaction.amount;
// 			}
// 		}
// 		return res;
// 	},
// };
// // console.log(account.createTransaction(1000, "deposit"));
// account.deposit(1000);
// account.deposit(1);
// account.deposit(100);
// account.deposit(1000);
// console.log(account);
// account.withdraw(1000);
// account.withdraw(1000);
// console.log(account.withdraw(1000));

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(16));
// console.log(account.getTransactionDetails(7));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// --------------------------------------
// 						Test

// const Transaction = {
// 	DEPOSIT: "deposit",
// 	WITHDRAW: "withdraw",
// };
// Object.freeze(Transaction);
// const account = {
// 	// Поточний баланс рахунку
// 	balance: 0,

// 	// Історія транзакцій
// 	transactions: [],

// 	// Метод ств. і повертає об. транзакції
// 	// Приймає суми та тип транзакції
// 	createTransaction(amount, type) {
// 		return {
// 			id: this.transactions.length,
// 			amount,
// 			type,
// 		};
// 	},

// 	// Метод відповідає за додавання суми до балансу
// 	// Приймає суму транзакції
// 	// Викликає createTransaction для створення об. транзакції,
// 	// після чого додає його до історії транзакцій
// 	deposit(amount) {
// 		if (amount <= 0) {
// 			return "Error!";
// 		}

// 		const item = this.createTransaction(amount, Transaction.DEPOSIT);
// 		this.balance += amount;
// 		this.transactions.push(item);
// 	},

// 	// Метод, що відповідає за зняття суми з балансу.
// 	// Приймає суму транзакції
// 	// Викликає createTransaction для ств об. транзакцій
// 	// і додає його до іторії транзакцій
// 	// Якщо amount більщше ніж поточний баланс, виводить повідомлення
// 	// про те, що зняття готівки не мождиве, не достатньо кощтів
// 	withdraw(amount) {
// 		if (amount > this.balance || amount <= 0) {
// 			return "Error!";
// 		}

// 		const item = this.createTransaction(amount, Transaction.WITHDRAW);
// 		this.balance -= amount;
// 		this.transactions.push(item);
// 	},

// 	// Метод повертає поточний баланс
// 	getBalance() {
// 		return this.balance;
// 	},

// 	// Метод шукає та повертає об. транзакцій по id
// 	getTransactionDetails(id) {
// 		for (const transaction of this.transactions) {
// 			if (transaction.id === id) {
// 				return transaction;
// 			}
// 		}
// 	},

// 	// Метод повертає к-ть коштів певного типу
// 	//  транзакцій з усієї історії транзакцій
// 	getTransactionTotal(type) {
// 		let sum = 0;
// 		for (const transaction of this.transactions) {
// 			if (transaction.type === type) {
// 				sum += transaction.amount;
// 			}
// 		}
// 		return sum;
// 	},
// };

// console.log(account.balance);
// account.deposit(1000);
// account.withdraw(500);
// account.deposit(700);
// account.withdraw(1000);
// account.deposit(2000);
// console.log(account);

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(4));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// ------------------------

// 						Рекурсія
// //
// function countUp(n) {
// 	if (n < 1) {
// 		return [];
// 	} else {
// 		const countArray = countUp(n - 1);
// 		countArray.push(n);
// 		return countArray;
// 	}
// }
// console.log(countUp(5)); // [1,2,3,4,5]
//

// -----------------------

//
// const user = {
// 	name: "Tod",
// 	age: 37,
// 	skills: {
// 		html: true,
// 		css: false,
// 		javaScript: [
// 			{
// 				js: true,
// 				reactNative: true,
// 				vue: false,
// 			},
// 		],
// 	},
// };

// const {
// 	name,
// 	skills: {
// 		html,
// 		javaScript: { js, reactNative, vue },
// 	},
// } = user;
// for (const ar of user.skills.javaScript) {
// 	console.log(ar);
// 	// console.log(reactNative);
// 	// console.log(vue);
// }

// const user = [
// 	{
// 		name: "user1",
// 		language: "html",
// 		cars: {
// 			audi: "a6",
// 			bmw: "x5",
// 		},
// 	},
// 	{
// 		name: "user2",
// 		language: "css",
// 		cars: { audi: "a7", bmw: "x7" },
// 	},
// 	{
// 		name: "user3",
// 		language: "js",
// 		cars: {
// 			audi: "a8",
// 			bmw: "None",
// 		},
// 	},
// ];
// for (const {
// 	name,
// 	language,
// 	cars: { audi, bmw },
// } of user) {
// 	console.log(name);
// 	console.log(language);
// 	console.log(audi, bmw);
// }

// --------------

// function foo({ name = "no name", language = 'no language", cars: { audi = "None", bmw = "None" } = {} } = {}) {
// 	console.log(name);
// 	console.log(language);
// 	console.log(audi);
// 	console.log(bmw);
// }
// foo({
// 	name: "user1",
// 	language: "html",
// 	cars: {
// 		audi: "a6",
// 		bmw: "x5",
// 	},
// });
// foo({
// 	name: "user2",
// 	language: "html",
// });
// foo();

// const arr = [12, 22, 3, 14, 45, 16, 57];
// function getMinEl(arr) {
// 	let min = arr[0];
// 	for (let i = 0; i < arr.length; i += 1) {
// 		if (arr[i] < min) {
// 			min = arr[i];
// 		}
// 	}
// 	return min;
// }

// console.log(getMinEl(arr));

// const arr = [1, 6, 88, 6, 99, 542, 9, 2, 457, 3, 5, 7, 956, 10];

// function getSort(arr) {
// 	let count = 0;

// 	for (let i = 0; i < arr.length; i += 1) {
// 		let up = false;

// 		for (let j = 1; j < arr.length - i; j += 1) {
// 			const first = arr[j - 1];
// 			const second = arr[j];

// 			if (first > second) {
// 				up = true;
// 				arr[j - 1] = second;
// 				arr[j] = first;
// 			}
// 			count += 1;
// 		}
// 		if (!up) {
// 			return `arr: [${arr}]; count: ${count}`;
// 		}
// 	}
// }
// console.log(getSort(arr));

// const min = Math.min(...arr);
// const max = Math.max(...arr);
// console.log(min);
// console.log(max);
// let arr2 = [...arr];
// console.log(arr2 === arr);
// console.log(arr);
// console.log(arr2);
// arr2 = arr2.slice(0, 4);
// console.log(arr2);

// const a = [1, 2, 3, ...arr];
// console.log(a);

// const [first, ...props] = a;
// console.log(props);
// console.log(first);

// const arr = [1, 6, 88, 6, 99, 542, 9, 2, 457, 3, 5, 7, 956, 10];

// function foo(first, second, third, ...rest) {
// 	console.log(first, second, third, rest);
// 	console.log(arguments);
// }
// foo(...arr);
//

// --------------------------------

//
// 					Task 1. Деструктиризація
// 				-----------------------------------
//
// Переписати ф-ю, щоб вона приймала одтн об. параметрів замість набору незалеж. аргум.
//
/**
 * Розраховуємо індекс маси тіла людини
 * @param {Object} obj
 * @returns{Number} BMI
 */
// function calcBMI({ weight, height }) {
// 	const numericWeight = Number(weight.replace(",", "."));
// 	const numericHeight = Number(height.replace(",", "."));
// 	return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
// console.log(
// 	calcBMI({
// 		weight: "88,3",
// 		height: "1.75",
// 	}),
// );
// console.log(
// 	calcBMI({
// 		weight: "68,3",
// 		height: "1.65",
// 	}),
// );
// console.log(
// 	calcBMI({
// 		weight: "118,3",
// 		height: "1.95",
// 	}),
// );
//

// --------------------------------

//
// 					Task 2. Деструктиризація
// 				-----------------------------------
//
// Переписати ф-ю, щоб вона приймала одтн об. параметрів замість набору незалеж. аргум.
//
/**
 *
 * @param {Object} obj
 */
// function printContactInfo({ names, phones }) {
// 	const nameList = names.split(",");
// 	const phoneList = phones.split(",");
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`);
// 	}
// }

// printContactInfo({
// 	names: "Jacob,William,Solomon,Artemis",
// 	phones: "12345678901,23456789012,34567890123,45678901234",
// });
//

// --------------------------------

//
// 					Task 3. Глибока деструктиризація
// 				-----------------------------------
//
// Переписати ф-ю, щоб вона приймала одтн об. параметрів замість набору незалеж. аргум.
/**
 *
 * @param {Object} obj
 * @returns string
 */
// function getBotReport({ companyName, repairBots, defenceBots }) {
// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(
// 	getBotReport({
// 		companyName: "Cyberdyne Systems",
// 		repairBots: 150,
// 		defenceBots: 50,
// 	}),
// );
//

// --------------------------------

//
// 					Task 4. Глибока деструктиризація
// 				-----------------------------------
//
// Переписати ф-ю, щоб вона приймала один об. параметрів
// із властивостями companyName та stock та виводила рапорт про к-ть товарів
// на складі бідь якої компанії.
//
/**
 *
 * @param {Object} obj
 * @returns string
 */
// function getStockReport({ companyName, stock }) {
// 	let total = 0;
// 	for (const value of Object.values(stock)) {
// 		total += value;
// 	}
// 	return `${companyName} has ${total} items in stock.`;
// }
// console.log(
// 	getStockReport({
// 		companyName: "Cyberdyne System",
// 		stock: {
// 			repairBots: 150,
// 			defenceBots: 50,
// 		},
// 	}),
// );
// console.log(
// 	getStockReport({
// 		companyName: "Belacci",
// 		stock: {
// 			shoes: 20,
// 			skirts: 10,
// 			hats: 5,
// 		},
// 	}),
// );
//

// --------------------------------

//
// 					Task 5. Операція spread
// 				-----------------------------------
//
// Доповни ф - ю createContact(partialContact)так, щоб вона повертала новий об.
// контакту з доданими властивостями id та createdAT, а також list зі значенням
// 'default' якщо в partialContact  немає такої властивості.
//
/**
 *
 * @param {Object} obj
 * @returns obj
 */
// function createContact(partialContact) {
// 	return {
// 		id: generatedId(),
// 		createdAT: new Date(),
// 		list: "default",
// 		...partialContact,
// 	};
// }

// console.log(
// 	createContact({
// 		name: "Mango",
// 		email: "mango@mail.com",
// 		list: "friends",
// 	}),
// );
// console.log(
// 	createContact({
// 		name: "Poly",
// 		email: "poly@hotmail.com",
// 	}),
// );

// function generatedId() {
// 	return "_" + Math.random().toString(36).substr(2, 9);
// }
//

// --------------------------------

//
// 					Task 6. Операція rest
// 				-----------------------------------
//
// Напиши ф - ю transformUsername(user) так, щоб вона повертала новий об
// із властивостями fullName та lastName.
//
/**
 *
 * @param {Object} obj
 * @returns Object
 */
// function transformUsername({ firstName, lastName, ...props }) {
// 	return {
// 		fullName: `${firstName} ${lastName}`,
// 		...props,
// 	};
// }

// console.log(
// 	transformUsername({
// 		id: 1,
// 		firstName: "Jacob",
// 		lastName: "Mercer",
// 		email: "j.mercer@mail.com",
// 		friendCount: 40,
// 	}),
// );
// console.log(
// 	transformUsername({
// 		id: 2,
// 		firstName: "Adrian",
// 		lastName: "Cross",
// 		email: "a.cross@hotmail.com",
// 		friendCount: 20,
// 	}),
// );

// --------------------------------------

// const user = [2, 4, 66, 5, 23, 76, 0, 345, 7, 234];
// let count = 0;

// for (let i = 0; i < user.length; i += 1) {
// 	let isArrChanged = false;

// 	for (let n = 1; n < user.length - i; n += 1) {
// 		const fisrtEl = user[n - 1];
// 		const secondEl = user[n];

// 		if (fisrtEl > secondEl) {
// 			isArrChanged = true;
// 			user[n - 1] = secondEl;
// 			user[n] = fisrtEl;
// 		}

// 		count += 1;
// 	}
// 	if (!isArrChanged) {
// 		break;
// 	}
// }
// console.log(`user: [${user}]`);
// console.log(`count: ${count}`);

// ----------------------------------

// const stones = [
// 	{
// 		name: "Смарагд",
// 		price: 1300,
// 		quantity: 4,
// 	},
// 	{
// 		name: "Щебінь",
// 		price: 200,
// 		quantity: 1,
// 	},
// 	{
// 		name: "Діамант",
// 		price: 2700,
// 		quantity: 3,
// 	},
// 	{
// 		name: "Щебінь",
// 		price: 200,
// 		quantity: 12,
// 	},
// 	{
// 		name: "Сапфір",
// 		price: 400,
// 		quantity: 7,
// 	},
// 	{
// 		name: "Щебінь",
// 		price: 200,
// 		quantity: 2,
// 	},
// ];

// function calcTotalPrice(stones, stoneName) {
// 	let result = 0;
// 	for (const { name, price, quantity } of stones) {
// 		if (name === stoneName) {
// 			console.log(name);
// 			result += price * quantity;
// 		}
// 	}
// 	if (!result) {
// 		return "Error!";
// 	}

// 	return result;
// }
// console.log(calcTotalPrice(stones, "Щебінь"));
//

// -------------------------

//

// const Transaction = {
// 	DEPOSIT: "deposit",
// 	WITHDRAW: "withdraw",
// };
// Object.freeze(Transaction);

// const account = {
// 	balance: 0,

// 	transactions: [],

// 	getBalance() {
// 		return this.balance;
// 	},

// 	getTransactions(type) {
// 		const typeOfTransactions = [];
// 		let sum = 0;

// 		for (const transaction of this.transactions) {
// 			if (transaction.type === type) {
// 				typeOfTransactions.push(transaction);
// 				sum += transaction.amount;
// 			}
// 		}
// 		return { typeOfTransactions, sum };
// 	},

// 	createTransaction(amount, type) {
// 		this.transactions.push({
// 			id: this.transactions.length,
// 			amount,
// 			type,
// 		});
// 	},

// 	deposit(amount) {
// 		if (amount <= 0) {
// 			return "Error!";
// 		}
// 		const newDeposit = this.createTransaction(amount, Transaction.DEPOSIT);
// 		this.balance += amount;
// 	},

// 	withdraw(amount) {
// 		if (amount > this.balance || amount <= 0) {
// 			return "Error!";
// 		}

// 		const newWithdraw = this.createTransaction(amount, Transaction.WITHDRAW);
// 		this.balance -= amount;
// 	},
// };
// console.log(account);
// account.deposit(1000);
// account.withdraw(300);
// account.deposit(5000);
// account.deposit(10000);
// account.withdraw(2000);
// account.withdraw(3300);
// account.withdraw(100);
// console.log(account.getBalance());
// console.log(account.getTransactions(Transaction.DEPOSIT));
// // console.log(account.transactions);

// const first = { A: 1, B: 2 };
// const second = { A: 3, C: 4 };
// const trhirs = { A: 5, ...first, ...second, C: 5 };
// console.log(trhirs);

// 						Task 1.
// 						--------
//
// Знайти перше непослідовне число
//
// const arr = [1, 2, 3, 4, 6, 7, 8];

// for (let i = 0; i < arr.length; i += 1) {
// 	const first = arr[i];
// 	const second = arr[i + 1];
// 	let x = 0;
// 	if (second - first != 1) {
// 		x = second;
// 		console.log(x); // 6
// 		break;
// 	}
// }
//

// -------------------------------

//
//                      Task 1.ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ
//                      -------------------------------------
//
//Напиши функцію countProps(object), яка рахує і повертає кількість
// власних властивостей об'єкта в параметрі object. Використовуй змінну
// propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
// 	let propCount = 0;
// 	for (const key in object) {
// 		if (object.hasOwnProperty(key)) {
// 			propCount += 1;
// 		}
// 	}
// 	return propCount;
// }
// console.log(countProps({})); // повертає 0
// console.log(countProps({ name: "Mango", age: 2 })); // повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // повертає 3
//

// -------------------------------

//
//                      Task 2.ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0
//                      -------------------------------------
//
// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і,
// можливо, але не обов'язково, цикл for...of.

// function countProps(object) {
// 	let total = 0;
// 	const keys = Object.keys(object);
// 	for (const key of keys) {
// 		total += 1;
// 	}
// 	return total;
// }
// console.log(countProps({})); // повертає 0
// console.log(countProps({ name: "Mango", age: 2 })); // повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // повертає 3
// // Функція підраховує тільки власні властивості об'єкта
// // Функція використовує метод Object.keys() і, можливо, цикл for...of
//

// -------------------------------

//
//                      Task 3.ВИТРАТИ НА ЗАРПЛАТУ
//                      -------------------------------------
// //
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
// де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
// Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
// Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
// 	let totalSalary = 0;
// 	const values = Object.values(salaries);
// 	for (const value of values) {
// 		totalSalary += value;
// 	}
// 	return totalSalary;
// }
// console.log(countTotalSalary({})); // повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // повертає 400
// // Функція враховує тільки власні властивості об'єкта
//

// -------------------------------

//
//                      Task 4. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ
//                      -------------------------------------
//
// Напиши функцію getProductPrice(productName), яка приймає один параметр productName -
// назва продукту.Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві
// products і повертає його ціну(властивість price).Якщо продукт з такою назвою не знайдений,
// функція повинна повертати null.

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// 	for (const { name, price } of products) {
// 		if (name === productName) {
// 			return price;
// 		}
// 	}
// 	return null;
// }
// console.log(getProductPrice("Radar")); // повертає 1300.
// console.log(getProductPrice("Grip")); // повертає 1200.
// console.log(getProductPrice("Scanner")); // повертає 2700.
// console.log(getProductPrice("Droid")); // повертає 400.
// console.log(getProductPrice("Engine")); // повертає null.
//

// -------------------------------

//
//                      Task 5. КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ
//                      -------------------------------------
//
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName -
// ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з
// таким ім'ям з кожного об'єкта в масиві products.Якщо в об'єктах відсутні властивості з
// таким ім'ям, функція повинна повернути порожній масив.

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// // function getAllPropValues(propName) {
// // 	const values = [];
// // 	for (const product of products) {
// // 		if (product.hasOwnProperty(propName)) {
// // 			values.push(product[propName]);
// // 		}
// // 	}

// // 	return values;
// // }

// // 2 спосіб
// function getAllPropValues(propName) {
// 	// Change code below this line
// 	const allPropValues = [];

// 	for (const product of products) {
// 		if (product[propName]) {
// 			allPropValues.push(product[propName]);
// 		}
// 	}
// 	// console.log(allPropValues);

// 	return allPropValues;
// }
// console.log(getAllPropValues("name")); // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // повертає []
//

// -------------------------------

//
//                      Task 6. ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ
//                      -------------------------------------
//
// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName -
// назва товару.Функція повинна повернути загальну вартість(ціна * кількість) товару
// з таким ім'ям з масиву products.

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// 	for (const product of products) {
// 		if (product.name === productName) {
// 			return product.price * product.quantity;
// 		}
// 	}
// 	return 0;
// }
// console.log(calculateTotalPrice("Blaster")); // повертає 0
// console.log(calculateTotalPrice("Radar")); // повертає 5200
// console.log(calculateTotalPrice("Droid")); // повертає 2800
// console.log(calculateTotalPrice("Grip")); // повертає 10800
// console.log(calculateTotalPrice("Scanner")); // повертає 8100
//

// -------------------------------

//
//                      Task 7.КАРТКИ ЗАВДАНЬ
//                      -------------------------------------
//
// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними
// властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму
// параметр data.У новому об'єкті повинна бути властивість completed, значення якої
// зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і
// priority, можуть бути відсутніми.Тоді, в новому об'єкті завдання, у властивостях
// category і priority повинні бути значення за замовчуванням, що зберігаються в
// однойменних локальних змінних.

// function makeTask(data) {
// 	const { text } = data;

// 	return { category: "General", priority: "Normal", completed: false, ...data };
// }
// console.log(makeTask({})); // повертає { category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// // повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// // повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" }));
// // повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }
//

// -------------------------------

//
//                      Task 8. МАСИВ ЗБІГІВ
//                      -------------------------------------
//
// Функція findMatches() приймає довільну кількість аргументів.Першим аргументом завжди буде
// масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть
// тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив[1, 2],
// тому що тільки вони є в масиві першого аргументу.

// function findMatches(first, ...args) {
// 	const newMatches = [];
// 	for (const el of args) {
// 		if (first.includes(el)) {
// 			newMatches.push(el);
// 		}
// 	}
// 	return newMatches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // повертає [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // повертає [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // повертає [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // повертає []
//

// -------------------------------

//                      Task 9. КРАМНИЦЯ ЗІЛЛЯ «У СТАРОЇ ЖАБИ»
//                      -------------------------------------
// //
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною,
// а в майбутньому, можливо, й іншими характеристиками.Тому зараз у властивості potions
// буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }

// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не
// з масивом рядків, а з масивом об'єктів.

// - getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// - addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив у властивості potions,
// але тільки, якщо такого зілля ще немає в інвентарі.В іншому випадку повертається рядок.
// - removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// - updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName
// на newName в масиві potions.

// const atTheOldToad = {
// 	potions: [
// 		{ name: "Speed potion", price: 460 },
// 		{ name: "Dragon breath", price: 780 },
// 		{ name: "Stone skin", price: 520 },
// 	],

// 	getPotions() {
// 		return this.potions;
// 	},

// 	addPotion(newPotion) {
// 		const { name } = newPotion;

// 		for (const potion of this.potions) {
// 			if (potion.name === name) {
// 				return `Error! Potion ${name} is already in your inventory!`;
// 			}
// 		}

// 		this.potions.push(newPotion);
// 	},

// 	removePotion(potionName) {
// 		for (let i = 0; i < this.potions.length; i += 1) {
// 			if (this.potions[i].name === potionName) {
// 				this.potions.splice(i, 1);
// 				return;
// 			}
// 		}

// 		return `Potion ${potionName} is not in inventory!`;
// 	},

// 	updatePotionName(oldName, newName) {
// 		// for (let i = 0; i < this.potions.length; i += 1) {
// 		// 	if (this.potions[i].name === oldName) {
// 		// 		this.potions[i].name = newName;
// 		// 		return;
// 		// 	}
// 		// }

// 		for (const potion of this.potions) {
// 			if (potion.name === oldName) {
// 				potion.name = newName;
// 				return;
// 			}
// 		}
// 		return `Potion ${oldName} is not in inventory!`;
// 	},
// };
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Ston skin"));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Dragn breath", "Polymorth"));
// console.log(atTheOldToad.getPotions());

// const checkString = str => {
// 	let exp;
// 	if (str && 0) {
// 		exp = false;
// 	} else {
// 		exp = true;
// 	}
// 	console.log(exp);
// };
// checkString("HTML & CSS & JS Tasks"); // true

// {
// 	let x = "block scope";
// }
// console.log(x); //ReferenceError: x is not defined

// const a = { q: 5 };
// const b = { w: 6 };
// const c = {
// 	d: 1,
// 	e: 2,
// };
// c[a] = 3;
// c[b] = 4;
// const keys = Object.keys(c);
// console.log(keys);
// console.log(c); // 3

// ----------------------------

// const calculator = {
// 	first: 0,
// 	second: 0,

// 	read(a, b) {
// 		this.first = a;
// 		this.second = b;
// 	},

// 	sum() {
// 		return this.first + this.second;
// 	},

// 	mult() {
// 		return this.first * this.second;
// 	},
// };
// console.log(calculator.read(2, 3));
// console.log(calculator.first, calculator.second);
// console.log(calculator.sum());
// console.log(calculator.mult());
// const keys = Object.keys(calculator);
// console.log(keys);
// for (const key of keys) {
// 	if (typeof calculator[key] === "function") {
// 		continue;
// 	} else {
// 		console.log(key);
// 	}
// }

// -----------------------------

//                  Task 1
//
// Ф-я приймає 1 параматр, перебирає обєкт і повертає true або false якщо
// знайде key  в об.
//
// const obj = {
// 	name: "Igor",
// 	car: "BMW",
// 	carColor: "black",
// };

// const includesKey = key => {
// 	const keys = Object.keys(obj);
// 	return keys.some(objKey => objKey === key);
// 	// keys.some(objKey => {
// 	// 	if (objKey === key) {
// 	// 		return true;
// 	// 	} else {
// 	// 		return false;
// 	// 	}
// 	// });
// };

// const includesKey = key => Object.keys(obj).some(objKey => objKey === key);
// console.log(includesKey("car"));

// const includesKey = key => key in obj;
// console.log(includesKey("car"));

// const cat = {
// 	length: 0.5,
// 	color: "black",
// };
// console.log(cat);
// console.log(cat.color);

// cat.getVoice = function () {
// 	console.log("myamyamya");
// };
// cat.getVoice();
// console.log(cat.toString());

// const a = "test";
// const b = new String("test");
// a.some = "123";
// b.some = "123";
// console.log(a);
// console.log(b);
// for (const el of b) {
// 	console.log(el);
// }
// const keys = Object.keys(b);
// console.log(keys);

// console.log(cat.color);

// ----------------------------
// console.log(("b" + "a" + +"a" + "a").toLowerCase());  // banana;

// -----------------------------

// const city = {
// 	NewYork: 20,
// 	London: 15,
// 	Paris: 10,
// };
// const values = Object.values(city);
// console.log(Math.max(...values));
// const arr = [];
// const keys = Object.keys(city);

// for (const key of keys) {
// 	arr.push(city[key]);
// }
// console.log(Math.max(...arr));

// ------------------------------

// a = "loopingisfunbutdangerous";
// b = "lessdangerousthancoding";

// function longest(s1, s2) {
// 	const res = [];

// 	for (let i = 0; i < s1.length; i += 1) {
// 		if (!res.includes(s1[i])) {
// 			res.push(s1[i]);
// 		}
// 	}

// 	for (let i = 0; i < s2.length; i += 1) {
// 		if (!res.includes(s2[i])) {
// 			res.push(s2[i]);
// 		}
// 	}

// 	return res.sort().join("").toString();
// }

// console.log(longest(a, b));

//----------------------------------
