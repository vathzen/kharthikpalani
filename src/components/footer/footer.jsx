import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './footer.css'

import Insta from '../../assets/img/instagram.svg'
import Twitter from '../../assets/img/twitter.svg'
import Facebook from '../../assets/img/facebook.svg'
import Youtube from '../../assets/img/youtube.svg'

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div class="container">
                    <div class="row montserrat font-white d-flex justify-content-center padding-top">
                        <Link to='/' class="text-dec font-white">KHARTHIK PALANI</Link>
                    </div>
                    <div class="row montserrat content font-white d-flex justify-content-center padding-top">
                        <Link to='/penguin' class="text-dec font-white  padding-footer-links">PENGUIN</Link>
                        <Link to='/promo' class="text-dec font-white  padding-footer-links">PROMO</Link>
                        <Link to='/about' class="text-dec font-white  padding-footer-links">ABOUT</Link>
                        <Link to='/bts' class="text-dec font-white  padding-footer-links">BTS</Link>
                        <Link to='/press' class="text-dec font-white  padding-footer-links">PRESS</Link>
                        <Link to='/social' class="text-dec font-white  padding-footer-links">SOCIAL</Link>
                        <Link to='/contact' class="text-dec font-white  padding-footer-links">CONTACT</Link>
                    </div>
                    <div class="row padding-top">
                        <div class="col-6 d-flex flex-column align-items-start">
                            <div class="row align-icons row-bottom">
                                <h2 class="display-6 montserrat content social-tag">SOCIAL : </h2>
                                <a href="https://www.instagram.com/kharthikdop/" target="_blank" rel="noopener noreferrer"><img src={Insta} alt="" class="socials" /></a>
                                <a href="https://twitter.com/KharthikDP" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="" class="socials" /></a>
                                <a href="https://www.facebook.com/Karthikpalanidop" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="" class="socials" /></a>
                                <a href="mailto:kharthikpalanidp@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="" class="socials" /></a>
                            </div>
                        </div>
                        <div class="col-6 d-flex flex-column align-items-end">
                            <div class="row align-icons">
                                <a href="https://twitter.com/KharthikDP?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-lang="en" data-show-count="false">Follow @KharthikDP</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </div>
                        </div>
                    </div>
                    <div class="row padding-top font-white montserrat d-flex justify-content-center padding-bottom">
                        &copy;2020 / All Rights Reserved
                    </div>
                </div>
                {/* <div class="container">
                    <div></div>
                </div> */}
            </footer>
        )
    }
}

export default Footer;