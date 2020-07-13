import React , {Component} from 'react';

import './article.css'

import Vik from '../../../assets/img/press/Vik.jpeg';

class Vikatan extends Component{
    render(){
        return(
            <>
                <div class="outer-article">
                    <div class="container-fluid padding-top container-margin">
                        <div class="row montserrat font-small  d-flex justify-content-center margin-bottom">Interview &#183; Penguin</div>
                        <div class="row montserrat content-title d-flex justify-content-center margin-bottom ">VIKATAN</div>
                        <div class="row d-flex justify-content-center">
                            <p class="montserrat content ">`பெண்குயின்' படத்தின் ஒளிப்பதிவுக்காக மிகவும் பாராட்டப்பட்ட கார்த்திக் பழனி, தன் அனுபவங்களைப் பகிர்ந்துகொள்கிறார்.</p>
                        </div>
                        <div class="row d-flex justify-content-center margin-bottom">
                            <img src={Vik} alt="" width="70%" />
                        </div>
                        <div class="row d-flex justify-content-center margin-bottom">
                            <p class="montserrat content ">அடர்ந்த காட்டுக்குள் மகனைத் தேடி கீர்த்தி சுரேஷ் ஓடுற காட்சி. படத்துல வர்ற நாயை ஓடவிட்டு, முதல்ல ஷூட் முடிச்சுட்டோம். பிறகு கீர்த்தி வரணும். நாங்க முன்னால போயிட்டோம்.<br/> சரியா கீர்த்தி ரெடியாகி வரத் தொடங்க, தொலைவுல இருந்து தேனீக்கள் கூட்டம் வர ஆரம்பிச்சிடுச்சு. பால் தேனீனு சொல்வாங்க. நாலு குழவி சேர்ந்து கொட்டுச்சுனா விஷம்னு அங்க இருந்தவங்க சொல்லியிருந்தாங்க.</p>
                        </div>
                        <div class="row d-flex justify-content-center pad-bottom">
                            <a href="https://cinema.vikatan.com/tamil-cinema/cinematographer-karthik-palani-shares-his-penguin-movie-experience" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Read Full Article</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Vikatan;