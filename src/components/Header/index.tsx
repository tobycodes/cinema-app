import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';

import logo from 'assets/logo.svg';
import {
  getMovies,
  getSearchResults,
  setMovieCategory,
  setSearchQuery
} from 'redux/actions/movies';
import { MovieCategory } from 'types/app';

import './index.scss';

const HEADER_LIST = [
  { id: 1, iconClass: 'fas fa-film', name: 'Now Playing', type: 'now_playing' },
  { id: 2, iconClass: 'fas fa-fire', name: 'Popular', type: 'popular' },
  { id: 3, iconClass: 'fas fa-star', name: 'Top Rated', type: 'top_rated' },
  { id: 4, iconClass: 'fas fa-plus-square', name: 'Upcoming', type: 'upcoming' }
];

interface IProps {
  movieCategory: MovieCategory;
  searchQuery: string;
  getMovies: (type: string, page?: number) => void;
  setMovieCategory: (movieCategory: MovieCategory) => void;
  setSearchQuery: (query: string) => void;
  getSearchResults: (query: string) => void;
}

const Header: FC<IProps> = ({
  movieCategory,
  searchQuery,
  getMovies,
  setMovieCategory,
  setSearchQuery,
  getSearchResults
}) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const debouncedSearch = useDebouncedCallback(getSearchResults, 500);

  const toggle = () => setShowMobileNav((state) => !state);

  useEffect(() => {
    getMovies(movieCategory.type);
  }, [getMovies, movieCategory.type]);

  useEffect(() => {
    document.body.style.overflow = showMobileNav ? 'hidden' : 'auto';
  }, [showMobileNav]);

  return (
    <div className="header-nav-wrapper">
      <div className="header-bar"></div>
      <div className="header-navbar">
        <Link to="/">
          <div className="header-image">
            <img src={logo} alt="Cinema" />
          </div>
        </Link>
        <div
          className={`header-menu-toggle${showMobileNav ? ' is-active' : ''}`}
          id="header-mobile-menu"
          onClick={toggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`header-nav${showMobileNav ? ' header-mobile-nav' : ''}`}>
          {HEADER_LIST.map((item) => (
            <li
              key={item.id}
              className={`header-nav-item${item.id === movieCategory.id ? ' active-item' : ''}`}
              onClick={() => setMovieCategory(item)}
            >
              <span className="header-list-name">
                <i className={item.iconClass}></i>
              </span>
              &nbsp;
              <span className="header-list-name">{item.name}</span>
            </li>
          ))}

          <input
            className="search-input"
            type="text"
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={(e) => {
              const value = e.target.value;

              setSearchQuery(value);
              debouncedSearch(value);
            }}
          />
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ movies: { movieCategory, searchQuery } }: any) => ({
  movieCategory,
  searchQuery
});
const mapDispatchToProps = { getMovies, setMovieCategory, setSearchQuery, getSearchResults };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
