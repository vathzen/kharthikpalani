import React from 'react'
import { Switch,Route } from 'react-router-dom';

import Home from '../home/home'
import BTS from '../bts/bts'
import Press from '../press/press'

export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/bts' component = {BTS} />
            <Route exact path='/press' component = {Press} />
        </Switch>
    );
}