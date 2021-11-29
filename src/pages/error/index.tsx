import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.scss';

type IProps = {
  clearErrorState: () => void;
};

const ErrorPage: FC<IProps> = ({ clearErrorState }) => {
  const errorMessage = useSelector(({ error }) => error.message);
  const statusCode = useSelector(({ error }) => error.statusCode);

  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong.</p>
      {(errorMessage || statusCode) && (
        <p className="error-sub">
          Reason: <br />
          {statusCode && (
            <span>
              Error failed with status code {statusCode} <br />
            </span>
          )}
          {errorMessage}
        </p>
      )}
      <Link className="error-link" to={'/'} onClick={() => clearErrorState && clearErrorState()}>
        <i className="icon-home"></i> Go back to home page.
      </Link>
    </div>
  );
};

export default ErrorPage;
