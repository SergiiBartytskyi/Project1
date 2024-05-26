const API_KEY = '42974ab6d1fb4d7e84e691874b9f300f';
const BASE_URL = 'https://newsapi.org/v2/';
const options = {
  headers: {
    // Вхід за допомогою заголовка 'Authorization'
    Authorization: API_KEY,
  },
};

export default class NewsApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();

        return articles;
      })
      .catch(error => console.log(error));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
