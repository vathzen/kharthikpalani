import React , { Component } from 'react'
import ReactPlayer from 'react-player/vimeo'

import './showreel.css'

class Showreel extends Component{
    render(){
        return(
            <div id="showreel-outer">
                <div class="container-fluid video-container">
                    <ReactPlayer url='https://vimeo.com/276634930' width='100%' height='100%' config={{vimeo:{title:"false",byline:"false"}}}/>
                </div>
            </div>
        )
    }
}

export default Showreel;