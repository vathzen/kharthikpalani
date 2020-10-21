import React from 'react';
import { Router, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css';

import history from './components/routes/history';
import Routes from './components/routes/routes'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {
  return (
    <Router history={history}>
      <Route path="*">
        <NavBar></NavBar>
        <ParallaxProvider>
          <Routes></Routes>
        </ParallaxProvider>
        <Footer></Footer>
      </Route>
    </Router>
  );
}

export default App;
