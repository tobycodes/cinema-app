import { useEffect, useState } from 'react';
import { Movie } from 'types/app';
import numberFormatter from 'utils/numberFormatter';

type MovieDetail = {
  id: number;
  name: string;
  value: string | number | null;
};

export const useMovieDetails = (movie: Movie) => {
  const [movieDetails, setMovieDetails] = useState<Array<MovieDetail>>([]);

  useEffect(() => {
    const details = [
      {
        id: 0,
        name: 'Tagline',
        value: movie.tagline
      },
      {
        id: 1,
        name: 'Budget',
        value: numberFormatter(movie.budget, 1)
      },
      {
        id: 2,
        name: 'Revenue',
        value: numberFormatter(movie.revenue, 1)
      },
      {
        id: 3,
        name: 'Status',
        value: movie.status
      },
      {
        id: 4,
        name: 'Release Date',
        value: movie.release_date
      },
      {
        id: 5,
        name: 'Run Time',
        value: `${movie.runtime} min`
      }
    ];

    setMovieDetails(details);
  }, [movie]);

  return movieDetails;
};
