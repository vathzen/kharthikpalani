import React , { Component } from 'react'
import ReactPlayer from 'react-player/vimeo'


import './otherftv.css'

class OtherFilmsTV extends Component{
    render(){
        return(
            <>
                <div id="promo-outer">
                <div class="container-fluid padding-top-2">
                    <div class="row content-title  montserrat justify-content-center">
                        Promotions and Advertisements
                    </div>
                    <div class="row content  montserrat justify-content-center">
                        Various Adverts
                    </div>
                    <div class="row d-flex justify-content-center padding-top">
                            <a href="https://vimeo.com/user33802515" class="btn btn-outline-light montserrat">Learn More</a>
                    </div>
                    <div class="row padding-top">
                        <div class="col-6 d-flex flex-column align-items-center">
                            <ReactPlayer url='https://vimeo.com/285495294'/>
                        </div>
                        <div class="col-6 d-flex flex-column align-items-center">
                            <ReactPlayer url='https://vimeo.com/265532251'/>
                        </div>
                    </div>
                    <div class="row padding-top padding-bottom">
                        <div class="col-6 d-flex flex-column align-items-center">
                            <ReactPlayer url='https://vimeo.com/265532183'/>
                        </div>
                        <div class="col-6 d-flex flex-column align-items-center">
                            <ReactPlayer url='https://vimeo.com/265532335'/>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default OtherFilmsTV;