import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Crew from 'components/details/Crew';
import Media from 'components/details/Media';
import Overview from 'components/details/Overview';
import Reviews from 'components/details/Reviews';
import Tabs from 'components/details/Tabs';
import Rating from 'components/Rating';
import Spinner from 'components/Spinner';

import { getMovieDetails, clearCurrentMovieDetails } from 'redux/actions/movies';

import './index.scss';
import { IMAGE_URL } from 'services/movieService';

const Details: FC = () => {
  const currentMovie = useSelector(({ movies }) => movies.currentMovie);
  const loading = useSelector(({ app }) => app.loading);

  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getMovieDetails(id));

    return () => {
      dispatch(clearCurrentMovieDetails());
    };
  }, [id, dispatch]);

  const bgImage = IMAGE_URL + currentMovie.backdrop_path;
  const posterImage = IMAGE_URL + currentMovie.poster_path;

  if (loading) return <Spinner />;

  if (!currentMovie.overview) return null;

  return (
    <div>
      <h1>Details page. ID: {currentMovie.id}</h1>
      <div className="movie-container">
        <div
          className="movie-bg"
          style={{ backgroundImage: `url(${bgImage || posterImage})` }}
        ></div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img src={posterImage || bgImage} alt="" />
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                {currentMovie.title} <span>{currentMovie.release_date}</span>
              </div>
              <div className="movie-genres">
                <ul className="genres">
                  {currentMovie.genres?.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
              <div className="rating">
                <Rating rating={currentMovie.vote_average} totalStars={10} />
                &nbsp;
                <span>{currentMovie.vote_average}</span>
                <p>({currentMovie.vote_count}) reviews</p>
              </div>
              <Tabs>
                <Child label="Overview">
                  <Overview />
                </Child>
                <Child label="Crew">
                  <Crew />
                </Child>
                <Child label="Media">
                  <Media />
                </Child>
                <Child label="Reviews">
                  <Reviews />
                </Child>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Child: FC<{ label: string }> = ({ children }) => {
  return <div>{children}</div>;
};

export default Details;
