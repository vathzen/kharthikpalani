import React , { Component } from 'react'
import ModalVideo from 'react-modal-video'

import PenguinTrailer from '../../../../assets/img/gallery/PenguinVideoThumb.jpg';
import Image1 from '../../../../assets/img/gallery/image1.jpg'
import Image2 from '../../../../assets/img/gallery/image2.jpg'
import Image3 from '../../../../assets/img/gallery/image3.jpg'

import './penguin.css'
import 'react-modal-video/scss/modal-video.scss';

class Penguin extends Component{

    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    openModal(){
        this.setState({isOpen : true })
    }

    render(){
        return(
            <div id="penguin-outer">
                <div class="container-fluid padding-top-2">
                    <div class="row penguin-title bentonsans justify-content-center">
                        PENGUIN
                    </div>
                    <div class="row content  montserrat justify-content-center padding-top-1">
                        Stone Bench Films - Passion Studios / Dir. Eashvar Karthic
                    </div>
                    <div class="row padding-top">
                        <div class="col-6 small-right-pad no-r-pad no-l-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal()}>
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='1Mwp1CfFV-k' youtube={{autoplay:1,modestbranding:0}} onClose={() => this.setState({ isOpen: false })} />
                                <img src={PenguinTrailer} alt="" width='100%' />
                                <p class="content montserrat caption font-white">► PENGUIN TRAILER</p>
                        </div>
                        <div class="col-6 small-right-pad no-r-pad no-l-pad d-flex flex-column align-items-center">
                            <img src={Image1} alt="Penguin Still 3" width="100%"/>
                        </div>
                    </div>
                    <div class="row small-bottom-pad padding-top-1">
                        <div class="col-6 small-right-pad no-r-pad no-l-pad d-flex flex-column align-items-center">
                            <img src={Image2} alt="Penguin Still 1" width="100%"/>
                        </div>
                        <div class="col-6 no-r-pad no-l-pad d-flex flex-column align-items-center">
                            <img src={Image3} alt="Penguin Still 2" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Penguin;