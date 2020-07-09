import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <nav class="navbar navbar-dark sticky-top bg-black nav-height">
                <Link className="navbar-brand" to="/" id="navbar-brand"><img src={Logo} alt="" id="logo"></img></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navLinks">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item ml-auto">
                            <Link to="/about" className="nav-link montserrat">ABOUT</Link>
                        </li>
                        <li class="nav-item ml-auto">
                            <Link to="/" className="nav-link montserrat" onClick={() => this.scrollToPenguin()}>WORK</Link>
                        </li>
                        <li class="nav-item ml-auto">
                            <Link to="/bts" className="nav-link montserrat">BEHIND THE SCENES</Link>
                        </li>
                        <li class="nav-item ml-auto">
                            <Link to="/press" className="nav-link montserrat">PRESS</Link>
                        </li>
                        <li class="nav-item ml-auto">
                            <Link to="/social" className="nav-link montserrat">SOCIAL</Link>
                        </li>
                        <li class="nav-item ml-auto">
                            <Link to="/" className="nav-link montserrat" onClick={() => this.scrollToContact()}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;