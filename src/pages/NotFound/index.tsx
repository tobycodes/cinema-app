import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from 'redux/actions/movies';

const NotFound = () => {
  const matchPath = useSelector(({ app: { path } }) => path);
  const dispatch = useDispatch();

  useEffect(() => {
    const message = 'Sorry, this page does not exist.';

    dispatch(setError({ message }));
    throw new Error(message);
  }, [matchPath, dispatch]);

  return null;
};

export default NotFound;
