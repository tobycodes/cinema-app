import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';

import Header from './components/Header';
import Main from './components/main';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <div className="app"></div>
    </Provider>
  );
}

export default App;
