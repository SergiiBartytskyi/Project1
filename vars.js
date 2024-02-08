// const addBtn = document.querySelector("[data-add]");
// const resBtn = document.querySelector("[data-reset]");
// const inp = document.querySelector("[data-inp]");
// const outEl = document.querySelector(".js-output span");
// let total = 0;

// addBtn.addEventListener("click", () => {
// 	const value = Number(inp.value);
// 	console.log(value);
// 	total += value;
// 	outEl.textContent = total;
// 	inp.value = "";
// });

// resBtn.addEventListener("click", () => {
// 	total = 0;
// 	outEl.textContent = total;
// });
// const a = 5;
// const b = "4";
// const res = a * Number(b);
// console.log(res);
// console.log(typeof res);

// let weight = "88,3";
// let height = "1.75";
// weight = weight.replace(",", ".");
// console.log(weight);
// console.log(typeof weight);
// weight = +weight;
// console.log(typeof weight);
// height = +height;
// console.log(typeof height);
// const bmi = weight / Math.pow(height, 2);
// console.log(Number(bmi.toFixed(2)));

// const value = 5;

// if (value === 1) {
// 	console.log("one");
// } else if (value === 2) {
// 	console.log("two");
// } else if (value === 5) {
// 	console.log("Good result");
// } else {
// 	console.log("default");
// }

// switch (value) {
// 	case 1:
// 		console.log("one");
// 		break;

// 	case 2:
// 		console.log("two");
// 		break;

// 	case 5:
// 		console.log("good result");
// 		break;

// 	default:
// 		console.log("default");
// }
// const str = "hello world!";
// for (let i = 0; i < str.length; i += 1) {
// 	console.log(str[i]);
// }

//     Example 1 - Введення користувача та розгалуження.
//
//     Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?".
// Якщо користувач - вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const value = prompt("Яка офіційна назва JavaScript?");
//
// if (value === "ECMAScript") {
// 	alert("Правильно!");
// } else {
// 	alert("Не знаєте? ECMAScript!");
// }

//     Example 2 - Відображення часу - (if...else)
//
//     Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.".
// Якщо значення змінної minutes - дорівнює - 0, то виводь рядок "14 г.", без хвилин.

// const hours = 0;
// const minutes = 59;
// let timestring;
//
// if (minutes > 0 && minutes < 60 && hours >= 0 && hours < 24) {
// 	console.log((timestring = `${hours} г. ${minutes} хв.`));
// } else if (minutes === 0) {
// 	console.log((timestring = `${hours} г.`));
// } else {
// 	alert("Wrong time setting!");
// }

//     Example 3 - Розгалуження
//
//     Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля.
// Якщо було введено нуль, виводь в консоль рядок "Це нуль".Якщо передали відʼємне число, у консолі повинен бути рядок
// "Це негативне-число".
//
// // const userInput = +prompt("Введіть число");
// const userInput = Number(prompt("Введіть число"));
// console.log(typeof userInput);
//
// if (userInput > 0) {
// 	console.log("Це позитивне число");
// } else if (userInput === 0) {
// 	console.log("Це нуль");
// } else {
// 	console.log("Це негативне число");
// }

//          2 спосіб
//
// if (!userInput) {
// 	console.log("Це нуль");
// } else if (userInput > 0) {
// 	console.log("Це позитивне число");
// } else {
// 	console.log("Це негативне число");
// }

//======================================================================================

// Якщо а === 0, то це false i if не спрацює.Робимо інверсію а => !a.Тепер!а === 0 => true i
// if розуміє, що а === 0, але щоб спрацювати йому потрібно перетворитись на true.
//
// const a = 0;
// if (!a) {
// 	console.log("null"); // 0 -> "null"
// } else {
// 	console.log("no null"); // !0 -> "no null"
// }

//======================================================================================

//     Example 4 - Вкладені розгалуження.

//     Напиши скрипт, який порівнює числа у змінних а та b.Якщо обидва значення більше - 100,
// то виведи в консоль максимальне з них.
// В протилежному випадку у консолі повинна бути сума значення b та числа 512.
//
// const a = 200;
// const b = 210;
//
//       1 спосіб
// if (a > 100 && b > 100) {
// 	console.log(a > b ? `a: ${a}` : `b: ${b}`);
// } else {
// 	console.log(`${b + 512}`);
// }
//
//      2 спосіб
// if (a > 100 && b > 100) {
// 	if (a > b) {
// 		console.log(a);
// 	} else {
// 		console.log(b);
// 	}
// } else {
// 	console.log(b + 512);
// }
//
//      3 спосіб
// if (a > 100 && b > 100) {
// 	console.log(a > b ? a : b);
// } else {
// 	console.log(b + 512);
// }

//     Example 5 - Форматування посилання(endsWith)
//
//     Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо - ні, додай до кінця значення link цей символ.Використовуй конструкцію if…else.
//
// let link = "https://my-site.com/about/23";
// // Пиши - код нижче за цей  рядок
// if (!link.endsWith("/")) {
// 	link += "/";
// }
// // Пиши - код вище за цей рядок
// console.log(link);

//     Example 6 - Форматування посилання (includes та логічне «І»)
//
//     Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
// Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку,
// якщо в link є підрядок "my-site".Використовуй конструкцію if…else.
//
// let link = "https://somesite.com/about";
// let link = "https://somesite.com/my-site/about";
//
// // Пиши код нижче за цей рядок
// if (!link.endsWith("/") && link.includes("my-site")) {
// 	link += "/";
// }
// // Пиши код вище за цей рядок
// console.log(link);

// Example 7 - Форматування посилання(тернарний оператор)
//
// Виконай рефакторинг коду задачі номер 6, використовуючи тернарний - оператор.
//
// let link = "https://somesite.com/about";
// link = "https://somesite.com/my-site/about";
// // if (link.includes("my-site") && !link.endsWith("/")) {
// // 	link += "/";
// // }
//
// link.includes("my-site") && !link.endsWith("/") ? (link += "/") : link;
// console.log(link);

//     Example 8 - if... else та логічні оператори
//
//     Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної
// hours.
//     Якщо значення   змінної hours:
//  менше 17, виводь рядок "Pending";
//  більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires";
//  більше 24, виводь рядок - "Overdue";
//
// const hours = 25;
//
// if (hours < 17) {
// 	console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
// 	console.log("Expires");
// } else {
// 	console.log("Overdue");
// }

//     Example 9 - Дедлайн здачі проекту(if…else)
//
//     Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію
// if...else.
//     Якщо до дедлайну 0 днів - виведи рядок "Сьогодні";
//     Якщо до дедлайну 1 день - виведи рядок "Завтра";
//     Якщо до дедлайну 2 дні - виведи рядок "Післязавтра";
//     Якщо до дедлайну 3 + днів - виведи рядок "Дата у майбутньому";
//
// const daysUntilDeadline = 0;
// // Пиши код нижче за цей рядок
// if (!daysUntilDeadline) {
// 	console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
// 	console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
// 	console.log("Післязавтра");
// } else {
// 	console.log("Дата у майбутньому");
// }

// Example 10 - Дедлайн здачі проекту(switch)
//
// Виконай рефакторинг коду задачі номер 9 використовуючи switch.
//
// const daysUntilDeadline = 0;
//
// switch (daysUntilDeadline) {
// 	case 0:
// 		console.log("Сьогодні");
// 		break;
//
// 	case 1:
// 		console.log("Завтра");
// 		break;
//
// 	case 2:
// 		console.log("Післязавтра");
// 		break;
//
// 	default:
// 		console.log("Дата у майбутньому");
// }
//
// 2 спосіб
// if (daysUntilDeadline >= 0) {
// 	switch (daysUntilDeadline) {
// 		case 0:
// 			console.log("Сьогодні");
// 			break;

// 		case 1:
// 			console.log("Завтра");
// 			break;

// 		case 2:
// 			console.log("Післязавтра");
// 			break;

// 		default:
// 			console.log("Дата у майбутньому");
// 	}
// } else {
// 	console.log("Друже ти проспав!");
// }

//     Example 11 - Цикл for
//
//     Напиши цикл for, який виводить у консоль браузера числа за зростанням від тіn до тах,
// але тільки якщо число кратне 5.
//
// const max = 100;
// const min = 17;
//
// for (let i = min; i >= min && i <= max; i++) {
// 	if (!(i % 5)) {
// 		console.log(i);
// 	}
// }

//     Example 12 - Введення користувача та розгалуження
//
//     Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.
//  Якщо відвідувач вводить "Адмін", то prompt запитує пароль;
//  Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано";
//  В іншому випадку вивести рядок "Я вас не знаю";
//     Пароль перевіряти так:
//  Якщо введено пароль "Я адмін", то вивести рядок - "Здрастуйте!";
//  Інакше виводити рядок "Невірний пароль".
//
// const login = prompt("Введи логін");
//
// if (login === "Адмін") {
// 	const password = prompt("Введи пароль");
// 	if (password === "Я адмін") {
// 		console.log("Доброго дня!");
// 	} else {
// 		console.log("Невірний пароль");
// 	}
// } else if (!login) {
// 	console.log("Скасовано");
// } else {
// 	console.log("Я вас не знаю");
// }
//  2 спосіб
// if (login === "Адмін") {
// 	const password = prompt("Введи пароль");
// 	console.log(password === "Я адмін" ? "Доброго дня!" : "Невірний пароль");
// } else if (login === "" || !login) {
// 	console.log("Скасовано");
// } else {
// 	console.log("Я вас не знаю");
// }

// Task 1
//
//     Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх
// замовлення. Оголоси змінні та присвой їм відповідні значення:
// - pricePerDroid - ціна одного дроїда, значення 800;
// - orderedQuantity - кількість дроїдів у замовленні, значення 6;
// - deliveryFee - вартість доставки, значення 50;
// - totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки;
// - message - повідомлення про стан замовлення у форматі "You ordered droids worth
// < total price > credits.Delivery(<delivery fee> credits) is included in total price."
//
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// let deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits.Delivery(${deliveryFee} credits) is included in total price.`;
// console.log(message);

// Change code below this line
// const sayHi = () => {
// 	// console.log("Hello, this is my first function!");
// 	return;
// };

// // Change code below this line
// function add(a, b, c) {
// 	const result = a + b + c;
// 	console.log(`Addition result equals ${result}`);
// 	// Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
// 	// Change code below this line
// 	return a + b + c;
// 	// Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// Task 2. ШАБЛОННІ РЯДКИ 2.0
//
//     Функція makeMessage(name, price) складає і повертає повідомлення про покупку.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
//
// - name - назва товару;
// - price - ціна товару.
//     Доповни код функції таким чином, щоб у змінну message записувався рядок
// "You picked <product name>, price per item is <product price> credits",
//     де < product name > і < product price > - це значення параметрів name і price.
// Використовуй синтаксис шаблонних рядків.
//
//     Увага
//     Зверни увагу на те, що в коді відсутній виклик функції makeMessage.
// З цього завдання і далі ми самі будемо викликати твої функції і перевіряти те,
// як вони працюють.Результат наших перевірок ти побачиш у блоці Результати під редактором коду.
//
// function makeMessage(name, price) {
// 	const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
//     // console.log(message);
// }
//
// makeMessage("Radar", 6150); //"You picked Radar, price per item is 6150 credits"
// makeMessage("Scanner", 3500); //"You picked Scanner, price per item is 3500 credits"
// makeMessage("Reactor", 8000); //"You picked Reactor, price per item is 8000 credits"
// makeMessage("Engine", 4070); //"You picked Engine, price per item is 4070 credits"

// Task 3. МАТЕМАТИЧНІ ОПЕРАТОРИ 2.0
//
//     Функція calculateTotalPrice рахує і повертає загальну суму покупки.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
//
// - orderedQuantity - кількість одиниць товару в замовленні;
// - pricePerItem - ціна однієї одиниці товару.
//     Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки -
// результат множення кількості товарів на ціну одного.
//
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
// 	const totalPrice = orderedQuantity * pricePerItem;
// 	return totalPrice;
// 	// console.log(totalPrice);
// }
//
// calculateTotalPrice(5, 100); // повертає 500
// calculateTotalPrice(8, 60); // повертає 480
// calculateTotalPrice(3, 400); // повертає 1200
// calculateTotalPrice(1, 3500); // повертає 3500
// calculateTotalPrice(12, 70); //840

// Task 4. ЗАМОВЛЕННЯ ПРОДУКТУ 2.0
//
//     Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// складає і повертає повідомлення про покупку ремонтних дроїдів.Вона оголошує три параметри,
// значення яких будуть задаватися під час її виклику.
//
// - orderedQuantity - кількість дроїдів у замовленні;
// - pricePerDroid - ціна одного дроїда;
// - deliveryFee - вартість доставки.
//     Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included
// in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.
//
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// 	const message = `You ordered droids worth ${
// 		orderedQuantity * pricePerDroid + deliveryFee
// 	} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// 	// return message;
// 	console.log(message);
// }
// makeOrderMessage(2, 100, 50); //   овертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// makeOrderMessage(4, 300, 100); //  повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// makeOrderMessage(10, 70, 200); //  повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

// Task 5.
//
//     Функція isAdult оголошує один параметр age(вік), значення якого буде задаватися під час
// її виклику.Присвой змінній passed вираз перевірки віку користувача на повноліття.
// Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {
// 	const passed = age >= 18;
// 	return passed;
// }

// isAdult(20); // повертає true
// isAdult(14); // повертає false
// isAdult(8); // повертає false
// isAdult(37); // повертає true

// Task 6.
//
//     Функція isValidPassword(password) перевіряє рівність збереженого і введеного паролів і
// повертає результат перевірки - буль true або false.Змінна SAVED_PASSWORD зберігає значення
// попередньо збереженого пароля.Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів.
// Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.
//
// function isValidPassword(password) {
// 	const SAVED_PASSWORD = "jqueryismyjam";
// 	const isMatch = SAVED_PASSWORD === password;
// 	console.log(isMatch);
// 	return isMatch;
// }
//
// isValidPassword("mangodab3st"); // повертає false
// isValidPassword("kiwirul3z"); // повертає false
// isValidPassword("jqueryismyjam"); // повертає true

// Task 7. СКЛАД ТОВАРІВ
//
//     Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і
// повертає повідомлення про результат.Вона оголошує два параметри, значення яких будуть
// задаватися під час її виклику:
//
// - available - загальна кількість товарів на складі;
// - ordered - одиниць товару в замовленні.
//     Використовуючи розгалуження, доповни код функції таким чином, що:
// - якщо в замовленні вказане число, яке перевищує кількість товарів на складі,
// у змінну message записується рядок "Not enough goods in stock!";
// - в іншому випадку записується рядок "Order is processed, our manager will contact you.".
//
// function checkStorage(available, ordered) {
// 	let message;
// 	if (ordered > available) {
// 		message = "Not enough goods in stock!";
// 	} else {
// 		message = "Order is processed, our manager will contact you.";
// 	}
// 	return message;
// }
// checkStorage(100, 50); // повертає "Order is processed, our manager will contact you."
// checkStorage(100, 130); // повертає "Not enough goods in stock!"
// checkStorage(200, 20); // повертає "Order is processed, our manager will contact you."
// checkStorage(200, 150); // повертає "Order is processed, our manager will contact you."
// checkStorage(150, 180); // повертає "Not enough goods in stock!"

// Task 8. ПЕРЕВІРКА БАЛАНСУ
//
//     Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне
// забезпечення для відділу продажів.
//
// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію
// з продажу дроїдів і повертає повідомлення про результат операції.Вона оголошує три параметри,
// значення яких будуть задаватися під час її виклику:
//
// - pricePerDroid - ціна одного дроїда;
// - orderedQuantity - кіл - сть замовлених дроїдів;
// - customerCredits - сума коштів на рахунку клієнта;
// Доповни її наступним функціоналом:
//
// - Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз
// розрахунку цієї суми.
// - Додай перевірку, чи зможе клієнт оплатити замовлення:
//  - якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message
// рядок "Insufficient funds!";
//  - в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення:
// "You ordered <число> droids, you have <число> credits left".
//
//
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// 	let message;
// 	const totalPrice = pricePerDroid * orderedQuantity;
// 	if (customerCredits >= totalPrice) {
// 		customerCredits -= totalPrice;
// 		message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
// 	} else {
// 		message = "Insufficient funds!";
// 	}
// 	console.log(message);
// 	return message;
// }
// makeTransaction(3000, 5, 23000); // повертає "You ordered 5 droids, you have 8000 credits left"
// makeTransaction(1000, 3, 15000); // повертає "You ordered 3 droids, you have 12000 credits left"
// makeTransaction(5000, 10, 8000); // повертає "Insufficient funds!"
// makeTransaction(2000, 8, 10000); // повертає "Insufficient funds!"
// makeTransaction(500, 10, 5000); // повертає "You ordered 10 droids, you have 0 credits left"

// Task 9.
//
//     Функція checkPassword(password) отримує пароль користувача в параметр password,
// перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає
// повідомлення про результат порівняння, яке зберігається у змінній message.
//
// - Якщо значення параметра password дорівнює null, значить користувач скасував операцію
// і в message записується рядок "Canceled by user!".
// - Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message
// присвоюється рядок "Welcome!".
// - Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок
// "Access denied, wrong password!".
//
// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	let message;
// 	if (!password) {
// 		message = "Canceled by user!";
// 	} else if (password === ADMIN_PASSWORD) {
// 		message = "Welcome!";
// 	} else {
// 		message = "Access denied, wrong password!";
// 	}
// 	console.log(message);
// 	return message;
// }
// checkPassword("mangohackzor"); // повертає "Access denied, wrong password!"
// checkPassword(null); // повертає "Canceled by user!"
// checkPassword("polyhax"); // повертає "Access denied, wrong password!"
// checkPassword("jqueryismyjam"); // повертає "Welcome!"

// Task 10. СКЛАД ТОВАРІВ 2.0
//
//     Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і
// повертає повідомлення про результат.Вона оголошує два параметри, значення яких будуть задаватися
// під час її виклику.
//
// - available - доступна кількість товарів на складі;
// - ordered - одиниць товару в замовленні;
//     Використовуючи розгалуження, доповни код функції таким чином, що:
//
// - Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0,
// у змінну message присвоюється рядок "There are no products in the order!".
// - Якщо товарів у замовленні більше, ніж доступно товарів на складі,
// то у змінну message присвоюється рядок
// "Your order is too large, there are not enough items in stock!".
// - В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".
//
//
// function checkStorage(available, ordered) {
// 	let message;
// 	if (!ordered) {
// 		message = "There are no products in the order!";
// 	} else if (ordered > available) {
// 		message = "Your order is too large, there are not enough items in stock!";
// 	} else {
// 		message = "The order is accepted, our manager will contact you";
// 	}
// 	console.log(message);
// 	return message;
// }
// checkStorage(100, 50); // повертає "The order is accepted, our manager will contact you"
// checkStorage(100, 130); // повертає "Your order is too large, there are not enough items in stock!"
// checkStorage(70, 0); // повертає "There are no products in the order!"
// checkStorage(200, 20); // повертає "The order is accepted, our manager will contact you"
// checkStorage(200, 250); // повертає "Your order is too large, there are not enough items in stock!"
// checkStorage(150, 0); // повертає "There are no products in the order!"

// Task 11.ОБЧИСЛЕННЯ ЗНИЖКИ
//
//     Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених
// грошей(параметр totalSpent) в магазині за весь час(партнерська програма).Знижка записується у
// змінну discount і повертається з функції як результат її роботи.
//
//     Використовуючи розгалуження і логічні оператори, доповни код функції.
//
// - Якщо витрачено від 50000(включно) або більше кредитів - знижка 10 % (золотий партнер);
// - Якщо витрачено від 20000(включно) до 50000 кредитів - знижка 5 % (срібний партнер);
// - Якщо витрачено від 5000(включно) до 20000 кредитів - знижка 2 % (бронзовий партнер);
// - Якщо витрачено менше 5000 кредитів - знижка 0(базовий партнер);
//     Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT,
// BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.
//
// function getDiscount(totalSpent) {
// 	const BASE_DISCOUNT = 0;
// 	const BRONZE_DISCOUNT = 0.02;
// 	const SILVER_DISCOUNT = 0.05;
// 	const GOLD_DISCOUNT = 0.1;
// 	let discount;
// 	if (totalSpent < 5000) {
// 		discount = BASE_DISCOUNT;
// 	} else if (totalSpent < 20000) {
// 		discount = BRONZE_DISCOUNT;
// 	} else if (totalSpent < 50000) {
// 		discount = SILVER_DISCOUNT;
// 	} else {
// 		discount = GOLD_DISCOUNT;
// 	}
// 	console.log(discount);
// 	return discount;
// }
// getDiscount(137000); // повертає 0.1
// getDiscount(46900); // повертає 0.05
// getDiscount(8250); // повертає 0.02
// getDiscount(1300); // повертає 0
// getDiscount(5000); // повертає 0.02
// getDiscount(20000); // повертає 0.05
// getDiscount(50000); // повертає 0.1

// Task 12.
//
//     Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else
// тернарним оператором.
//
// function checkStorage(available, ordered) {
// 	let message;
// 	// if (ordered > available) {
// 	// 	message = "Not enough goods in stock!";
// 	// } else {
// 	// 	message = "The order is accepted, our manager will contact you";
// 	// }
// 	message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
// 	console.log(message);
// 	return message;
// }

// checkStorage(100, 50); // повертає "The order is accepted, our manager will contact you"
// checkStorage(100, 130); // повертає "Not enough goods in stock!"
// checkStorage(200, 20); // повертає "The order is accepted, our manager will contact you"
// checkStorage(200, 150); // повертає "The order is accepted, our manager will contact you"
// checkStorage(150, 180); // повертає "Not enough goods in stock!"

// Task 13.ПЕРЕВІРКА ПАРОЛЯ
//
//     Функція checkPassword(password) порівнює переданий їй пароль(параметр password) зі
// збереженим паролем адміністратора(константа ADMIN_PASSWORD) і повертає рядок з повідомленням про
// результат.
//
// Використовуючи тернарний оператор, доповни функцію таким чином, що:
// - Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок
// "Access is allowed".;
// - В іншому випадку, присвой message рядок "Access denied, wrong password!".;
//
// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	let message;
// 	message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
// 	console.log(message);
// 	return message;
// }
//
// checkPassword("jqueryismyjam"); // повертає "Access is allowed"
// checkPassword("angul4r1sl1f3"); // повертає "Access denied, wrong password!"
// checkPassword("r3actsux"); // повертає "Access denied, wrong password!"

// Task 14.
//
//     Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача
// (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає
// ціну, що зберігається у змінній price.
//
// Якщо значення параметра type - це рядок:
// - "starter" - ціна передплати 0 кредитів.
// - "professional" - ціна передплати 20 кредитів.
// - "organization" - ціна передплати 50 кредитів.
//     Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.
//
// // if (type === "starter") {
// //   price = 0;
// // } else if (type === "professional") {
// //   price = 20;
// // } else if (type === "organization") {
// //   price = 50;
// // }
//     Після рефакторингу інструкція if..else була замінена на switch.Доповни код інструкції switch,
// щоб функція працювала правильно.
//
// function getSubscriptionPrice(type) {
// 	let price;
//
// 	switch (type) {
// 		case "starter":
// 			price = 0;
// 			break;
//
// 		case "professional":
// 			price = 20;
// 			break;
//
// 		case "organization":
// 			price = 50;
// 			break;
// 	}
// 	console.log(price);
// 	return price;
// }
// getSubscriptionPrice("professional"); // повертає число 20
// getSubscriptionPrice("organization"); // повертає число 50
// getSubscriptionPrice("starter"); // повертає число 0

// Task 15.
//
//     Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг
// з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння,
// яке зберігається у змінній message.
//
// Якщо значення параметра password:
// - дорівнює null, значить користувач скасував операцію і в message записується рядок
// "Canceled by user!".
// - збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// - не задовольняє жодну з попередніх умов, у змінну message записується рядок
// "Access denied, wrong password!".
//     Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок
// default (аналог else).
//
// function checkPassword(password) {
// 	const ADMIN_PASSWORD = "jqueryismyjam";
// 	let message;
// 	// 		if (password === null) {
// 	// 	message = "Canceled by user!";
// 	// } else if (password === ADMIN_PASSWORD) {
// 	// 	message = "Welcome!";
// 	// } else {
// 	// 	message = "Access denied, wrong password!";
// 	// }
//
// 	switch (password) {
// 		case null:
// 			message = "Canceled by user!";
// 			break;
//
// 		case ADMIN_PASSWORD:
// 			message = "Welcome!";
// 			break;
//
// 		default:
// 			message = "Access denied, wrong password!";
// 	}
// 	console.log(message);
// 	return message;
// }
// checkPassword("mangohackzor"); // повертає "Access denied, wrong password!"
// checkPassword(null); // повертає "Canceled by user!"
// checkPassword("polyhax"); // повертає "Access denied, wrong password!"
// checkPassword("jqueryismyjam"); // повертає "Welcome!"

// Task 16. ДОСТАВКА ТОВАРУ
//
//     Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну
// користувача(параметр country) і повертати повідомлення про результат, що зберігається у змінній
// message.Обов'язково використовуй інструкцію switch.
//
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де
// замість < country > і < price >, необхідно підставити відповідні значення.
//
// Список країн і вартість доставки:
//
// - China - 100 кредитів;
// - Chile - 250 кредитів;
// - Australia - 170 кредитів;
// - Jamaica - 120 кредитів;
//     Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку,
// то функція повинна повернути рядок "Sorry, there is no delivery to your country".
//
// function getShippingCost(country) {
// 	let message;
//
// 	switch (country) {
// 		case "China":
// 			message = `Shipping to ${country} will cost 100 credits`;
// 			break;
//
// 		case "Chile":
// 			message = `Shipping to ${country} will cost 250 credits`;
// 			break;
//
// 		case "Australia":
// 			message = `Shipping to ${country} will cost 170 credits`;
// 			break;
//
// 		case "Jamaica":
// 			message = `Shipping to ${country} will cost 120 credits`;
// 			break;
//
// 		default:
// 			message = "Sorry, there is no delivery to your country";
// 	}
// 	console.log(message);
// 	return message;
// }
//
// getShippingCost("Australia"); // повертає "Shipping to Australia will cost 170 credits"
// getShippingCost("Germany"); // повертає "Sorry, there is no delivery to your country"
// getShippingCost("China"); // повертає "Shipping to China will cost 100 credits"
// getShippingCost("Chile"); // повертає "Shipping to Chile will cost 250 credits"
// getShippingCost("Jamaica"); // повертає "Shipping to Jamaica will cost 120 credits"
// getShippingCost("Sweden"); // повертає "Sorry, there is no delivery to your country"

// Task 17.
//
//     Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і
// до length символів.Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
//
// - string - оригінальний рядок;
// - length - кількість символів з початку рядка для підрядка;
//     Присвой змінній substring вираз створення підрядка довжиною length символів(від початку)
// з рядка string.
//
// function getSubstring(string, length) {
// 	const substring = string.slice(0, length); // Change this line

// 	console.log(substring);
// 	return substring;
// }
// getSubstring("Hello world", 3); // повертає "Hel"
// getSubstring("Hello world", 6); // повертає "Hello"
// getSubstring("Hello world", 8); // повертає "Hello wo"
// getSubstring("Hello world", 11); // повертає "Hello world"
// getSubstring("Hello world", 0); // повертає ""

// Task 17.ФОРМАТУВАННЯ ПОВІДОМЛЕННЯ
//
//     Функція formatMessage(message, maxLength) приймає рядок(параметр message) і форматує його,
// якщо довжина перевищує значення в параметрі maxLength.
// Доповни код функції таким чином, що якщо довжина рядка:
// - не перевищує maxLength, функція повертає його в початковому вигляді.
// - більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець
// три крапки "...", після чого повертає скорочену версію.
//
// function formatMessage(message, maxLength) {
// 	let result;
// 	if (message.length <= maxLength) {
// 		result = message;
// 		console.log(message);
// 	} else {
// 		result = message.slice(0, maxLength) + "...";
// 		console.log(result);
// 	}
// 	return result;
// }
// formatMessage("Curabitur ligula sapien", 16); // повертає "Curabitur ligula..."
// formatMessage("Curabitur ligula sapien", 23); // повертає "Curabitur ligula sapien"
// formatMessage("Vestibulum facilisis purus nec", 20); // повертає "Vestibulum facilisis..."
// formatMessage("Vestibulum facilisis purus nec", 30); // повертає "Vestibulum facilisis purus nec"
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); // повертає "Nunc sed turpis..."
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); // повертає "Nunc sed turpis a felis in nunc fringilla"

// Task 18.
//
//     Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false -
// результат перевірки входження підрядка name у рядок fullname.
//
// - fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// - name - ім'я для перевірки входження в повне ім'я.
//     Присвой змінній result вираз перевірки входження імені(параметр name), у повне ім'я
// (параметр fullname).Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» -
// для неї різні імена.
//
// function checkForName(fullName, name) {
// 	const result = fullName.includes(name); // Change this line
// 	console.log(result);
// 	return result;
// }
//
// checkForName("Egor Kolbasov", "Egor"); // повертає true
// checkForName("Egor Kolbasov", "egor"); // повертає false
// checkForName("Egor Kolbasov", "egOr"); // повертає false
// checkForName("Egor Kolbasov", "Zhenya"); //) повертає false
// checkForName("Vadim Nekrasov", "Vadim"); // повертає true
// checkForName("Vadim Nekrasov", "vadim"); // повертає false
// checkForName("Vadim Nekrasov", "Dima"); // повертає false

// Task 19.ПЕРЕВІРКА СПАМУ
//
//     Функція checkForSpam(message) приймає рядок(параметр message), перевіряє його на вміст
// заборонених слів spam і sale, і повертає результат перевірки.Слова в рядку параметра message можуть
// бути у довільному регістрі, наприклад SPAM або sAlE.
//
// - Якщо знайшли заборонене слово(spam або sale) то функція повертає буль true;
// - Якщо в рядку відсутні заборонені слова, функція повертає буль false;
//
// function checkForSpam(message) {
// 	let result;
// 	result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
// 	console.log(result);
// 	return result;
// }
// checkForSpam("Latest technology news"); // повертає false
// checkForSpam("JavaScript weekly newsletter"); // повертає false
// checkForSpam("Get best sale offers now!"); // повертає true
// checkForSpam("Amazing SalE, only tonight!"); // повертає true
// checkForSpam("Trust me, this is not a spam message"); // повертає true
// checkForSpam("Get rid of sPaM emails. Our book in on sale!"); // повертає true
// checkForSpam("[SPAM] How to earn fast money?"); // повертає true

// Task 20.
//
// const totalMinutes = 720;
// // const hours = Math.floor(totalMinutes / 60);  //число
// // const minutes = totalMinutes % 60;  //число
// const hours = (totalMinutes / 60).toFixed(0); //має бути рядком
// const minutes = (totalMinutes % 60).toString(); //має бути рядком
// const parsedHourse = hours.padStart(2, 0);
// const parsedMinutes = minutes.padStart(2, 0);
//
// console.log(`${parsedHourse} : ${parsedMinutes}`);
