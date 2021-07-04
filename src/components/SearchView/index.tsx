import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Movie } from '../../types/app';
import './index.scss';
import Grid from '../Grid';

interface IProps {
  searchQuery: string;
  searchResults: Movie[];
}

const SearchResults: FC<IProps> = ({ searchResults, searchQuery }) => {
  return (
    <div className="search-keyword">
      <div className="grid-search-title">
        <span className="grid-text-1">
          Your search keyword: <span className="grid-text-2">{searchQuery}</span>
        </span>
      </div>
      <Grid movieList={searchResults} />
    </div>
  );
};

const stateProps = ({ movies: { searchQuery, searchResults } }: any) => ({
  searchResults,
  searchQuery
});

export default connect(stateProps)(SearchResults);
