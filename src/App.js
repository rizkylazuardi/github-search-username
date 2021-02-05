import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

// import store 
import store from './store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { syncHistoryWithStore } from 'react-router-redux';
import HomePage from './pages/HomePage';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
