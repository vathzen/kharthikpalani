import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark navbar-expand-lg bg-white nav-height">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="container flex-column w-50">
                    <Link to="/" className="navbar-brand bentonsans brand-title">KHARTHIK PALANI</Link>
                    <div className="collapse navbar-collapse justify-content-center nav-pad" id="navLinks">
                        <ul class="navbar-nav links-container">
                            <li class="nav-item">
                                <Link to="/" className="nav-link montserrat">WORK</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className="nav-link montserrat">ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/press" className="nav-link montserrat">PRESS</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/behind-the-scenes" className="nav-link montserrat">BTS</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" className="nav-link montserrat">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;