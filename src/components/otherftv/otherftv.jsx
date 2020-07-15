import React, { Component } from 'react'

import ModalVideo from 'react-modal-video';

import './otherftv.css'

import 'react-modal-video/scss/modal-video.scss';

class OtherFilmsTV extends Component {

    constructor() {
        super()
        this.state = {
            is1R1COpen: false,
            is1R2COpen: false,
            is2R1COpen: false,
            is2R2COpen: false
        }
        // this.openModal = () => this.openModal.bind(this)
    }

    openModal(posn) {
        // this.setState({isOpen:true})
        console.log("variable : ", posn)
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

    render() {
        return (
            <>
                <div id="promo-outer">
                    <div class="container-fluid  padding-top-2">
                        <div class="row content-title  montserrat justify-content-center">
                            Other Films and TV Projects
                    </div>
                        <div class="row padding-top">
                            <div class="col-6 no-l-pad no-r-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal('1R1C')}>
                                {/* <ReactPlayer url='https://vimeo.com/285495294' light='https://i.vimeocdn.com/video/720178394.png' width='100%'/> */}
                                <ModalVideo channel='vimeo' isOpen={this.state.is1R1COpen} videoId='285495294' onClose={() => this.setState({ is1R1COpen: false })} />
                                <img src="https://i.vimeocdn.com/video/720178394.png" alt="" width='100%' />
                                <p class="content caption font-white">&#9654; APTech Learning</p>
                            </div>
                            <div class="col-6 no-r-pad no-l-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal('1R2C')}>
                                <ModalVideo channel='vimeo' isOpen={this.state.is1R2COpen} videoId='265532335' onClose={() => this.setState({ is1R2COpen: false })} />
                                <img src="https://i.vimeocdn.com/video/695565790.png" alt="" width='100%' />
                                <p class="content caption font-white">&#9654; Flake Excel</p>
                            </div>
                        </div>
                        <div class="row padding-bottom padding-top-1">
                            <div class="col-6 no-l-pad no-r-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal('2R1C')}>
                                <ModalVideo channel='vimeo' isOpen={this.state.is2R1COpen} videoId='265532183' onClose={() => this.setState({ is2R1COpen: false })} />
                                <img src="https://i.vimeocdn.com/video/695565440.png" alt="" width='100%' />
                                <p class="content caption font-white">&#9654; BlackStone Incense</p>
                            </div>
                            <div class="col-6 no-r-pad no-l-pad d-flex flex-column align-items-center cursor" onClick={() => this.openModal('2R2C')}>
                                <ModalVideo channel='vimeo' isOpen={this.state.is2R2COpen} videoId='265532251' onClose={() => this.setState({ is2R2COpen: false })} />
                                <img src="https://i.vimeocdn.com/video/695565552.png" alt="" width='100%' />
                                <p class="content caption font-white">&#9654; Bryl Cream</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default OtherFilmsTV;