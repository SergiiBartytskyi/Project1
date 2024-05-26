// / 'https://github.com/typicode/json-server'
// const BASE_URL = 'http://localhost:4040/books';

//                                  GET
//                                  ---
//
// function fetchBooks() {
//   return fetch('http://localhost:4040/books').then(res => res.json());
// }

// function fetchBooksById(bookId) {
//   return fetch(`http://localhost:4040/books/${bookId}`).then(res => res.json());
// }

//                              POST
//                              ----
//
// const newBook = {
//   title: 'Test book2',
//   author: 'I',
//   genres: ['JS'],
//   rating: 9.9,
// };

// const newBook2 = {
//   title: 'Test book3',
//   author: 'I',
//   genres: ['JS'],
//   rating: 8,
// };

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(BASE_URL, options).then(res => res.json());
// }

// addBook(newBook);
// addBook(newBook2).then(renderBook);

// function renderBook(book) {
//   console.log('Answer from backend');
//   console.log(book);
// }

//                              PATCH
//                              -----
//

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/${bookId}`, options).then(res => res.json());
// }

// updateBookById({ title: 'Big Test Book N3' }, 'c072');
// updateBookById({ title: 'Test book N1', author: 'Me' }, '146d');

//                                  DELETE
//                                  ------
//
// function removeBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/${bookId}`, options).then(res => res.json());
// }

// removeBook('fbc5');
// removeBook('6adb');
//
//

//
//
//                       Async  //  await
//                      -----------------
//
// async function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝',
//     apple: '🍎',
//   };

//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve(fruits[name]), 500)
//   );
//   //   return new Promise((resolve, reject) =>
//   //     setTimeout(() => reject(fruits[name]), 500)
//   //   );
// }

// async function aMakeSmoothie() {
//   console.time('aMakeSmoothie');
//   const apple = await getFruit('apple');
//   console.log(apple);

//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);
//   console.timeEnd('aMakeSmoothie');
// }
// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const strawberry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, strawberry]);
//     console.log(fruits);
//     console.timeEnd('aMakeSmoothie');

//     return fruits;
//   } catch (error) {
//     console.log(error);
//   }
// }

// aMakeSmoothie().then(fruits => console.log(fruits));
//
//

//
//
//                          Refactoring
//                          -----------
//
// const BASE_URL = 'http://localhost:4040/books';

// async function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   const response = await fetch(BASE_URL, options);
//   const newBook = await response.json();
//   return newBook;
// }

// async function fetchBooks() {
//   const response = await fetch(BASE_URL);
//   const books = await response.json();
//   return books;
// }

// async function fetchBooksDyId(bookId) {
//   const response = await fetch(`${BASE_URL}/${bookId}`);
//   const book = await response.json();
//   return book;
// }

// async function removeBook(bookId) {
//   const url = `${BASE_URL}/${bookId}`;
//   const options = {
//     method: 'DELETE',
//   };

//   const response = await fetch(url, options);
//   const book = await response.json();
//   return book;
// }

// async function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   const response = fetch(`${BASE_URL}/${bookId}`, options);
//   const book = await response.json();
//   return book;
// }

// async function addAndRenderBook() {
//   try {
//     const book = addBook({});
//     console.log(book);
//   } catch (error) {
//     console.log(error);
//   }
// }
//
//

//
//
//                              Рисіч
//                              -----
//
//
// Задача 1. Імена користувачів
// const getUserNames = users => users.map(({ name }) => name);
// console.log(
//   getUserNames([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       balance: 2811,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       balance: 3821,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       balance: 3793,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       balance: 2278,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       balance: 3951,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       balance: 1498,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Задача 2. Користувачі з другом
// const getUsersWithFriend = (users, friendName) =>
//   users.filter(({ friends }) => friends.includes(friendName));
// const allUsers = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
//   {
//     name: 'Elma Head',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//   },
//   {
//     name: 'Carey Barr',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//   },
//   {
//     name: 'Blackburn Dotson',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

// Задача 3. Сортування за кількістю друзів
// const sortByDescendingFriendCount = users =>
//   users.toSorted(({ friends: a }, { friends: b }) => b.length - a.length);
// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: 'Moore Hensley',
//       friends: ['Sharron Pace'],
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       gender: 'female',
//     },
//   ])
// );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male"
// //   }
// // ]

// Задача 4. Загальний баланс
// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(({ gender: userGender }) => userGender === gender)
//     .reduce((acc, { balance }) => acc + balance, 0);

// const clients = [
//   {
//     name: 'Moore Hensley',
//     gender: 'male',
//     balance: 2811,
//   },
//   {
//     name: 'Sharlene Bush',
//     gender: 'female',
//     balance: 3821,
//   },
//   {
//     name: 'Ross Vazquez',
//     gender: 'male',
//     balance: 3793,
//   },
//   {
//     name: 'Elma Head',
//     gender: 'female',
//     balance: 2278,
//   },
//   {
//     name: 'Carey Barr',
//     gender: 'male',
//     balance: 3951,
//   },
//   {
//     name: 'Blackburn Dotson',
//     gender: 'male',
//     balance: 1498,
//   },
//   {
//     name: 'Sheree Anthony',
//     gender: 'female',
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, 'male')); // 12053

// console.log(getTotalBalanceByGender(clients, 'female')); // 8863
