import { AxiosResponse } from 'axios';

import store from 'redux/store';

export type ErrorObject = Partial<{
  message: string;
  statusCode: string;
}>;

export type Res<T> = AxiosResponse<T>;

export type PaginatedRecord<T> = {
  results: T[];
  page: number;
  total_pages: number;
  id?: number;
  total_results?: number;
};

export type PaginatedRes<T> = Res<PaginatedRecord<T>>;

export type RootState = ReturnType<typeof store.getState>;

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genres: MovieGenre[];
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  imageUrl: string;
  homepage: string | null;
  imdb_id: string | null;
  status: string;
  tagline: string | null;
  runtime: number;
  budget: number;
  revenue: number;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  cast: MovieCast[];
  crew: MovieCrew[];
};

export type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  iso_639_1: string;
  name: string;
};

export type MovieCategory = {
  name: string;
  type: string;
  id: number;
  iconClass?: string;
};

export type MovieGenre = {
  id: number;
  name: string;
};

export type MovieCast = {
  cast_id: number;
  character: string;
  credit_id: string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type MovieCrew = {
  credit_id: string;
  department: string;
  adult: boolean;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type MovieImage = {
  file_path: string;
  width: number;
  height: number;
  iso_639_1: string | null;
  aspect_ratio: number;
  vote_average: number;
  vote_count: number;
};

export type MovieVideo = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type?: string;
  official?: boolean;
  published_at?: string;
};

export type MovieReviewAuthor = {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
};

export type MovieReview = {
  id: number;
  url: string;
  author: string;
  content: string;
  created_at: string;
  updated_at: string;
  author_details: MovieReviewAuthor;
};

export type MovieImages = {
  id: number;
  backdrops: MovieImage[];
  posters: MovieImage[];
};

export type MovieVideos = {
  id: number;
  results: Array<MovieVideo>;
};

export type MovieCredits = {
  id: number;
  cast: MovieCast[];
  crew: MovieCrew[];
};
