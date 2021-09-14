import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "cc4b7b1d614e277c525226c0bcba4df2",
    language: "en-US",
  },
});

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  getCastingActors: (id) => api.get(`tv/${id}/credits`),
  getSimilarTV: (id) =>
    api.get(`tv/${id}/similar`, {
      param: {
        page: 1,
      },
    }),
  getTVReviews: (id) =>
    api.get(`/tv/${id}/reviews`, {
      params: {
        page: 1,
      },
    }),
  getTVKeywords: (id) => api.get(`/tv/${id}/keywords`),
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  getCastingActors: (id) => api.get(`movie/${id}/credits`),
  getSimilarMovies: (id) =>
    api.get(`movie/${id}/similar`, {
      param: {
        page: 1,
      },
    }),
  getMovieReviews: (id) =>
    api.get(`/movie/${id}/reviews`, {
      params: {
        page: 1,
      },
    }),

  getMovieKeywords: (id) => api.get(`/movie/${id}/keywords`),
};
