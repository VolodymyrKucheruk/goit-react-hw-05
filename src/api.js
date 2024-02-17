import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDgxMmQ0ZGRlMDQzOWRiOWU1MDdjMjRlOTg2MDE4YiIsInN1YiI6IjY1OTZiZTk3ZWEzN2UwMDZmYTRjYzg4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WKqZgPnoGp2P8xbZoeAqDZBkaBQqCapPfZH558cNmsc",
  },
};

export const getTrendingMovies = async ({ abortController }) => {
  const response = await axios.get(`trending/movie/day`, options, {
    signal: abortController.signal,
  });
  return response.data.results;
};

export const getCasts = async ({movieId}) => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const getMovieDetails = async ({movieId}) => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};
