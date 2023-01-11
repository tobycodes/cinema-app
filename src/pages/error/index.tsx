import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearError } from 'redux/actions/movies';

import './index.scss';

interface IProps {
  onClearError?: () => void;
}

const ErrorPage: FC<IProps> = ({ onClearError }) => {
  const { message, statusCode } = useSelector(({ error }) => error);
  const dispatch = useDispatch();

  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong.</p>
      {(message || statusCode) && (
        <p className="error-sub">
          Reason: <br />
          {statusCode && (
            <span>
              Error failed with status code {statusCode} <br />
            </span>
          )}
          {message}
        </p>
      )}
      <Link
        className="error-link"
        to={'/'}
        onClick={() => {
          dispatch(clearError());
          onClearError?.();
        }}
      >
        <i className="icon-home"></i> Go back to home page.
      </Link>
    </div>
  );
};

export default ErrorPage;
