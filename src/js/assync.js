console.log(333);

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
// 	modal: document.querySelector("#subsription-modal"),
// };
// const modal = new BSN.Modal("#subsription-modal");
// console.log(modal);

// refs.modal.addEventListener("hide.bs.modal", () => {
// 	setTimeout(() => {
// 		console.log("Відкриваємо модалку");
// 		modal.show();
// 	}, PROMPT_DELAY);
// });

// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;

// setTimeout(() => {
// 	console.log("Відкриваємо модалку");
// 	modal.show();
// }, PROMPT_DELAY);
// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
// 	if (promptCounter === MAX_PROMPT_ATTEMPTS) {
// 		console.log("Stopped interval");
// 		clearInterval(intervalId);
// 		return;
// 	}

// 	console.log("Subscribe to the newsletter - " + Date.now());
// 	promptCounter += 1;
// }, PROMPT_DELAY);
