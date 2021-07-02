import React, { FC, useState, useEffect } from 'react';
import './index.scss';

import Content from '../content';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import { loadMoreMovies } from '../../redux/actions/movies';
import { MovieCategory } from '../../types/app';

interface IProps {
  loading: boolean;
  movieCategory: MovieCategory;
  page: number;
  loadMoreMovies: (type: string, page: number) => void;
}

const Main: FC<IProps> = ({ loading, movieCategory, page, loadMoreMovies }) => {
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
      ) : (
        <>
          <Content />
          <div style={{ height: '5px' }} ref={setDivRef}></div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ app: { loading }, movies: { page, movieCategory } }: any) => ({
  loading,
  page,
  movieCategory
});

const mapDispatchToProps = { loadMoreMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
