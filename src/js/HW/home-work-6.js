// // //Задача 1. Акаунт користувача
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// // //Задача 2. Склад
// class Storage {
//   #items = [];
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     if (!this.#items.includes(newItem)) {
//       this.#items.push(newItem);
//       return;
//     }
//     console.log(`Такий товар вже є!`);
//   }

//   // 1 спосіб
//   removeItem(itemToRemove) {
//     const foundIdx = this.#items.indexOf(itemToRemove);
//     if (!!~foundIdx) {
//       this.#items.splice(foundIdx, 1);
//     }
//   }

//   // // 2 спосіб
//   // removeItem(itemToRemove) {
//   //   this.#items = this.#items.filter(product => product !== itemToRemove);
//   //   return;
//   // }

//   // // 3 спосіб
//   // removeItem(itemToRemove) {
//   //   if (!this.#items.includes(itemToRemove)) {
//   //     return;
//   //   }
//   //   this.#items.forEach((item, index) => {
//   //     if (item === itemToRemove) {
//   //       this.#items.splice(index, 1);
//   //     }
//   //   });
//   // }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem('Scaner');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// // //Задача 3. Конструктор рядків
// class StringBuilder {
//   #value = '';
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
