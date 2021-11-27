import React, { FC } from 'react';

import './index.scss';

interface IProps {
  label: string;
  isActive: boolean;
  onTabClick: (label: string) => void;
}

const Tab: FC<IProps> = ({ label, isActive, onTabClick }) => {
  return (
    <li
      className={`tab-list-item${isActive ? ' tab-list-active' : ''}`}
      onClick={() => onTabClick(label)}
    >
      {label}
    </li>
  );
};

export default Tab;
