import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './home.css'

import { ParallaxBanner} from 'react-scroll-parallax'
import history from '../routes/history';

import Showreel from '../../assets/video/showreel.mp4'
import still1 from '../../assets/img/still1.jpg'
import still2 from '../../assets/img/Still2.jpg'
import Promo from '../../assets/img/other.png'

import FlexSlider from './flex.slider.jsx'

class Home extends Component {
    render() {
        return (
            <>
                <FlexSlider />
                <div onClick={() => history.push('/showreel')} style={{cursor: 'pointer'}}>
                <ParallaxBanner
                    className="showreel-div"
                    layers={[
                        {
                            children: (
                                <video className="showreel-video" autoPlay loop muted preload="auto" src={Showreel}/>
                            ),
                            amount: 0,
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
                </div>
                <div onClick={() => history.push('/penguin')} style={{cursor: 'pointer'}}>
                <ParallaxBanner
                    layers={[
                        {
                            image: still1,
                            amount: 0,
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
                </div>
                <div onClick={() => history.push('/french-briyani')} style={{cursor: 'pointer'}}>
                <ParallaxBanner
                    layers={[
                        {
                            image: still2,
                            amount: 0,
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
                </div>
                <div onClick={() => history.push('/other-films-tv')} style={{cursor: 'pointer'}}>
                <ParallaxBanner
                    layers={[
                        {
                            image: Promo,
                            amount: 0,
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
                </div>
            </>
        );
    }
}
export default Home;