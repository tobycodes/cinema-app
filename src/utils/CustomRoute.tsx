import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, RouteProps } from 'react-router';
import { setMatchPath } from 'redux/actions/app';

const CustomRoute = ({ path, ...props }: RouteProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMatchPath(path as string));
  }, [path, dispatch]);

  return <Route {...props} />;
};

export default CustomRoute;
