// // Task 1
// const list = document.getElementById('categories');
// console.log('Number of categories: ', list.children.length);

// [...list.children].forEach(category => {
//   console.log('Category: ', category.firstElementChild.textContent);

//   console.log('Elements: ', category.lastElementChild.children.length);
// });

// // Task 2
// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     alt: 'Alpine Spring Meadows',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     alt: 'Nature Landscape',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     alt: 'Lighthouse Coast Sea',
//   },
// ];

// const gallery = document.querySelector('.gallery');
// function render(arr) {
//   return arr
//     .map(
//       ({ url, alt }) =>
//         `<li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__img"></li>`
//     )
//     .join('');
// }
// gallery.insertAdjacentHTML('beforeend', render(images));

// // Task 3
// const input = document.getElementById('name-input');
// const output = document.getElementById('name-output');

// input.addEventListener('input', onInput);
// function onInput(e) {
//   const inputValue = e.currentTarget.value.trim();
//   console.log(inputValue);
//   if (!inputValue) {
//     return (output.textContent = 'Anonymous');
//   }
//   return (output.textContent = inputValue);
// }

// // Task 4
// const form = document.querySelector('.login-form');
// form.addEventListener('submit', onSubmit);
// function onSubmit(e) {
//   e.preventDefault();
//   const form = e.currentTarget;
//   const { email, password } = form.elements;

//   if (!email.value || !password.value) {
//     alert('All form fields must be filled in');
//     return;
//   }

//   console.log({
//     email: email.value,
//     password: password.value,
//   });
//   form.reset();
// }

// // Task 5
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const body = document.body;
// const btn = document.querySelector('.change-color');
// const span = document.querySelector('.color');

// btn.addEventListener('click', onChangeColor);
// function onChangeColor() {
//   body.style.backgroundColor = getRandomHexColor();
//   span.textContent = body.style.backgroundColor;
// }

// Task 6
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const input = document.querySelector('input');
// const createBtn = document.querySelector('button[data-create]');
// const destroyBtn = document.querySelector('button[data-destroy]');
// const boxesEl = document.getElementById('boxes');
// createBtn.addEventListener('click', createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//   amount = input.value;
//   let value = 30;
//   const boxes = [];

//   if (amount < 1 || amount > 100) {
//     return;
//   }

//   for (let i = 0; i < amount; i += 1) {
//     const div = document.createElement('div');

//     div.style.width = `${value}px`;
//     div.style.height = `${value}px`;
//     div.style.backgroundColor = getRandomHexColor();
//     boxes.push(div);

//     value += 10;
//   }

//   boxesEl.innerHTML = '';
//   boxesEl.append(...boxes);
//   input.value = '';
// }

// function destroyBoxes() {
//   boxesEl.innerHTML = '';
// }
