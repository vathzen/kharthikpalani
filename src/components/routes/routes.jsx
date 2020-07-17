import React from 'react'
import { Switch,Route } from 'react-router-dom';

import Home from '../home/home'
import BTS from '../bts/bts'
import Press from '../press/press'
import About from '../about/about';
import Contact from '../contact/contact';
import OtherFilmsTV from '../otherftv/otherftv';

import Penguin from '../home/projects/penguin/penguin';
import Showreel from '../home/projects/showreel/showreel';
import FrenchBriyani from '../home/projects/frenchbriyani/frenchbriyani';

import Dinamani from '../press/articles/dinamani';
import Vikatan from '../press/articles/vikatan';
import CExpress from '../press/articles/cexpress';

export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/behind-the-scenes' component = {BTS} />
            <Route exact path='/press' component = {Press} />
            <Route exact path='/about' component = {About} />
            <Route exact path='/contact' component = {Contact} />
            <Route exact path='/other-films-tv' component = {OtherFilmsTV} />

            <Route exact path='/penguin' component = {Penguin} />
            <Route exact path='/showreel' component = {Showreel} />
            <Route exact path='/french-briyani' component = {FrenchBriyani} />

            <Route exact path='/press/dinamani-article' component = {Dinamani} />
            <Route exact path='/press/vikatan-article' component = {Vikatan} />
            <Route exact path='/press/cexpress-article' component = {CExpress} />
        </Switch>
    );
}