import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';

import Routes from './components/routes/routes'
import NavBar from './components/navbar/navbar'

function App() {
  return (
    <BrowserRouter>
      <Route path="*">
        <NavBar></NavBar>
        <Routes></Routes>
      </Route>
    </BrowserRouter>    
  );
}

export default App;
