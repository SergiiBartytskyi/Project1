import BSN from 'bootstrap.native';

// console.log("First log");
// console.log("Second log");
// console.log("Third log");

// Will run first
// console.log("First log");

// setTimeout(() => {
// 	// Will run last, after 2000 milliseconds
// 	console.log("Second log");
// }, 1000);

// // Will run second
// setTimeout(() => {
// 	// Will run last, after 2000 milliseconds
// 	console.log("Third log");
// }, 900);

// console.log("Fourth log");
//
//

//
//
// const button = document.querySelector("button");

// const onClick = () => {
// 	const timerId = setTimeout(() => {
// 		console.log("I love async JS!");
// 	}, 2000);

// 	console.log(timerId);
// };

// button.addEventListener("click", onClick);
//
//

//                              Скасування асинхронного виклику функції - clearTimeout(id)
//                              --------------------------
//
// const greet = () => {
// 	console.log("Hello!");
// };
// const timerId = setTimeout(greet, 1000);
// clearTimeout(timerId);
//
//

//
//
//                              Інтервал - setInterval()
//                                  ----------------------
//
//  const timerId = setInterval(callback, delay, arg1, arg2, ...);
//
// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
// 	timerId = setInterval(() => {
// 		console.log(`I love async JS!  ${Math.round(Math.random() * 100)}`);
// 	}, 1000);
// });

// stopBtn.addEventListener("click", () => {
// 	clearInterval(timerId);
// 	console.log(`Interval with id ${timerId} has stopped!`);
// });
//
//
//

//
//
//
//                                      Date
//                                      ----
//
// const date = new Date();

// console.dir(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)" - Object

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)" - String
//
//

//
//
//                                  Unix time
//                                  ---------
//
// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(1730005515996));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
//
//

//
//
// Метод getTime() повертає числове значення цієї дати(timestamp) - кількість мілісекунд,
//     що минула з півночі 1 січня 1970 року.

// const date = new Date("March 30, 1986");

// console.log(date);
// Sun Mar 30 1986 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

// const newDate = date.getTime();

// // console.log(date.getTime());
// 1624021654154

// console.log(newDate); // 512521200000

// console.log(new Date(newDate));
// Sun Mar 30 1986 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)
//
//

//
//
//                                  Встановлення дати
//                                  -----------------
//
// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate);
// // "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
//
//

//
//
//                              Встановлення дати
//                              -----------------
//
// new Date("2030-03-16");
// console.log(new Date("2030-03-16"));
// // Sat Mar 16 2030 01:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("2030-03");
// console.log(new Date("2030-03"));
// // Fri Mar 01 2030 01:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("2018");
// console.log(new Date("2018"));
// // Mon Jan 01 2018 01:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("03/16/2030");
// console.log(new Date("03/16/2030"));
// // Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("2030/03/16");
// console.log(new Date("2030/03/16"));
// // Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("2030/3/16");
// console.log(new Date("2030/3/16"));
// // Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("March 16, 2030");
// console.log(new Date("March 16, 2030"));
// // Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("March 16, 2030 14:25:00");
// console.log(new Date("March 16, 2030 14:25:00"));
// // Sat Mar 16 2030 14:25:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("2030-03-16 14:25:00");
// console.log(new Date("2030-03-16 14:25:00"));
// // Sat Mar 16 2030 14:25:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("2030-03-16T14:25:00");
// console.log(new Date("2030-03-16T14:25:00"));
// // Sat Mar 16 2030 14:25:00 GMT+0100 (за центральноєвропейським стандартним часом)

// // new Date("16 March 2030");
// console.log(new Date("16 March 2030"));
// // Sat Mar 16 2030 00:00:00 GMT+0100 (за центральноєвропейським стандартним часом)

// Інший спосіб створення нових об'єктів - це передати сім чисел, які описують рік, місяць
//     (починається з 0), день, години, хвилини, секунди і мілісекунди.Обов'язкові тільки
//     перші три.

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date);
// // Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)
//
//

//
//
//                                      Геттери
//                                      ------
//
// const date = new Date();
// console.log("Date: ", date);
// // Date:  Sat Mar 23 2024 09:36:13 GMT+0100 (за центральноєвропейським стандартним часом)

// // Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());
// // getDate():  23

// // Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());
// // getDay():  6

// // Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());
// // getMonth():  2

// // Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());
// // getFullYear():  2024

// // Повертає години
// console.log("getHours(): ", date.getHours());
// // getHours():  9

// // Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());
// // getMinutes():  37

// // Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());
// // getSeconds():  37

// // Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());
// // getMilliseconds():  370
//
//

//
//
// Існують еквівалентні версії цих методів, які повертають значення у форматі
// UTC(Coordinated Universal Time), а не адаптовані до поточного часового поясу користувача.

// const date = new Date();
// console.log("Date: ", date);
// // Date:  Sat Mar 23 2024 09:52:32 GMT+0100 (за центральноєвропейським стандартним часом)

// // Повертає день місяця від 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());
// // getUTCDate():  23

// // Повертає день тижня від 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());
// // getUTCDay():  6

// // Повертає місяць від 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());
// // getUTCMonth():  2

// // Повертає рік з 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());
// // getUTCFullYear():  2024

// // Повертає години
// console.log("getUTCHours(): ", date.getUTCHours());
// // getUTCHours():  8

// // Повертає хвилини
// console.log("getUTCMinutes(): ", date.getUTCMinutes());
// // getUTCMinutes():  53

// // Повертає секунди
// console.log("getUTCSeconds(): ", date.getUTCSeconds());
// // getUTCSeconds():  47

// // Повертає мілісекунди
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());
// // getUTCMilliseconds():  881
//
//

//
//
//                                  Сеттери
//                                  -------
//
// const date = new Date("March 16, 2030 14:25:00");
// console.log(date);
// Sat Mar 16 2030 14:25:00 GMT+0100 (за центральноєвропейським стандартним часом)

// date.setMinutes(50);
// console.log(date.setMinutes(50));
// // 1899899400000

// console.log(date);
// // // Sat Mar 16 2030 14:50:00 GMT+0100 (за центральноєвропейським стандартним часом)

// date.setFullYear(2040, 4, 8);
// console.log(date.setFullYear(2040, 4, 8));
// // 2220094200000

// console.log(date);
// // Tue May 08 2040 14:50:00 GMT+0200 (за центральноєвропейським літнім часом)
//
//

//
//
//                                  Форматування дати
//                                  ----------------
//
// toString() - повертає дату повністю;
// toDateString() - повертає дату;
// toTimeString() - повертає час;
//
// const date = new Date("March 16, 2030 14:25:00");

// date.toString();
// // "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toTimeString();
// // "14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toLocaleTimeString();
// // "2:25:00 PM"

// date.toUTCString();
// // "Sat, 16 Mar 2030 12:25:00 GMT"

// date.toDateString();
// // "Sat Mar 16 2030"

// date.toISOString();
// // "2030-03-16T12:25:00.000Z"

// date.toLocaleString();
// // "3/16/2030, 2:25:00 PM"

// date.getTime();
// // 1899894300000
//
//

//
//
//                              Проміси
//                              ------
//
// Promise(обіцянка, проміс) - об'єкт, що представляє поточний стан асинхронної операції.
// Це обгортка для значення, невідомого на момент створення промісу.
// Дозволяє обробляти результати асинхронних операцій таким чином, якби вони були синхронними:
// замість кінцевого результату асинхронної операції, повертається своєрідна обіцянка
// отримати результат у майбутньому.

// Проміс може бути у трьох станах:

// Очікування (pending) - початковий стан під час створення промісу.
// Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
// Відхилено (rejected) - операція відхилена з помилкою.
//
// ЦІКАВО
// Коли проміс виконаний або відхилений, то кажуть, що він завершений(settled).
// Це просто термін, який описує те, що проміс перебуває в будь - якому стані, крім очікування.
//

//
// Відмінності промісу і callback-функції:

// * Колбеки - це функції, обіцянки - це об'єкти.
// * Колбеки передаються як аргументи з зовнішнього коду у внутрішній, а обіцянки повертаються
// з внутрішнього коду у зовнішній.
// * Колбеки обробляють успішне або неуспішне завершення операції, обіцянки нічого не обробляють.
// * Колбеки можуть обробляти декілька подій, обіцянки пов'язані тільки з однією подією.
//

//
//
//                                  Створення
//                                  ---------
//
// Проміс створюється як екземпляр класу Promise, який приймає функцію(executor), як аргумент
// і відразу викликає її, ще до створення і повернення промісу.

// const promise = new Promise((resolve, reject) => {
// 	// Asynchronous operation
// });

//
// Функція executor повідомляє екземпляр(проміс), коли і як операція, з якою він пов'язаний,
// буде завершена.У ній можна виконувати будь - яку асинхронну операцію, після завершення якої,
// потрібно викликати resolve() - у разі успішного виконання(стан fulfilled), або reject() -
// у разі помилки(стан rejected).Значення, що повертається цій функції, ігнорується.

// resolve(value) - функція для виклику у разі успішної операції.Переданий їй аргумент буде
// значенням виконаного промісу.
// reject(error) - функція для виклику у разі помилки.Переданий їй аргумент буде значенням
// відхиленого промісу.
//

//
// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (isSuccess) {
// 			resolve("Success! Value passed to resolve function");
// 		} else {
// 			reject("Error! Error passed to reject function");
// 		}
// 	}, 2000);
// });

// console.log(promise);
//
//

//
//
//                              Метод then()
//                              -----------
//
//  promise.then(onResolve, onReject)
//
// * onResolve(value) - буде викликана у разі успішного виконання промісу і отримає його
// результат як аргумент.
// * onReject(error) - буде викликана у разі виконання промісу з помилкою і отримає її
// як аргумент.
//
// У прикладі, callback - функція onResolve буде викликана через дві секунди, якщо обіцянка
// успішно виконається, а onReject буде викликана через дві секунди у тому разі, якщо
// обіцянка виконається з помилкою.

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (isSuccess) {
// 			resolve("Success! Value passed to resolve function");
// 		} else {
// 			reject("Error! Error passed to reject function");
// 		}
// 	}, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
// 	// onResolve will run third or not at all
// 	value => {
// 		console.log("onResolve call inside promise.then()");
// 		console.log(value); // "Success! Value passed to resolve function"
// 	},
// 	// onReject will run third or not at all
// 	error => {
// 		console.log("onReject call inside promise.then()");
// 		console.log(error); // "Error! Error passed to reject function"
// 	},
// );

// // Will run second
// console.log("After promise.then()");
//
//

//
//
//                                  Метод catch()
//                                  ------------
//
//          promise.catch(error => {
//          	// Promise rejected
//          });
//
// Колбек-функція буде викликана у разі виконання промісу з помилкою, і отримає її як аргумент.

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (isSuccess) {
// 			resolve("Success! Value passed to resolve function");
// 		} else {
// 			reject("Error! Error passed to reject function");
// 		}
// 	}, 2000);
// });

// promise
// 	.then(value => {
// 		console.log(value);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});
//
//

//
//
//                                  Метод finally()
//                                  --------------
//
// Цей метод може бути корисним, якщо необхідно виконати код після того, як обіцянка буде
// дозволена(fulfilled або rejected), незалежно від результату.Дозволяє уникнути дублювання
// коду в обробниках then() і catch ().
//
//            promise.finally(() => {
//	            // Promise fulfilled or rejected
//           });
//
// Колбек - функція не отримає жодних аргументів, оскільки неможливо визначити - виконана чи
// відхилена обіцянка.Тут буде виконуватися код, який необхідно запустити в будь - якому разі.

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (isSuccess) {
// 			resolve("Success! Value passed to resolve function");
// 		} else {
// 			reject("Error! Error passed to reject function");
// 		}
// 	}, 2000);
// });

// promise
// 	.then(value => console.log(value)) // "Success! Value passed to resolve function"
// 	.catch(error => console.log(error)) // "Error! Error passed to reject function"
// 	.finally(() => console.log("Promise settled")); // "Promise settled"
//
//

//
//
//                          Ланцюжки промісів
//                          -----------------
//
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(5);
// 	}, 2000);
// });

// promise
// 	.then(value => {
// 		console.log(value); // 5
// 		return value * 2;
// 	})
// 	.then(value => {
// 		console.log(value); // 10
// 		return value * 3;
// 	})
// 	.then(value => {
// 		console.log(value); // 30
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	})
// 	.finally(() => {
// 		console.log("Final task");
// 	});
//
//

//
//
//                          Промісифікація функцій
//                          ----------------------
//
// Уявімо, що у нас є асинхронна функція, яка виконує якусь асинхронну операцію, наприклад,
// запит на сервер.Для того щоб обробити результат, її доведеться спроектувати таким
// чином, що вона буде очікувати на два колбеки - для успішного запиту і для помилки.
//
// const fetchUserFromServer = (username, onSuccess, onError) => {
// 	console.log(`Fetching data for ${username}`);

// 	setTimeout(() => {
// 		// Change value of isSuccess variable to simulate request status
// 		// const isSuccess = true;
// 		const isSuccess = false;

// 		if (isSuccess) {
// 			onSuccess("success value");
// 		} else {
// 			onError("error");
// 		}
// 	}, 2000);
// };

// const onFetchSuccess = user => {
// 	console.log(user);
// };

// const onFetchError = error => {
// 	console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);
//
//

//
//
//                          Промісифікація
//                          --------------
//
// Промісифікація - це перетворення функції з колбеками таким чином, щоб вона не приймала
// колбеки, а повертала проміс.

// const fetchUserFromServer = username => {
// 	return new Promise((resolve, reject) => {
// 		console.log(`Fetching data for ${username}`);

// 		setTimeout(() => {
// 			// Change value of isSuccess variable to simulate request status
// 			const isSuccess = true;

// 			if (isSuccess) {
// 				resolve("success value");
// 			} else {
// 				reject("error");
// 			}
// 		}, 2000);
// 	});
// };

// fetchUserFromServer("Mango")
// 	.then(user => console.log(user))
// 	.catch(error => console.error(error));
//
//

//
//
//                              Методи класу Promise
//                              -------------------
//
//                                  Promise.all()
//                                      --------
//
// Приймає масив промісів, очікує їх виконання і повертає проміс.
// Якщо всі проміси виконаються успішно, проміс, що повертається, перейде у стан fulfilled,
// а його значенням буде масив результатів виконання кожного промісу.
// У разі, коли хоча б один з промісів буде відхилений, проміс, що повертається,
// перейде у стан rejected, а його значенням буде помилка.
//
// Promise.all([promise1, promise2, promise3, ...])
//
// const makePromise = (text, delay) => {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(text), delay);
// 	});
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
// 	.then(value => console.log(value)) //["promiseA value", "promiseB value"]
// 	.catch(error => console.log(error));
//
//

//
//
//                          Promise.race()
//                          -------------
//
// Повертає виконаний або відхилений проміс, залежно від того, з яким результатом завершиться
// «найшвидший» з переданих промісів, зі значенням або причиною його відхилення.
//
//              Promise.race([promise1, promise2, promise3, ...])
//
// Коли хоча б один проміс з масиву виконається або буде відхилений, проміс, що повертається,
// перейде у стан resolved або rejected, а всі інші будуть відкинуті.
//
// const makePromise = (text, delay) => {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(text), delay);
// 	});
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.race([promiseA, promiseB])
// 	.then(value => console.log(value)) // "promiseA value"
// 	.catch(error => console.log(error));
//
//

//
//
//                  Promise.resolve() і Promise.reject()
//                  -----------------------------------
//
// Статичні методи для створення промісів, що миттєво успішно виконуються або відхиляються.
// Працюють аналогічно new Promise() за винятком можливості вказати затримку, але мають
// коротший синтаксис.

// // Fulfilled promise
// new Promise(resolve => resolve("success value")).then(value => console.log(value));

// Promise.resolve("success value").then(value => console.log(value));

// // Rejected promise
// new Promise((resolve, reject) => reject("error")).catch(error => console.error(error));

// Promise.reject("error").catch(error => console.error(error));
//
//

//
//                      Refactoring
//
// const makeGreeting = guestName => {
// 	if (guestName === "" || guestName === undefined) {
// 		return {
// 			success: false,
// 			message: "Guest name must not be empty",
// 		};
// 	}

// 	return {
// 		success: true,
// 		message: `Welcome ${guestName}`,
// 	};
// };

// const result = makeGreeting("Mango");

// if (result.success) {
// 	console.log(result.message);
// } else {
// 	console.error(result.message);
// }
//

//

// const makeGreeting = (guestName, onSuccess, onError) => {
// 	if (guestName === "" || guestName === undefined) {
// 		return onError("Guest name must not be empty");
// 	}
// 	onSuccess(`Welcome ${guestName}`);
// };

// makeGreeting(
// 	"Mango",
// 	greeting => console.log(greeting),
// 	error => console.error(error),
// );
//
//
// Останнім кроком буде промісифікація функції makeGreeting() для того, щоб повністю
// усунути її залежність від зовнішнього коду.

// const makeGreeting = guestName => {
// 	if (guestName === "" || guestName === undefined) {
// 		return Promise.reject("Guest name must not be empty");
// 	}

// 	return Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting("Mango")
// 	.then(greeting => console.log(greeting))
// 	.catch(error => console.error(error));
//
//

//
//
// Promise.resolve().then(() => console.log("Hey!"));
// console.log("Yo!");
//
//

//                                              -----------------------
//
//
// const button = document.querySelector(".btn");

// button.addEventListener("click", () => {
// 	Promise.resolve().then(() => console.log("Microtask1"));
// 	console.log("Listener1");
// });

// button.addEventListener("click", () => {
// 	Promise.resolve().then(() => console.log("Microtask2"));
// 	console.log("Listener2");
// });

// button.click();
//
//

//                                              --------------------
//
//
// const link = document.querySelector(".link");
// const nextClick = new Promise(resolve => {
// 	link.addEventListener("click", resolve, { once: true });
// });

// nextClick.then(e => {
// 	e.preventDefault();
// 	// Handle event
// });

// link.click();
//
//

//                                      ------------------------
//
//
// console.log("script start");

// setTimeout(function () {
// 	console.log("setTimeout");
// }, 0);

// Promise.resolve()
// 	.then(function () {
// 		console.log("promise1");
// 	})
// 	.then(function () {
// 		console.log("promise2");
// 	});

// console.log("script end");

/*
script start
script end
promise1
promise2
setTimeout
*/
//
//

//                      setTimeout() vs Promise
//
//
// Let's get hold of those elements
// var outer = document.querySelector(".outer");
// var inner = document.querySelector(".inner");

// // Let's listen for attribute changes on the
// // outer element
// new MutationObserver(function () {
// 	console.log("mutate");
// }).observe(outer, {
// 	attributes: true,
// });

// // Here's a click listener…
// function onClick() {
// 	console.log("click");

// 	setTimeout(function () {
// 		console.log("timeout");
// 	}, 0);

// 	Promise.resolve().then(function () {
// 		console.log("promise");
// 	});

// 	outer.setAttribute("data-random", Math.random());
// }

// // …which we'll attach to both elements
// inner.addEventListener("click", onClick);
// outer.addEventListener("click", onClick);

// inner.click();
//
//

//
//
//                                        Репета
//                                        ------
//
//                          setTimeout()
//                          ------------
//
// const logMessage = () => {
// 	console.log("Лог при виклиці collback-функції через 3 сек");
// };
// console.log("До виклику setTimeout");
// setTimeout(
// 	x => {
// 		console.log(x);
// 		console.log("Виклик setTimeout");
// 	},
// 	2000,
// 	3,
// );
// console.log("Після виклику setTimeout");
//
//

//
//
//                          clearTimeout()
//                          ------------
//
// const logger = time => {
// 	console.log(`Лог через ${time}ms, бо не відмінили таймаут`);
// };
// setTimeout(logger, 2000, 2000);
// const shouldCancelTimer = Math.random() > 0.3;

// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
// 	clearTimeout(shouldCancelTimer);
// }
//
//

//
//
//                          setInterval()
//                          ------------
//
// const logger = time => console.log(`Лог кожні ${time}ms - ${Date.now()}`);

// console.log("До виклику setInterval");
// setInterval(logger, 2000, 2000);
// console.log("Після виклику setInterval");
//
//

//
//
//                          clearInterval()
//                          ------------
//
// const intervalId = setInterval(logger, 2000, 2000);

// const shouldCancelInterval = Math.random() > 0.3;

// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
// 	clearInterval(intervalId);
// }
//
//

//
//
//
// console.log("До виклику setTimeout");
// setTimeout(() => {
// 	console.log("Виклик відкладеної ф-ції 1");
// }, 2000);
// setTimeout(() => {
// 	console.log("Виклик відкладеної ф-ції 2");
// }, 1000);
// Promise.resolve().then(function () {
// 	console.log("Promise 1");
// });
// console.log("Після виклику setTimeout");

/*
До виклику setTimeout
Після виклику setTimeout
Promise 1
Виклик відкладеної ф-ції 2
Виклик відкладеної ф-ції 1
 */
//
//

//
//
// 						Task setTimeout().
// 						-----------------
//
// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;

// const refs = {
// 	notification: document.querySelector(".js-alert"),
// };

// refs.notification.addEventListener("click", onNotificationClick);

// showNotification();

// function onNotificationClick() {
// 	hideNotification();
// 	clearTimeout(timeoutId);
// }

// function showNotification() {
// 	refs.notification.classList.add("is-visible");

// 	timeoutId = setTimeout(hideNotification, NOTIFICATION_DELAY);
// }
// function hideNotification() {
// 	console.log("Закриваємо сповіщення!");
// 	refs.notification.classList.remove("is-visible");
// }
//
//

//
//
// 						Task Subscription
// 						-----------------
//
// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };
// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
// const modal = new BSN.Modal('#subscription-modal');

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался');
//     return;
//   }

//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }
//
//

//
//
//                                  Task Date
//                                  ---------
//
// let date = new Date();
// console.log(date);
//Fri Mar 29 2024 15: 51: 41 GMT +0100(за центральноєвропейським стандартним часом)

// console.log(date.getDay());
// // 5

// console.log(date.getMonth());
// // 2

// console.log(date.getYear());
// // 124

// console.log(date.getTime());
// // 1711724179331

// Unix Time - від 1 01 1970 00:00
// date = new Date(1711724179331);
// console.log(date);
//Fri Mar 29 2024 15:56:19 GMT+0100 (за центральноєвропейським стандартним часом)

// const date1 = new Date();
// console.log('date1: ', date1);
// //date1:  Fri Mar 29 2024 16:10:33 GMT+0100 (за центральноєвропейським стандартним часом)

// setTimeout(() => {
//   const date2 = new Date();

//   console.log('date1: ', date1);
//   //date1:  Fri Mar 29 2024 16:10:33 GMT+0100 (за центральноєвропейським стандартним часом)

//   console.log('date1: ', date2);
//   //date2:  Fri Mar 29 2024 16:13:36 GMT+0100 (за центральноєвропейським стандартним часом)

//   const a = date2 - date1;
//   console.log('date2 - date1: ', a);
//   //3003

//   console.log(new Date(a));
//   //Thu Jan 01 1970 01:00:03 GMT+0100 (за центральноєвропейським стандартним часом)
// }, 3000);

// const date = new Date().getTime();
// console.log(date);
// 1711725197427
//
//

//
//
//                      Date.now()
//                      ---------
//
// Статичний метод який не створює обєкт. Повертає к-ть unix-секунд.
//
// const date1 = Date.now();
// console.log('date1: ', date1);
// //date1:  1711725472524

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log('date1: ', date1);
//   //date1:  1711725472524

//   console.log('date1: ', date2);
//   //date2:  1711725475525

//   const a = date2 - date1;
//   console.log('date2 - date1: ', a);
//   //3001

//   console.log(Date.now(a));
//   // 1711725475525
// }, 3000);
//
//

//
//
//                      Task. Timer
//                      -----------
//
// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   // * Отримує число;
//   // * Приводить число до рядка;
//   // * Додає в число "0".якщо число менше 2 - х зназів;

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }

//   // * Приймає час в мілісек;
//   // * Вираховує скільки в них поміщається годин / хвилин / секунд;
//   // * Повертає об.з властивостями hours, mins, secs;
//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//     return { hours, mins, secs };
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });

// timer.start();

// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// // // * Отримує число;
// // // * Приводить число до рядка;
// // // * Додає в число "0".якщо число менше 2 - х зназів;

// // function pad(value) {
// //   return String(value).padStart(2, '0');
// // }

// // * Приймає час в мілісек;
// // * Вираховує скільки в них поміщається годин / хвилин / секунд;
// // * Повертає об.з властивостями hours, mins, secs;

// // function getTimeComponents(time) {
// //   const hours = pad(
// //     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
// //   );
// //   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// //   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
// //   return { hours, mins, secs };
// // }
// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
//
//

//
//
//                          Promise
//                          ------
//
// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setInterval(() => {
//     if (canFulfill) {
//       resolve('Проміс виконався успішно (виконано, fulfilled)!');
//     }

//     reject('Проміс виконався з помилкою (відхилено, rejected)');
//   }, 1000);
// });

// promise.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     console.log(error);
//   }
// );

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log(`✅ ${result}`);
// }
// function onRejected(error) {
//   console.log(`❌ ${error}`);
// }

// promise
//   .then(result => {
//     console.log(result);
//     return 5;
//   })
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   });

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     throw Error('помилка в другому then');

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду виконаним в будь якому випадку!'));
//
//

//
//
//                      Task
//                      ----
//
// const makeOrder = dish => {
//   const DELAY = 1000;

//   const promise = new Promise((resolve, rejected) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve('Ось ваша страва!');
//       } else {
//         rejected('Вибачте, немає продуктів!');
//       }
//     }, DELAY);
//   });

//   return promise;
// };

// const makeOrder = dish => {
//   return Promise.resolve(`Ось ваша страва ${dish}!`);
// };

// makeOrder('пиріжок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }
//
//

//
//
//                      Task. Pokemon
//                      -------------
//
// const fetchPokemonId = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };

// // fetchPokemonId(1, onFetchSuccess, onFetchError);
// fetchPokemonId(1).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log('onFetchSuccess -> onFetchSuccess');
//   console.log(pokemon);
// }
// function onFetchError(error) {
//   console.log('onFetchError -> onFetchError');
//   console.log('Це в блоці catch');
//   console.log(error);
// }
//
//

//
//
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve('Це resolve');
//       }

//       reject('Це reject');
//     }, 2000);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
//
//

//
//
//                      Task. Horses
//                      ------------
//
// const horses = [
//   'Secretariat',
//   'Eclipse',
//   'West Australian',
//   'Flying Fox',
//   'Seabiscuit',
// ];

// let raceCounter = 0;

// const refs = {
//   startBtn: document.querySelector('.js-start-race'),
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };

// refs.startBtn.addEventListener('click', onStart);

// function onStart() {
//   raceCounter += 1;

//   const promises = horses.map(run);

//   updateWinnerField('');
//   updateProgressField('🍎 Заїзд почався. Ставки не приймаються!');
//   determineWinner(promises);
//   waitForAll(promises);
// }
// function determineWinner(horsesP) {
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updateWinnerField(`📣 Переміг ${horse}, фінішував за ${time} часу`);
//     updateResultsTable({ horse, time, raceCounter });
//   });
// }

// function waitForAll(horsesP) {
//   Promise.all(horsesP).then(() => {
//     updateProgressField('🔒 Заїзд закінчився. Ставки приймаються!');
//   });
// }

// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// }

// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// }

// function updateResultsTable({ horse, time, raceCounter }) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }

// // console.log(
// //   '%c 🍎 Заїзд почався. Ставки не приймаються!',
// //   'color: brown; font-size: 14px;'
// // );

// // const promises = horses.map(horse => run(horse));
// // const promises = horses.map(run);
// // console.log(promises);

// /*
// Promise.race[] - статичний метод. Очікує перший виконаний promise
//  */

// // Promise.race(promises).then(({ horse, time }) => {
// //   console.log(
// //     `%c 📣 Переміг ${horse}, фінішував за ${time} часу`,
// //     'color: green; font-size: 14px;'
// //   );
// // });
// /*
// Promise.all([]) - для очікування всіх промісів
//  */

// // Promise.all(promises).then(x => {
// //   console.log(x);
// // });
// // console.log(
// //   `%c 📣 Переміг ${1}, фінішував за ${1} часу`,
// //   'color: green; font-size: 14px;'
// // );
// // console.log(
// //   `%c 🔒 Заїзд закінчився. Ставки приймаються!`,
// //   'color: blue; font-size: 14px;'
// // );

// // run('Mango')
// //   .then(x => console.log(x))
// //   .catch(error => console.log(error));

// function run(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
//

//
//
//
//                          Рисіч
//                          -----
//
// for (let i = 3; i > 0; i--) {
//   const delay = i * 1000;
//   setTimeout(() => console.log(i), delay);
// }
// 1,2,3
//
//

//
//
// console.time('test async');

// console.log('start');

// // setTimeout(() => {
// //   console.log('setTimeout');
// // }, 0);

// for (let i = 0; i < 100000; i++) {
//   console.log('value', i);
// }

// // console.timeEnd('test async');
// console.log('finish');
//
//

//
//
//                          Date
//                          ----
//
// const date = new Date();
// console.log(date);

// console.log(date.getMonth());
// const namesOfMonth = [
//   'Січень',
//   'Лютий',
//   'Березень',
//   'Квітень',
//   'Травень',
//   'Червень',
//   'Липень',
//   'Серпень',
//   'Вересень',
//   'Жовтень',
//   'Листопад',
//   'Грудень',
// ];

// const arrDay = [
//   'Неділя',
//   'Понеділок',
//   'Вівторок',
//   'Середа',
//   'Четвер',
//   'П`ятниця',
//   'Субота',
// ];
// console.log(namesOfMonth[date.getMonth()]); // Квітень

// console.log(arrDay[date.getDay()]); // Понеділок
//
//

//
//
//                        Timer
//                        -----
//
// const box = document.querySelector('.js-box');
// const titleTimer = document.querySelector('.js-timer');
// let counter = 11;

// setTimeout(() => {
//   box.style.display = 'block';

//   const idInterval = setInterval(() => {
//     counter -= 1;
//     titleTimer.textContent = counter;

//     if (!counter) {
//       clearInterval(idInterval);
//       titleTimer.textContent = 'X';
//       // box.style.display = 'none';
//       titleTimer.addEventListener('click', onClick);
//     }
//   }, 1000);
// }, 1000);

// function onClick() {
//   box.style.display = 'none';
// }
//
//

//
//
//                            Calendar
//                            --------
//
// const day = document.querySelector('.date-day');
// const date = document.querySelector('.js-date');
// const month = document.querySelector('.date-month');
// const year = document.querySelector('.date-year');
// const digitalClock = document.querySelector('.digital-clock');
// const arrowSeconds = document.querySelector('.clock-seconds__arrow');
// const arrowMinutes = document.querySelector('.clock-minutes__arrow');
// const arrowHours = document.querySelector('.clock-hours__arrow');

// const namesOfMonth = [
//   'Січень',
//   'Лютий',
//   'Березень',
//   'Квітень',
//   'Травень',
//   'Червень',
//   'Липень',
//   'Серпень',
//   'Вересень',
//   'Жовтень',
//   'Листопад',
//   'Грудень',
// ];

// const arrDay = [
//   'Неділя',
//   'Понеділок',
//   'Вівторок',
//   'Середа',
//   'Четвер',
//   'П`ятниця',
//   'Субота',
// ];

// setInterval(() => {
//   const currentTime = new Date();
//   const currentDay = arrDay[currentTime.getDay()];
//   const currentDate = currentTime.getDate();
//   const currentMonth = namesOfMonth[currentTime.getMonth()];
//   const currentYear = currentTime.getFullYear();
//   const currentHours = currentTime.getHours();
//   const currentMinutes = currentTime.getMinutes();
//   const currentSeconds = currentTime.getSeconds();

//   // console.log(currentMilliseconds);
//   const changeSeconds = (360 / 60) * currentSeconds; //6°

//   // const changeMinutes = (360 / 60) * currentMinutes; //6°
//   const changeMinutes =
//     (360 / 60) * currentMinutes + (360 / 60 / 60) * currentSeconds;
//   // const changeHours =
//   //   (360 / 12) * currentHours + (360 / 60) * Math.floor(currentMinutes / 12);
//   const changeHours =
//     (360 / 12) * currentHours + (360 / 12 / 60) * currentMinutes;

//   const formatTime = `${currentHours
//     .toString()
//     .padStart(2, '0')} : ${currentMinutes
//     .toString()
//     .padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`;
//   // console.log(currentHour, currentMinutes, currentSeconds);
//   console.log(formatTime);

//   day.textContent = currentDay;
//   date.textContent = currentDate;
//   month.textContent = currentMonth;
//   year.textContent = currentYear;
//   digitalClock.textContent = `Поточний час ${formatTime}`;

//   arrowSeconds.style.transform = `rotate(${changeSeconds}deg)`;
//   arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
//   arrowHours.style.transform = `rotate(${changeHours}deg)`;
// }, 1000);
//
//

//
//
//                            Зворотній відлік
//
// const targetDate = new Date('4/04/2024');
//
// setInterval(() => {
//   const currentDate = new Date();
//   // console.log(currentDate);
//   // console.log(targetDate);
//   console.log(convertMs(targetDate - currentDate));
// }, 1000);

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
//
//

//
//
//                                  Promise (Рисіч)
//                                  --------------
//
// const promise = new Promise(resolve => {
//   resolve(10);
// });

// promise
//   .then(value => {
//     return new Promise(resolve => {
//       resolve(value * 2);
//     });
//   })
//   .then(value => {
//     new Promise(resolve => {
//       resolve(value * 2);
//     });
//   })
//   .then(value => console.log(value));
//
//

//
//
//                          Шпаргалка
//                          --------
//
// 1. Мікро-процеси мають більший пріоритет, ніж макро-процеси.
//
//     * Мікропроцеси:
//      -------------
// - Promise;
// - ResizeObserver;
//
//     * Макропроцеси:
//      -------------
// - setTimeout;
// - setInterval;
// - setImmediate;
// - requestAnimationFrame;
//
// console.log('1');

// setTimeout(() => console.log('2'), 0);

// Promise.resolve('3').then(value => console.log(value));

// console.log('4');

// // 1 -> 4 -> 3 -> 2
//
//

//
//
// console.log('1');

// setTimeout(() => console.log('2'), 10);

// Promise.resolve('3').then(value => console.log(value));

// setTimeout(() => console.log('4'), 0);

// console.log('5');

// // 1 -> 5 -> 3 -> 4 -> 2
//
//

//
//
// console.log('1');

// setTimeout(() => console.log('2'), 10);

// Promise.resolve('3').then(value => console.log(value));

// Promise.reject('4')
//   .then(value => console.log(value))
//   .catch(err => console.log(err));

// Promise.resolve('5').then(value => console.log(value));

// setTimeout(() => console.log('6'), 0);

// console.log('7');

// // 1 -> 7 -> 3 -> 5 -> 4 -> 6 -> 2
//
//

//
//
// console.log('1');

// setTimeout(() => {
//   console.log('2');
//   Promise.resolve('3').then(value => console.log(value));
// }, 10);
// console.log('4');

// // 1 -> 4 -> 2 -> 3
//
//

//
//
// console.log('1');

// setTimeout(() => {
//   console.log('2');
//   Promise.resolve('3').then(value => console.log(value));
// }, 10);

// setTimeout(() => {
//   console.log('4');
//   Promise.resolve('5').then(value => console.log(value));
// }, 5);

// console.log('6');

// // 1 -> 6 -> 4 -> 5 -> 2 -> 3
//
//

//
//
// console.log('1');

// setTimeout(() => {
//   console.log('2');
//   Promise.resolve('3').then(value => console.log(value));
// }, 10);

// setTimeout(() => {
//   console.log('4');
//   Promise.resolve('5').then(value => console.log(value));
// }, 5);

// setTimeout(() => console.log('6'), 5);

// console.log('7');

// // 1 -> 7 -> 4 -> 5 -> 6 -> 2 -> 3
//
//

//
//
// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const val = Math.random();
//     if (val > 0.5) {
//       res('Yeees');
//     } else {
//       rej('Noooo');
//     }
//   }, 1000);
// });

// promise
//   .then(value => {
//     return value + '🎃';
//   })
//   .then(value => {
//     console.log(value, qwerty);
//   })
//   .catch(error => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log('after');
//   });
//
//

//
//
//                          fetch
//                          -----
//
// const promise = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
// console.log(promise);
// promise
//   .then(resp => resp.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
//
//

//
//
//                            Game - promise
//                            --------------
//
// const refs = {
//   startBtn: document.querySelector('.js-start'),
//   container: document.querySelector('.js-container'),
// };

// refs.startBtn.addEventListener('click', onClick);

// function onClick() {
//   const result = [];
//   [...refs.container.children].forEach(box => (box.textContent = ''));
//   [...refs.container.children].forEach((box, i) => {
//     return createPromise(i)
//       .then(smile => {
//         box.textContent = smile;
//         result.push('1');
//       })
//       .catch(smile => (box.textContent = smile))
//       .finally(() => {
//         setTimeout(() => {
//           if (i === refs.container.children.length - 1) {
//             if (!result.length || result.length === 3) {
//               alert('Winner');
//             } else {
//               alert('Lose');
//             }
//           }
//         }, 500);
//       });
//   });
// }

// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();

//       if (random > 0.5) {
//         res('🤑');
//       } else {
//         rej('🥵');
//       }
//     }, 1000 * delay);
//   });
// }

//                          Приклад з Promise.allSettled
//                          ----------------------------
//
// function onClick() {
//   let counter = 0;
//   [...refs.container.children].forEach(box => (box.textContent = ''));
//   const promises = [...refs.container.children].map((_, i) => createPromise(i));
//   Promise.allSettled(promises).then(items => {
//     items.forEach((item, i) => {
//       setTimeout(() => {
//         if (item.status === 'fulfilled') {
//           counter += 1;
//         }
//         refs.container.children[i].textContent = item.value || item.reason;

//         if (i === refs.container.children.length - 1) {
//           setTimeout(() => {
//             if (counter === refs.container.children.length || !counter) {
//               alert('Winner');
//             } else {
//               alert('Lose');
//             }
//           }, 500);
//         }
//       }, i * 1000);
//     });
//   });
// }

// function createPromise() {
//   return new Promise((res, rej) => {
//     const random = Math.random();

//     if (random > 0.5) {
//       res('🤑');
//     } else {
//       rej('🥵');
//     }
//   });
// }
