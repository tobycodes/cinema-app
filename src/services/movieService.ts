import {
  MovieCredits,
  Movie,
  MovieImages,
  MovieVideos,
  MovieReview,
  Res,
  PaginatedRes
} from './../types/app';
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export const AVATAR_URL = 'http://placehold.it/54x81';

export const COMPANY_AVATAR_URL = 'http://placehold.it/30x30';

const API_KEY = process.env.REACT_APP_API_SECRET_KEY;

const REQUEST_URL = (type: string, page = 1) =>
  `${API_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`;

const SEARCH_MOVIE_URL = (query: string) =>
  `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;

const requestMovies = async (type: string, page?: number) => {
  const { data } = await axios.get<any, PaginatedRes<Movie>>(REQUEST_URL(type, page));

  return data;
};

const searchMovies = async (query: string) => {
  const { data } = await axios.get<any, PaginatedRes<Movie>>(SEARCH_MOVIE_URL(query));

  return data;
};

const getMovie = async (id: number) => {
  const { data } = await axios.get<any, Res<Movie>>(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

const getMovieCredits = async (id: number) => {
  const { data } = await axios.get<any, Res<MovieCredits>>(
    `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );

  return data;
};

const getMovieImages = async (id: number) => {
  const { data } = await axios.get<any, Res<MovieImages>>(
    `${API_URL}/movie/${id}/images?api_key=${API_KEY}`
  );

  return data;
};

const getMovieVideos = async (id: number) => {
  const { data } = await axios.get<any, Res<MovieVideos>>(
    `${API_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );

  return data;
};

const getMovieReviews = async (id: number) => {
  const { data } = await axios.get<any, PaginatedRes<MovieReview>>(
    `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return data;
};

export default {
  searchMovies,
  requestMovies,
  getMovie,
  getMovieCredits,
  getMovieImages,
  getMovieVideos,
  getMovieReviews
};
