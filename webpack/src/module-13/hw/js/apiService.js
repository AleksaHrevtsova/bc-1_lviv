// // ================== Makohin Andrii =================== //
// const baseUrl = "https://pixabay.com/api/";

// export default {
//   page: 1,
//   query: "",
//   async fetcArticles() {
//     const keyapi = "16607986-426163c53c50d3a083010b3ce";
//     const requestparams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyapi}`;
//     const res = await fetch(baseUrl + requestparams);
//     const parseRes = await res.json();
//     this.incrementPage();
//     return parseRes.hits;
//   },
//   get searchQuerry() {
//     return this.query;
//   },
//   set searchQuerry(string) {
//     this.query = string;
//   },
//   incrementPage() {
//     this.page += 1;
//   },
//   resetPage() {
//     this.page = 1;
//   },
// };
// // ================== Makohin Andrii =================== //

// // ================== Musyka Marian =================== //
// import axios from "axios";

// export default {
//   page: 1,
//   searchQuery: "",
//   apiKey: "12458134-20b5567be8a652ea1761bced6",
//   async getImages() {
//     const result = await axios.get(
//       `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`,
//     );
//     this.page += 1;
//     return result.data.hits;
//   },
//   resetPage() {
//     this.page = 1;
//   },
//   incrPage() {
//     this.page += 1;
//   },
//   get query() {
//     return this.searchQuery;
//   },
//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   },
// };
// // ================== Musyka Marian =================== //


// ==================== Zdrok Vova ==================== //
const apiKey = '15400175-8ce22b8808542891276b8dfa1';

export default {
  searchQuery: '',
  page: 1,

  fetchArticles() {
    let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    const options = {
      headers: {
        Authorization: apiKey,
      },
    };

    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
// ==================== Zdrok Vova ==================== //

// ================== ============================ //
// const url = `https://pixabay.com/api/`;

// export default {
//   query: "",
//   page: 1,

//   async fetchMethod() {
//     const keyAPI = "10037714-6dae0183537b35f497fcbd99d";
//     const parametres = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyAPI}`;
//     // const fetch = fetch(url + parametres).then(responce => responce.json()).catch(error => console.log(error));
//     try {
//       const res = await fetch(url + parametres);
//       const data = await res.json();
//       this.incrementPage();
//       return data.hits;
//     } catch (e) {
//       console.error(e);
//     }
//   },
//   resetPage() {
//     this.page = 1;
//   },
//   incrementPage() {
//     this.page += 1;
//   },
//   get queryValue() {
//     return this.query;
//   },
//   set queryValue(val) {
//     return (this.query = val);
//   },
// };
