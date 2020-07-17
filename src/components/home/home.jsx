import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './home.css'

import { ParallaxBanner} from 'react-scroll-parallax'

import Showreel from '../../assets/video/showreel_1.mp4'
import still1 from '../../assets/img/still1.jpg'
import still2 from '../../assets/img/Still2.png'
import Promo from '../../assets/img/other.png'

class Home extends Component {
    render() {
        return (
            <>
                <ParallaxBanner
                    id="showreel-div"
                    layers={[
                        {
                            children: (
                                <video className="showreel-video" autoPlay loop muted preload="auto" src={Showreel} height="100%"/>
                            ),
                            amount: 0.3,
                        },
                    ]}
                    style={{
                        height: '65vh',
                    }}
                >
                    <div class="title-container">
                    <Link to='/showreel' class="font-white content-title montserrat text-dec">WATCH SHOWREEL</Link>
                    </div>
                </ParallaxBanner>
                <ParallaxBanner
                    layers={[
                        {
                            image: still1,
                            amount: 0.3,
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
                    layers={[
                        {
                            image: still2,
                            amount: 0.3,
                        },
                    ]}
                    style={{
                        height: '80vh',
                    }}
                >
                    <div class="title-container">
                            <Link to='/french-briyani' class="font-white content-title montserrat text-dec">FRENCH BIRYANI</Link>
                    </div>
                </ParallaxBanner>
                <ParallaxBanner
                    layers={[
                        {
                            image: Promo,
                            amount: 0.3,
                        },
                    ]}
                    style={{
                        height: '80vh',
                    }}
                >
                    <div class="title-container">
                            <Link to='/other-films-tv' class="font-white content-title montserrat text-dec">OTHER FILM & TV PROJECTS</Link>
                    </div>
                </ParallaxBanner>
            </>
        );
    }
}
export default Home;