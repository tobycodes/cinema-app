import React, { FC } from 'react';
import './index.scss';

const Spinner: FC = () => {
  return (
    <div className="spinner">
      <div className="bounce bounce--1"></div>
      <div className="bounce bounce--2"></div>
      <div className="bounce bounce--3"></div>
    </div>
  );
};

export default Spinner;
