import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useSmoothScroll } from 'hooks/useSmoothScroll';
import Header from 'components/Header';
import Details from 'pages/details';
import HomePage from 'pages/homepage';
import ErrorPage from 'pages/error';

const App: FC = () => {
  // Default behaviour is to scroll to top of page
  useSmoothScroll();

  return (
    <>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/:id/details" exact component={Details} />
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
