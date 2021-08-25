import React from 'react';
import numberFormatter from 'utils/numberFormatter';

import './index.scss';

const detailItems = [
  {
    id: 0,
    name: 'Tagline',
    value: 'Part of the journey is the end'
  },
  {
    id: 1,
    name: 'Budget',
    value: `${numberFormatter(356000000, 1)}`
  },
  {
    id: 2,
    name: 'Revenue',
    value: `${numberFormatter(28000000000, 1)}`
  },
  {
    id: 3,
    name: 'Status',
    value: 'Released'
  },
  {
    id: 4,
    name: 'Release Date',
    value: '2019-04-24'
  },
  {
    id: 5,
    name: 'Run Time',
    value: '181 min'
  }
];

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-column-1">
        <div className="description">This is a description about the movie</div>

        <div className="cast">
          <div className="div-title">Cast</div>
          <table>
            <tbody>
              <tr>
                <td>
                  <img src="http://placehold.it/54x81" alt="" />
                </td>
                <td>Robert Downing Jr.</td>
                <td>Iron Man</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="overview-column-2">
        <div className="overview-detail">
          <h6>Production Companies</h6>
          <div className="product-company">
            <img src="http://placehold.it/30x30" alt="" />
            <span>Marvel</span>
          </div>
        </div>
        <div className="overview-detail">
          <h6>Language(s)</h6>
          <p>
            <a href="!#">English</a>
          </p>
        </div>

        {detailItems.map((data) => (
          <div className="overview-detail" key={data.id}>
            <h6>{data.name}</h6>
            <p>
              <a href="!#">{data.value}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
