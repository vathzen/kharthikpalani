import React , { Component } from 'react'
import ModalVideo from 'react-modal-video'

import FrenchBriyaniImage from '../../../../assets/img/gallery/FrenchVideoThumb.jpg';
import Image1 from '../../../../assets/img/gallery/frenchImage1.jpg'

import './frenchbriyani.css'
import 'react-modal-video/scss/modal-video.scss';

class FrenchBriyani extends Component{

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
                    <div class="row briyani-title bentonsans justify-content-center">
                        FRENCH BIRYANI
                    </div>
                    <div class="row content montserrat justify-content-center padding-top-1">
                        PRK Productions - Passion Studios / Dir. Pannaga Bharana
                    </div>
                    <div class="row small-bottom-pad padding-top">
                        <div class="col-6 small-right-pad no-r-pad no-l-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal()}>
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ew9t4JX4x3A' youtube={{autoplay:1,modestbranding:0}} onClose={() => this.setState({ isOpen: false })} />
                                <img src={FrenchBriyaniImage} alt="" width='100%' />
                                <p class="content montserrat caption font-white">► Watch Trailer</p>
                        </div>
                        <div class="col-6 small-right-pad no-r-pad no-l-pad d-flex flex-column align-items-center">
                            <img src={Image1} alt="Penguin Still 3" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FrenchBriyani;