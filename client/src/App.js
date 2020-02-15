import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './store';
import Main from './pages/Main/Main';
import './App.css';

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Route path="/" component={Main} />
    </Router>
    // </Provider>
  );
}

export default App;