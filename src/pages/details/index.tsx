import React, { FC, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
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

interface IProps {
  props: any;
  bgImageUrl: string;
}

const Details: FC<IProps> = () => {
  const currentMovie = useSelector(({ movies }) => movies.currentMovie);
  const loading = useSelector(({ app }) => app.loading);

  console.log({ currentMovie });

  const { params } = useRouteMatch<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) dispatch(getMovieDetails(+params.id));

    return () => {
      dispatch(clearCurrentMovieDetails());
    };
  }, [params.id, dispatch]);

  const bgImage = IMAGE_URL + currentMovie.backdrop_path;
  const posterImage = IMAGE_URL + currentMovie.poster_path;

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
            {loading ? <Spinner /> : <img src={posterImage || bgImage} alt="" />}
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

const stateProps = () => ({
  bgImageUrl:
    'https://images.unsplash.com/photo-1622495548018-4fc6f78d7bef?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
});

export default connect(stateProps)(Details);
