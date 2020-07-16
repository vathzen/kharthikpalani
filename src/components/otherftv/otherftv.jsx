import React, { Component } from 'react'

import ModalVideo from 'react-modal-video';

import './otherftv.css'
import 'react-modal-video/scss/modal-video.scss';

import Brylcream from '../../assets/img/thumbs/BrylCream.png'
import Aptech from '../../assets/img/thumbs/Aptech.png';
import Blackstone from '../../assets/img/thumbs/Blackstone.png'
import Flake from '../../assets/img/thumbs/APFlake.png'

class OtherFilmsTV extends Component {

    constructor() {
        super()
        this.state = {
            is1R1COpen: false,
            is1R2COpen: false,
            is2R1COpen: false,
            is2R2COpen: false
        }
    }

    openModal(posn) {
        switch (posn) {
            case '1R1C':
                this.setState({ is1R1COpen: true })
                break;
            case '1R2C':
                this.setState({ is1R2COpen: true })
                break;
            case '2R1C':
                this.setState({ is2R1COpen: true })
                break;
            case '2R2C':
                this.setState({ is2R2COpen: true })
                break;
            default:
                break;
        }
    }

    closeModal(posn) {
        switch (posn) {
            case '1R1C':
                this.setState({ is1R1COpen: false })
                break;
            case '1R2C':
                this.setState({ is1R2COpen: false })
                break;
            case '2R1C':
                this.setState({ is2R1COpen: false })
                break;
            case '2R2C':
                this.setState({ is2R2COpen: false })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <>
                <div id="promo-outer">
                    <div class="container-fluid  padding-top-2">
                        <div class="row oftv bentonsans justify-content-center">
                            Other Films and TV Projects
                    </div>
                        <div class="row padding-top">
                            <div class="col-6 no-l-pad no-r-pad small-left-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal('1R1C')}>
                                <ModalVideo channel='vimeo' isOpen={this.state.is1R1COpen} videoId='285495294' vimeo={{autoplay:true,portrait:false,title:false,byline:false,muted:true}} onClose={() => this.closeModal('1R1C')} />
                                <img src={Aptech} alt="" width='100%' />
                                <p class="content montserrat caption font-white">► APTech Learning</p>
                            </div>
                            <div class="col-6 no-r-pad no-l-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal('1R2C')}>
                                <ModalVideo channel='vimeo' isOpen={this.state.is1R2COpen} videoId='265532335' vimeo={{autoplay:true,portrait:false,title:false,byline:false,muted:true}} onClose={() => this.setState({ is1R2COpen: false })} />
                                <img src={Flake} alt="" width='100%' />
                                <p class="content montserrat caption font-white">► Flake Excel</p>
                            </div>
                        </div>
                        <div class="row small-bottom-pad padding-top-1">
                            <div class="col-6 no-l-pad no-r-pad small-left-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal('2R1C')}>
                                <ModalVideo channel='vimeo' isOpen={this.state.is2R1COpen} videoId='265532183' vimeo={{autoplay:true,portrait:false,title:false,byline:false,muted:true}} onClose={() => this.setState({ is2R1COpen: false })} />
                                <img src={Blackstone} alt="" width='100%' />
                                <p class="content montserrat caption font-white">► BlackStone Incense</p>
                            </div>
                            <div class="col-6 no-r-pad no-l-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal('2R2C')}>
                                <ModalVideo channel='vimeo' isOpen={this.state.is2R2COpen} videoId='265532251' vimeo={{autoplay:true,portrait:false,title:false,byline:false,muted:true}} onClose={() => this.setState({ is2R2COpen: false })} />
                                <img src={Brylcream} alt="" width='100%' />
                                <p class="content montserrat caption font-white">► Bryl Cream</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default OtherFilmsTV;