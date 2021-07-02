import React, { FC } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Main from './components/main';
import store from './redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <div className="app"></div>
    </Provider>
  );
};

export default App;
