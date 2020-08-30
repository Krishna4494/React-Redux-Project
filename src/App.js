import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoute from "./Routes";
import {Provider} from "react-redux";
import Store from "../src/Store";


function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <AppRoute />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;