import React, { Component } from 'react'

import './press.css'

import CE from '../../assets/img/press/CE.jpeg';
import Vik from '../../assets/img/press/Vik.jpeg';
import Din from '../../assets/img/press/Din.jpeg'

class Press extends Component{
    render(){
        return(
            <div id="outer">
                <div class="container-fluid padding-top container-margin">
                    <div class="row montserrat content-title font-white d-flex justify-content-center margin-bottom">PRESS</div>
                    <div class="row">
                        <div class="col-4 font-white d-flex flex-column align-items-center">
                            <img src={CE} alt="" width="100%"/>
                            <h2 class="news-title montserrat">Cinema Express</h2>
                            <p class="montserrat content font-small">Khartik talks about how the story lent itself to his style of cinematography in this film. Motherhood, he identifies, is the underlying emotion of the film.</p>
                            <a href="https://www.cinemaexpress.com/stories/interviews/2020/jun/23/penguin-cinematographer-kharthik-palani-no-recent-tamil-film-has-as-many-wide-shots-19053.html" target="_blank" class="btn btn-outline-light">Read Full Article</a>
                        </div>
                        <div class="col-4 font-white d-flex flex-column align-items-center">
                            <img src={Vik} alt="" width="100%"/>
                            <h2 class="news-title montserrat">Vikatan</h2>
                            <p class="montserrat content font-small">`பெண்குயின்' படத்தின் ஒளிப்பதிவுக்காக மிகவும் பாராட்டப்பட்ட கார்த்திக் பழனி, தன் அனுபவங்களைப் பகிர்ந்துகொள்கிறார்.</p>
                            <a href="https://cinema.vikatan.com/tamil-cinema/cinematographer-karthik-palani-shares-his-penguin-movie-experience" target="_blank" class="btn btn-outline-light">Read Full Article</a>
                        </div>
                        <div class="col-4 font-white d-flex flex-column align-items-center">
                            <img src={Din} alt="" width="100%"/>
                            <h2 class="news-title montserrat">Dinamani</h2>
                            <p class="montserrat content font-small">"பெண்குயின்'... முதல் படத்திலேயே அத்தனை நேர்த்தியான உழைப்பைத் தந்திருக்கிறார் கார்த்திக் பழனி.</p>
                            <a href="https://www.dinamani.com/weekly-supplements/dinamani-kondattam/2020/jul/05/it-is-difficult-to-make-a-simple-film-3432886.html" target="_blank" class="btn btn-outline-light">Read Full Article</a>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Press;