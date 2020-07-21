import React , { Component } from 'react'

import './showreel.css'

class Showreel extends Component{
    render(){
        return(
            <div id="showreel-outer">
                <div class="container-fluid video-container">
                    <video className="video" autoPlay controls controlsList='nodownload' preload="auto" src='https://kpweb.s3.ap-south-1.amazonaws.com/showreel.mp4' height='100%' width='100%'/>
                </div>
            </div>
        )
    }
}

export default Showreel;