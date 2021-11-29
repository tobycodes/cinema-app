import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import { useSmoothScroll } from 'hooks/useSmoothScroll';
import Header from 'components/Header';
import appRoutes from 'routes';
import CustomRoute from 'utils/CustomRoute';
import ErrorBoundary from 'components/ErrorBoundary';

const App: FC = () => {
  // Default behaviour is to scroll to top of page
  useSmoothScroll({});

  return (
    <ErrorBoundary>
      <Header />
      <div className="app">
        <Switch>
          {appRoutes.map((route, idx) => (
            <CustomRoute key={idx} {...route} />
          ))}
        </Switch>
      </div>
    </ErrorBoundary>
  );
};

export default App;
