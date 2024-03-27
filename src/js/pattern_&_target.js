//                          Спливання подій
//                          --------------
//

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", e => {
// 	console.log(e.currentTarget);
// 	console.log(e.target);
// 	console.log("Parent click handler");
// });

// child.addEventListener("click", e => {
// 	console.log(e.currentTarget);
// 	console.log(e.target);
// 	console.log("Child click handler");
// });

// descendant.addEventListener("click", e => {
// 	console.log(e.currentTarget);
// 	console.log(e.target);
// 	console.log("Descendant click handler");
// });

//
//
// const parent = document.querySelector("#parent");
//
// parent.addEventListener("click", event => {
// 	console.log("event.target: ", event.target);
// 	console.log("event.currentTarget: ", event.currentTarget);
// });
//
//

//
//
//                          Припинення спливання
//                            stopPropagation()
//                          --------------------
//

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
// 	alert("Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!");
// });

// child.addEventListener("click", () => {
// 	alert("Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!");
// });

// descendant.addEventListener("click", event => {
// 	// event.stopPropagation();
// 	event.stopImmediatePropagation();
// 	alert("Descendant click handler");
// });
//
//

//
//                          stopImmediatePropagation()
//                              ---------------------
//
// Він не тільки запобігає спливанню, але й зупиняє обробку подій на поточному елементі.
//
//

//
//
//                          Делегування подій
//                          -----------------
//
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
// 	if (event.target.nodeName !== "BUTTON") {
// 		return;
// 	}

// 	const selectedColor = event.target.dataset.color;
// 	output.textContent = `Selected color: ${selectedColor}`;
// 	output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
// 	const items = [];
// 	for (let i = 0; i < 60; i++) {
// 		const color = getRandomHexColor();
// 		const item = document.createElement("button");
// 		item.type = "button";
// 		item.dataset.color = color;
// 		item.style.backgroundColor = color;
// 		item.classList.add("item");
// 		items.push(item);
// 	}
// 	colorPalette.append(...items);
// }

// function getRandomHexColor() {
// 	const letters = "0123456789ABCDEF";
// 	let color = "#";

// 	for (let i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}

// 	return color;
// }
//
//

//
//
//                              Throttle і Debounce
//                              -------------------
//
// const output = document.querySelector(".output");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {
// 	scrollEventCounter += 1;
// 	output.textContent = scrollEventCounter;
// });

//
//                                      Lodash
//                          https://cdnjs.com/libraries/lodash.js
//
//
// const result = _.add(5, 3);
// console.log(result); // 5
//
//

//
//
//                                  Throttle
//                                  -------
//
// Прийом throttle контролює кількість разів, яку функція може бути викликана протягом певного проміжку часу.
//
// document.addEventListener(
// 	"scroll",
// 	_.throttle(() => {
// 		console.log("Scroll handler call every 300ms");
// 	}, 300),
// );
//
//

//
//
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
// 	vanilla: 0,
// 	throttled: 0,
// };

// document.addEventListener("scroll", () => {
// 	eventCounter.vanilla += 1;
// 	vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
// 	"scroll",
// 	_.throttle(() => {
// 		eventCounter.throttled += 1;
// 		throttledOutput.textContent = eventCounter.throttled;
// 	}, 500),
// );
//
//

//
//
//                          Debounce
//                          ---------
//
// document.addEventListener(
// 	"scroll",
// 	_.debounce(() => {
// 		console.log("Scroll handler call after 300ms pause");
// 	}, 300),
// );
//
//

//
//
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
// 	vanilla: 0,
// 	throttled: 0,
// 	debounced: 0,
// };

// document.addEventListener("scroll", () => {
// 	eventCounter.vanilla += 1;
// 	vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
// 	"scroll",
// 	_.throttle(() => {
// 		eventCounter.throttled += 1;
// 		throttledOutput.textContent = eventCounter.throttled;
// 	}, 300),
// );

// document.addEventListener(
// 	"scroll",
// 	_.debounce(() => {
// 		eventCounter.debounced += 1;
// 		debouncedOutput.textContent = eventCounter.debounced;
// 	}, 300),
// );
//
//

//
//
//                          Режими методу debounce
//                          ---------------------
//
// За замовчуванням метод debounce працює у режимі, коли функція викликається через N мілісекунд після паузи між
//  потоками подій.Цей режим називається trailing edge(в кінці)
//
// Існують завдання, коли функцію потрібно викликати відразу під час настання першої події в потоці, а потім
// ігнорувати усі наступні події до паузи між ними, наприклад, - 300 мілісекунд.На старті наступного потоку подій
// ця поведінка повторюється.Такий режим називається leading edge(на початку).
//
// Методу debounce бібліотеки Lodash можна передати необов'язковий третій аргумент - об'єкт параметрів, який
// містить дві властивості leading(за замовчуванням false) і trailing(за замовчуванням true).Ці налаштування
// змінюють режим і вказують, чи повинна функція запускатися на початку потоку подій або в кінці після паузи.

// document.addEventListener(
// 	"scroll",
// 	_.debounce(
// 		() => {
// 			console.log("Scroll handler call on every event stream start");
// 		},
// 		300,
// 		{
// 			leading: true,
// 			trailing: false,
// 		},
// 	),
// );

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const trailingOutput = document.querySelector(".output.trailing");
// const leadingOutput = document.querySelector(".output.leading");
// const eventCounter = {
// 	vanilla: 0,
// 	throttled: 0,
// 	trailing: 0,
// 	leading: 0,
// };

// // Trailing debounce
// document.addEventListener(
// 	"scroll",
// 	_.debounce(() => {
// 		eventCounter.trailing += 1;
// 		trailingOutput.textContent = eventCounter.trailing;
// 	}, 300),
// );

// // Leading debounce
// document.addEventListener(
// 	"scroll",
// 	_.debounce(
// 		() => {
// 			eventCounter.leading += 1;
// 			leadingOutput.textContent = eventCounter.leading;
// 		},
// 		300,
// 		{ trailing: false, leading: true },
// 	),
// );

// document.addEventListener("scroll", () => {
// 	eventCounter.vanilla += 1;
// 	vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
// 	"scroll",
// 	_.throttle(() => {
// 		eventCounter.throttled += 1;
// 		throttledOutput.textContent = eventCounter.throttled;
// 	}, 300),
// );
//
//

//
//
//                                      Відкладене завантаження (lazy-loading)
//                                      -----------------------------------
//
//                                      Атрибут loading
//                                      -------------
//
//          <img src="my-image.jpg" loading="lazy" alt="Image description" />;
//
// Підтримує три значення:

// lazy - браузер виконає відкладене завантаження зображення.
// eager - зображення буде завантажене за першої нагоди, тобто без відкладеного завантаження.
// auto - браузер сам визначає - виконувати відкладене завантаження чи ні. Значення за замовчуванням.
//
//

//
//
//                          Бібліотека lazysizes
//                          -------------------
//
//                      https://afarkas.github.io/lazysizes/index.html
//
// Усім зображенням, які необхідно завантажувати відкладено, задаємо клас lazyload і замінюємо атрибут src
// на data - src.Це необхідно бібліотеці lazysizes для правильної роботи.

// <img class="lazyload" data-src="path/to/my-image.jpg" alt="Generic alt" />
//
// Доки зображення завантажується можна показувати заповнювач низької якості.Ця техніка називається
// LQIP(Low Quality Image Placeholder).Існує багато варіантів реалізації LQIP, але для початку достатньо
// буде показувати один стандартний заповнювач, замість усіх зображень.Для цього додаємо атрибут src,
// значенням якого буде посилання на це зображення - заповнювач.

// index.html
//   class="lazyload"
//   src="path/to/lqip-placeholder.jpg"
//   data-src="path/to/my-image.jpg"
//   alt="Generic alt"
// />
//
// Коли зображення було завантажене, бібліотека lazysizes додає елементу клас lazyloaded.Це можна
// використовувати для застосування CSS - ефектів в момент завантаження зображення.

// styles.css
// .blur-up {
//   filter: blur(5px);
//   transition: filter 400ms;
// }

// .blur-up.lazyloaded {
//   filter: blur(0);
// }

// Після оголошення стилів, додаємо клас blur-up тегам <img>.

// index.html
// <img
//   class="lazyload blur-up"
//   src="path/to/lqip-placeholder.jpg"
//   data-src="path/to/my-image.jpg"
//   alt="Generic alt"
// />
//
//

//

//
//
//                                   Репета
//                                  --------
//
//                                  Делегування
//                                  ----------
//
// const container = document.querySelector(".js-container");

// container.addEventListener("click", onClick);

// function onClick(e) {
// 	// console.log(e.target.textContent);
// 	if (e.target.nodeName !== "BUTTON") {
// 		return;
// 	}
// 	console.log(e.target.nodeName);
// 	// console.log(e);
// }
// const addBtn = document.querySelector(".js-add-btn");
// let labelCounter = 6;

// addBtn.addEventListener("click", onAddBtnClick);

// function onAddBtnClick() {
// 	const btn = document.createElement("button");
// 	btn.textContent = `Button ${labelCounter}`;
// 	btn.type = "button";

// 	container.appendChild(btn);
// 	labelCounter += 1;
// }
//
//

//
//
//                                  Task. Tags
//                                  ----------
//
// const tagsContainer = document.querySelector(".js-tags");
// tagsContainer.addEventListener("click", onTagsContainerClock);

//                              Пошук по одному тегу зі всіх
//
// function onTagsContainerClock(e) {
// 	if (e.target.nodeName !== "BUTTON") {
// 		return;
// 	}
// 	// console.log(e.target);
//
// 	const currentActiveBtn = document.querySelector(".tags__btn--active");
// 	// if (currentActiveBtn) {
// 	// 	currentActiveBtn.classList.remove("tags__btn--active");
// 	// }
// 	// або
// 	currentActiveBtn?.classList.remove("tags__btn--active");
//
// 	e.target.classList.add("tags__btn--active");
// 	console.log(e.target.dataset.value);
// }
//
//

//
//
// //                                Пошук по декільком тегам
//
// function onTagsContainerClock(e) {
// 	if (e.target.nodeName !== "BUTTON") {
// 		return;
// 	}
//
// 	e.target.classList.toggle("tags__btn--active");
//
// 	const isActive = e.target.classList.contains("tags__btn--active");
// 	if (isActive) {
// 		console.log(e.target.dataset.value);
// 	}
// }
//
//

//
//
//                          Пошук по декільком тегам з використанням Set()
//
// const selectedTags = new Set();
//
// function onTagsContainerClock(e) {
// 	if (e.target.nodeName !== "BUTTON") {
// 		return;
// 	}
// 	e.target.classList.toggle("tags__btn--active");
//
// 	const isActive = e.target.classList.contains("tags__btn--active");
// 	if (!isActive) {
// 		selectedTags.delete(e.target.dataset.value);
// 	} else {
// 		selectedTags.add(e.target.dataset.value);
// 	}
//
// 	console.log(selectedTags);
// }
//
//

//
//
//                      Task. Colorpicker
//                      ----------------
//
// const colors = [
// 	{ hex: "#f44336", rgb: "244,67,54" },
// 	{ hex: "#e91e63", rgb: "233,30,99" },
// 	{ hex: "#9c24b0", rgb: "156,39,176" },
// 	{ hex: "#673ab7", rgb: "103,58,183" },
// 	{ hex: "#3f51b5", rgb: "63,81,181" },
// 	{ hex: "#2196f3", rgb: "33,150,243" },
// 	{ hex: "#00bcd4", rgb: "0,188,212" },
// 	{ hex: "#009688", rgb: "0,150,136" },
// 	{ hex: "#4caf50", rgb: "76,175,80" },
// 	{ hex: "#ffeb3b", rgb: "255,235,59" },
// 	{ hex: "#ff9800", rgb: "2255,152,0" },
// 	{ hex: "#795548", rgb: "121,85,72" },
// 	{ hex: "#607d8b", rgb: "96,125,139" },
// ];

// function createColorCardsMarkup(colors) {
// 	return colors
// 		.map(({ hex, rgb }) => {
// 			return `<div class="color-card">
// 					<div class="color-swatch" data-hex="${hex}" data-rgb="${rgb}" style="background-color: ${hex}"></div>
// 					<div class="color-meta"><p>HEX: ${hex}</p><p>RGB: ${rgb}</p></div>
// 				</div>`;
// 		})
// 		.join("");
// }
// // console.log(createColorCardsMarkup(colors));
// // const markup = `<div class="color-card">
// // 					<div class="color-swatch" data-hex="#955014" data-rgb="149,80,20" style="background-color: #955014"></div>
// // 					<div class="color_meta"><p>HEX: #955014</p><p>RGB: 149,80,20</p></div>
// // 				</div>`;

// const paletteContainer = document.querySelector(".js-palette");
// paletteContainer.insertAdjacentHTML("beforeend", createColorCardsMarkup(colors));
// paletteContainer.addEventListener("click", onPaletteContainerClick);
// // Всі зі всіх
// // function onPaletteContainerClick(e) {
// // 	const swatchEL = e.target;
// // 	const isColorSwatchEL = swatchEL.classList.contains("color-swatch");
// // 	if (!isColorSwatchEL) {
// // 		return;
// // 	}

// // 	// const parentColorCard = swatchEL.parentNode;
// // 	const parentColorCard = swatchEL.closest(".color-card");
// // 	parentColorCard.classList.add("is-active");
// // }

// // Одна зі всіх
// function onPaletteContainerClick(e) {
// 	const swatchEL = e.target;
// 	const isColorSwatchEL = swatchEL.classList.contains("color-swatch");
// 	if (!isColorSwatchEL) {
// 		return;
// 	}

// 	// виносимо в окрему ф-ю
// 	// const currentActiveCard = document.querySelector(".color-card.is-active");
// 	// 	if (currentActiveCard) {
// 	// 		currentActiveCard.classList.remove("is-active");
// 	// 	}
// 	removeActiveCardClass();

// 	const parentColorCard = swatchEL.closest(".color-card");

// 	// виносимо в окрему ф-ю
// 	// parentColorCard.classList.add("is-active");
// 	addActiveCardClass(parentColorCard);

// 	// виносимо в окрему ф-ю
// 	//  document.body.style.backgroundColor = swatchEL.dataset.hex;
// 	setBodyBgColor(swatchEL.dataset.hex);
// }

// function setBodyBgColor(color) {
// 	document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
// 	const currentActiveCard = document.querySelector(".color-card.is-active");
// 	if (currentActiveCard) {
// 		currentActiveCard.classList.remove("is-active");
// 	}
// }

// function addActiveCardClass(card) {
// 	card.classList.add("is-active");
// }
//
//

//
//
//                              Task. Filter
//                              -----------
//
// const tech = [
// 	{ label: "HTML" },
// 	{ label: "CSS" },
// 	{ label: "JavaScript" },
// 	{ label: "Node.js" },
// 	{ label: "React" },
// 	{ label: "Vue" },
// 	{ label: "Next.js" },
// 	{ label: "Mobx" },
// 	{ label: "Redux" },
// 	{ label: "React Router" },
// 	{ label: "GraphQL" },
// 	{ label: "PostgreSQL" },
// 	{ label: "MongoDB" },
// ];

// const refs = {
// 	list: document.querySelector(".js-list"),
// 	input: document.querySelector("#filter"),
// };

// refs.input.addEventListener("input", _.debounce(onFilterChange, 300));
// const listItemsMarkup = createListIttemsMarkup(tech);
// populateList(listItemsMarkup);

// function createListIttemsMarkup(items) {
// 	return items.map(item => `<li>${item.label}</li>`).join("");
// }

// function onFilterChange(e) {
// 	const filter = e.target.value.toLowerCase();

// 	const filtredItems = tech.filter(t => t.label.toLowerCase().includes(filter));
// 	const listItemsMarkup = createListIttemsMarkup(filtredItems);
// 	populateList(listItemsMarkup);
// }

// function populateList(markup) {
// 	refs.list.innerHTML = markup;
// }
//
//

//
//
//                                  Task. Ліниве завантаження зображень
//                                  -----------------------------------
//
// const lazyImages = document.querySelectorAll('img[loading="lazy"]');
// console.log(lazyImages);

// lazyImages.forEach(image => {
// 	image.addEventListener("load", onImageLoaded, { once: true });
// });

// function onImageLoaded(e) {
// 	console.log(e.target);
// 	console.log("Image uploaded");
// 	e.target.classList.add("appear");
// }
//
//

//
//
//                      FicherDetection
//               (виявлення можливостей браузера)
//
//
// Якщо браузер підтримує нативно lazy images - то виконується if і брауз.все робить сам.
// А якщо не підтримує, то виконується else і ств. script підключення бібліотеки.

// if ("loading" in HTMLImageElement.prototype) {
// 	console.log("Browser support lazyload");
// 	addSrcAttrToLazyImages();
// } else {
// 	console.log("Browser not support lazyload");
// 	addLazySizesScript();
// }

// const lazyImages = document.querySelectorAll("img[data-src]");
// console.log(lazyImages);

// lazyImages.forEach(image => {
// 	image.addEventListener("load", onImageLoaded, { once: true });
// });

// function onImageLoaded(e) {
// 	console.log(e.target);
// 	console.log("Image uploaded");
// 	e.target.classList.add("appear");
// }
// //
// //
// function addLazySizesScript() {
// 	const script = document.createElement("script");
// 	script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
// 	script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
// 	script.crossorigin = "anonymous";
// 	script.referrerpolicy = "no-referrer";

// 	document.body.appendChild(script);
// }

// function addSrcAttrToLazyImages() {
// 	const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// 	lazyImages.forEach(img => {
// 		img.src = img.dataset.src;
// 	});
// }
//
//

//
//
// 								Рисіч
//
//
// const cont = document.querySelector(".js-container");
// cont.addEventListener("click", onClick);
// // [...cont.children].forEach(item => item.addEventListener("click", onClick));

// function onClick(e) {
// 	// console.log(e.currentTarget.dataset.color);
// 	if (!e.target.classList.contains("js-box")) {
// 		return;
// 	}
// 	console.log(e.target.dataset.color);
// }
//
//

//
//
// 								Хрестики-нулики
// 								---------------
//
//
// const container = document.querySelector(".js-content");
// let player = "X";
// let historyX = [];
// let historyO = [];

// const wins = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[3, 6, 9],
// 	[1, 5, 9],
// 	[3, 5, 7],
// ];

// function createMarkup() {
// 	let markup = "";
// 	for (let i = 1; i < 10; i += 1) {
// 		markup += `<div class="item js-item" data-id="${i}"></div>`;
// 	}

// 	container.innerHTML = markup;
// }
// createMarkup();

// container.addEventListener("click", onclick);

// function onclick(e) {
// 	const { target } = e;
// 	if (!target.classList.contains("js-item") || target.textContent) {
// 		return;
// 	}

// 	const id = Number(target.dataset.id);
// 	let result = false;

// 	if (player === "X") {
// 		historyX.push(id);
// 		result = isWinner(historyX);
// 	} else {
// 		historyO.push(id);
// 		result = isWinner(historyO);
// 	}

// 	target.textContent = player;

// 	const isEndGame = historyX.length + historyO.length === 9;

// 	if (result) {
// 		console.log(`WINNER ${player}`);
// 		resetGame();
// 		return;
// 	} else if (isEndGame) {
// 		console.log(`DRAW. Try again!`);
// 		resetGame();
// 		return;
// 	}

// 	player = player === "X" ? "O" : "X";
// }

// function isWinner(arr) {
// 	return wins.some(item => item.every(id => arr.includes(id)));
// }

// function resetGame() {
// 	createMarkup();
// 	historyX = [];
// 	historyO = [];

// 	player = "X";
// }
//
//

//
//
//
// const cars = [
// 	{
// 		id: 1,
// 		car: "Honda",
// 		model: "Civic",
// 		price: 12000,
// 		img: "https://motormag.pl/wp-content/uploads/2022/03/honda-civic-type-r-2020.jpg.webp",
// 	},
// 	{
// 		id: 2,
// 		car: "Audi",
// 		model: "Q7",
// 		price: 40000,
// 		img: "https://media.ed.edmunds-media.com/audi/q7/2022/oem/2022_audi_q7_4dr-suv_prestige_fq_oem_1_1280.jpg",
// 	},
// 	{
// 		id: 3,
// 		car: "BMW",
// 		model: "5 series",
// 		price: 50000,
// 		img: "https://upload.wikimedia.org/wikipedia/commons/5/52/BMW_G30_FL_IMG_5351.jpg",
// 	},
// 	{
// 		id: 4,
// 		car: "Honda",
// 		model: "Accord",
// 		price: 20000,
// 		img: "https://hips.hearstapps.com/hmg-prod/images/dsc01432-1677186780.jpg?crop=0.534xw:0.601xh;0.197xw,0.318xh&resize=768:*",
// 	},
// 	{
// 		id: 5,
// 		car: "Mercedes",
// 		model: "S class",
// 		price: 70000,
// 		number: "+48123456789",
// 		img: "https://www.topgear.com/sites/default/files/2022/03/1-Mercedes-S-Class-plug-in.jpg",
// 	},
// 	{
// 		id: 6,
// 		car: "Toyota",
// 		model: "Camry",
// 		price: 45000,
// 		img: "https://scene7.toyota.eu/is/image/toyotaeurope/CAM0001a_21-2:Medium-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
// 	},
// ];

// const container = document.querySelector(".js-container");
// const markup = cars
// 	.map(
// 		({ img, car, model, id }) => `<li class="js-target js-card" data-id="${id}">
// 			<img class="js-target" src="${img}" alt="${car}" width=200 height=150>
// 			<h2 class="js-target">${car} ${model}</h2>
// 		</li>`,
// 	)
// 	.join("");

// container.innerHTML = markup;

// container.addEventListener("click", onClick);

// function onClick(e) {
// 	const image = e.target;

// 	if (!image.classList.contains("js-target")) {
// 		return;
// 	}

// 	const carId = image.dataset.id ?? image.closest(".js-card").dataset.id;

// 	const currentItem = cars.find(({ id }) => id === Number(carId));
// 	console.log(currentItem);
// 	const instance = basicLightbox.create(`
// 	<div>
// 			<img src="${currentItem.img}" alt="${currentItem.car}" width="800" height="600">
// 			<h2>${currentItem.car}</h2>
// 			<h3>${currentItem.model}</h3>
// 			<p>${currentItem.price}</p>
// 		</div>
// 		`);

// 	instance.show();

// 	document.addEventListener("keydown", onClose);

// 	function onClose(e) {
// 		if (e.code === "Escape") {
// 			instance.close();
// 			console.log(e.code);
// 		}
// 		document.removeEventListener("keydown", onClose);
// 	}
// }
//
//

//
//
// 							throttle & debounce
// 							-------------------
//
// const input = document.querySelector("input");
// const PASSWORD_LENGTH = 7;
// input.addEventListener("input", _.debounce(onSearch, 800));
// function onSearch(e) {
// 	// console.log(e.currentTarget.value); // не використ currentTarget з throttle або debounce
// 	if (e.target.value.trim().length < PASSWORD_LENGTH) {
// 		e.target.classList.remove("invalid");
// 		e.target.classList.add("valid");
// 	} else {
// 		e.target.classList.remove("valid");
// 		e.target.classList.add("invalid");
// 	}
// 	// console.log(e.target.value);
// }
//
//

//
//
// 							Cats
// 							----
//
// const cats = [
// 	"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
// 	"https://headsupfortails.com/cdn/shop/articles/Cat_s_Mind_x630.jpg?v=1624444348",
// 	"https://us.feliway.com/cdn/shop/articles/7_Reasons_Why_Humans_Cats_Are_A_Match_Made_In_Heaven-9.webp?v=1667409797",
// 	"https://natusan.co.uk/cdn/shop/articles/natusan-blog-how-cat-years-work-header.jpg?v=1674474680",
// 	"https://hips.hearstapps.com/hmg-prod/images/close-up-of-red-cat-curled-up-sleeping-in-bed-royalty-free-image-1669567526.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
// 	"https://www.purina.co.nz/sites/default/files/styles/ttt_image_510/public/2020-11/Hero-Small-Mobile-cats.jpg?itok=hEnG1ehe",
// 	"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/%D0%A4%D0%BE%D1%82%D0%BE_%D0%BA%D1%83%D0%BD%D0%BE%D0%B2.jpg/1200px-%D0%A4%D0%BE%D1%82%D0%BE_%D0%BA%D1%83%D0%BD%D0%BE%D0%B2.jpg",
// 	"https://lapkins.ru/upload/iblock/dd6/dd6243954bee36fe1667bb49b3f6848f.jpg",
// 	"https://mnvet.ru/wp-content/uploads/2019/11/16086.p3h6hc.300-289x300.jpg",
// 	"https://rsute.ru/wp-content/uploads/2021/06/4-1.jpeg",
// ];

// const list = document.querySelector(".js-list");
// const markup = cats
// 	.map(
// 		cat =>
// 			`<li><img src="${cat}" alt="cat" width="700" height="400" loading="lazy"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perspiciatis maiores aliquid deleniti fugit mollitia quaerat ratione corporis, temporibus tenetur! Sint corrupti dolor officia animi placeat magnam fuga dolorum quod culpa consequuntur! Iusto inventore labore delectus, velit quis dolorem aliquid perferendis accusamus! Ea sapiente, nulla dolorem odit possimus alias sunt rerum ad, temporibus, recusandae cupiditate perspiciatis ducimus animi cumque architecto accusamus officia delectus at enim incidunt optio voluptatum? Ex nesciunt nisi, facilis alias, magni nulla quaerat quia reprehenderit possimus accusamus impedit a officia dicta exercitationem similique, quam magnam! Impedit distinctio at deleniti quae tempora voluptatibus voluptates. Consectetur reiciendis, labore expedita eligendi, atque aperiam repellendus suscipit tempore, nihil vero temporibus. Ab, soluta earum! Ut quo ullam adipisci in a? Voluptatibus laudantium non impedit, ea nam voluptatem magnam, inventore perferendis error vitae dolorem molestias? Fugiat nihil aut reprehenderit, ut repellat illum magnam explicabo. Tempora ratione rerum temporibus? Asperiores aspernatur fugit explicabo, praesentium dignissimos quas expedita adipisci molestias, suscipit amet ipsam beatae cumque sunt? Nulla nemo quae blanditiis reprehenderit, sit numquam minima incidunt autem, enim obcaecati quod! Qui eaque facilis ipsa quibusdam ad quod unde eos voluptates blanditiis. Corporis consectetur ea magnam error atque? Odio fugit perferendis assumenda facere doloribus, nemo asperiores dolores sit, deleniti a magnam veniam reprehenderit dignissimos sequi quidem recusandae voluptate vel repellendus obcaecati tempore est, doloremque praesentium. Eaque voluptatem sunt nisi id fugit velit similique quisquam aperiam. Deserunt dignissimos enim reiciendis, tempora distinctio quasi, et debitis impedit ex asperiores ratione laboriosam incidunt hic quae vitae dolorem eius assumenda reprehenderit. Magnam molestias consequatur odit fugiat accusamus dignissimos dolor adipisci nulla libero architecto dolorum omnis, natus rerum quia veritatis dolores ducimus blanditiis animi. Vel nulla mollitia maxime ullam dolorum ipsum placeat suscipit ipsa! Minus natus maiores nesciunt! Id, repellat tenetur nostrum laboriosam officiis ipsa enim totam quae eligendi, excepturi corrupti quisquam quidem animi modi assumenda molestias numquam? Maiores odio a vero, modi eveniet, corporis quibusdam, aliquid nemo sunt dignissimos obcaecati quia reprehenderit. Dignissimos eaque similique doloremque! Error aperiam blanditiis dolorum eaque? Aliquam iusto dolorum, doloribus voluptatum dolor deleniti nostrum facilis delectus? Laboriosam qui nam accusamus iste cumque repellendus consectetur amet neque! Ex soluta earum incidunt eum architecto pariatur eius rerum voluptatibus deleniti, beatae iusto voluptate vel sunt itaque aperiam id harum quo! Repellendus assumenda ullam magnam illum. Necessitatibus modi et minima! Nisi modi hic quam magnam libero voluptatum voluptates alias animi nihil aliquid est vero deleniti, quibusdam odit expedita neque tenetur.</p></li>`,
// 	)
// 	.join("");
// list.innerHTML = markup;
//
//

//
//
//                                  Task 1
//                                  ------
//
// Створити ф-я, яка приймає 1 параметр - масив продуктів, і повертає мутований масив.
// Потрібно перебрати масив і якщо він має обєкти в яких дублюються id,  то quantity цих об.
// потрібно сплюсувати, а ті об. id яких співпав - видалити з масиву.
// Потрібно мутувати масив, ств. новий не потрібно.
//
// const products = [
// 	{
// 		id: "sku1",
// 		qty: 1,
// 	},
// 	{
// 		id: "sku2",
// 		qty: 2,
// 	},
// 	{
// 		id: "sku3",
// 		qty: 3,
// 	},
// 	{
// 		id: "sku1",
// 		qty: 6,
// 	},
// 	{
// 		id: "sku1",
// 		qty: 8,
// 	},
// 	{
// 		id: "sku2",
// 		qty: 19,
// 	},
// 	{
// 		id: "sku4",
// 		qty: 1,
// 	},
// ];

// function sortProduct(arr) {
// 	for (let i = 0; i < arr.length; i += 1) {
// 		// console.log("поточний", arr[i]);
// 		for (let j = i + 1; j < arr.length; j += 1) {
// 			if (arr[i].id === arr[j].id) {
// 				// console.log("наступний", arr[j]);
// 				arr[i].qty += arr[j].qty;
// 				arr.splice(j, 1);
// 				j -= 1;
// 			}
// 		}
// 	}
// }
// sortProduct(products);
// console.log(products);
//
//

//
//
//                              Task 2.
//                              --------
//
// 1. Ств. ф-ю, яка буде приймати 2 параметри:
//  1- масив;
//  2- назва книги.
//Ф-я повертає імена юзерів (формат string) в яких є ця книга ("Harry Potter") //'Anna, Oleksii'
//
// 2. Порахувати вік всіх юзеріву яких є ключ age.
//
// const friends = [
// 	{
// 		name: "Anna",
// 		books: ["Bible", "Harry Potter"],
// 		age: 21,
// 	},
// 	{
// 		name: "Bob",
// 		books: ["War and peace", "Romeo and Juliet"],
// 		age: 26,
// 	},
// 	{
// 		name: "Alice",
// 		books: ["War and peace", "Romeo and Juliet"],
// 	},
// 	{
// 		name: "Oleksii",
// 		books: ["Bible", "War and peace", "Romeo and Juliet", "Harry Potter"],
// 		age: 26,
// 	},
// ];
// //
// function findBook(arr, book) {
// 	arr.map(({ name, books }) => {
// 		if (books.includes(book)) {
// 			console.log(name);
// 		}
// 	});
// }
// function ageFriends(arr) {
// 	const ageAll = arr.reduce((acc, { age }) => (age ? acc + age : acc), 0);
// 	return ageAll;
// }
// findBook(friends, "Harry Potter");
// console.log(ageFriends(friends));
//
//

//
//
//                              Task 3.
//                              ------
//
// Потрібно ств. 4 методи об. :
// 1. виводить суму на карті (назву вводимо в prompt());
// 2. додає нову картку (назву вводимо в prompt());
// 3. зняти з картки гроші (назву вводимо в prompt() та суму в prompt());
// 4. додати на картку (назву вводимо в prompt() та суму в prompt());
//
// const bankSystem = {
// 	privat: 1000,
// 	mono: 1500,
// 	getAmount() {
// 		const card = prompt("Введи карту: ");
// 		if (card === "privat") {
// 			console.log(this.privat);
// 		} else {
// 			console.log(this.mono);
// 		}
// 	},

// 	addNewCard() {
// 		const newCard = prompt("Введи назву нової картки: ");
// 		this[newCard] = 0;
// 	},

// 	withdraw() {
// 		const card = prompt("Введи картку з якої зняти гроші: ");
// 		const amount = prompt("Введи суму, яку знімаєте: ");
// 		if (amount > this[card]) {
// 			console.log("Невірна сума!");
// 		}
// 		this[card] -= amount;
// 	},

// 	deposit() {
// 		const card = prompt("Введи картку яку хбираєтесь поповнити: ");
// 		const amount = prompt("Введи суму, яку поповняєте: ");
// 		if (amount < 0) {
// 			console.log("Невірна сума!");
// 		}
// 		this[card] += +amount;
// 	},
// };
// // console.log(bankSystem.getAmount());
// // bankSystem.getAmount();
// bankSystem.addNewCard();
// bankSystem.withdraw();
// bankSystem.deposit();
// console.log(bankSystem);
//
//

//
//
//                              Task 4.
//                              ------
//
// Ств. об. свого домашнього улюбленця, під час ств. об. потрібно лише ключ імя
//  та присвоїти значення;
//  Усі інші ключі потрібно додати динамічно.
//
// const obj = {
// 	den: {
// 		name: "Den",
// 		salary: 1200,
// 		month: 2,
// 	},
// 	mark: {
// 		name: "Mark",
// 		salary: 1300,
// 		month: 7,
// 	},
// };

// const obj = {
// 	name: "obj name",
// };
// console.log(obj);

// const den = Object.create(obj);
// den.name = "Den";
// den.salary = 1200;
// den.month = 2;

// console.log(den);
// console.log(obj);
//
//

//
//
//                              Task 5.
//                              ------
//
// Створити функцію яка буде шукатинарциса.
// Головна умова: нарциса знають всі, а він нікого.

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
// ]; // Not found

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
// 		know: ["Alex", "Jhon"],
// 	},
// ]; // Not found

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
// 		know: ["Alex", "Jhon"],
// 	},
// ]; // Jhon

// const people4 = [
// 	{
// 		name: "Alex",
// 		know: ["Eva", "Jhon", "Mike"],
// 	},
// 	{
// 		name: "Jhon",
// 		know: [],
// 	},
// 	{
// 		name: "Eva",
// 		know: ["Alex", "Jhon", "Mike"],
// 	},
// 	{
// 		name: "Ivan",
// 		know: ["Alex", "Jhon", "Mike"],
// 	},
// 	{
// 		name: "Mike",
// 		know: ["Jhon"],
// 	},
// ]; // Not found

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
// console.log(findNarcissus(people4));

//
//
//                              Task 6.
//                              ------
//
// Порахувати скільки зробив один юзер (ф-я приймає 2 параметри):
// 1. масив;
// 2. імя робітника.
// Ф-я повертає стільки скільки він заробив (salary * month)
//
// Порахувати заг. суму заробітку всіх робітників.
// ф-я приймає 1 параметр - масив, і повертає заг суму заробітку всіх працівників.
//
// const workers = [
// 	{
// 		name: "Alex",
// 		salary: 3500,
// 		month: 12,
// 	},
// 	{
// 		name: "Dima",
// 		salary: 2500,
// 		month: 9,
// 	},
// 	{
// 		name: "Oleg",
// 		salary: 1500,
// 		month: 36,
// 	},
// ];

// function makeSalary(arr, userName) {
// 	arr.map(({ name, salary, month }) => {
// 		if (name.toLowerCase() === userName.toLowerCase()) {
// 			const userSalary = salary * month;
// 			console.log(`${userName} salary - ${userSalary}`);
// 		}
// 	});

// 	const summary = arr.reduce((acc, { salary, month }) => acc + salary * month, 0);
// 	console.log("summary: ", summary);
// }

// makeSalary(workers, "Oleg");
//
//

//
//
//                              Task 7.
//                              ------
//
// У кожному масиві є унікальний рядок, в якому не повторюютья літери.
// Знайдіть і виведіть цей рядок.
//
// 1 спосіб
// function findUniq(arr) {
// 	for (let i = 0; i < arr.length; i += 1) {
// 		const result = arr[i].split("").every(item => {
// 			for (let j = 0; j < arr.length; j += 1) {
// 				if (i !== j) {
// 					if (!arr[j].includes(item)) {
// 						return true;
// 					} else {
// 						return false;
// 					}
// 				}
// 			}
// 		});
// 		if (result) {
// 			return arr[i];
// 		}
// 	}
// }

// 2 спосіб
// function findUniq(arr) {
// 	let word;
// 	arr.forEach((current, i) => {
// 		const result = current
// 			.split("")
// 			.every(item =>
// 				arr.reduce((acc, comparison, j) => (i !== j ? (acc = comparison.includes(item) ? false : true) : false), false),
// 			);
// 		if (result) {
// 			word = current;
// 		}
// 	});

// 	return word;
// }

// 3 спосіб
// function findUniq(arr) {
// 	return arr.find((current, i) => {
// 		return current
// 			.split("") // 'abc' => a, b, c
// 			.every(
// 				(
// 					item, // a
// 				) =>
// 					arr.reduce(
// 						(acc, comparison, j) => (i !== j ? (acc = comparison.includes(item) ? false : true) : false),
// 						false,
// 					),
// 			);
// 	});
// }

// 4 спосіб
// function findUniq(arr) {
// 	return arr.find((current, i) => {
// 		return current
// 			.split("") // 'abc' => a, b, c
// 			.every(
// 				(
// 					item, // a
// 				) => arr.every((comparison, j) => (i !== j ? !comparison.includes(item) : true)),
// 			);
// 	});
// }

// 5 спосіб - Chat GPT
// const arr = ["abc", "acb", "bac", "foo", "bca", "cab", "cba"];
// // const arr = ["fghj", "ghfj", "abcd", "jhgf", "fghj", "fgjh", "ghjf"];
// // const arr = ["qwe", "camp", "acmp", "pmac", "camp", "apmc", "pmac"];
// let uniqeString = null;

// for (let str of arr) {
// 	let isUnique = true;
// 	for (let i = 0; i < str.length; i += 1) {
// 		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
// 			isUnique = false;
// 			break;
// 		}
// 	}
// 	if (isUnique) {
// 		uniqeString = str;
// 		break;
// 	}
// }

// console.log(uniqeString);
// }
// console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // 'foo'
// console.log(findUniq(["fghj", "ghfj", "abcd", "jhgf", "fghj", "fgjh", "ghjf"])); // 'abcd'
// console.log(findUniq(["qwe", "camp", "acmp", "pmac", "camp", "apmc", "pmac"])); // 'qwe'
//
//

//
//
// 								Task 8. Calculator
// 								------------------
//
// 1. Ств. калькулятор вартості продукту в залежності від ціни. При роботі з подіями
// використовувати елегування. Відрендерити всю готову розмітку через JS.
// 2. При зміні даних в інпуті №1 чи №2 автоматично має перераховуватись заг. вартість.
// 3. Завжди має відображатись валюта - гривня.
// 4. Загальна вартість відображається з копійками (2 знаки після коми).
// 5. В підписі другого ігпута має бути кольорова підказка - скільки кг вибрав користувач
// на другому інпуті.
// 6.Кольорова підказка має змінювати своє значення при перетягування повзунка.
// 7. В інпуті №2 min і max поріг встановлюєте самостійно.
// 8. При завантаженні сторінки скрипт має автоматично розраховувати вартість на основі даних
// за замовчуванням, які ви встановите в розмітці.
//
// const form = document.querySelector(".form");
// const amount = document.querySelector(".amount");
// const totalRef = document.createElement("p");

// form.append(totalRef);
// totalRef.before("Загальна вартість: ");

// const formHandler = form => {
// 	const { price, quantity } = form.elements;
// 	const totalPrice = Number(price.value * quantity.value).toFixed(2);

// 	amount.textContent = quantity.value;
// 	totalRef.textContent = `${totalPrice} грн`;
// };

// form.addEventListener("input", e => {
// 	formHandler(e.currentTarget);
// });

// document.addEventListener("DOMContentLoaded", e => {
// 	formHandler(form);
// });
//
//

//
//
// 							Task 9. Gallery
// 							---------------
//
// Ств. галерею картинок використовуючи масив.
// 1. При кліку на картинку показувати модалку з написом, що зберігається в полі title.
// 2. Використовувати делегування при обробці кліків.
//
// const images = [
// 	{
// 		title: "Коник стрибунець",
// 		src: "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg",
// 	},
// 	{
// 		title: "Фрукт",
// 		src: "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg",
// 	},
// 	{
// 		title: "Люди",
// 		src: "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg",
// 	},
// 	{
// 		title: "Годинник",
// 		src: "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg",
// 	},
// 	{
// 		title: "Метро",
// 		src: "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg",
// 	},
// 	{
// 		title: "Хмари",
// 		src: "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg",
// 	},
// ];

// const imagesContainer = document.querySelector(".images-gallery");
// const imageModal = document.querySelector(".image-modal-overlay");
// const modalContent = document.querySelector(".image-modal");

// images.forEach(({ src, title }) => {
// 	const imgEl = document.createElement("img");
// 	imgEl.classList.add("js-img");
// 	imgEl.src = src;
// 	imgEl.alt = title;

// 	imagesContainer.append(imgEl);
// });

// imagesContainer.addEventListener("click", e => {
// 	// if (!e.target.classList.contains("js-img")) {
// 	// 	return;
// 	// }
// 	if (e.target.nodeName !== "IMG") {
// 		return;
// 	}
// 	modalContent.innerHTML = e.target.getAttribute("alt");
// 	imageModal.classList.add("visible");
// });

// imageModal.addEventListener("click", e => {
// 	if (e.target.classList.contains("image-modal-overlay")) {
// 		e.currentTarget.classList.remove("visible");
// 	}
// });

// document.addEventListener("keydown", onEscapeClose);

// function onEscapeClose(e) {
// 	if (e.code === "Escape") {
// 		imageModal.classList.remove("visible");
// 	}
// }
//
//

// const gallery = document.querySelector(".gallery");
// const overlay = document.querySelector(".image-modal-overlay");
// const modal = document.querySelector(".image-modal");
// function createMarkup(arr) {
// 	return arr
// 		.map(
// 			({ src, title }) => `<li class="js-item">
// 	<img src="${src}" alt="${title}" class="js-img">
// 	</li>`,
// 		)
// 		.join("");
// }
// const markup = createMarkup(images);
// gallery.insertAdjacentHTML("beforeend", markup);

// gallery.addEventListener("click", onClick);

// function onClick(e) {
// 	if (!e.target.classList.contains("js-img")) {
// 		return;
// 	}

// 	overlay.classList.add("visible");

// 	const { src, alt } = e.target;
// 	console.log(src, alt);
// 	modal.innerHTML = `<img src="${src}" alt="${alt}" width=800 height=600>`;
// }

// overlay.addEventListener("click", onClose);

// function onClose(e) {
// 	if (!e.target.classList.contains("image-modal-overlay")) {
// 		return;
// 	}
// 	overlay.classList.remove("visible");
// }
// document.addEventListener("keydown", e => {
// 	if (e.code === "Escape") {
// 		overlay.classList.remove("visible");
// 	}
// });
//
//

//
//
// 								Melnyk
//
//
// const container = document.querySelector(".container");
// const hoverHandler = e => {
// 	const { target: button } = e;
// 	button.style.top = `${Math.floor(Math.random() * (window.innerHeight - button.clientHeight))}px`;
// 	button.style.left = `${Math.floor(Math.random() * (window.innerWidth - button.clientWidth))}px`;
// 	// console.log("button.clientHeight: ", button.clientHeight);
// 	// console.log("button.clientWidth: ", button.clientWidth);
// 	// console.log(window);
// };
// container.addEventListener("mouseover", hoverHandler);
//
//

//
//
// const main = document.querySelector("main");
// main.addEventListener("click", e => {
// 	const button = e.target.closest("section");
// 	const { target } = e;
// 	if (target.dataset.modal) {
// 		console.log("click");
// 	}
// });

// const div = document.querySelector(".first");

// addEventListener("scroll", _.throttle(onScroll, 300));
// // div.addEventListener("click", onScroll);
// function onScroll(e) {
// 	if (e.type === "scroll") {
// 		console.log(e);
// 	}
// }
//
//

//
//
// const productList = [
// 	{
// 		id: 1,
// 		text: "Milk",
// 	},
// 	{
// 		id: 2,
// 		text: "Apple",
// 	},
// 	{
// 		id: 3,
// 		text: "Strawberry",
// 	},
// 	{
// 		id: 4,
// 		text: "Bread",
// 	},
// 	{
// 		id: 5,
// 		text: "Chiken",
// 	},
// ];

// const createLi = (id, text) => `<li id="${id}">${text}</li>`;

// function createMarkup(arr) {
// 	// return arr.map(({ id, text }) => `<li id="${id}">${text}</li>`).join("");
// 	return arr.reduce((acc, { id, text }) => acc + createLi(id, text), "");
// }
// const markup = createMarkup(productList);

// // 1 спосіб
// const ul = document.querySelector(".container");
// ul.innerHTML = markup;

// // 2 спосіб
// // const insertListItems = string => {
// // 	const ul = document.querySelector(".container");
// // 	ul.insertAdjacentHTML("beforeend", string);
// // };

// // insertListItems(markup);

// const form = document.querySelector(".form");
// const input = document.querySelector(".input");
// form.addEventListener("submit", submitHandler);

// function submitHandler(e) {
// 	e.preventDefault();
// 	let id = 0;
// 	if (ul) {
// 		id = ul.children.length + 1;
// 	} else {
// 		id = 1;
// 	}

// 	ul.insertAdjacentHTML("beforeend", createLi(id, input.value));
// 	input.value = "";
// }
//
//

//
//
