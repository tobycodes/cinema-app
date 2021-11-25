import React, { FC, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Details from './pages/details';
import Main from './pages/main';

const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

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
