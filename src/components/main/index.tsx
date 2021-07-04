import React, { FC, useState, useEffect } from 'react';
import './index.scss';

import Content from '../content';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import { loadMoreMovies } from '../../redux/actions/movies';
import { Movie, MovieCategory } from '../../types/app';
import SearchView from '../SearchView';

interface IProps {
  loading: boolean;
  movieCategory: MovieCategory;
  page: number;
  searchQuery: string;
  searchResults: Movie[];
  loadMoreMovies: (type: string, page: number) => void;
}

const Main: FC<IProps> = ({
  loading,
  movieCategory,
  page,
  searchQuery,
  searchResults,
  loadMoreMovies
}) => {
  const [divRef, setDivRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef) {
      const observer = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          loadMoreMovies(movieCategory.type, page + 1);
        }
      });

      observer.observe(divRef);

      return () => {
        observer.disconnect();
      };
    }
  }, [page, loadMoreMovies, movieCategory, divRef]);

  return (
    <div className="main">
      {loading ? (
        <Spinner />
      ) : searchQuery && searchResults.length ? (
        <SearchView />
      ) : (
        <>
          <Content />
          <div style={{ height: '5px' }} ref={setDivRef}></div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({
  app: { loading },
  movies: { page, movieCategory, searchQuery, searchResults }
}: any) => ({
  loading,
  page,
  movieCategory,
  searchQuery,
  searchResults
});

const mapDispatchToProps = { loadMoreMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
