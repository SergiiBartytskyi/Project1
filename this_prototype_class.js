// const petya = {
// 	username: "Petya",
// 	showName() {
// 		console.log(this.username);
// 	},
// };

// petya.showName();
// function showThis() {
// 	console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
// 	username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// const customer = {
// 	firstName: "Jacob",
// 	lastName: "Mercer",
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// function makeMessage(callback) {
// 	// callback() - це виклик методу getFullName без об'єкта
// 	console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Обробляємо заявку від undefined undefined.

// const showThis = () => {
// 	console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
// 	username: "Mango",
// };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// const hotel = {
// 	username: "Resort hotel",
// 	showThis() {
// 		const foo = () => {
// 			// Стрілки запам'ятовують контекст під час оголошення
// 			// з батьківської області видимості
// 			console.log("this in foo: ", this);
// 		};

// 		foo();
// 		console.log("this in showThis: ", this);
// 	},
// };

// // hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}
// const motel = Object.create(hotel);
// motel.username = "Barber motel";
// motel.showThis();
// console.log(motel);
//

//
//                                      Метод call()
//                                       ----------
//
//                              foo.call(obj, arg1, arg2, ...)
//
// Метод call викличе функцію foo таким чином, що в this буде посилання на об'єкт obj,
// а також передасть аргументи arg1, arg2 тощо.
// //
// function greetGuest(greeting) {
// 	console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
// 	username: "Манго",
// };
// const poly = {
// 	username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.
//

//
//                                      Метод apply()
//                                       ----------
//
//                              foo.call(obj, arg1, arg2, ...)
//
//                              foo.apply(obj, [arg1, arg2, ...])
//
// Метод apply - це аналог методу call за винятком того, що синтаксис передачі аргументів вимагає не перерахування,
// а масив, навіть якщо аргумент всього один.
//
// Метод apply викличе функцію foo таким чином, що в this буде посилання на об'єкт obj,
// а також передасть елементи масиву як окремі аргументи arg1, arg2 тощо.

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
// greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.//
//

//
//                                      Метод bind()
//                                       ----------
//
//                              foo.bind(obj, arg1, arg2, ...)
//
// Метод bind створює і повертає копію функції foo з прив'язаним контекстом obj і аргументами
// arg1, arg2 тощо.Утворюється копія функції, яку можна передати куди завгодно і викликати коли завгодно.
//
// function greet(clientName) {
// 	return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
// 	service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
// 	service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."
//
// const customer = {
// 	firstName: "Jacob",
// 	lastName: "Mercer",
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	},
// };

// function makeMessage(callback) {
// 	// callback() - це виклик методу getFullName без об'єкта
// 	console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer. // Виникне помилка на момент виклику функції
//
// const employee = {
// 	baseSalary: 30000,
// 	overtime: 10,
// 	rate: 20,
// 	getWage() {
// 		return this.baseSalary + this.overtime * this.rate;
// 	},
// };

// console.log(employee.getWage());
//

//
// const animal = {
// 	legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(dog.__proto__); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
//

//
// Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.
//
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
//

//
// Метод hasOwnProperty()​ повертає true, якщо властивість prop належить об'єкту obj, а не його прототипу, інакше - false.
//
// const animal = {
// 	eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
// 	if (!dog.hasOwnProperty(key)) continue;

// 	console.log(key); // barks
// }
//

//
// Метод Object.keys(obj) поверне масив тільки власних ключів об'єкта obj
//
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']
//

//                              Статичні властивості
//
// class User {
// 	// Оголошення та ініціалізація статичної властивості
// 	static Roles = {
// 		ADMIN: "admin",
// 		EDITOR: "editor",
// 	};

// 	#email;
// 	#role;

// 	constructor({ email, role }) {
// 		this.#email = email;
// 		this.#role = role;
// 	}

// 	get role() {
// 		return this.#role;
// 	}

// 	set role(newRole) {
// 		this.#role = newRole;
// 	}
// }

// const mango = new User({
// 	email: "mango@mail.com",
// 	role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"
//

//                              Статичні методи
//
// class User {
// 	static #takenEmails = [];

// 	static isEmailTaken(email) {
// 		return User.#takenEmails.includes(email);
// 	}

// 	#email;

// 	constructor({ email }) {
// 		this.#email = email;
// 		User.#takenEmails.push(email);
// 	}
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); //false
// console.log(User.isEmailTaken("mango@mail.com")); // true
//

//
//                              Наслідування класів
//
// class Child extends Parent {
// 	// ...
// }
//
// class User {
// 	#email;

// 	constructor(email) {
// 		this.#email = email;
// 	}

// 	get email() {
// 		return this.#email;
// 	}

// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// class ContentEditor extends User {
// 	// Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"
//

//
//                              Конструктор дочірнього класу
//
// class User {
// 	#email;

// 	constructor(email) {
// 		this.#email = email;
// 	}

// 	get email() {
// 		return this.#email;
// 	}

// 	set email(newEmail) {
// 		this.#email = newEmail;
// 	}
// }

// class ContentEditor extends User {
// 	constructor({ email, posts }) {
// 		// Виклик конструктора батьківського класу User
// 		super(email);
// 		this.posts = posts;
// 	}
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
//

//
//                                  Методи дочірнього класу
//
// Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
// 	constructor({ email, posts }) {
// 		super(email);
// 		this.posts = posts;
// 	}

// 	addPost(post) {
// 		this.posts.push(post);
// 	}
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']
//
// const showTag = function () {
// 	console.log("showTag -> this", this);
// 	console.log("showTag -> this.tag", this.tag);
// };

// // showTag();

// const user = {
// 	tag: "Mango",
// };

// user.showUserTag = showTag;
// // console.log("user ->", user);
// user.showUserTag();

//
// const user = {
// 	tag: "Mango",
// 	showTag() {
// 		console.log("showTag -> this", this); //

// 		console.log("showTag -> this.tag", this.tag);
// 	},
// };

// user.showTag();
// /*
// {tag: 'Mango', showTag: ƒ}
// showTag -> this.tag Mango
// */
// const outherShowTag = user.showTag;

// outherShowTag();
// // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// // showTag -> this.tag undefined

// const objA = {
// 	name: "user name",
// 	nickName() {
// 		console.log("this -> ", this);
// 	},
// };

// objA.nickName(); // {name: 'user name', nickName: ƒ}

// const objA = {
// 	name: "user name",
// 	nickName: () => {
// 		console.log("this -> ", this);
// 	},
// };

// objA.nickName(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const objA = {
// 	name: "user name",
// 	skills: {
// 		mySkills: "html",
// 		nickName() {
// 			console.log("this -> ", this);
// 		},
// 	},
// };

// objA.skills.nickName(); // {mySkills: 'html', nickName: ƒ}

// const objA = {
// 	name: "user name",
// 	skills: {
// 		mySkills: "html",
// 		someValue: {
// 			value: 10,
// 			nickName() {
// 				console.log("this -> ", this);
// 			},
// 		},
// 	},
// };

// objA.skills.someValue.nickName(); // {value: 10, nickName: ƒ}

// const objA = {
// 	name: "user name",
// 	skills: {
// 		mySkills: "html",
// 		someValue: {
// 			value: 10,
// 			nickName: () => {
// 				console.log("this -> ", this);
// 			},
// 		},
// 	},
// };

// objA.skills.someValue.nickName(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const objA = {
// 	name: "user name",
// 	skills: {
// 		mySkills: "html",
// 		someValue: {
// 			value: 10,
// 			foo() {
// 				const nickName = () => {
// 					console.log("this -> ", this);
// 				};
// 				nickName();
// 			},
// 		},
// 	},
// };

// objA.skills.someValue.foo(); // {value: 10, foo: ƒ}

// const objA = {
// 	name: "user name",
// 	skills: {
// 		mySkills: "html",
// 		someValue: {
// 			value: 10,
// 			foo: () => {
// 				const nickName = () => {
// 					console.log("this -> ", this);
// 				};
// 				nickName();
// 			},
// 		},
// 	},
// };

// objA.skills.someValue.foo(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//
// "use strict";
//
// const objA = {
// 	name: "user name",
// 	skills: {
// 		mySkills: "html",
// 		someValue: {
// 			value: 10,
// 			foo: () => {
// 				function nickName() {
// 					console.log("this -> ", this);
// 				}
// 				nickName();
// 			},
// 		},
// 	},
// };

// objA.skills.someValue.foo(); // undefined

// const objA = {
// 	age: "22",
// 	myAge() {
// 		console.log("myAge this -> ", this);
// 	},
// };

// objA.myAge(); // myAge this ->  {age: '22', myAge: ƒ}

// const objA = {
// 	age: "22",
// 	myAge: () => {
// 		console.log("myAge this -> ", this);
// 	},
// };

// objA.myAge(); //myAge this ->  Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const objA = {
// 	age: "22",
// 	myAge: () => {
// 		const test = () => {
// 			console.log("myAge this -> ", this);
// 			test();
// 		};
// 	},
// };

// objA.myAge(); //myAge this ->  Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const objA = {
// 	age: "22",
// 	myAge() {
// 		const test = () => {
// 			console.log("myAge this -> ", this);
// 			test();
// 		};
// 	},
// };

// objA.myAge(); // {age: '22', myAge: ƒ}

// const objA = {
// 	age: "22",
// 	myAge() {
// 		function test() {
// 			console.log("myAge this -> ", this);
// 		}
// 		test();
// 	},
// };

// objA.myAge(); //myAge this ->  Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const objA = {
// 	age: "22",
// 	myAge() {
// 		const test = () => {
// 			console.log("myAge this -> ", this);
// 		};
// 		test();
// 	},
// };

// objA.myAge(); // myAge this ->  {age: '22', myAge: ƒ}

// const objA = {
// 	age: "22",
// 	skills: {
// 		skill: ["html", "css"],
// 		foo() {
// 			const boo = () => {
// 				console.log("myAge this -> ", this);
// 			};
// 			boo();
// 		},
// 	},
// };

// objA.skills.foo(); // myAge this ->  {skill: Array(2), foo: ƒ}

// const objA = {
// 	age: "22",
// 	skills: {
// 		skill: ["html", "css"],
// 		foo() {
// 			const boo = () => {
// 				console.log("myAge this -> ", this);
// 			};
// 			boo();
// 		},
// 	},
// };

// objA.skills.foo(); // myAge this ->  {skill: Array(2), foo: ƒ}

// const objA = {
// 	age: "22",
// 	myAge() {
// 		const test = () => {
// 			console.log("myAge this -> ", this);
// 		};
// 		test();
// 	},
// };

// const objB = {
// 	age: 12,
// 	someFn: objA.myAge,
// };

// objB.someFn(); // myAge this ->  {age: '12', someFn: ƒ}

// const objA = {
// 	age: "22",
// 	myAge() {
// 		const test = () => {
// 			console.log("test this -> ", this);
// 		};
// 		test();
// 	},
// };

// const objB = {
// 	age: 12,
// 	someFn: objA.myAge,
// };

// const objC = {
// 	age: 13,
// 	someCrazy: objB.someFn,
// };
// objC.someCrazy(); //  // myAge this ->  {age: '13', someCrazy: ƒ}

// const objA = {
// 	foo() {
// 		console.log("foo this -> ", this);
// 	},
// };
// objA.foo(); // foo this -> {foo: ƒ}

// const objA = {
// 	name: "A",
// 	foo: () => {
// 		console.log("foo this -> ", this);
// 	},
// };
// objA.foo(); // foo this ->  Window {window: Window, self: Window, document: document, name: '', location: Location, …

//

// function foo() {
// 	console.log("this.test -> ", this.test);
// }
// foo(); // this.test ->  undefined
//

//							call()
// 							-----
//
// const objA = {
// 	name: "A",

// 	myAge(a, b) {
// 		console.log("this -> ", this, a, b);
// 	},
// };
// objA.myAge(22, 44); // this ->  {name: 'A', myAge: ƒ} 22 44

// const objB = {
// 	name: "B",
// };
// objA.myAge.call(objB, 1, 2); // this ->  {name: 'B'} 1 2

// const objC = {
// 	name: "C",
// };
// objA.myAge.call(objC, 10, 11); // this ->  {name: 'C'} 10 11

// const objB = {
// 	age: 23,
// 	showAge: objA.myAge,
// };
// objB.showAge(1, 2); // this ->  {age: 23, showAge: ƒ} 1 2
//

//							apply()
// 							-----
//
// const objA = {
// 	name: "A",

// 	myAge(a, b) {
// 		console.log("this -> ", this, a, b);
// 		return "Some value";
// 	},
// };
// objA.myAge(22, 44); // this ->  {name: 'A', myAge: ƒ} 22 44

// const objB = {
// 	name: "B",
// };
// objA.myAge.apply(objB, [1, 2]); // this ->  {name: 'B'} 1 2

// const objC = {
// 	name: "C",
// };
// const str = objA.myAge.apply(objC, [10, 11]); // this ->  {name: 'C'} 10 11
// console.log(str); // Some value
//

//							bind()
// 							-----
//
// const objA = {
// 	name: "A",

// 	myAge(a, b, c, d) {
// 		console.log("this -> ", this, a, b, c, d);
// 		return "Some value";
// 	},
// };
// objA.myAge(1, 2, 3, 4); // this ->  {name: 'A', myAge: ƒ} 1 2 3 4

// const objB = {
// 	name: "B",
// };

// // const result = objA.myAge.bind(objB, 10, 20, 30, 40);
// const result = objA.myAge.bind(objB);

// result(999, 888, 777, 666); // this ->  {name: 'B'} 999 888 777 666
// result(); // this ->  {name: 'B'} undefined undefined undefined undefined
// result(9, 8, 7, 6); // this ->  {name: 'B'} 9 8 7 6

// const objC = {
// 	name: "C",
// };
// const result2 = objA.myAge.bind(objC);
// result2(30, 31, 32, 33); // this ->  {name: 'C'} 30 31 32 33

// const objA = {
// 	name: "A",

// 	myAge(...args) {
// 		console.log("this -> ", this, args);
// 		return "Some value";
// 	},
// };
// objA.myAge(1, 2, 3, 4, 5, 6);
// //  this ->  {name: 'A', myAge: ƒ} (6) [1, 2, 3, 4, 5, 6]
//

//
// 							Task 1. Майстерня коштовностей
// 								--------------------
//
// Напишіть код calcTotalPrice(stoneName), який приймає назву каменю і розраховує
// та повертає загальну вартість каменів з таким імям, ціною та кількістю з вастивості stones.
//
// const chopShop = {
// 	stones: [
// 		{ name: "Emerald", price: 1300, quantity: 4 },
// 		{ name: "Diamond", price: 2700, quantity: 3 },
// 		{ name: "Sapphire", price: 1400, quantity: 7 },
// 		{ name: "Ruby", price: 800, quantity: 2 },
// 	],
// 	calcTotalPrice(stoneName) {
// 		// 1 спосіб
// 		const { price, quantity } = this.stones.find(({ name }) => name === stoneName);
// 		return price * quantity;

// 		// 		// 2 спосіб
// 		// 		// let result = 0;
// 		// 		// this.stones.forEach(({ name, price, quantity }) => {
// 		// 		// 	if (name === stoneName) {
// 		// 		// 		result = price * quantity;
// 		// 		// 	}
// 		// 		// });
// 		// 		// return result;
// 	},
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// const chopShop2 = {
// 	stones: [
// 		{ name: "Щебінь", price: 300, quantity: 10 },
// 		{ name: "Пісок", price: 400, quantity: 13 },
// 	],
// };
// console.log(chopShop.calcTotalPrice.call(chopShop2, "Щебінь")); // 3000
// console.log(chopShop.calcTotalPrice.call(chopShop2, "Пісок")); // 5200
//

//
// 							Task 2. Телефонна книга
// 								--------------------
//
// Виконайте рефакторинг методів об. phonebook, щоб код запрацював
//
// const phonebook = {
// 	contacts: [],
// 	add(contact) {
// 		const newContact = {
// 			list: "default",
// 			...contact,
// 			id: this.generateId(),
// 			createdAt: this.getDate(),
// 		};
// 		this.contacts.push(newContact);
// 		return this.contacts;
// 	},
// 	generateId() {
// 		return "_" + Math.random().toString(36).substr(2, 9);
// 	},
// 	getDate() {
// 		return Date.now();
// 	},
// };
// console.log(
// 	phonebook.add({
// 		name: "Mango",
// 		email: "mango@gmail.com",
// 		list: "friends",
// 	}),
// );
// console.log(
// 	phonebook.add({
// 		name: "Poly",
// 		email: "polky@gmail.com",
// 		list: "friends",
// 	}),
// );
//

//
// 							Task 3. Калькулятор
// 								--------------------
//
// Створіть об. калькулятор з трьома методами
//
// read(a, b) - приймає два значення та зберігає їх як властивості об.
// add() - повертає суму збережених значень
// mult() - перемножую збережені значення та повертає результат
//
// const calculator = {
// 	read(a, b) {
// 		this.a = a;
// 		this.b = b;
// 	},
// 	add() {
// 		return (this.a ?? 0) + (this.b ?? 0);
// 	},
// 	mult() {
// 		return (this.a ?? 1) * (this.b ?? 1);
// 	},
// };

// calculator.read(2, 3);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// const user = {
// 	name: "Ivan",
// 	foo() {
// 		const boo = () => {
// 			const doo = () => console.log("doo this => ", this);
// 			doo();
// 		};
// 		console.log("boo this => ", this);
// 		boo();
// 	},
// };
// user.foo();

// const user = {
// 	name: "Ivan",
// 	foo() {
// 		const boo = () => console.log("boo this => ", this);
// 		boo();
// 	},
// };

// // user.foo();
// // boo this =>  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// // const f = user.foo.bind(user);
// // f();

// const A = {
// 	name: "AAA",
// };
// // user.foo.call(A); // boo this =>  {name: 'AAA'}

// const fooFn = user.foo.bind(A);
// fooFn(); // boo this =>  {name: 'AAA'}

// // console.log(A); //  {name: 'AAA'}

// const objA = {
// 	foo: () => console.log("this objA => ", this),
// };
// objA.foo();

// const objB = {
// 	boo() {
// 		const a = () => console.log("this objB => ", this);
// 		a();
// 	},
// };
// objB.boo();

// const objC = {
// 	c: 3,
// };
// console.log("objC -> ", objC);

// const objB = Object.create(objC);
// objB.b = 2;
// console.log("objB -> ", objB);

// const objA = Object.create(objB);
// objA.a = 1;
// console.log("objA -> ", objA);
// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.hasOwnProperty("b")); // false

// 						Прототип
// 						-------
//
// const Car = function ({ brand, model, price } = {}) {
// 	this.brand = brand;
// 	this.model = model;
// 	this.price = price;
// };

// Car.prototype.sayHi = function () {
// 	console.log("Car.prorotype.sayHi -> ", this);
// 	console.log("Hello :) ");
// };

// Car.prototype.changePrice = function (newPrice) {
// 	this.price = newPrice;
// };
// console.log(Car.prototype);
// console.log("------------------------------------------------------");

// const myCar = new Car({ brand: "Audi", model: "A6", price: 35000 });
// console.log(myCar);
// myCar.sayHi();
// myCar.changePrice(37000);
// console.log(myCar);
// console.log("------------------------------------------------------");

// const myCar2 = new Car({ brand: "BMW", model: "M535", price: 45000 });
// console.log(myCar2);
// myCar2.sayHi();
// console.log("------------------------------------------------------");

// const myCar3 = new Car();
// console.log(myCar3);
// myCar3.sayHi();
// console.log("------------------------------------------------------");

// // 				Статичний метод
// // 				-------------
// //
// Car.logInfo = function ({ brand, model, price }) {
// 	console.log("Brand: ", brand);
// 	console.log("Model: ", model);
// 	console.log("Price: ", price);
// };
// Car.logInfo(myCar);
//

//
//                      -------- Class -----------
//                          ---------------
//
// class Car {
// 	static AAA = "AAA";
// 	static description = "Class describe the car";
// 	static logInfo(carObj) {
// 		console.log("Car.logInfo -> carObj ", carObj);
// 	}

// 	#privateProperty = "TEST";

// 	publicProperty = "test";

// 	constructor({ brand, model, price } = {}) {
// 		console.log("this constructor -> ", this);

// 		this._brand = brand;
// 		this._model = model;
// 		this._price = price;
// 	}

// 	get price() {
// 		return this._price;
// 	}

// 	set price(newPrice) {
// 		this._price = newPrice;
// 	}

// 	get model() {
// 		return this._model;
// 	}

// 	set model(newModel) {
// 		this._model = newModel;
// 	}
// }
// console.dir(Car);

// const carInstance = new Car({ brand: "Audi", model: "A6", price: 35000 });
// // console.log(carInstance);
// // console.log(Object.getPrototypeOf(carInstance)); // {constructor: ƒ}
// // console.log(Object.getPrototypeOf(carInstance) === Car.prototype); // true
// carInstance.price = 37000;
// console.log(carInstance.price);
// carInstance.model = "A6 quatro";
// // console.log(carInstance);
// // Car.logInfo(carInstance);
// console.log(carInstance.model); // A6 quatro
// console.log(carInstance);
//

//
// 								------ Наслідування ------
// 									----------------
//
// class Hero {
// 	constructor({ name = "Hero", xp = 0 } = {}) {
// 		this._name = name;
// 		this._xp = xp;
// 	}

// 	gainXp(amount) {
// 		console.log(`${this._name} get ${amount} expierence`);
// 		this._xp += amount;
// 	}
// }

// class Warrior extends Hero {
// 	// constructor({ name, xp, weapon } = {}) {
// 	constructor({ weapon, ...restProps } = {}) {
// 		// super({ name, xp });
// 		super(restProps);

// 		this.weapon = weapon;
// 	}

// 	attack() {
// 		console.log(`${this._name} attack use ${this.weapon}`);
// 	}
// }

// const anchel = new Warrior({ name: "Anchel", xp: 1000, weapon: "Soul Killer" });

// // console.log(anchel);
// // anchel.gainXp(1000);

// // console.log(anchel.__proto__ === Warrior.prototype); // true
// // console.log(Warrior.prototype.__proto__ === Hero.prototype); // true
// // console.log(Hero.prototype.__proto__ === Object.prototype); // true

// anchel.attack();
// anchel.gainXp(1000);

// class Mage extends Hero {
// 	constructor({ spells, ...restProps } = {}) {
// 		// constructor({ name, xp, spells} = {}) {

// 		// super({ name, xp });
// 		super(restProps);

// 		this.spells = spells;
// 	}

// 	cast() {
// 		console.log(`${this._name} attack with ${this.spells}`);
// 	}
// }

// const showfirst = new Mage({ name: "Showfirst", xp: 700, spells: "Fire Ball" });

// showfirst.cast();
// showfirst.gainXp(1000);
// const a = new Warrior();
// console.log(a);

//
//                          Prototype
//
// const user = {
// 	name: "Test user a",
// 	age: 18,
// 	sayHello() {
// 		console.log(this.name);
// 		console.log("this -> ", this);
// 	},
// 	showAge() {
// 		console.log(`My age ${this.age}`);
// 	},
// };

// // const user2 = {
// // 	name: "User 2 -> bind",
// // };
// // const foo = user.sayHello.bind(user2);
// // foo();

// const admin = Object.create(user);
// admin.age = 19;
// admin.showAge = function () {
// 	console.log("this.age ", this.age);
// };

// const practiceOwner = Object.create(admin);
// practiceOwner.name = "Owner";
// practiceOwner.sayHello();
// practiceOwner.showAge();
// console.log(practiceOwner);
//
//
//
//							Наслідування класів
// 							-------------------
//
// class User {
// 	static counter = 0;
// 	static addUser() {
// 		// User.counter += 1;
// 		this.counter += 1;
// 		console.log(`Number of users ${this.counter}`);
// 	}
// 	#location;

// 	constructor({ name = "SomeName", email = "test@test.com", age = 18, location = "World", password = "0000" } = {}) {
// 		this._name = name;
// 		this._email = email;
// 		this._age = age;
// 		this.#location = location;
// 		this._password = password;
// 		User.addUser();
// 	}

// 	sayHello() {
// 		console.log(`${this._name} hello!`);
// 	}

// 	#getEmail() {
// 		console.log(this._email);
// 	}

// 	get locale() {
// 		return this.#location;
// 	}

// 	set locale(newLocation) {
// 		const value = prompt("Enter password: ");
// 		if (value === this._password) {
// 			this.#location = newLocation;
// 			this.#getEmail();
// 		} else {
// 			console.log("Wrong PASSWORD!");
// 		}
// 	}
// }

// const test = new User({
// 	email: "test@gmail.com",
// 	name: "User A",
// 	age: 37,
// 	location: "Lviv",
// 	password: "qwerty111",
// });
// test.sayHello();
// test.qwerty = function () {
// 	console.log(this._age);
// };
// test.locale = "Warshaw";
// console.log(test);

// test.locale = "Lviv";
// test.aaa = "AAA";
// console.log(test);
// const test1 = new User({
// 	email: "test1@gmail.com",
// 	name: "User A",
// 	age: 38,
// 	location: "Lviv",
// 	password: "qwerty112",
// });
// // console.log(test1);

// class Avatar extends User {
// 	constructor({ damage, ...restProps } = {}) {
// 		super({ ...restProps });
// 		this._damage = damage;
// 	}

// 	attack() {
// 		console.log(`Attack with damage ${this._damage}`);
// 	}
// }

// class Zombi extends User {
// 	constructor({ bite, ...restProps } = {}) {
// 		super({ ...restProps });
// 		this._bite = bite;
// 	}

// 	toBite() {
// 		console.log(`Bite with ${this._bite}`);
// 	}
// }

// class Dog extends Zombi {
// 	constructor({ woof, ...restProps } = {}) {
// 		super({ ...restProps });
// 		this._woof = woof;
// 	}
// }

// const testAvatar = new Avatar({
// 	name: "Avatar1",
// 	email: "avatar1@gmail.com",
// 	location: "Lviv",
// 	password: "qwe111",
// 	age: 30,
// 	damage: 500,
// });

// console.log(testAvatar);
// const testZombi = new Zombi({
// 	email: "zombi1@gmail.com",
// 	name: "Zombi1",
// 	age: 38,
// 	location: "Lviv",
// 	password: "qwerty222",
// 	bite: 300,
// });
// console.log(testZombi);
// const testDog = new Dog({
// 	name: "Dog1",
// 	email: "dog1@gmail.com",
// 	location: "Lviv",
// 	password: "qwe333",
// 	age: 10,
// 	woof: 250,
// 	bite: 1,
// });
// console.log(testDog);
// console.log(testZombi._bite);
// testZombi.toBite();
// console.log(testDog);
// console.log(testDog._bite);
//
//

//
//
// 						Task 1.  Блогер
// Напиши клас Blogger для ств. об. блогера з наступними властивостями

//  email -  пошта, рядок
//  age -  вік, число
// numberOfPosts - к-ть постів, число
// topics -  масив тем на яких спеціалізується блогер
//  Клас чекає на один параметр - об. налаштувань з однойменними властивостями

// Додай метод getInfo(), який повертає рядок: User ${пошта}is ${вік} yers old
// and has ${ к-ть постів} posts.

// Додай метод updatePostCount(value), який у параметрі value  приймає к-ть
// постів, які потрібно додати користувачеві.

// class Blogger {
// 	constructor({ email, age, numberOfPosts, topics = [] } = {}) {
// 		this._email = email;
// 		this._age = age;
// 		this._numberOfPosts = numberOfPosts;
// 		this._topics = topics;
// 	}

// 	getInfo() {
// 		return `User ${this._email}is ${this._age} yers old and has ${this._numberOfPosts} posts.`;
// 	}

// 	updatePostCount(value) {
// 		this._numberOfPosts += value;
// 	}
// }

// const mango = new Blogger({
// 	email: "mango@gmail.com",
// 	age: 18,
// 	numberOfPosts: 20,
// 	topics: ["tech", "cooking"],
// });
// console.log(mango.getInfo()); // User mango@gmail.comis 18 yers old and has 20 posts.
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@gmail.comis 18 yers old and has 25 posts.

// const poly = new Blogger({
// 	email: "poly@gmail.com",
// 	age: 28,
// 	numberOfPosts: 17,
// 	topics: ["sports", "gamins", "health"],
// });

// console.log(poly.getInfo()); // User mango@gmail.comis 18 yers old and has 20 posts.
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User mango@gmail.comis 18 yers old and has 25 posts.
//
//

//
// 							Task 2. Сховище
// 							--------------
//
// Напиши клас Storage для ств.обєкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів
// і записуватиме його у властивість items.

// Додай методи класу:

// getItems() -  повертає масив товарів;
// addItem(item)-  отримує новий товар і додає його до поточних
// removeItem(item)- щтримує товар і, якщо він є, видаляє його з поточних.
//

// class Storage {
// 	constructor(items) {
// 		this._items = items;
// 	}

// 	getItems() {
// 		return this._items;
// 	}

// 	addItem(item) {
// 		if (!this._items.includes(item)) {
// 			this._items.push(item);
// 			return;
// 		}
// 		console.log(`Такий товар вже є!`);
// 	}

// 	// 1 спосіб
// 	removeItem(item) {
// 		const foundIdx = this._items.indexOf(item);
// 		if (!!~foundIdx) {
// 			this._items.splice(foundIdx, 1);
// 		}
// 	}
// 	// 2 спосіб
// 	// removeItem(item) {
// 	// 	this._items = this._items.filter(product => product !== item);
// 	// 	return;
// 	// 	// console.log(this._items);
// 	// }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);
// const items = storage.getItems();
// console.table(items); // ['🍎', '🍋', '🍇', '🍑']
// storage.addItem("🍌");
// console.table(items); // ['🍎', '🍋', '🍇', '🍑', '🍌']

// storage.addItem("🍌");
// console.table(items); // ['🍎', '🍋', '🍇', '🍑', '🍌']
// storage.removeItem("🍋");
// console.table(items); // ['🍎', '🍇', '🍑', '🍌']

// !!~x
// -(x+1)
// 0 => false
// -1=> true
// -(0+1)=> 1 => true
// -(-1+1)=> -0 => false

// console.log(0); // 0
// console.log(!0); // true
// console.log(!!0); // false
//
//

//
//
// 							Task 3. User
// 							------------
//
// Напиши клас User який ств.об.із властивостями login  та email.
// оголоси приватні властивості #login  та #email, доступ до яких
// зроби через гетер і сетер login  та  email.
//

// class User {
// 	#login;
// 	#email;
// 	constructor({ login, email } = {}) {
// 		this.#login = login;
// 		this.#email = email;
// 	}

// 	get log() {
// 		return this.#login;
// 	}

// 	set log(newLogin) {
// 		if (this.#login !== newLogin) {
// 			this.#login = newLogin;
// 		}
// 	}

// 	get mail() {
// 		return this.#email;
// 	}

// 	set mail(newEmail) {
// 		if (this.#email !== newEmail) {
// 			this.#email = newEmail;
// 		}
// 	}
// }

// const mango = new User({
// 	login: "Mango",
// 	email: "mango@dog.woof",
// });
// console.log(mango.log); // Mango
// mango.log = "Mangodoge";
// console.log(mango.log); // Mangodoge

// const poly = new User({
// 	login: "Poly",
// 	email: "poly@gmail.com",
// });

// console.log(poly.log); // Poly
// poly.log = "Polycutie";
// console.log(poly.log); // Polycutie
//
//

//
//
// 						Task 4.  Нотатки
// 						--------------
//
// Напиши клас Notes, який керує колекцією нотаток у властивості items.
// Notes - це об.з властивостями text  та  priority.
// Додай класу статичну властивість Priority, у якому зберігатиметься об.
// з пріоритетами.

// {
// 	LOW: 'low',
// 	NORMAL: 'normal',
// 	HIGH: 'high',
// }

// class Notes {
// 	static Priority = {
// 		LOW: "low",
// 		NORMAL: "normal",
// 		HIGH: "high",
// 	};

// 	constructor(note) {
// 		this._items = note;
// 	}

// 	addNote(note) {
// 		const inArr = this._items.some(({ text }) => text === note.text);
// 		if (!inArr) {
// 			this._items.push(note);
// 		}
// 	}

// 	removeNote(text) {
// 		const idx = this._items.findIndex(({ text: itemText }) => itemText === text);
// 		if (!!~idx) {
// 			this._items.splice(idx, 1);
// 		}
// 	}

// 	updatePriority(text, newPriority) {
// 		const idx = this._items.findIndex(({ text: itemText }) => itemText === text);
// 		if (!!~idx) {
// 			this._items[idx].priority = newPriority;
// 		}
// 	}
// }
// // Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority).

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes._items);

// myNotes.addNote({
// 	text: "Моя друга замітка",
// 	priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes._items);

// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes._items);

// myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes._items);
//
//

//
//
// 					Task 5.  Toogle
// 					------------------
//
// Написати клас Toggle, який приймає об.налаштувань { isOpen: boolean }
// і оголошує одну властивість on - стан вкл / викл(true / false).
// За замовчуванням значення властивості on повинно бути false.

// class Toggle {
// 	constructor({ isOpen = false } = {}) {
// 		this.on = isOpen;
// 	}

// 	// 1спосіб
// 	// toggle() {
// 	// 	if (this.on) {
// 	// 		this.on = false;
// 	// 	} else {
// 	// 		this.on = true;
// 	// 	}
// 	// }

// 	// 2 спосіб
// 	toggle() {
// 		this.on = !this.on;
// 	}
// }
// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

//
//
//                      Trees ??????
//
// const arr = [
// 	{ id: "a", parentId: null },
// 	{ id: "b", parentId: "a" },
// 	{ id: "c", parentId: "a" },
// 	{ id: "d", parentId: null },
// 	{ id: "e", parentId: "d" },
// ];

// Зробити =>
// const newObj = {
// 	a: {
// 		id: "a",
// 		parentId: null,
// 		b: { id: "b", parentId: "a" },
// 		c: { id: "c", parentId: "a" },
// 	},
// 	d: {
// 		id: "d",
// 		parentId: null,
// 		e: { id: "e", parentId: "d" },
// 	},
// };

//
//                      Task. String
//                      -----------
//
// Зробити ф-ю яка перетворить заготовку (рядок) на потрібний додаючи відповідні аргументи
//
// "Hello ${str}, how are you?";

// const stringModifier = (text, ...args) => {
// 	let res = text;
// 	args.forEach((item, i) => {
// 		res = res.replace(`{${i}}`, item);
// 	});
// 	return res;
// };

// const r = stringModifier("Hello {0}, how are you? {1}", "Oleh", "Ok");
// console.log(r);
//
//

//
//
//                      Task 2. Factorial
//                      ------
//
// function factorial(num) {
// 	if (num === 1) return 1;
// 	return num * factorial(num - 1);
// }
// console.log(factorial(5));
//
//

//
//
//                      Task 3. Замикання
//                      ------
//
// function foo() {
// 	let count = Math.PI;

// 	function boo(x) {
// 		return x + count;
// 	}

// 	return boo;
// 	// console.log(count);
// }
// const f = foo();
// console.log(f(10));
//
//

//
//

//
//
//                      Task 4. Do/while
//                      ------
//
// let i = 0;
// do {
// 	console.log("Hello!");
// 	i += 1;
// } while (i < 0);
//
//

//
//
//                      Task 5. Switch
//                      ------
//
// let i = 0;
// const userRole = "Owner";
// switch (userRole) {
// 	case "Admin":
// 		console.log("You are admin!");
// 		break;
// 	case "User":
// 		console.log("You are simple user!");
// 		break;
// 	case "Owner":
// 		console.log("You are BOSS!");
// 		break;
// 	default:
// 		console.log("Wrong user name");
// }
//
//

//
//
//                      Task 6. Switch
//                      ------
//
// let i = 0;
// const userRole = "Owner";
// switch (userRole) {
// 	case "Admin":
// 		console.log("You are admin!");
// 		break;
// 	case "User":
// 		console.log("You are simple user!");
// 		break;
// 	case "Owner":
// 		console.log("You are BOSS!");
// 		break;
// 	default:
// 		console.log("Wrong user name");
// }

//
//

// class Manager {
// 	constructor({ name, age, sales }) {
// 		this.name = name;
// 		this.age = age;
// 		this.sales = sales;
// 	}

// 	sell(product) {
// 		this.sales += 1;
// 		return `Manager ${this.name} sell ${product}`;
// 	}
// }

// const john = new Manager({ name: "John", age: 37, sales: 10 });
// john.sell("Oranges");
// // console.log(john);

// const jeil = new Manager({ name: "Jeil", age: 30, sales: 1 });
// // console.log(jeil.sell("Bananas"));
// // console.log(jeil);
// console.log(john.__proto__ === Manager.prototype);

// function foo(num) {
// 	let x = 0;
// 	x += num;
// 	function boo(y) {
// 		return (x %= y);
// 	}
// 	return boo;
// }

// const f = foo(5);
// console.log(f(2));
//

//

//
// function pow(n, p) {
// 	if (p === 0) return 1;
// 	return n * pow(n, p - 1);
// }
// console.log(pow(2, 3));
//
//

//

//
//
//                          Task 1. АКАУНТ КОРИСТУВАЧА
//                          ------------------------
//
// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого
// сервісу доставки їжі.Виконай рефакторинг методів об'єкта customer, розставивши відсутні
// this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код
// перевірятимуть тести.Будь ласка, нічого там не змінюй.
//
// Оголошена змінна customer
// Значення змінної customer - це об'єкт з властивостями і методами

// const customer = {
// 	username: "Mango",
// 	balance: 24000,
// 	discount: 0.1,
// 	orders: ["Burger", "Pizza", "Salad"],
// 	// Change code below this line
// 	getBalance() {
// 		return this.balance;
// 	},
// 	getDiscount() {
// 		return this.discount;
// 	},
// 	setDiscount(value) {
// 		this.discount = value;
// 	},
// 	getOrders() {
// 		return this.orders;
// 	},
// 	addOrder(cost, order) {
// 		this.balance -= cost - cost * this.discount;
// 		this.orders.push(order);
// 	},
// 	// Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// customer.getDiscount(); // повертає поточне значення властивості discount
// customer.setDiscount(0.15); // оновлює значення властивості discount
// customer.getBalance(); // повертає поточне значення властивості balance.
// customer.getOrders(); // повертає поточне значення властивості orders
// customer.addOrder(5000, "Steak"); // додає "Steak" в масив значень властивості orders і оновлює баланс
// Метод getBalance об'єкта customer використовує this
// Метод getDiscount об'єкта customer використовує this
// Метод setDiscount об'єкта customer використовує this
// Метод getOrders об'єкта customer використовує this
// Метод addOrder об'єкта customer використовує this
//
//

//

//
//
//                          Task 2. ІСТОРІЯ ЗАМОВЛЕНЬ
//                          ------------------------
//
// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
// Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService,
// щоб методи почали працювати правильно.

// Оголошена змінна historyService
// Значення змінної historyService - це об'єкт з вихідними властивостями та методами

// const historyService = {
// 	orders: [
// 		{ email: "jacob@hotmail.com", dish: "Burrito" },
// 		{ email: "solomon@topmail.net", dish: "Burger" },
// 		{ email: "artemis@coldmail.net", dish: "Pizza" },
// 		{ email: "solomon@topmail.net", dish: "Apple pie" },
// 		{ email: "jacob@hotmail.com", dish: "Taco" },
// 	],
// 	// Change code below this line
// 	getOrdersLog() {
// 		return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
// 	},
// 	getEmails() {
// 		const emails = this.orders.map(order => order.email);

// 		// 1 спосіб
// 		const uniqueEmails = new Set(emails);

// 		// 2 спосіб
// 		// const uniqueEmails = emails.filter((email, i, arr) => arr.indexOf(email) === i);

// 		return [...uniqueEmails];
// 	},
// 	getOrdersByEmail(email) {
// 		return this.orders.filter(order => order.email === email);
// 	},
// 	// Change code above this line
// };

// console.log(historyService.getOrdersLog()); // повертає рядок з переліком даних всіх замовлень з властивості orders
// console.log(historyService.getEmails()); // повертає масив всіх унікальних поштових адрес з властивості orders
// historyService.getOrdersByEmail("solomon@topmail.net"); // повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// historyService.getOrdersByEmail("artemis@coldmail.net"); // повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// Метод getOrdersLog об'єкта historyService використовує this
// Метод getEmails об'єкта historyService використовує this
// Метод getOrdersByEmail об'єкта historyService використовує this
//
//

//

//
//
//                          Task 3.ЛАНЦЮЖОК ПРОТОТИПІВ
//                          ------------------------
//
// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом
// для parent, а той, своєю чергою, був прототипом для child.

// Оголошена змінна ancestor
// Значення змінної ancestor - це об'єкт.
// Оголошена змінна parent
// Значення змінної parent - це об'єкт.
// Оголошена змінна child
// Значення змінної child - це об'єкт.

// const ancestor = {
// 	name: "Paul",
// 	age: 83,
// 	surname: "Dawson",
// 	heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// console.log(ancestor.isPrototypeOf(parent)); // повертає true //
// console.log(parent.isPrototypeOf(child)); // повертає true //
// console.log(ancestor.hasOwnProperty("surname")); // повертає true
// console.log(ancestor.surname); // повертає "Dawson"
// console.log(parent.hasOwnProperty("surname")); // повертає true
// console.log(parent.surname); // повертає "Moore"
// console.log(child.hasOwnProperty("surname")); // повертає false
// console.log(child.surname); // повертає "Moore"
// console.log(ancestor.hasOwnProperty("heritage")); // повертає true
// console.log(ancestor.heritage); // повертає "Irish"
// console.log(parent.hasOwnProperty("heritage")); // повертає false
// console.log(parent.heritage); // повертає "Irish"
// console.log(child.hasOwnProperty("heritage")); // повертає false
// console.log(child.heritage); // повертає "Irish"
// // Використовується метод Object.create()

// console.log(ancestor);
// console.log(parent);
// console.log(child);
//
//

//

//
//
//                          Task 3.СКЛАД
//                          ------------------------
//
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість
// items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає
// цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості
// items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у
// властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в
// якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// Оголошений клас Storage

// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem

// Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// Метод addItem змінює властивість items екземпляра класу, який його викликає
// Метод removeItem змінює властивість items екземпляра класу, який його викликає

// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної
// storage - це об'єкт
// Об'єкт storage містить властивість items

// Change code above this line
// class Storage {
// 	constructor(items) {
// 		this.items = items;
// 	}

// 	getItems() {
// 		return this.items;
// 	}

// 	addItem(newItem) {
// 		const inArr = this.items.some(item => item === newItem);
// 		if (!inArr) {
// 			this.items.push(newItem);
// 			return;
// 		}
// 	}

// 	// 1 спосіб
// 	// removeItem(newItem) {
// 	// 	const indx = this.items.indexOf(newItem);
// 	// 	if (!!~indx) {
// 	// 		this.items.splice(indx, 1);
// 	// 	}
// 	// }

// 	// 2 спосіб
// 	removeItem(newItem) {
// 		const indx = this.items.findIndex(item => item === newItem);
// 		if (!!~indx) {
// 			this.items.splice(indx, 1);
// 		}
// 	}
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]
//
//

//

//
//
//                          Task 4.КОНСТРУКТОР РЯДКІВ
//                          ------------------------
//
// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок,
// який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str(рядок) і додає його в кінець значення властивості value
// об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str(рядок) і додає його на початок значення властивості
// value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str(рядок) і додає його на початок і в кінець значення
// властивості value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
// в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// Оголошений клас StringBuilder
// В класі StringBuilder оголошений метод getValue
// Метод getValue повертає значення властивості value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padEnd
// Метод padEnd змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padStart
// Метод padStart змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padBoth
// Метод padBoth змінює властивість value екземпляра класу, який його викликає
// В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
// Об'єкт builder містить властивість value
// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=
//

// class StringBuilder {
// 	constructor(initialValue) {
// 		this.value = initialValue;
// 	}

// 	getValue() {
// 		return this.value;
// 	}

// 	// 1 спосіб
// 	padEnd(str) {
// 		this.value += str;
// 	}
// 	// 2 спосіб
// 	padEnd(str) {
// 		this.value = this.value.padEnd(this.value.length + 1, str);
// 	}

// 	// 1 спосіб
// 	padStart(str) {
// 		this.value = str + this.value;
// 	}
// 	// 2 спосіб
// 	padStart(str) {
// 		this.value = this.value.padStart(this.value.length + 1, str);
// 	}

// 	// 1 спосіб
// 	// padBoth(str) {
// 	// 	this.value = str + this.value + str;
// 	// }
// 	// 2 спосіб
// 	// padBoth(str) {
// 	// 	this.padStart(str);
// 	// 	this.padEnd(str);
// 	// }

// 	// 3 спосіб
// 	padBoth(str) {
// 		this.padStart(str);
// 		this.padEnd(str);
// 	}
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
//
//

//

//
//
//                          Task 5.СКЛАД 2.0
//                          ------------------------
//
// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
// в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// Об'єкт storage не містить властивості items
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Властивість items в класі Storage оголошена приватною
// Конструктор класу приймає властивість items
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення
// змінної storage - це об'єкт
// Перший виклик storage.getItems(), відразу після ініціалізації екземпляра, повертає масив
// ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив
// ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає
// масив["Nanitoids", "Antigravitator", "Droid"]

// class Storage {
// 	// Change code below this line
// 	#items;
// 	constructor(items) {
// 		this.#items = items;
// 	}

// 	getItems() {
// 		return this.#items;
// 	}

// 	addItem(newItem) {
// 		this.#items.push(newItem);
// 	}

// 	removeItem(itemToRemove) {
// 		this.#items = this.#items.filter(item => item !== itemToRemove);
// 	}
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
//
//

//

//
//
//                          Task 5.КОНСТРУКТОР РЯДКІВ 2.0
//                          ------------------------
//
// Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
// в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// Оголошений клас StringBuilder

// Властивість value в класі StringBuilder оголошена приватною

// В класі StringBuilder оголошений метод getValue

// В класі StringBuilder оголошений метод padEnd

// В класі StringBuilder оголошений метод padStart

// В класі StringBuilder оголошений метод padBoth

// В результаті виклику new StringBuilder('.') значення змінної builder - це об'єкт

// Об'єкт builder не містить властивості value

// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .

// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.

// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^

// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

// class StringBuilder {
// 	// Change code below this line
// 	#value;
// 	constructor(initialValue) {
// 		this.#value = initialValue;
// 	}

// 	getValue() {
// 		return this.#value;
// 	}

// 	padEnd(str) {
// 		this.#value += str;
// 	}

// 	padStart(str) {
// 		this.#value = str + this.#value;
// 	}

// 	padBoth(str) {
// 		this.padStart(str);
// 		this.padEnd(str);
// 	}
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class User {
// 	email;

// 	constructor(email) {
// 		this.email = email;
// 	}

// 	get email() {
// 		return this.email;
// 	}

// 	set email(newEmail) {
// 		this.email = newEmail;
// 	}
// }
// class Admin extends User {
// 	// Change code below this line

// 	static AccessLevel = {
// 		BASIC: "basic",
// 		SUPERUSER: "superuser",
// 	};

// 	constructor({ email, accessLevel, blacklistedEmails = [] }) {
// 		super(email);
// 		this.accessLevel = accessLevel;
// 		this.blacklistedEmails = blacklistedEmails;
// 	}

// 	blacklist(email) {
// 		this.blacklistedEmails.push(email);
// 	}

// 	isBlacklisted(email) {
// 		const foundEmail = this.blacklistedEmails.some(item => item === email);
// 		return foundEmail;
// 	}
// 	// Change code above this line
// }

// const mango = new Admin({
// 	email: "mango@mail.com",
// 	accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
