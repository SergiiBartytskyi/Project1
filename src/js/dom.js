// import products from "./products.js";
// import transaction from "./transaction.js";
// console.log(products);
// import transactionHistory from "./transaction.js";
// console.log(transactionHistory);
// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
//

//
// console.log(document);

// const body = document.body;
// console.log(body.parentNode);

// const list = document.querySelector(".list");
// console.log(list.parentNode);
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.firstChild);
// console.log(list.firstElementChild);
// console.log(list.lastChild);
// console.log(list.lastElementChild);
// console.log(list.previousSibling);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lastListItem = list.lastElementChild;
// console.log(lastListItem);

// const listItems = list.children;
// console.log(listItems);

// const item = document.querySelectorAll("li");
// console.log(item[2].previousSibling);
// console.log(item[2].previousElementSibling);
// console.log(item[2].nextSibling);
// console.log(item[2].nextElementSibling);
//
//

//
//
//                      Пошук елементів
//                      --------------
//
// element.querySelector(selector);
//
// element.querySelectorAll(selector);
//
// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName); // NodeList(4) [li.menu-item, li.menu-item, li.menu-item, li]

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass); // NodeList(3) [li.menu-item, li.menu-item, li.menu-item]

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem); // <li class="menu-item" style="color: tomato;">…</li>
//
//

//
//
//                      Властивості та атрибути
//                      ----------------------
//
// value - містить поточний текстовий контент елементів форм.
// checked - зберігає стан чекбокса або радіокнопки.
// name - зберігає значення, вказане в HTML-атрибуті name.
// src - шлях до зображення тегу <img>.
//
//

//
//
//                      Властивість textContent
//
//
// elem.textContent повертає текстовий контент всередині елемента
//
//

//
//
//                      Властивість classList
//
//
// У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

// elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
// elem.classList.add(cls) - додає клас cls до списку класів елемента.
// elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
// elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
// elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
//
// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);
//
//

//
//
//                      Властивість style
//
// Використовується для читання та зміни інлайнових стилів.Повертає об'єкт
// CSSStyleDeclaration, який містить список усіх властивостей, визначених тільки у
// вбудованих стилях елемента, а не увесь CSS.Під час запису властивості записуються
// в camelCase, тобто background - color перетворюється на element.style.backgroundColor .
//
//

//
//
//                      Атрибути
//
// elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
// elem.getAttribute(name) - отримує значення атрибута і повертає його.
// elem.setAttribute(name, value) - встановлює атрибут.
// elem.removeAttribute(name) - видаляє атрибут.
// elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
//
// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, 3: width,
// // class: class, src: src, alt: alt, width: width, length: 4}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // "Amazing nature"
//
//

//
//
//                          data-атрибути
//
// Дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.
//
// <button type="button" data-action="save">Save</button>
// <button type="button" data-action="close">Close</button>
//
// Для отримання значення data - атрибута використовується властивість dataset,
// після якого стоїть ім'я атрибута. Тобто data- відкидається, а інша частина
// імені записується як ім'я властивості об'єкта.
//
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"
//
//

//
//
//                              Створення та видалення елементів
//                              ----------------------------
//
// document.createElement(tagName);
//
// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />
//
//

//
//
//                             Додавання
//                              -------
//
// element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
//
// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// const firstItem0 = document.createElement("li");
// firstItem0.textContent = "Mars";
// list.prepend(firstItem0);
// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
// 	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur    assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio  illo et debitis error iure voluptate numquam maiores nisi.Lorem ipsum dolor sit amet,consectetur adipisicing elit.Nostrum tenetur assumenda fugiat maxime, soluta   aspernatur qasi nihil in asperiores ad distinctio illo et debitis error iure     voluptate numquam maiores nisi!";
// list.after(text);
//
//

//
//
//                          Видалення
//                          --------
//
// elem.remove();
//
// const text = document.querySelector(".text");
// text.remove();
//
//

//
//
//                          Оптимізація роботи з DOM
//                          --------
//
// Repaint - відбувається, коли зміни торкнулися стилів, що впливають на зовнішній вигляд елемента,
// але не на геометрію.
// Наприклад opacity, background-color, visibility і outline
//
// Reflow - відбувається, коли зміни впливають на вміст, структуру документу,
// положення елементів.
//
// Сторінка не може виконувати жодні інші операції у той час, коли відбувається reflow або repaint.
//
// Причинами можуть бути:

// Маніпуляції з DOM (додавання, видалення, зміна, перестановка елементів)
// Зміна вмісту, зокрема тексту в полях форм
// Розрахунок або зміна CSS-властивостей
// Додавання і видалення таблиць стилів
// Маніпуляції з атрибутом class
// Маніпуляції з вікном браузера (зміни розмірів, прокручування)
// Активація псевдокласів (наприклад, ':hover')
//
//

//
//
//                          Властивість innerHTML
//                          -------------------
//
//                                  Читання
//
//
// Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка.Значення,
// що повертається, - це завжди валідний HTML - код.
// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);
//
//
//                                      Зміна
//
// Властивість innerHTML доступна і для читання, і для запису.Якщо записати в неї рядок
// з HTML - тегами, то браузер під час парсингу рядка перетворить їх у валідні елементи і
// додасть в DOM - дерево.
//
// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

//
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies.map(technology => `<li class="list-item">${technology}</li>`).join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup); // <li class="list-item">HTML</li><li class="list-item">CSS</li><li class="list-item">JavaScript</li>
// //<li class="list-item">React</li><li class="list-item">Node</li>

// // Adding all the markup in one operation
// list.innerHTML = markup;
//

//
// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;
//
//

//
//
//                              Метод insertAdjacentHTML()
//                              ------------------------
//
//              elem.insertAdjacentHTML(position, string);
//
// Аргумент position - це рядок, позиція щодо елемента elem. Приймає одне з чотирьох значень.

// "beforebegin" - перед elem
// "afterbegin" - всередині elem, перед усіма дітьми
// "beforeend" - всередині elem, після усіх дітей
// "afterend" - після elem
//

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies.map(technology => `<li class="list-item new">${technology}</li>`).join("");
// console.log(markup);
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
//
//

//
//
//                                  Атрибут defer
//                                  -----------
//
//              <script defer src="path-to-script.js"></script>;
//
// Атрибут defer вказує браузеру завантажувати файл скрипта у фоновому режимі,
// паралельно обробці HTML - документа і побудові DOM.
//
//
//                                  Атрибут async
//                                  ------------
//
//                  <script async src="path-to-script.js"></script>
//
// Завантаження скрипта з атрибутом async не блокує побудову DOM, але він виконується відразу
// після завантаження.Це означає, що такі скрипти можуть заблокувати побудову DOM, і
// виконуються у довільному порядку.
//
//

//
//
//                                  Події
//                                  ----
//
// Подія - це сигнал від браузера про те, що на веб - сторінці щось відбулося.
// Події використовуються для реакції на дії користувача і виконання коду,
// пов'язаного з певною подією.
//
//
//                                  Метод addEventListener()
//                                  -----------------------
//
// Додає слухача події на елемент.
//
//              element.addEventListener(event, handler, options);
//
// event - ім'я події, рядок, наприклад "click".
// handler - колбек-функція, яка буде викликана під час настання події.
// options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.
//
//
// const button = document.querySelector(".my-button");
// //
// button.addEventListener("click", () => {
// 	console.log("Button was clicked");
// });
//
// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
// 	console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
// 	console.log("First callback!");
// };
// const secondCallback = () => {
// 	console.log("Second callback!");
// };
// const thirdCallback = () => {
// 	console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);
//
//

//                  Метод removeEventListener()
//                      -----------------
//
// Видаляє слухача події з елемента. Аргументи аналогічні методу addEventListener().

// element.removeEventListener(event, handler, options);
//
// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
// 	console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
// 	btn.addEventListener("click", handleClick);
// 	console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
// 	btn.removeEventListener("click", handleClick);
// 	console.log("click event listener was removed from btn");
// });
//
//

//
//
//                      Ключове слово this
//                      -----------------
//
// Якщо колбеком буде функція, яка використовує this, за замовчуванням контекст всередині
// неї буде посилатися на DOM - елемент, на якому висить слухач.
//
// const mango = {
// 	username: "Mango",
// 	showUsername() {
// 		console.log(this);
// 		console.log(`My username is: ${this.username}`);
// 	},
// };

// const btn = document.querySelector(".js-btn");

// // ✅ Працює
// mango.showUsername();

// // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// // btn.addEventListener("click", mango.showUsername); // не працює

// // ✅ Не забувайте прив'язувати контекст методів об'єкта
// btn.addEventListener("click", mango.showUsername.bind(mango));
//
//

//
//
//                          Об'єкт події
//                              ----------
//
// Всі події відбуваються з базового класу Event.
// Деякі властивості об'єкта події:

// event.type - тип події.
// event.currentTarget - елемент, на якому виконується обробник події.
//
// const button = document.querySelector(".btn");

// const handleClick = event => {
// 	console.log("event: ", event);
// 	console.log("event type: ", event.type);
// 	console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);
//
//

//
//
//                                  Дії браузера
//                                  -----------
//
// Для скасування дії браузера за замовчуванням в об'єкта події є стандартний
// метод preventDefault().
//
// const form = document.querySelector(".register-form");

// form.addEventListener("submit", event => {
// 	event.preventDefault();
// 	const {
// 		elements: { username, password },
// 	} = event.currentTarget;
// 	console.log(username.value, password.value);
// });
//
//

//
//
//                          Події клавіатури
//                          ---------------
//
// Існує дві основні події клавіатури: keydown і keyup.На відміну від інших,
// події клавіатури обробляються на документі, а не на конкретному елементі.
// Об'єкти подій клавіатури походять від базового класу KeyboardEvent.
//
// document.addEventListener("keydown", event => {
// 	console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
// 	console.log("Keyup: ", event);
// });
//
//

//
//
//                          Властивості key і code
//                          ---------------------
//
// Властивість key повертає символ, згенерований натисканням клавіші,
// враховуючи стан клавіш - модифікаторів, наприклад, Shift, а також поточну мову.
// Властивість code повертає код фізичної клавіші на клавіатурі і не залежить від мови.

// document.addEventListener("keydown", event => {
// 	console.log("key: ", event.key);
// 	console.log("code: ", event.code);
// });

// document.addEventListener("keydown", event => {
// 	event.preventDefault();

// 	if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
// 		console.log("«Ctrl + s» or «Command + s» combo");
// 	}
// });
//
//

//
//
//                              Події елементів форм
//                              ---------------------
//
//                                  Подія submit
//
// Відправлення форми відбувається під час кліку по кнопці з атрибутом type = "submit" або
// натискання клавіші Enter, перебуваючи в будь - якому її текстовому полі.Подію submit можна
// застосувати для валідації(перевірки) форми перед відправленням, оскільки на об'єкті події
// існує багато корисних властивостей, пов'язаних з елементами форми.Сабміт форми перезавантажує
// сторінку, тому не забувайте скасовувати дію за замовчуванням методом preventDefault().
//
// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
// 	event.preventDefault();
// 	const form = event.target;
// 	console.log(form);

// 	const login = form.elements.login.value;
// 	console.log(login);

// 	const password = form.elements.password.value;
// 	console.log(password);

// 	if (login === "" || password === "") {
// 		return console.log("Please fill in all the fields!");
// 	}

// 	console.log(`Login: ${this.login.value}, Password: ${this.password.value}`);
// 	form.reset();
// }
//
//

//
//
//                          Подія change
//                          ------------
// Відбувається після зміни елемента форми. Для текстових полів або textarea подія
// відбудеться не на кожному введенні символу, а після втрати фокусу, що не завжди зручно.
// Наприклад, доки ви набираєте щось у текстовому полі - подія відсутня, але як тільки
// фокус пропав, відбудеться подія change.Для інших елементів, наприклад, select, чекбоксів і
// радіо - кнопок, подія change спрацьовує відразу під час вибору значення.
//
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
// 	const selectedOptionValue = event.currentTarget.value;
// 	console.log(selectedOptionValue);
// 	const selectedOptionIndex = event.currentTarget.selectedIndex;
// 	console.log(selectedOptionIndex);
// 	const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;
// 	console.log(selectedOptionText);

// 	textOutput.textContent = selectedOptionText;
// 	valueOutput.textContent = selectedOptionValue;
// }
//
//

//
//
//                          Подія input
//                          ----------
// Відбувається тільки на текстових полях і textarea, і створюється щоразу при зміні
// значення елемента, не чекаючи втрати фокусу.На практиці input - це найголовніша подія для
// роботи з текстовими полями форми.
//
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", event => {
// 	output.textContent = event.currentTarget.value;
// });
//
//

//
//
//                          Подія focus і blur
//                          -----------------
// Елемент отримує фокус під час кліку миші або переходу клавішею Tab.Момент отримання і втрати
// фокусу - дуже важливий, отримуючи фокус, ми можемо завантажити дані для автозаповнення,
// почати відстежувати зміни тощо.Під час втрати фокусу - перевірити введені дані.

// Під час фокусування елемента відбувається подія focus, а коли фокус зникає, наприклад,
// користувач клікає в іншому місці екрана, відбувається подія blur.Активувати або скасувати
// фокус можна програмно, викликавши в коді для елемента однойменні методи focus() і blur().
//
// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
// 	textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
// 	textInput.blur();
// });

// textInput.addEventListener("focus", () => {
// 	textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
// 	textInput.value = "";
// });
//
// поточний елемент, на якому знаходиться фокус, доступний як document.activeElement.
//
//

//
//
//                                  Репета
//                                  -----
//
//
//                              Пошук елементів
//                              --------------
//
// const text = document.querySelector("p");
// text.textContent = "На головну";
// const magicBtn = document.querySelector(".js-magic-btn");

// magicBtn.textContent = "Я кнопка";
// magicBtn.addEventListener("click", () => console.log("Click!!!"));
//
//

//
//
//                              Властивості елемента
//                              -------------------
//
// magicBtn.addEventListener("click", () => {
// 	const imageEl = document.querySelector(".hero-image");
// 	console.log("imageEl", imageEl);
// 	console.log(imageEl.src);
// 	imageEl.src =
// 		"https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";
// 	imageEl.alt = "This is new kitty";

// 	const heroTitleEl = document.querySelector(".hero-title");
// 	console.log("heroTitleEl", heroTitleEl);
// 	heroTitleEl.textContent = "New Title";
// });
// const imageEl = document.querySelector(".hero-image");

// console.log(imageEl.getAttribute("alt")); //It's me
// console.log(imageEl.hasAttribute("alt")); //true

// const actions = document.querySelectorAll(".js-actions button");
// console.log(actions); // NodeList(3) [button, button, button]
// console.log(actions[2].dataset.action); // edit

// magicBtn.addEventListener("click", () => {
// 	const inputEl = document.querySelector(".js-input");
// 	console.log(inputEl);
// 	inputEl.value = "Hello World!";
// });

// const delBtnEl = document.querySelector('[data-action="remove"]');
// console.log(delBtnEl);
// delBtnEl.addEventListener("click", () => {
// 	const inputEl = document.querySelector(".js-input");
// 	inputEl.value = "";
// });
//
//

//
//
//                              Інтерфейс classlist
//                                  -------------
//
// const navEl = document.querySelector(".site-nav");
// console.log(navEl.classList);
// navEl.classList.add("super-cool", "qweqwe");
// // navEl.classList.remove("qweqwe");

// magicBtn.addEventListener("click", () => {
// 	navEl.classList.toggle("qweqwe");
// });
// navEl.classList.replace("super-cool", "awsome");
// console.log(navEl.classList.contains("qweqwe"));
//
//

//
//
// 							Навігація по DOM-дереві
// 							----------------------
//
// const navEl = document.querySelector(".site-nav");
// const fisrtElNav = navEl.firstElementChild;
// console.log(fisrtElNav);

// const middleElNav = fisrtElNav.nextElementSibling;
// console.log(middleElNav);

// const lastElNav = navEl.lastElementChild;
// console.log(lastElNav);

// const middleElNav1 = lastElNav.previousElementSibling;
// console.log(middleElNav1);

// const main = fisrtElNav.parentElement;
// console.log(main);

// const main1 = fisrtElNav.parentNode;
// console.log(main1);

// const childreN = main.childNodes;
// console.log(childreN);

// const children1 = main.children;
// console.log(children1);
//
//

//
//
// 							Створення елементів
// 							------------------
//
// const titleEl = document.createElement("h1");
// titleEl.classList.add("page-title");
// titleEl.textContent = "This is Title!";
// // console.log(titleEl);

// // document.body.appendChild(titleEl);

// const imageEl = document.createElement("img");
// imageEl.src = "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
// imageEl.alt = "valais-alpine-mountains-glacier";
// imageEl.width = 640;
// // console.log(imageEl);
// // document.body.appendChild(imageEl);
// const heroEl = document.querySelector(".hero");
// // heroEl.appendChild(titleEl);
// // heroEl.appendChild(imageEl);
// heroEl.append(titleEl, imageEl);

// const navItemEl = document.createElement("li");
// navItemEl.classList.add("site-nav__item");

// const navLinkEl = document.createElement("a");
// navLinkEl.href = "/";
// navLinkEl.classList.add("site-nav__link");
// navLinkEl.textContent = "Personal cabinet";

// console.log(navItemEl);
// console.log(navLinkEl);

// navItemEl.appendChild(navLinkEl);
// // console.log(navItemEl);
// // console.log(navLinkEl);

// const navEl = document.querySelector(".site-nav");
// console.log(navEl);
// // navEl.appendChild(navItemEl);
// // navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.insertBefore(navItemEl, navEl.children[1]);
//
//

//
//
// 								Створення колекції елементів
// 								--------------------------------
//
// const colorPickerOptions = [
// 	{ label: "red", color: "#F44336" },
// 	{ label: "green", color: "#4CAF50" },
// 	{ label: "blue", color: "#2196F3" },
// 	{ label: "grey", color: "#607D8B" },
// 	{ label: "pink", color: "#E91E63" },
// 	{ label: "indigo", color: "#3F51B5" },
// ];

// // 1 спосіб додати кнопки в html
// const colorPickerContainerEl = document.querySelector(".js-color-picker");
// const elements = [];
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
// 	const option = colorPickerOptions[i];

// 	const buttonEl = document.createElement("button");
// 	buttonEl.type = "button";
// 	buttonEl.textContent = option.label;
// 	buttonEl.style.backgroundColor = option.color;

// 	elements.push(buttonEl);
// }
// console.log(elements);
// colorPickerContainerEl.append(...elements);

// // 2 спосіб додати кнопки в html
// const colorPickerContainerEl = document.querySelector(".js-color-picker");
// const elements = [];

// colorPickerOptions.forEach(option => {
// 	const buttonEl = document.createElement("button");
// 	buttonEl.type = "button";
// 	buttonEl.textContent = option.label;
// 	buttonEl.style.backgroundColor = option.color;

// 	elements.push(buttonEl);
// });
// colorPickerContainerEl.append(...elements);

// 3 спосіб додати кнопки в html
// const colorPickerContainerEl = document.querySelector(".js-color-picker");
// // const elements = colorPickerOptions.map(option => {
// // 	const buttonEl = document.createElement("button");
// // 	buttonEl.type = "button";
// // 	buttonEl.textContent = option.label;
// // 	buttonEl.style.backgroundColor = option.color;

// // 	return buttonEl;
// // });

// // console.log(elements);
// // colorPickerContainerEl.append(...elements);

// const makeColorPickerOptions = options => {
// 	return options.map(option => {
// 		const buttonEl = document.createElement("button");
// 		buttonEl.type = "button";
// 		buttonEl.textContent = option.label;
// 		buttonEl.style.backgroundColor = option.color;

// 		return buttonEl;
// 	});
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);
//
//

//
//
//							Майстерня: створення колекції товарів
// 								-----------------------------
//
// const product = {
// 	name: "Сервоприлади",
// 	description: "Lorem dkkddldldl lsdlldfsdmfkm sdf sdf sdfm  fsdsfm s a ;kdasd oa!",
// 	price: 2000,
// 	available: true,
// 	onSale: true,
// };
{
	/*
<article class="product">
	<h2 class="product__name">Name</h2>
	<p class="product__descr">Description</p>
	<p class="product__price">Price</p>
</article>
*/
}

// const productEl = document.createElement("article");
// productEl.classList.add("product");

// const titleEl = document.createElement("h2");
// titleEl.classList.add("product__name");
// titleEl.textContent = product.name;

// const descrEl = document.createElement("p");
// descrEl.classList.add("product__descr");
// descrEl.textContent = product.description;

// const priceEl = document.createElement("p");
// priceEl.classList.add("product__price");
// priceEl.textContent = `Price: ${product.price}`;

// // console.log(productEl);
// // console.log(titleEl);
// // console.log(descrEl);
// // console.log(priceEl);

// productEl.append(titleEl, descrEl, priceEl);
// console.log(productEl);

// const makeProductCard = ({ name, description, price }) => {
// 	const productEl = document.createElement("article");
// 	productEl.classList.add("product");

// 	const titleEl = document.createElement("h2");
// 	titleEl.classList.add("product__name");
// 	titleEl.textContent = name;

// 	const descrEl = document.createElement("p");
// 	descrEl.classList.add("product__descr");
// 	descrEl.textContent = description;

// 	const priceEl = document.createElement("p");
// 	priceEl.classList.add("product__price");
// 	priceEl.textContent = `Price: ${price}`;

// 	productEl.append(titleEl, descrEl, priceEl);

// 	return productEl;
// };
// // console.log(makeProductCard(products[0]));
// const elements = products.map(makeProductCard);
// console.log(elements);

// const productsContainer = document.querySelector(".js-products");
// productsContainer.append(...elements);
//
//

//
//
// 							Парсинг рядків
// 							-------------
//
// const titleEl = document.querySelector(".title");
// console.log(titleEl.textContent); // This is title
// console.log(titleEl.innerHTML); // This is <span>title</span>
// titleEl.innerHTML = '<a href="">This is link)</a>';
// titleEl.innerHTML = "";
// titleEl.insertAdjacentHTML("beforebegin", '<a href="">This is link)</a>');
// titleEl.insertAdjacentHTML("afterbegin", '<a href="">This is link)</a>');
// titleEl.insertAdjacentHTML("beforeend", '<a href="">This is link)</a>');
// titleEl.insertAdjacentHTML("afterend", '<a href="">This is link)</a>');
//
//

//
//
// 						Майстерня: таблиця транзакцій
// 						-----------------------------
//
{
	/* <tr>
<td>ID transaction</td>
<td>Amount</td>
<td>Date</td>
<td>Who</td>
<td>Type transaction</td>
<td>Account name</td>
<td>Account number</td>
</tr>	*/
}
// const makeTransactionTableRowMarkup = ({ id, amount, date, business, name, type, account }) => {
// 	console.log(transaction);
// 	return `
// <tr>
// 	<td>${id}</td>
// 	<td>${amount}</td>
// 	<td>${date}</td>
// 	<td>${business}</td>
// 	<td>${name}</td>
// 	<td>${type}</td>
// 	<td>${account}</td>
// </tr>
// `;
// };

// console.log(transactionHistory);
// const tableEl = document.querySelector(".js-transaction-table");

// const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join("");
// tableEl.insertAdjacentHTML("beforeend", makeTransactionTableRows);
// console.log(makeTransactionTableRows);
//
//

//
//
// 							Events
// 							------
//
// const targetBtn = document.querySelector(".js-target-btn");
// const addListenerBtn = document.querySelector(".js-add-listener");
// const removeListenerBtn = document.querySelector(".js-remove-listener");

// // 						Патерни найменування колбеків подій
// // 					-------------------------------
// //
// //	 - handle*  --> handleSubjectEvent
// //	 - *Handler --> subjectEventHandler
// //	 - on*      --> onSubjectEvent
// //

// const handleTargetButtonClick = () => console.log("Click!");
// const targetButtonClickHandler = () => console.log("Click!");
// const onClick = () => console.log("Click!");
// const onTargetButtonClick = () => console.log("Click!");

// addListenerBtn.addEventListener("click", () => {
// 	console.log("Add listener to targetBtn");
// 	targetBtn.addEventListener("click", onClick);
// });

// removeListenerBtn.addEventListener("click", () => {
// 	console.log("Remove listener to targetBtn");
// 	targetBtn.removeEventListener("click", onClick);
// });
//
//

//
//
// 					Подія submit form
// 					----------------
//
// const form = document.querySelector(".js-register-form");
// form.addEventListener("submit", onFormSubmit);
// function onFormSubmit(event) {
// 	event.preventDefault();

// 	const formElements = event.currentTarget.elements;
// 	console.log(formElements);
// 	console.log(event.currentTarget.elements.subscription.value); // pro
// 	// console.log(event.target);
// 	// console.log("This is form submit!");
// 	const email = formElements.email.value;
// 	console.log(email);
// 	const password = formElements.password.value;
// 	console.log(password);
// 	const subscription = formElements.subscription.value;
// 	console.log(subscription);

// 	const formData = {
// 		email,
// 		password,
// 		subscription,
// 	};

// 	console.log(formData);
// }
//

//
// 						FormData
// 						-------
//
// function onFormSubmit(event) {
// 	event.preventDefault();

// 	const formData = new FormData(event.currentTarget);
// 	console.log(formData);

// 	formData.forEach((value, name) => {
// 		console.log("onFormSUbmit -> name", name);
// 		console.log("onFormSUbmit -> value", value);
// 	});
// }
//
//

//
//
// 					Обєкт посилань
// 					-------------
//

// const input = document.querySelector(".js-input");
// const nameLabel = document.querySelector(".js-button> span");
// const license = document.querySelector(".js-license");
// const btn = document.querySelector(".js-button");
// Замінили обєктом посилань:
// const refs = {
// 	input: document.querySelector(".js-input"),
// 	nameLabel: document.querySelector(".js-button> span"),
// 	licenseCheckbox: document.querySelector(".js-license"),
// 	btn: document.querySelector(".js-button"),
// };

// // refs.input.addEventListener("focus", onInputFocus);
// // refs.input.addEventListener("blur", onInputBlur);
// // refs.input.addEventListener("change", onInputChange); //
// refs.input.addEventListener("input", onInputChange);

// refs.input.addEventListener("input", onInputChange);
// refs.licenseCheckbox.addEventListener("change", onLicenseChange);

// function onInputFocus() {
// 	console.log("Інпут отримав фокус - подія focus");
// }
// function onInputBlur() {
// 	console.log("Інпут втратив фокус - подія blur");
// }

// function onInputChange(event) {
// 	// console.log(event.currentTarget.value);
// 	refs.nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
// 	console.log(event.currentTarget.checked);
// 	console.log("refs.btn.diabled: ", refs.btn.disabled);
// 	refs.btn.disabled = !event.currentTarget.checked;
// }
//
//

//
//
// 					Події клавіатури
// 					-------------
//

// const refs = {
// 	clearBtn: document.querySelector(".js-clear"),
// 	output: document.querySelector(".js-output"),
// };

// window.addEventListener("keydown", onKeypress); // + службові
// // window.addEventListener("keypress", onKeypress); // - службові
// refs.clearBtn.addEventListener("click", onClearOutput);
// function onKeypress(event) {
// 	// console.log(event);
// 	// console.log("event.key: ", event.key);
// 	// console.log("event.code: ", event.code);

// 	refs.output.textContent += event.key;
// }

// function onClearOutput() {
// 	refs.output.textContent = "";
// }
//
//

//
//
// 					Події мишки
// 					-------------
//
// const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener("mouseenter", onMouseEnter);
// boxRef.addEventListener("mouseleave", onMouseLeave);
// // boxRef.addEventListener("mousemove", onMouseMove);

// function onMouseEnter(event) {
// 	const box = event.currentTarget;
// 	box.classList.add("box--active");
// }

// function onMouseLeave(event) {
// 	const box = event.currentTarget;
// 	box.classList.remove("box--active");
// }

// function onMouseMove(event) {
// 	console.log(event);
// }
//
//

//
//
// 						Modal
// 					-------------
//
// const refs = {
// 	openModalBtn: document.querySelector('[data-action="open-modal"]'),
// 	closeModalBtn: document.querySelector('[data-action="close-modal"]'),
// 	backdrop: document.querySelector(".js-backdrop"),
// };

// refs.openModalBtn.addEventListener("click", onOpenModal);
// refs.closeModalBtn.addEventListener("click", onCloseModal);
// refs.backdrop.addEventListener("click", onBackdropClick);
// refs.backdrop.addEventListener("keypress", onEscapeKeypress);

// function onOpenModal() {
// 	window.addEventListener("keydown", onEscapeKeypress);
// 	document.body.classList.add("show-modal");
// }

// function onCloseModal() {
// 	window.removeEventListener("keydown", onEscapeKeypress);

// 	document.body.classList.remove("show-modal");
// }

// function onBackdropClick(event) {
// 	// console.log("Click on modal");
// 	// console.log(event.currentTarget);
// 	// console.log(event.target);
// 	// console.log(event.currentTarget === event.target);
// 	if (event.currentTarget === event.target) {
// 		onCloseModal();
// 	}
// }

// function onEscapeKeypress(event) {
// 	const ESC_KEY_CODE = "Escape";
// 	if (event.code === ESC_KEY_CODE) {
// 		onCloseModal();
// 	}
// }

// const title = document.querySelector('[data-id="test"]');
// console.log(title);
// console.dir(title.dataset.id);
// console.dir(title.dataset.goods);
// title.hidden = false;
// console.dir(title.hidden = );

//
// const listDynamics = document.getElementsByTagName("li");
// const list = document.querySelector(".js-list");
// const li = document.createElement("li");
// li.textContent = list.children.length + 1;
// list.append(li);
// console.log(listDynamics);
//
//

//
//
// 							Task 1
//
// const cars = [
// 	{
// 		model: "Honda",
// 		type: "Civic",
// 		price: 12000,
// 		img: "https://motormag.pl/wp-content/uploads/2022/03/honda-civic-type-r-2020.jpg.webp",
// 	},
// 	{
// 		model: "Audi",
// 		type: "Q7",
// 		price: 40000,
// 		img: "https://media.ed.edmunds-media.com/audi/q7/2022/oem/2022_audi_q7_4dr-suv_prestige_fq_oem_1_1280.jpg",
// 	},
// 	{
// 		model: "BMW",
// 		type: "5 series",
// 		price: 50000,
// 		img: "https://upload.wikimedia.org/wikipedia/commons/5/52/BMW_G30_FL_IMG_5351.jpg",
// 	},
// 	{
// 		model: "Honda",
// 		type: "Accord",
// 		price: 20000,
// 		img: "https://hips.hearstapps.com/hmg-prod/images/dsc01432-1677186780.jpg?crop=0.534xw:0.601xh;0.197xw,0.318xh&resize=768:*",
// 	},
// 	{
// 		model: "Mercedes",
// 		type: "S class",
// 		price: 70000,
// 		img: "https://www.topgear.com/sites/default/files/2022/03/1-Mercedes-S-Class-plug-in.jpg",
// 	},
// 	{
// 		id: 4,
// 		model: "Toyota",
// 		type: "Camry",
// 		price: 45000,
// 		img: "https://scene7.toyota.eu/is/image/toyotaeurope/CAM0001a_21-2:Medium-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
// 	},
// ];

// const container = document.querySelector(".js-container");
// console.dir(container);

// const markup = cars
// 	.map(
// 		({ id = "none", model, type, price, img }) =>
// 			`<li data-id="${id}">
// 	<img src="${img}" alt="${model}" class="img">
// 	<h2>Brand - ${model}</h2>
// 	<h3>Model - ${type}</h3>
// 	<p>Price - ${price}</p>
// </li>`,
// 	)
// 	.join("");

// container.insertAdjacentHTML("beforeend", markup);
// console.dir(markup);
//
//

//
//
// 					Task 2. Technologies.
// 					--------------------
//
// Ств.список технологій що вивчаються на курсі Fullstack за допомогою js, використ.
// два способи(map i reduce);
//
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const body = document.body;
// const technologiesList = document.querySelector(".technologies");

// 1 спосіб -- append
//
// const makeListElements = arr => {
// 	return arr.map(el => {
// 		const liEl = document.createElement("li");
// 		liEl.textContent = el;
// 		return liEl;
// 	});
// };
// const elements = makeListElements(technologies);
// technologiesList.append(...elements);

// 2 спосіб -- insertAdjacentHTML
//
// const makeListElements = arr => {
// 	return arr.map(el => `<li>${el}</li>`).join("");
// };
// const markup = makeListElements(technologies);
// technologiesList.insertAdjacentHTML("beforeend", markup);

// 3 спосіб -- innerHTML
//
// const makeListElements = arr => {
// 	return arr.map(el => `<li>${el}</li>`).join("");
// };
// const markup = makeListElements(technologies);

// technologiesList.innerHTML = markup;
//

// 4 спосіб -- reduce
//
//// const res = technologies.reduce((previous, current) => previous + `<li>${current}</li>`, "");
// technologiesList.insertAdjacentHTML("beforeend", res);
//
//

//
//
// 								Task 3. Buttons
// 								--------------
//
// Ств. декілька кнопок на основі масива з об., викор. createElement.
//
// const colors = [
// 	{ label: "red", color: "#FF0000" },
// 	{ label: "green", color: "#00FF00" },
// 	{ label: "blue", color: "#0000FF" },
// 	{ label: "yellow", color: "#FFFF00" },
// ];

// const makeBtnsEl = arr => {
// 	return arr.map(({ label, color }) => {
// 		const btnEl = document.createElement("button");
// 		btnEl.textContent = label;
// 		btnEl.style.backgroundColor = color;
// 		btnEl.classList.add("btn");
// 		return btnEl;
// 	});
// };

// const btns = makeBtnsEl(colors);
// body.append(...btns);
//
//

//
//
// 								Task 4. Site
// 								--------------
//
// Створити сайт з розміткою записаною у файлі 'example.html',
// використовуючи лише JS в HTML файлі має бути лише тег body
//
// const bodyEl = document.querySelector(".body");

// const makeCreateElement = (tagName, config) => {
// 	const newElement = document.createElement(tagName);

// 	if (config) {
// 		Object.entries(config).forEach(([key, value]) => {
// 			newElement[key] = value;
// 		});
// 	}

// 	return newElement;
// };
// {
// 	/* <main> */
// }
// // const main = document.createElement("main");
// // main.id = "main";
// const main = makeCreateElement("main", { id: "main" });

// // </main>

// {
// 	/* <h1> */
// }
// // const titleEl = document.createElement("h1");
// // titleEl.classList.add("title");
// // titleEl.textContent = "- Michel Legrand -";

// const titleEl = makeCreateElement("h1", { id: "title", textContent: "- Michel Legrand -" });
// main.append(titleEl);
// // </h1>

// {
// 	/* <figure>	 */
// }
// // const figureEl = document.createElement("figure");
// // figureEl.id = "img-div";
// const figureEl = makeCreateElement("figure", { id: "img-div" });

// // const imgEl = document.createElement("img");
// // imgEl.src =
// // 	"https://soundtrackfest.com/wp-content/uploads/2018/09/MN-2018-09-05-Michel-Legrand-en-concierto-con-la-Royal-Philharmonic-Orchestra.jpg";
// // imgEl.alt = "Michel Legrand conducting his orchestra.";
// // imgEl.id = "image";
// const imgEl = makeCreateElement("img", {
// 	id: "image",
// 	src: "https://soundtrackfest.com/wp-content/uploads/2018/09/MN-2018-09-05-Michel-Legrand-en-concierto-con-la-Royal-Philharmonic-Orchestra.jpg",
// 	alt: "Michel Legrand conducting his orchestra.",
// });

// // const figcaptionEl = document.createElement("figcaption");
// // figcaptionEl.id = "img-caption";
// // figcaptionEl.textContent = "Michel Legrand conducting his orchestra.";
// const figcaptionEl = makeCreateElement("figcaption", {
// 	id: "img-caption",
// 	textContent: "Michel Legrand conducting his orchestra.",
// });

// figureEl.append(imgEl, figcaptionEl);
// main.append(figureEl);
// // </figure>

// {
// 	/* <article> */
// }
// // const articleRef = document.createElement("article");
// // articleRef.id = "tribute-info";
// const articleRef = makeCreateElement("article", { id: "tribute-info" });

// // const introEl = document.createElement("div");
// // introEl.id = "intro";
// const introEl = makeCreateElement("div", { id: "intro" });
// const paragraphIntroEl = makeCreateElement("p", {
// 	innerHTML: "&bull; Michel Legrand (1932-2019) was a famous French misician. &bull;",
// });
// introEl.append(paragraphIntroEl);

// const paragraphAfterIntroEl = makeCreateElement("p");
// const uInParagraphEl = makeCreateElement("u", { textContent: "Here are some major facts about him:" });
// paragraphAfterIntroEl.append(uInParagraphEl);

// const listEl = makeCreateElement("ul");
// const listItems = [
// 	// "He was born in Paris, France on February 24th, 1932.",
// 	"1966: Parasolki z Cherbourga, nominacja do Oscara za najlepszą muzykę",
// 	"1969: Panienki z Rochefort, nominacja do Oscara za najlepszą muzykę",
// 	"1969: Sprawa Thomasa Crowna, Oscar za najlepszą piosenkę",
// 	"1969: Sprawa Thomasa Crowna, Złoty Glob za najlepszą piosenkę",
// 	"1970: Sprawa Thomasa Crowna, nominacja do BAFTA za najlepszą muzykę",
// 	"1971: Wichrowe wzgórza, nominacja do Złotego Globu za najlepszą muzykę",
// 	"1972: Le Mans, nominacja do Złotego Globu za najlepszą muzykę",
// 	// "He was interred at the P&agrave;re Lachaise Cemetery in Paris, France.",
// ];
// listItems.forEach(item => {
// 	const listItemEl = makeCreateElement("li", { textContent: item });
// 	listEl.appendChild(listItemEl);
// });

// const liFirstChild = makeCreateElement("li", {
// 	innerHTML: "He was born in Paris, France on February 24<sup>th</sup>, 1932.",
// });
// listEl.prepend(liFirstChild);

// const liLastChild = makeCreateElement("li", {
// 	innerHTML: "He was interred at the P&agrave;re Lachaise Cemetery in Paris, France.",
// });
// listEl.appendChild(liLastChild);

// const blockquoteEl = makeCreateElement("blockquote", { id: "quote" });
// const paragraphInBlockquoteEl = makeCreateElement("p", {
// 	textContent: "Writing is a mental thing, while playing is wssentially a physical feeling.",
// });
// const citeEl = makeCreateElement("cite", { textContent: "-- Michel Legrand" });
// blockquoteEl.append(paragraphInBlockquoteEl, citeEl);

// const hrEl = makeCreateElement("hr");

// const paragraphAfterBlockquoteEl = makeCreateElement("p", {
// 	textContent: "To find out more abour him, feel free to have a look at his biography on ",
// });
// const linkInParagraphAfterBlockquoteEl = makeCreateElement("a", {
// 	id: "link",
// 	href: "https://en.wikipedia.org/wiki/Michel_Legrand",
// 	target: "_blank",
// 	textContent: "wikipedia",
// });
// paragraphAfterBlockquoteEl.append(linkInParagraphAfterBlockquoteEl);

// articleRef.append(introEl, paragraphAfterIntroEl, listEl, blockquoteEl, hrEl, paragraphAfterBlockquoteEl);
// main.append(articleRef);
// // </article>
// bodyEl.append(main);

const bodyEl = document.querySelector(".body");
// const onClick = event => console.log(event.currentTarget);
// const onClick = event => console.log(event.target);
// const btn = `<button type="button" class="js-btn"></button>`;

// bodyEl.insertAdjacentHTML("beforeend", btn);
// // console.log(bodyEl);
// const btnsEl = document.querySelectorAll(".js-btn");
// // console.log(btnsEl);
// const onBtn = bodyEl.firstElementChild;
// onBtn.textContent = "On";
// const offBtn = bodyEl.lastElementChild;
// offBtn.textContent = "Off";
// // console.log(onBtn);
// // console.log(offBtn);

// btnsEl.forEach(btnEl => btnEl.addEventListener("click", onClick));
// btnsEl.addEventListener("click", onClick);

// const btnEl = document.querySelector(".js-btn");
// btnEl.textContent = "Click Me";
// // btnEl.addEventListener("click", makeMoveContainer);
// // function makeMoveContainer() {
// // 	console.log("Click on button!");
// // 	const moveEl = document.querySelector(".container");
// // 	moveEl.classList.toggle("js-container");
// // }
// const container = document.querySelector(".js-container");
// btnEl.addEventListener("click", onClick);
// let step = 0;

// function onClick(evt) {
// 	step += 5;
// 	container.style.marginLeft = `${step}px`;
// 	container.style.marginTop = `${step}px`;
// 	console.log(evt.currentTarget);
// }

// const title = document.querySelector(".js-title");
// const title2 = document.querySelector(".js-title2");
// const str = title.textContent.slice(0, 13);
// console.log(str);
// const reminder = title.textContent.slice(13);
// console.log(reminder);

// function onClick(e) {
// 	const title = e.currentTarget;
// 	const str = title.textContent.slice(0, 13);
// 	const reminder = title.textContent.slice(13);
// 	console.log(reminder);
// }

// const maxLegth = 13;
// const totalLength = maxLegth + 3;

// function onClick(e) {
// 	const title = e.currentTarget;
// 	const str = title.textContent.slice(0, maxLegth);
// 	if (title.textContent.length > totalLength) {
// 		const remainder = title.textContent.slice(maxLegth);
// 		title.setAttribute("data-title", remainder);
// 		title.textContent = str + "...";
// 	} else {
// 		const remainder = title.dataset.title;
// 		if (remainder) {
// 			title.textContent = str + remainder;
// 		}
// 		// console.log(remainder);
// 	}
// 	// console.log(reminder);
// }

// // title.addEventListener("click", onClick);
// // title2.addEventListener("click", onClick);
// const title1 = document.querySelector(".js-title1");
// const title2 = document.querySelector(".js-title2");
// const title3 = document.querySelector(".js-title3");
// title1.addEventListener("click", onClick);
// title2.addEventListener("click", onClick);
// title3.addEventListener("click", onClick);

// const inputEl = document.querySelector(".js-input");
// inputEl.addEventListener("change", onInput);
// function onInput(e) {
// 	console.dir(e.currentTarget.value);
// }

// const formEl = document.querySelector(".js-form");
// formEl.addEventListener("submit", onSubmit);
// function onSubmit(e) {
// 	e.preventDefault();
// 	const { userName, userEmail, userAge } = e.currentTarget;

// 	const data = {
// 		name: userName.value,
// 		email: userEmail.value,
// 		age: userAge.value,
// 	};
// 	console.log(data);
// }
// const container = document.querySelector(".js-container");
// console.log(container);
// document.addEventListener("keydown", onKey);
// container.addEventListener("keydown", onKey);

// function onKey(e) {
// 	console.log(e.code);
// 	if (e.code === "Escape") {
// 		// container.classList.toggle("tog");
// 		container.classList.toggle("tog");
// 	}
// }

// function onKey(e) {
// 	console.log(e);
// 	if (e.ctrlKey && e.code === "KeyC") {
// 		alert("Are you copy?");
// 		return;
// 	}
// }

// Заборона копіювання з клавіатури
//
// function onKey(e) {
// 	console.log(e);
// 	if (e.ctrlKey && e.code === "KeyC") {
// 		console.log("try copy");
// 		e.preventDefault();
// 		return;
// 	}
// }

const cars = [
	{
		id: 1,
		model: "Honda",
		type: "Civic",
		price: 12000,
		img: "https://motormag.pl/wp-content/uploads/2022/03/honda-civic-type-r-2020.jpg.webp",
	},
	{
		id: 2,
		model: "Audi",
		type: "Q7",
		price: 40000,
		img: "https://media.ed.edmunds-media.com/audi/q7/2022/oem/2022_audi_q7_4dr-suv_prestige_fq_oem_1_1280.jpg",
	},
	{
		id: 3,
		model: "BMW",
		type: "5 series",
		price: 50000,
		img: "https://upload.wikimedia.org/wikipedia/commons/5/52/BMW_G30_FL_IMG_5351.jpg",
	},
	{
		id: 4,
		model: "Honda",
		type: "Accord",
		price: 20000,
		img: "https://hips.hearstapps.com/hmg-prod/images/dsc01432-1677186780.jpg?crop=0.534xw:0.601xh;0.197xw,0.318xh&resize=768:*",
	},
	{
		id: 5,
		model: "Mercedes",
		type: "S class",
		price: 70000,
		number: "+48123456789",
		img: "https://www.topgear.com/sites/default/files/2022/03/1-Mercedes-S-Class-plug-in.jpg",
	},
	{
		id: 6,
		model: "Toyota",
		type: "Camry",
		price: 45000,
		img: "https://scene7.toyota.eu/is/image/toyotaeurope/CAM0001a_21-2:Medium-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
	},
];

// const list = document.querySelector(".js-list");
// list.addEventListener("click", onClick);
// const favouriteList = document.querySelector(".js-favourite-list");
// const form = document.querySelector(".js-search-form");
// form.addEventListener("submit", onSearch);
// // const markup = cars
// // 	.map(
// // 		({ id, model, type, price, number = "none", img }) =>
// // 			`<li data-id="${id}">
// // 	<img src="${img}" alt="${model}" />
// // 	<h2>Car: ${model}</h2>
// // 	<h3>Model: ${type}</h3>
// // 	<p>Price: ${price}</p>
// // 	<p>Number: ${number}</p>
// // </li>`,
// // 	)
// // 	.join("");

// // list.insertAdjacentHTML("beforeend", markup);
// // console.log(list);

// // function onSearch(e) {
// // 	e.preventDefault();
// // 	const form = e.currentTarget;
// // 	const { query, select } = form.elements;
// // 	const searchCar = cars.filter(item => item[select.value].toLowerCase() === query.value.trim().toLowerCase());
// // 	console.log(searchCar);
// // 	// 	console.dir(query.value);
// // 	// 	console.dir(select.value);
// // }

// function createMarkup(arr) {
// 	return arr
// 		.map(
// 			({ id, model, type, price, number = "none", img }) =>
// 				`<li data-id="${id}">
// 	<img src="${img}" alt="${model}" />
// 	<div class="js-favorite">⭐</div>
// 	<h2>Car: ${model}</h2>
// 	<h3>Model: ${type}</h3>
// 	<p>Price: ${price}</p>
// 	<p>Number: ${number}</p>

// </li>`,
// 		)
// 		.join("");
// }
// list.insertAdjacentHTML("beforeend", createMarkup(cars));

// function onSearch(e) {
// 	e.preventDefault();
// 	const form = e.currentTarget;
// 	const { query, select } = form.elements;
// 	const searchCar = cars.filter(item => item[select.value].toLowerCase() === query.value.trim().toLowerCase());
// 	list.innerHTML = createMarkup(searchCar);
// 	// 	console.dir(query.value);
// 	// 	console.dir(select.value);
// }

// function onClick(e) {
// 	if (e.target.classList.contains("js-favorite")) {
// 		e.target.classList.add("js-favourite-active");
// 		const { id } = e.target.closest("li").dataset;
// 		// console.dir(id);

// 		const { model, type } = cars.find(({ id: carId }) => carId === Number(id));
// 		// console.log(currentCar);
// 		addFavourite(`${model}, ${type}`);
// 	}
// }

// function addFavourite(currentCar) {
// 	favouriteList.insertAdjacentHTML("beforeend", `<li>${currentCar}</li>`);
// }
//
// const listEl = document.querySelector(".js-list");
// listEl.addEventListener("click", onClick);

// const formEl = document.querySelector(".js-form");
// formEl.addEventListener("submit", onSearch);

// const favoriteList = document.querySelector(".js-favorite-list");

// function makeSearchCar(arr) {
// 	return arr
// 		.map(
// 			({ id, model, type, price, number = "none", img }) => `<li data-id="${id}">
// 					<img src="${img}" alt="${model}">
// 					<div class='js-favorite'>⭐</div>
// 					<h2>Model: ${model}</h2>
// 					<h3>Type: ${type}</h3>
// 					<p>Price: ${price}</p>
// 					<p>Number: ${number}</p>
// 				</li>`,
// 		)
// 		.join("");
// }
// listEl.insertAdjacentHTML("beforeend", makeSearchCar(cars));

// function onSearch(event) {
// 	event.preventDefault();

// 	const form = event.currentTarget;

// 	console.dir(form);

// 	const { jsSelect, jsInput } = form.elements;
// 	const serchCar = cars.filter(car => car[jsSelect.value].toLowerCase() === jsInput.value.trim().toLowerCase());
// 	jsInput.value = "";
// 	listEl.innerHTML = makeSearchCar(serchCar);

// 	const resetBtn = document.querySelector(".js-reset");
// 	resetBtn.addEventListener("click", e => {
// 		if (e.target.classList.contains("js-reset")) {
// 			listEl.innerHTML = "";
// 			listEl.insertAdjacentHTML("beforeend", makeSearchCar(cars));
// 		}
// 	});
// }

// // const resetBtn = document.querySelector(".js-reset");
// // resetBtn.addEventListener("click", makeClearList);

// // function makeClearList(e) {
// // 	if (e.target.classList.contains("js-reset")) {
// // 		listEl.innerHTML = "";
// // 		listEl.insertAdjacentHTML("beforeend", makeSearchCar(cars));
// // 	}
// // }

// function onClick(event) {
// 	event.preventDefault();

// 	if (event.target.classList.contains("js-favorite")) {
// 		const { id } = event.target.closest("li").dataset;
// 		console.log(id);

// 		const { model, type } = cars.find(({ id: carId }) => carId === Number(id));
// 		addFavorite(`${model}, ${type}`);
// 	}
// }

// function addFavorite(event) {
// 	favoriteList.insertAdjacentHTML("beforeend", `<li>${event}</li>`);
// }

// const resetBtnFavorite = document.querySelector(".js-reset-favorite");
// resetBtnFavorite.textContent = "Reset";
// resetBtnFavorite.style.fontSize = "14px";
// resetBtnFavorite.addEventListener("click", removeFavorite);

// function removeFavorite(event) {
// 	favoriteList.innerHTML = "";
// }

//
//
// 						Task 1
// 						-------
//
// Ств. модільне вікно, яке буде відкриватись при кліку на кнопку в середині
// тега body. Мод.вікно має закриватись по кліку на напівпрозорий оверлейб
// та ні іконку хрестика в середині модалки
//
// const body = document.querySelector(".body");

// const LOGIN = "admin";
// const PASSWORD = "12345";

// const openBtn = document.querySelector("#js-open-btn");
// openBtn.addEventListener("click", onOpen);

// const overlayEl = document.querySelector(".js-modal-wraper .overlay");
// overlayEl.addEventListener("click", onClose);

// const modalWraperEl = document.querySelector(".js-modal-wraper");

// const closeBtn = document.querySelector(".js-modal-wraper .js-close-modal");
// closeBtn.addEventListener("click", onClose);

// const titleEl = document.querySelector(".js-title");

// function onOpen() {
// 	modalWraperEl.classList.remove("hidden");
// 	document.addEventListener("keydown", onCloseWithEscape);

// 	const errorEl = document.querySelector(".error");
// 	errorEl.classList.add("hidden");
// }

// function onClose() {
// 	modalWraperEl.classList.add("hidden");
// 	document.removeEventListener("keydown", onCloseWithEscape);
// 	form.reset();

// 	// if (!errorEl.classList.contains("hidden")) {
// 	// 	errorEl.classList.add("hidden");
// 	// }
// }

// //
// //

// //
// //
// // 						Task 2
// // 						------
// //
// // Додати в модальне вікно логіку закриття при натисканні на кнопку Escape
// //
// // document.addEventListener("keydown", onCloseWithEscape);

// function onCloseWithEscape(e) {
// 	if (e.code === "Escape" && !modalWraperEl.classList.contains("hidden")) {
// 		onClose();
// 	}
// }

// //
// //

// //
// //
// // 						Task 3.
// // 						-------
// //
// // Створити форму реєстрації в модалці користувача за допомогою js,
// // де буде 2 поля:
// // 1. Поле логін;
// // 2. Поле пароль;
// // Захаркодити вірні логін і пароль в Константах.
// // Додати логіку сабміта форми,при сабміті перевіряємо вірні логін і пароль.
// //
// // Умови:
// // 	1. Якщо логін і пароль співпадають, то видаляємо форму з документа
// // і показуємо h2 з текстом "Вхід успішний!"
// // 	2. Якщо логін і пароль не співпадають з даними констант, то
// //показуємо під формою помилку червоним кольором "Логін або пароль невірні!"
// //

// const markup = `
// <form action="submit" class="js-form">
// 	<label class="js-label">
// 		Name
// 		<input name="userName" />
// 	</label>
// 	<label class="js-label">
// 		Password
// 		<input name="userPassword" />
// 	</label>
// 	<button>Submit</button>
// 	<p class="error hidden">Логін або пароль не вірні!</p>
// </form>`;

// const modalEl = document.querySelector(".js-modal");
// modalEl.insertAdjacentHTML("beforeend", markup);

// const form = document.querySelector(".js-form");
// form.addEventListener("submit", onSubmit);

// function onSubmit(e) {
// 	e.preventDefault();
// 	const formEl = e.currentTarget;
// 	const errorEl = document.querySelector(".error");

// 	const { userName, userPassword } = formEl.elements;

// 	if (userName.value === LOGIN && userPassword.value === PASSWORD) {
// 		onClose();
// 		titleEl.classList.remove("hidden");
// 		openBtn.classList.add("hidden");
// 	} else {
// 		errorEl.classList.remove("hidden");
// 	}
// }
// //
// //
