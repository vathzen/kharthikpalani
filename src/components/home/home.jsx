import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './home.css'

import { ParallaxBanner} from 'react-scroll-parallax'

import Showreel from '../../assets/video/showreel.mp4'
import still1 from '../../assets/img/still1.jpg'
import promo from '../../assets/img/promo.png'
import Poster from '../../assets/img/poster.png'

class Home extends Component {
    render() {
        return (
            <>
                <ParallaxBanner
                    className="parallax-div"
                    layers={[
                        {
                            children: (
                                <video className="showreel-video" autoPlay loop playsInline muted preload="auto" poster={Poster} src={Showreel} />
                            ),
                            amount: 0.25,
                        },
                    ]}
                    style={{
                        height: '80vh',
                    }}
                >
                    <div class="title-container">
                    <Link to='/showreel' class="font-white content-title montserrat text-dec">WATCH SHOWREEL</Link>
                    </div>
                </ParallaxBanner>
                <ParallaxBanner
                    className="parallax-div"
                    layers={[
                        {
                            image: still1,
                            amount: 0.2,
                        },
                    ]}
                    style={{
                        height: '80vh',
                    }}
                >
                    <div class="title-container">
                            <Link to='/penguin' class="font-white content-title montserrat text-dec">PENGUIN</Link>
                    </div>
                </ParallaxBanner>
                <ParallaxBanner
                    className="parallax-div"
                    layers={[
                        {
                            image: promo,
                            amount: 0.2,
                        },
                    ]}
                    style={{
                        height: '80vh',
                    }}
                >
                    <div class="title-container">
                            <Link to='/promo' class="font-white content-title montserrat text-dec">PROMO</Link>
                    </div>
                </ParallaxBanner>
            </>
        );
    }
}
export default Home;