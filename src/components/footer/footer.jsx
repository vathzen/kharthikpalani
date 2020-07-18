import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './footer.css'

import Insta from '../../assets/img/instagram.svg'
import Facebook from '../../assets/img/facebook.svg'

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div class="container">
                    <div class="row montserrat font-white d-flex justify-content-center padding-top-2">
                        <Link to='/' class="text-dec font-white">KHARTHIK PALANI</Link>
                    </div>
                    <div class="row montserrat content font-white d-flex justify-content-center padding-top">
                        <Link to='/showreel' class="text-dec font-white  footer-links padding-footer-links">SHOWREEL</Link>
                        <Link to='/penguin' class="text-dec font-white  footer-links padding-footer-links">PENGUIN</Link>
                        <Link to='/french-briyani' class="text-dec font-white  footer-links padding-footer-links">FRENCH BIRYANI</Link>
                        <Link to='/other-films-tv' class="text-dec font-white  footer-links padding-footer-links">OTHER FILM & TV</Link>
                        <Link to='/about' class="text-dec font-white  footer-links padding-footer-links">ABOUT</Link>
                        <Link to='/behind-the-scenes' class="text-dec font-white  footer-links padding-footer-links">BTS</Link>
                        <Link to='/press' class="text-dec font-white  footer-links padding-footer-links">PRESS</Link>
                        <Link to='/contact' class="text-dec font-white  footer-links padding-footer-links">CONTACT</Link>
                    </div>
                    <div class="row padding-top d-flex justify-content-center">
                        <a href="https://www.instagram.com/kharthikdop/" target="_blank" rel="noopener noreferrer"><img src={Insta} alt="" class="socials" /></a>
                        <a href="https://www.facebook.com/Karthikpalanidop" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="" class="socials" /></a>
                        <div class="twitter-icon"><a href="https://twitter.com/KharthikDP?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-lang="en" data-show-count="false">Follow @KharthikDP</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>
                    </div>
                    <div class="row padding-top copyright font-white nhaasgrotesk d-flex justify-content-center padding-bottom-2">
                        &copy;2020 / All Rights Reserved
                    </div>
                    {/* <div class="row author montserrat d-flex justify-content-center padding-bottom-2">
                        <a href="http://www.vathzen.in" target="_blank" rel="noopener noreferrer">VATHSAN</a>
                    </div> */}
                </div>
            </footer>
        )
    }
}

export default Footer;