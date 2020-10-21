import React, { Component } from 'react'
import './press.css'

import { Link } from 'react-router-dom'

import CE from '../../assets/img/press/CE.jpeg';
import Vik from '../../assets/img/press/Vik.jpeg';
import Din from '../../assets/img/press/Din.jpeg';
import BW from '../../assets/img/press/BW.png';
import New from '../../assets/img/press/NEW.jpg'

class Press extends Component {
    render() {
        return (
            <div id="outer">
                <div class="container-fluid padding-top container-margin">
                    <div class="row press-row">
                        <div class="col press-col d-flex flex-column align-items-start">
                            <Link to="/press/cexpress-article"><img src={CE} alt="" width="100%" /></Link>
                            <h2 class="news-title montserrat">Cinema Express</h2>
                            <p class="montserrat content font-small">Khartik talks about how the story lent itself to his style of cinematography in this film. Motherhood, he identifies, is the underlying emotion of the film.</p>
                            <p class="montserrat content font-small">Interview &#183; Penguin</p>
                        </div>
                        <div class="col press-col d-flex flex-column align-items-start">
                            <Link to="/press/vikatan-article"><img src={Vik} alt="" width="100%" /></Link>
                            <h2 class="news-title montserrat">Vikatan</h2>
                            <p class="montserrat content font-small">`பெண்குயின்' படத்தின் ஒளிப்பதிவுக்காக மிகவும் பாராட்டப்பட்ட கார்த்திக் பழனி, தன் அனுபவங்களைப் பகிர்ந்துகொள்கிறார்.</p>
                            <p class="montserrat content font-small">Interview &#183; Penguin</p>
                        </div>
                        <div class="col press-col d-flex flex-column align-items-start">
                            <Link to="/press/dinamani-article"><img src={Din} alt="" width="100%" /></Link>
                            <h2 class="news-title montserrat">Dinamani</h2>
                            <p class="montserrat content font-small">'பெண்குயின்'... முதல் படத்திலேயே அத்தனை நேர்த்தியான உழைப்பைத் தந்திருக்கிறார் கார்த்திக் பழனி.</p>
                            <p class="montserrat content font-small">Interview &#183; Penguin</p>
                        </div>
                    </div>
                    <div className="row press-row">
                        <div class="col-xl-4 press-col d-flex flex-column align-items-start">
                            <Link to="/press/behindwoods-article"><img src={BW} alt="" width="100%" /></Link>
                            <h2 class="news-title montserrat">Behindwoods</h2>
                            <p class="montserrat content font-small">Kharthik Palani of ‘Penguin’ movie fame has been roped in as the DOP for ‘Adipurush’</p>
                            <p class="montserrat content font-small">Article &#183; Adipurush</p>
                        </div>
                        <div class="col-xl-4 press-col d-flex flex-column align-items-start">
                            <Link to="/press/indianexpress-article"><img src={New} alt="" width="100%" /></Link>
                            <h2 class="news-title montserrat">New Indian Express</h2>
                            <p class="montserrat content font-small">Adipurush, the upcoming big-budget 3D epic starring Prabhas, has roped in cinematographer Kharthik Palani who recently lensed the Keerthy Suresh-starrer Penguin.</p>
                            <p class="montserrat content font-small">Article &#183; Adipurush</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Press;