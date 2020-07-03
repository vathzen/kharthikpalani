import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

import Logo from '../../assets/img/logo.png'
import { scroller,animateScroll } from 'react-scroll'

class NavBar extends Component {

    scrollToInfo = () => {
        scroller.scrollTo('info',{
            duration: 800,
            delay: 100,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToPenguin = () => {
        scroller.scrollTo('penguin',{
            duration: 800,
            delay: 100,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToContact = () => {
        animateScroll.scrollToBottom()
    }

    render() {
        return (
            <nav class="navbar navbar-dark navbar-expand-lg sticky-top bg-black nav-height justify-content-center">
                <NavLink className="navbar-brand d-flex w-50 mr-auto" to="/" id="navbar-brand"><img src={Logo} alt="" id="logo"></img></NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                    <ul class="navbar-nav w-100 justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link montserrat" onClick={() => this.scrollToInfo()}>ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link montserrat" onClick={() => this.scrollToPenguin()}>WORK</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link montserrat" href="/bts">BTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link montserrat" onClick={() => this.scrollToContact()}>CONTACT</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li class="nav-item text-center" id="product-btn">
                            <a className="nav-link montserrat active"><span class="font-var">Director of Photography</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;