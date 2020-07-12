import React , { Component } from 'react'
import ReactPlayer from 'react-player/youtube'

import Image1 from '../../../../assets/img/gallery/image1.jpg'
import Image2 from '../../../../assets/img/gallery/image2.jpg'

import './penguin.css'

class Penguin extends Component{
    render(){
        return(
            <div id="penguin-outer">
                <div class="container-fluid padding-top-2">
                    <div class="row content-title font-white montserrat justify-content-center">
                        PENGUIN (2020)
                    </div>
                    <div class="row content font-white montserrat justify-content-center">
                        Stone Bench Films - Passion Studios / Dir. Eashvar Karthic
                    </div>
                    <div class="row padding-top">
                        <ReactPlayer url='https://www.youtube.com/watch?v=1Mwp1CfFV-k' volume="0" width="100%" height="60vh"/>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <img src={Image1} alt="Penguin Still 1" width="100%"/>
                        </div>
                        <div class="col-6">
                            <img src={Image2} alt="Penguin Still 2" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Penguin;