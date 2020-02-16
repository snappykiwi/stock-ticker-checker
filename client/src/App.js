import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './js/store';
import Main from './pages/Main/Main';
import './App.css';

const App = () => {
  useEffect(() => {
    //initializes materialize js
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </Provider>
  );
}

export default App;