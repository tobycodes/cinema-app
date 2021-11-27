import React, { FC } from 'react';
import './index.scss';

const Spinner: FC = () => {
  return (
    <div className="spinner" data-testid="spinner">
      <div className="bounce bounce--1" data-testid="bounce"></div>
      <div className="bounce bounce--2" data-testid="bounce"></div>
      <div className="bounce bounce--3" data-testid="bounce"></div>
    </div>
  );
};

export default Spinner;
