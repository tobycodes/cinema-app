import React from 'react';
import { useSelector } from 'react-redux';
import { AVATAR_URL, IMAGE_URL } from 'services/movieService';

import './index.scss';

const Crew = () => {
  const crew = useSelector(({ movies }) => movies.movieCredits.crew);

  return (
    <div className="cast">
      <div className="div-title">Crew</div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th className="head">Department</th>
            <th className="head">Job</th>
          </tr>
        </thead>
        <tbody>
          {crew.map(({ credit_id, profile_path, name, department, job }) => (
            <tr key={credit_id}>
              <td>
                <img src={profile_path ? IMAGE_URL + profile_path : AVATAR_URL} alt={name} />
              </td>
              <td>{name}</td>
              <td>{department}</td>
              <td>{job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crew;
