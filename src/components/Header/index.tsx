import React, { useEffect, useState } from 'react';
import './index.scss';
import logo from '../../assets/logo.svg';
import { FC } from 'react';

const HEADER_LIST = [
  { id: 1, iconClass: 'fas fa-film', name: 'Now Playing', type: 'now_playing' },
  { id: 2, iconClass: 'fas fa-fire', name: 'Populer', type: 'popular' },
  { id: 3, iconClass: 'fas fa-star', name: 'Top Rated', type: 'top_rated' },
  { id: 4, iconClass: 'fas fa-plus-square', name: 'Upcoming', type: 'upcoming' }
];

const Header: FC = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggle = () => setShowMobileNav((state) => !state);

  useEffect(() => {
    document.body.style.overflow = showMobileNav ? 'hidden' : 'auto';
  }, [showMobileNav]);

  return (
    <div className="header-nav-wrapper">
      <div className="header-bar"></div>
      <div className="header-navbar">
        <div className="header-image">
          <img src={logo} alt="Cinema" />
        </div>
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
            <li key={item.id} className="header-nav-item">
              <span className="header-list-name">
                <i className={item.iconClass}></i>
              </span>
              &nbsp;
              <span className="header-list-name">{item.name}</span>
            </li>
          ))}

          <input className="search-input" type="text" placeholder="Search for a movie" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
