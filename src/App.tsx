import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Details from './pages/details';
import Main from './pages/main';
import store from './redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route path="/:id/:name/details" component={Details} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
