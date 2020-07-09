import React, { Component } from 'react';

import './footer.css'

import Insta from '../../assets/img/instagram.svg'
import Twitter from '../../assets/img/twitter.svg'
import Facebook from '../../assets/img/facebook.svg'
import Youtube from '../../assets/img/youtube.svg'

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div class="container padding-top">
                    <div class="row align-icons row-bottom">
                        <h2 class="display-6 montserrat content">SOCIAL</h2>
                    </div>
                    <div class="row align-icons row-bottom">
                        <a href="https://www.instagram.com/kharthikdop/" target="_blank" rel="noopener noreferrer"><img src={Insta} alt="" class="socials" /></a>
                        <a href="https://twitter.com/KharthikDP" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="" class="socials" /></a>
                        <a href="https://www.facebook.com/Karthikpalanidop" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="" class="socials"/></a>
                        <a href="mailto:kharthikpalanidp@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="" class="socials" /></a>
                    </div>
                    <div class="row align-icons row-bottom row-top">
                        <a href="https://twitter.com/KharthikDP?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @KharthikDP</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;