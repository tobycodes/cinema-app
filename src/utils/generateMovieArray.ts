import { IMAGE_URL } from '../services/movieService';
import { Movie } from '../types/app';

const generateMovieArray = (results: Movie[]) => {
  return results
    .filter((x) => Boolean(x.backdrop_path || x.poster_path))
    .map((x) => ({
      ...x,
      imageUrl: IMAGE_URL + (x.backdrop_path || x.poster_path)
    }));
};

export default generateMovieArray;
