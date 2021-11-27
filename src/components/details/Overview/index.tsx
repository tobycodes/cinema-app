import React from 'react';
import { useSelector } from 'react-redux';

import { useMovieDetails } from 'hooks/useMovieDetails';
import { AVATAR_URL, COMPANY_AVATAR_URL, IMAGE_URL } from 'services/movieService';

import './index.scss';

const Overview = () => {
  const currentMovie = useSelector(({ movies }) => movies.currentMovie);
  const movieCast = useSelector(({ movies }) => movies.movieCredits.cast);
  const movieDetails = useMovieDetails(currentMovie);

  return (
    <div className="overview">
      <div className="overview-column-1">
        <div className="description">{currentMovie.overview}</div>

        <div className="cast">
          <div className="div-title">Cast</div>
          <table>
            <tbody>
              {movieCast.map(({ cast_id, profile_path, name, character }) => (
                <tr key={cast_id}>
                  <td>
                    <img src={profile_path ? IMAGE_URL + profile_path : AVATAR_URL} alt={name} />
                  </td>
                  <td>{name}</td>
                  <td>{character}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="overview-column-2">
        <div className="overview-detail">
          <h6>Production Companies</h6>
          {currentMovie.production_companies.map(({ name, logo_path }) => (
            <div key={name} className="product-company">
              <img src={logo_path ? IMAGE_URL + logo_path : COMPANY_AVATAR_URL} alt={name} />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="overview-detail">
          <h6>Language(s)</h6>
          <p>
            <span>{currentMovie.spoken_languages.map((l) => l.name).join(', ')}</span>
          </p>
        </div>

        {movieDetails
          .filter(({ value }) => Boolean(value))
          .map(({ id, name, value }) => {
            return (
              <div className="overview-detail" key={id}>
                <h6 style={{ textTransform: 'capitalize' }}>{name}</h6>
                <p>
                  <span>{value}</span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Overview;
