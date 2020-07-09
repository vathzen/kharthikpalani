import React , {Component} from 'react';

import './article.css'

import Din from '../../../assets/img/press/Din.jpeg'

class Dinamani extends Component{
    render(){
        return(
            <div class="outer-article">
                <div class="container-fluid padding-top container-margin">
                    <div class="row montserrat font-small font-white d-flex justify-content-center margin-bottom">Interview &#183; Penguin</div>
                    <div class="row montserrat content-title d-flex justify-content-center margin-bottom font-white">DINAMANI</div>
                    <div class="row d-flex justify-content-center">
                        <p class="montserrat content font-white">'பெண்குயின்'... முதல் படத்திலேயே அத்தனை நேர்த்தியான உழைப்பைத் தந்திருக்கிறார் கார்த்திக் பழனி.</p>
                    </div>
                    <div class="row d-flex justify-content-center margin-bottom">
                        <img src={Din} alt="" width="70%" />
                    </div>
                    <div class="row d-flex justify-content-center margin-bottom">
                        <p class="montserrat content font-white">உங்க மனசுக்குள்ளே ஓடுகிற படத்தை ஒவ்வொரு மனசுக்குள்ளேயும் ஓட்டுகிற வித்தை பிடிபடுற வரைக்கும் மற்றவையெல்லாம் சும்மாதான்.<br/>கார்த்திக் ஈஸ்வருக்கு அந்த வித்தை கைவந்தது. சமையலில் கைப்பக்குவம் போல சினிமாவில் இந்த கலைப்பக்குவம் தெரிய வேண்டும். ஒரு நல்ல நம்பிக்கையைக் கொடுத்தது "பெண்குயின்'.<br/>என் அடுத்தடுத்த நகர்வுகளுக்கான முதல் படி இது. கை கொடுத்தவர்கள், கண்ணீர் துடைத்தவர்கள், நேச கரம் நீட்டியவர்கள், தோழர்கள், பாதித்தவர்கள் என எல்லோருக்கும் என் நன்றிகள்'' என்றார்.</p>
                    </div>
                    <div class="row d-flex justify-content-center pad-bottom">
                    <a href="https://www.dinamani.com/weekly-supplements/dinamani-kondattam/2020/jul/05/it-is-difficult-to-make-a-simple-film-3432886.html" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light">Read Full Article</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dinamani;