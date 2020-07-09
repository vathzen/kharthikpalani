import React, { Component } from 'react';

import './article.css'

import CE from '../../../assets/img/press/CE.jpeg';

class CExpress extends Component {
    render() {
        return (
            <>
                <div class="outer-article">
                    <div class="container-fluid padding-top container-margin">
                        <div class="row montserrat font-small font-white d-flex justify-content-center margin-bottom">Interview &#183; Penguin</div>
                        <div class="row montserrat content-title d-flex justify-content-center margin-bottom font-white">CINEMA EXPRESS</div>
                        <div class="row d-flex justify-content-center">
                            <p class="montserrat content font-white">Khartik talks about how the story lent itself to his style of cinematography in this film. Motherhood, he identifies, is the underlying emotion of the film.</p>
                        </div>
                        <div class="row d-flex justify-content-center margin-bottom">
                            <img src={CE} alt="" width="70%" />
                        </div>
                        <div class="row d-flex justify-content-center margin-bottom">
                            <p class="montserrat content font-white">Kharthik shares that he would have altered his work, had this film been confirmed for a theatre release.<br/> “The mood and psychology would not change, but the levels and values of lighting and colour would be different. The density and throw of a theatre is different when compared to phones, laptop and TV which are backlit."</p>
                        </div>
                        <div class="row d-flex justify-content-center pad-bottom">
                            <a href="https://www.cinemaexpress.com/stories/interviews/2020/jun/23/penguin-cinematographer-kharthik-palani-no-recent-tamil-film-has-as-many-wide-shots-19053.html" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light">Read Full Article</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CExpress;