import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import './navbar.css';

import Logo from '../../assets/img/logo.png'

class NavBar extends Component {

    render() {
        return (
            <nav class="navbar navbar-dark navbar-expand-lg sticky-top bg-black nav-height">
                <div class="container-fluid ">
                    <NavLink className="navbar-brand" to="/" id="navbar-brand"><img src={Logo} alt="" id="logo"></img></NavLink>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse align-class" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item text-center" id="product-btn">
                                <NavLink to="/" className="nav-link montserrat"><span class="font-var">Director of Photography</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;