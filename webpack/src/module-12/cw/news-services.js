const apiKey = `0b94267f02e949528f5e2039825f3f98`;

export default {
  searchQuery: ``,
  pageSize: 10,
  page: 1,
  fetchArticles() {
    const url = `http://newsapi.org/v2/everything?q=${this.query}&language=en&pageSize=${this.pageSize}&page=${this.page}`;
    const options = {
      headers: {
        Authorization: apiKey,
      },
    };
    return fetch(url, options)
      .then((res) => res.json())
      .then(({ articles }) => {
        this.incrementPage();

        return articles;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page = +1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
