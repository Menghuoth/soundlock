import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import HomePage from './Page/Home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route to="/" component={HomePage} />
      {/* <Route to="/" component={AlbumPage} /> */}
    </Switch>
    </BrowserRouter>
  );
}

export default App;
