import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useSmoothScroll } from 'hooks/useSmoothScroll';
import Header from './components/Header';
import Details from './pages/details';
import Main from './pages/main';

const App: FC = () => {
  // Default behaviour is to scroll to top of page
  useSmoothScroll();

  return (
    <>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/:id/:name/details" component={Details} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </>
  );
};

export default App;
