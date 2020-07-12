import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './home.css'

import kharthik from '../../assets/img/karthik.jpg'
import still1 from '../../assets/img/still1.jpg'
import promo from '../../assets/img/promo.png'

class Home extends Component {
    render() {
        return (
            <>
                <div class="parallax-container" data-parallax="scroll" data-image-src={kharthik}>
                    <div class="title-container">
                        <div class="font-white content-title montserrat">
                            WATCH SHOWREEL
                        </div>
                    </div>
                </div>
                <div class="parallax-container" data-parallax="scroll" data-image-src={still1}>
                    <div class="title-container">
                        <div>
                            <Link to='/penguin' class="font-white content-title montserrat text-dec">PENGUIN</Link>
                        </div>
                    </div>
                </div>
                <div class="parallax-container" data-parallax="scroll" data-image-src={promo}>
                    <div class="title-container">
                        <div>
                            <Link to='/promo' class="font-white content-title montserrat text-dec">PROMO</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Home;