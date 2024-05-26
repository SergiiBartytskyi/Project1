// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

const { se, da, ar } = require('date-fns/locale');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUsers(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.insertAdjacentHTML('beforeend', markup);
// }
//
//

//
//
// масив із семи користувачів(всього їх 10), відсортованих за ім'ям (поле name)
// в алфавітному порядку.
//
// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUsers(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     'https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name'
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map(user => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join('');
//   userList.insertAdjacentHTML('beforeend', markup);
// }
//
//

//
//
//                              Клас URLSearchParams
//
// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
//
//

//
//
//                              HTTP-заголовки
//
// const headers = new Headers({
//   'Content-Type': 'application/json',
//   'X-Custom-Header': 'custom value',
// });

// headers.append('Content-Type', 'text/bash');
// headers.append('X-Custom-Header', 'custom value');
// headers.has('Content-Type'); // true
// headers.get('Content-Type'); // "text/bash"
// headers.set('Content-Type', 'application/json');
// headers.delete('X-Custom-Header');
//
//

//
//
//                              Пагінація
//
// const fetchPostsBtn = document.querySelector('.btn');
// const postList = document.querySelector('.posts');

// fetchPostsBtn.addEventListener('click', async () => {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   // Change the number of items in the group here
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts?_limit=5'
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p>${body}</p>
//         </li>`;
//     })
//     .join('');
//   postList.innerHTML = markup;
// }
//
//

//
//
// const fetchPostsBtn = document.querySelector('.btn');
// const postList = document.querySelector('.posts');

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let perPage = 10;

// fetchPostsBtn.addEventListener('click', async () => {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;

//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = 'Fetch more posts';
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: perPage,
//     _page: page,
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join('');
//   postList.insertAdjacentHTML('beforeend', markup);
// }
//
//

//
//
//                  Pokemon.api
//                  -----------
//
// import pokemonCardTpl from '../templates/pokemon-card.hbs';
// import API from './api-servise';
// import getRefs from './get-refs';

// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }
// function onFetchError(error) {
//   alert("Something is wrong! We didn't find your Pokemon!");
// }
//
//

//
//
//                          Пагінація
//                          ---------
//
// fetch(
//   'https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=red+car&image_type=photo'
// )
//   .then(response => response.json())
//   .then(data => console.log(data));
//
//

//
//
//                          NewsApi
//                          -------
//
// // import API from './api-servise';
// // import getRefs from './get-refs';

// // const refs = getRefs();
// const url =
//   'https://newsapi.org/v2/everything?q=war&language=en&pageSize=5&page=2';

// const options = {
//   headers: {
//     // Вхід за допомогою заголовка 'X-Api-Key'
//     // 'X-Api-Key': '42974ab6d1fb4d7e84e691874b9f300f',

//     // Вхід за допомогою заголовка 'Authorization'
//     Authorization: '42974ab6d1fb4d7e84e691874b9f300f',
//   },
// };

// fetch(url, options)
//   .then(response => response.json())
//   .then(data => console.log(data));

// Вхід за допомогою get запиту:
// fetch(
//   'https://newsapi.org/v2/everything?q=keyword&apiKey=42974ab6d1fb4d7e84e691874b9f300f'
// )
//   .then(response => response.json())
//   .then(data => console.log(data));
//
//

//
//
// import onSearch from './on-search';
// import articlesTpl from '../templates/articles.hbs';
// import NewsApiService from './newsapi-servise';
// import LoadMoreBtn from './components/load-more-btn';
// import LoadMoreBtn from './components/load-more-btn';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
//   // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
// };

// const newsApiService = new NewsApiService();
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });

// refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// function onSearch(e) {
//   e.preventDefault();

//   newsApiService.query = e.currentTarget.elements.query.value;

//   if (newsApiService.query === '') {
//     return alert('Enter a word to search!');
//   }

//   loadMoreBtn.show();
//   newsApiService.resetPage();
//   clearArtilesContainer();
//   fetchArticles();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();
//   newsApiService.fetchArticles().then(articles => {
//     appendArticlesMarkup(articles);
//     loadMoreBtn.enable();
//   });
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArtilesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }
//
//

//
//
//                      Рисіч
//                      -----
//
//                              https://www.weatherapi.com/
//                              ---------------------------
//
// const search = document.querySelector('.js-search');
// const list = document.querySelector('.js-list');

// search.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();
//   // console.log(e.currentTarget.elements);
//   const { query, days } = e.currentTarget.elements;
//   getWeather(query.value, days.value)
//     .then(data => (list.innerHTML = createMarkup(data.forecast.forecastday)))
//     .catch(err => console.log(err));
// }
// // ('http://api.weatherapi.com/v1/forecast.json?key=abc60ff0404547799a9142931242804&q=Lviv&days=5');

// function getWeather(city, days) {
//   const API_KEY = 'abc60ff0404547799a9142931242804';
//   const BASE_URL = 'http://api.weatherapi.com/v1';

//   return fetch(
//     `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
//   ).then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   });
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { icon, text },
//         },
//       }) => `<li>
//         <img src="${icon}" alt="${text}" />
//         <p>${text}</p>
//         <h2>${date}</h2>
//         <h3>${avgtemp_c}</h3>
//       </li>`
//     )
//     .join('');
// }
//
//

//
//
//                              Пагінація
//                              ---------
//
//
//
//                            the-one-api.dev
//                            ---------------
//
//
// iJ99EMSaFj9UADLKaWyK;
// const BASE_URL = 'https://the-one-api.dev/v2';
// const END_POINT = '/character';
// const KEY = 'iJ99EMSaFj9UADLKaWyK';

// function getCharacter() {
//   const param = new URLSearchParams({
//     limit: 30,
//     page: 1,
//   });

//   const option = {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${KEY}`,
//     },
//   };
//   fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(response =>
//     console.log(response)
//   );
// }

// getCharacter();
//
//

//
//
//                            https://developer.themoviedb.org/
//                            ---------------
//
//
// const target = document.querySelector('.js-guard');

// let options = {
//   root: null,
//   rootMargin: '200px',
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);

// function callback(e) {
//   console.log(e);
// }

// const BASE_URL = 'https://api.themoviedb.org/3';
// const END_POINT = '/trending/movie/day';
// const API_KEY = '5bb6cbc9de01728c1250b468e5ffda95';
// const list = document.querySelector('.js-list');
// const loadMore = document.querySelector('.js-load');

// let currentPage = 499;

// loadMore.addEventListener('click', onLoad);

// function onLoad() {
//   currentPage += 1;
//   getTrending(currentPage)
//     .then(data => {
//       list.insertAdjacentHTML('beforeend', createMarkup(data.results));

//       if (data.page === data.total_pages) {
//         loadMore.hidden = true;
//       }
//     })
//     .catch(err => console.log(err));
// }
// // const KEY =
// //   '5bb6cbc9de01728c1250b468e5ffda95eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Y2JjOWRlMDE3MjhjMTI1MGI0NjhlNWZmZGE5NSIsInN1YiI6IjY2MzhiZWZlYzkwNTRmMDEyYTkxNGU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZXaOouvq_7x8P0XTnuRLWcFz7R52amATRlfEF4TMWY';

// function getTrending(page = 1) {
//   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }

//       return response.json();
//     }
//   );

//   // const option = {
//   //   method: 'GET',
//   //   header: {
//   //     Authorization: `Bearer ${KEY}`,
//   //   },
//   // };

//   // fetch(`${BASE_URL}${END_POINT}`, option).then(response => {
//   //   if (!response.ok) {
//   //     throw new Error(response.statusText);
//   //   }

//   //   return response.json();
//   // });
// }

// getTrending()
//   .then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     observer.observe(target);
//     if (data.page !== data.total_pages) {
//       loadMore.hidden = false;
//     }
//   })
//   .catch(err => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title }) => `
//   <li>
//   <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
//   <h2>${title}</h2>
//   </li>`
//     )
//     .join('');
// }

// let counter = 0;
// document.addEventListener('scroll', onScroll);

// function onScroll() {
//   counter += 1;
//   console.log(counter);
// }
//
//

//
//
//                  Intersection Observer API
//                  ------------------------
//
// const target = document.querySelector('.js-guard');
// const BASE_URL = 'https://api.themoviedb.org/3';
// const END_POINT = '/trending/movie/day';
// const API_KEY = '5bb6cbc9de01728c1250b468e5ffda95';
// const list = document.querySelector('.js-list');
// let currentPage = 498;

// let options = {
//   root: null,
//   rootMargin: '300px',
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(onLoad, options);

// function onLoad(entries, observer) {
//   entries.forEach(entry => {
//     // Each entry describes an intersection change for one observed
//     // target element:
//     //   entry.boundingClientRect
//     //   entry.intersectionRatio
//     //   entry.intersectionRect
//     //   entry.isIntersecting
//     //   entry.rootBounds
//     //   entry.target
//     //   entry.time
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       getTrending(currentPage)
//         .then(data => {
//           list.insertAdjacentHTML('beforeend', createMarkup(data.results));
//           if (data.page === data.total_pages) {
//             observer.unobserve(target);
//           }
//         })
//         .catch(err => console.log(err));
//     }
//   });
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title }) => `
//   <li>
//   <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
//   <h2>${title}</h2>
//   </li>`
//     )
//     .join('');
// }

// function getTrending(page = 1) {
//   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }

//       return response.json();
//     }
//   );
// }

// getTrending()
//   .then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     observer.observe(target);
//   })
//   .catch(err => console.log(err));
//
//

//
//
//                          Бардичев
//                          --------
//
// const searchBtnRef = document.getElementById('searchCtr');
// const searchField = document.getElementById('searchNewsField');
// const articlesContainer = document.getElementById('articles');

// const API_KEY = '42974ab6d1fb4d7e84e691874b9f300f';

// searchBtnRef.addEventListener('click', onClick);

// function onClick(e) {
//   getNews({ query: searchField.value });
// }

// function getNews({ query }) {
//   const BASE_URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

//   fetch(BASE_URL)
//     .then(response => {
//       if (response.status !== 200) {
//         throw new Error(response.message);
//       }
//       return response.json();
//     })
//     .then(({ articles }) => {
//       articlesContainer.innerHTML = '';
//       articlesContainer.insertAdjacentHTML('beforeend', createNews(articles));
//     })
//     .catch(err => console.log(err));
// }
// function createNews(arr) {
//   return arr
//     .map(
//       ({ title, description, url, urlToImage }) => `<article class="news">
//         <img src="${urlToImage}" alt="${title}" />
//         <h2>${title}</h2>
//         <p>${description}</p>
//         <a href="${url}">Click</a>
//       </article>`
//     )
//     .join('');
// }

//
//
//                                  AXIOS refactoring
//                                  -----------------
//
// import axios from 'axios';

// const searchBtnRef = document.getElementById('searchCtr');
// const searchField = document.getElementById('searchNewsField');
// const articlesContainer = document.getElementById('articles');
// // const target = document.querySelector('.js-guard');

// const API_KEY = '42974ab6d1fb4d7e84e691874b9f300f';

// // const API = axios.create({
// //   baseURL: 'https://some-domain.com/api/',
// //   timeout: 1000,
// //   headers: { 'x-api-key': API_KEY },
// // });

// searchBtnRef.addEventListener('click', onClick);

// function onClick(e) {
//   getNewsAxios({ query: searchField.value });
// }

// function getNewsAxios({ query }, page = 1) {
//   const BASE_URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${page}`;

//   axios
//     .get(BASE_URL)
//     .then(res => res.data)
//     .then(({ articles }) => {
//       articlesContainer.innerHTML = '';
//       articlesContainer.insertAdjacentHTML('beforeend', createNews(articles));
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {});
// }

// function createNews(arr) {
//   return arr
//     .map(
//       ({ title, description, url, urlToImage }) => `<article class="news">
//         <img src="${urlToImage}" alt="${title}" />
//         <h2>${title}</h2>
//         <p>${description}</p>
//         <a href="${url}">Click</a>
//       </article>`
//     )
//     .join('');
// }
//
//

//
//
//                                          Refactoring with IntersectionObserver
//                                          -------------------------------------
//
// const target = document.querySelector('.js-guard');
// const searchBtnRef = document.getElementById('searchCtr');
// const searchField = document.getElementById('searchNewsField');
// const articlesContainer = document.getElementById('articles');
// let currentPage = 1;
// const API_KEY = '42974ab6d1fb4d7e84e691874b9f300f';

// let options = {
//   root: null,
//   rootMargin: '300px',
//   threshold: 1.0,
// };
// let observer = new IntersectionObserver(onLoad, options);

// searchBtnRef.addEventListener('click', onClick);

// function onClick(e) {
//   getNews()
//     .then(({ articles }) => {
//       articlesContainer.innerHTML = '';
//       articlesContainer.insertAdjacentHTML('beforeend', createNews(articles));
//       observer.observe(target);
//     })
//     .catch(err => console.log(err));
// }

// function onLoad(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       getNews(currentPage)
//         .then(data => {
//           console.log(data.articles);
//           articlesContainer.insertAdjacentHTML(
//             'beforeend',
//             createNews(data.articles)
//           );
//           if (data.articles.length === 0) {
//             observer.unobserve(target);
//           }
//         })
//         .catch(err => console.log(err));
//     }
//   });
// }

// function getNews(page = 1) {
//   const query = searchField.value;
//   const BASE_URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${page}`;

//   return fetch(BASE_URL).then(response => {
//     if (response.status !== 200) {
//       throw new Error(response.message);
//     }
//     return response.json();
//   });
// }

// function createNews(arr) {
//   return arr
//     .map(
//       ({ title, description, url, urlToImage }) => `<article class="news">
//         <img src="${urlToImage}" alt="${title}" />
//         <h2>${title}</h2>
//         <p>${description}</p>
//         <a href="${url}">Click</a>
//       </article>`
//     )
//     .join('');
// }
//
//

//
//
//                                                Refactoring with debounce without btn
//                                                ------------------------------------
//
const debounce = require('lodash.debounce');

const target = document.querySelector('.js-guard');
const searchField = document.getElementById('searchNewsField');
const articlesContainer = document.getElementById('articles');
let currentPage = 1;
const API_KEY = '42974ab6d1fb4d7e84e691874b9f300f';

let options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};
let observer = new IntersectionObserver(onLoad, options);

searchField.addEventListener('input', debounce(onSearch, 1000));

function onSearch() {
  getNews()
    .then(({ articles }) => {
      articlesContainer.innerHTML = '';
      articlesContainer.insertAdjacentHTML('beforeend', createNews(articles));
      observer.observe(target);
    })
    .catch(err => console.log(err));
}

function onLoad(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      currentPage += 1;
      getNews(currentPage)
        .then(data => {
          console.log(data.articles);
          articlesContainer.insertAdjacentHTML(
            'beforeend',
            createNews(data.articles)
          );
          if (data.articles.length === 0) {
            observer.unobserve(target);
          }
        })
        .catch(err => console.log(err));
    }
  });
}

function getNews(page = 1) {
  const query = searchField.value;
  const BASE_URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${page}`;

  return fetch(BASE_URL).then(response => {
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    return response.json();
  });
}

function createNews(arr) {
  return arr
    .map(
      ({ title, description, url, urlToImage }) => `<article class="news">
        <img src="${urlToImage}" alt="${title}" />
        <h2>${title}</h2>
        <p>${description}</p>
        <a href="${url}">Click</a>
      </article>`
    )
    .join('');
}
//
//
//
//

//
//
//                          Pagination
//                          ----------
//
// import bootstrap from 'bootstrap';
// import '../sass/index.scss';
// import axios from 'axios';

// const searchBtnRef = document.getElementById('searchCtr');
// const searchField = document.getElementById('searchNewsField');
// const articlesContainer = document.getElementById('articles');
// const paginationContainer = document.getElementById('pagination');
// const loadMoreBtn = document.getElementById('loadMore');

// const API_KEY = '42974ab6d1fb4d7e84e691874b9f300f';
// const pageSize = 9;
// let currentPage = 1;
// let totalPages = undefined;

// searchBtnRef.addEventListener('click', onClick);
// function onClick() {
//   getNewsAxios({ query: searchField.value }).then(
//     ({ articles, totalResults }) => {
//       render(articlesContainer, createNews(articles));

//       const pageElements = calculatePagination(totalResults);
//       render(paginationContainer, pageElements);
//     }
//   );
// }

// paginationContainer.addEventListener('click', onPageClick);
// function onPageClick(e) {
//   e.preventDefault();

//   if (!e.target.classList.contains('page-link')) {
//     return;
//   }

//   currentPage = e.target.dataset.page;

//   getNewsAxios({ query: searchField.value }).then(
//     ({ articles, totalResults }) =>
//       render(articlesContainer, createNews(articles))
//   );
// }

// loadMoreBtn.addEventListener('click', onLoadMoreClick);
// function onLoadMoreClick() {
//   currentPage += 1;

//   getNewsAxios({ query: searchField.value }).then(
//     ({ articles, totalResults }) =>
//       articlesContainer.insertAdjacentHTML('beforeend', createNews(articles))
//   );
// }

// function calculatePagination(totalResult) {
//   totalPages = Math.floor((totalResult > 100 ? 100 : totalResult) / pageSize);

//   let pagesElements = '';

//   for (let i = 1; i <= totalPages; i += 1) {
//     pagesElements += `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
//   }

//   return pagesElements;
// }

// function getNewsAxios({ query }) {
//   const BASE_URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${currentPage}`;

//   return axios
//     .get(BASE_URL)
//     .then(res => res.data)
//     .then(({ articles, totalResults }) => {
//       return { articles, totalResults };
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {});
// }

// function createNews(arr) {
//   return arr
//     .map(
//       ({ title, description, url, urlToImage }) => `<article class="news">
//         <img src="${urlToImage}" alt="${title}" />
//         <h2>${title}</h2>
//         <p>${description}</p>
//         <a href="${url}">Click</a>
//       </article>`
//     )
//     .join('');
// }

// function render(container, content) {
//   container.innerHTML = '';
//   container.insertAdjacentHTML('beforeend', content);
// }
//
//

//
//
//                              ToDoList
//                              --------
//
// const container = document.querySelector('.input-container');
// const todoList = document.querySelector('.todo-list');

// const markup = `<input type="text" class="input-js">
//         <button type="button" class="box-green">Add to-do</button>
//         <button type="button" class="box-red">Delete to-do</button>`;

// container.insertAdjacentHTML('beforeend', markup);

// const textInput = document.querySelector('.input-js');
// const addBtn = document.querySelector('.box-green');
// const removeBtn = document.querySelector('.box-red');

// addBtn.addEventListener('click', onClick);
// function onClick() {
//   localStorage.setItem('toDo', textInput.value);
// }
//
//

//
//
//
