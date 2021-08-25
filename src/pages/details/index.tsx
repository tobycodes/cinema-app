import React, { FC } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Crew from 'components/details/Crew';
import Media from 'components/details/Media';
import Overview from 'components/details/Overview';
import Reviews from 'components/details/Reviews';
import Tabs from 'components/details/Tabs';
import Rating from 'components/Rating';

import './index.scss';

interface IProps {
  props: any;
  bgImageUrl: string;
}

const Details: FC<IProps> = ({ bgImageUrl }) => {
  const { params } = useRouteMatch<{ id: string }>();

  return (
    <div>
      <h1>Details page. ID: {params.id}</h1>
      <div className="movie-container">
        <div className="movie-bg" style={{ backgroundImage: `url(${bgImageUrl})` }}></div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img src={bgImageUrl} alt="" />
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                Avengers <span>2020-12-03</span>
              </div>
              <div className="movie-genres">
                <ul className="genres">
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Sci-fi</li>
                </ul>
              </div>
              <div className="rating">
                <Rating rating={7.5} totalStars={10} />
                &nbsp;
                <span>6.5</span>
                <p>(200) reviews</p>
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
