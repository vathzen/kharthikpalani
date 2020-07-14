import React , { Component } from 'react'
import ReactPlayer from 'react-player/vimeo'


import './otherftv.css'

class OtherFilmsTV extends Component{
    render(){
        return(
            <>
                <div id="promo-outer">
                <div class="container-fluid  padding-top-2">
                    <div class="row content-title  montserrat justify-content-center">
                        Other Films and TV Projects
                    </div>
                    <div class="row content  montserrat justify-content-center">
                        Various Adverts
                    </div>
                    <div class="row padding-top">
                        <div class="col-6 no-l-pad no-r-pad d-flex flex-column align-items-center">
                            <ReactPlayer url='https://vimeo.com/285495294' light='https://i.vimeocdn.com/video/720178394.png' width='100%'/>
                        </div>
                        <div class="col-6 no-r-pad d-flex flex-column align-items-center">
                            <ReactPlayer url='https://vimeo.com/265532335' light='https://i.vimeocdn.com/video/695565790.png' width='100%'/>
                        </div>
                    </div>
                    <div class="row padding-bottom padding-top-1">
                        <div class="col-6 no-l-pad no-r-pad d-flex flex-column align-items-center">
                            <ReactPlayer url='https://vimeo.com/265532183' light='https://i.vimeocdn.com/video/695565440.png' width='100%'/>
                        </div>
                        <div class="col-6 no-r-pad d-flex flex-column align-items-center">
                            <ReactPlayer url='https://vimeo.com/265532251' light='https://i.vimeocdn.com/video/695565552.png' width='100%'/>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default OtherFilmsTV;