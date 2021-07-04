import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const API_KEY = process.env.REACT_APP_API_SECRET_KEY;

export const REQUEST_URL = (type: string, page = 1) =>
  `${API_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`;

export const SEARCH_MOVIE_URL = (query: string) =>
  `${API_URL}/search/movie/?api_key=${API_KEY}&language=en-US&query=${query}`;

export const requestMovies = async (type: string, page?: number) => {
  const { data } = await axios.get(REQUEST_URL(type, page));

  return data;
};

export const searchMovies = async (query: string) => {
  const { data } = await axios.get(SEARCH_MOVIE_URL(query));

  return data;
};

export default { searchMovies, requestMovies };
