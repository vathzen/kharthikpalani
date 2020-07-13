import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {ParallaxProvider} from 'react-scroll-parallax'
import './App.css';

import Routes from './components/routes/routes'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {
  return (
    <BrowserRouter>
      <Route path="*">
        <NavBar></NavBar>
        <ParallaxProvider>
        <Routes></Routes>
        </ParallaxProvider>
 
        <Footer></Footer>
      </Route>
    </BrowserRouter>    
  );
}

export default App;
