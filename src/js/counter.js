// 						Counter
// 						-----
//                      HTML
//                      ---
//
// <!-- Counter -->
// <div id="counter1">
// 	<button data-increment>+</button>
// 	<spam data-value>0</spam>
// 	<button data-decrement>-</button>
// </div>
// <div id="counter2">
// 	<button data-increment>+</button>
// 	<spam data-value>0</spam>
// 	<button data-decrement>-</button>
// </div>
//

//
//                          JS
//                          --
//

// const CounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
// 	this._value = initialValue;
// 	this._step = step;

// 	this._refs = this._getRefs(rootSelector);
// 	this._bindEvents();
// 	this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
// 	const refs = {};

// 	refs.container = document.querySelector(rootSelector);
// 	refs.incrementBtn = refs.container.querySelector("[data-increment]");
// 	refs.decrementBtn = refs.container.querySelector("[data-decrement]");
// 	refs.value = refs.container.querySelector("[data-value]");

// 	return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
// 	this._refs.incrementBtn.addEventListener("click", () => {
// 		// console.log("CounterPlugin.prototype._bindEvents -> this", this);
// 		this.increment();
// 		this.updateValueUI();
// 	});

// 	this._refs.decrementBtn.addEventListener("click", () => {
// 		// console.log("CounterPlugin.prototype._bindEvents -> this", this);
// 		this.decrement();
// 		this.updateValueUI();
// 	});
// };

// CounterPlugin.prototype.updateValueUI = function () {
// 	this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype.increment = function () {
// 	this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
// 	this._value -= this._step;
// };
// // CounterPlugin.increment(10);
// // console.log(CounterPlugin);

// const counter1 = new CounterPlugin({ rootSelector: "#counter1", step: 10, initialValue: 100 });
// console.log("counter1 -> ", counter1);
// // counter1.increment();
// // counter1.increment();
// // counter1.increment();
// // counter1.decrement();
// // counter1.decrement();
// // counter1.decrement();
// // counter1.decrement();
// // console.log(counter);
// // const btnInc = document.querySelector(".btn-inc");
// // const btnDec = document.querySelector(".btn-dec");
// // const jsValue = document.querySelector(".js-value");
// // btnInc.addEventListener("click", counter.increment());
// // btnDec.addEventListener("click", counter.decrement());
// const counter2 = new CounterPlugin({ rootSelector: "#counter2", step: 1 });
// console.log("counter2 -> ", counter2);
