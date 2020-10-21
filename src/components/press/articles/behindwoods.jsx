import React, { Component } from 'react';

import './article.css'

import CE from '../../../assets/img/press/BW.png';

class Behindwoods extends Component {
    render() {
        return (
            <>
                <div class="outer-article">
                    <div class="container-fluid padding-top container-margin">
                        <div class="row montserrat font-small  d-flex justify-content-center margin-bottom">Article &#183; Adipurush</div>
                        <div class="row montserrat content-title d-flex justify-content-center margin-bottom ">BEHINDWOODS</div>
                        <div class="row d-flex justify-content-center">
                            <p class="montserrat content ">Kharthik Palani of ‘Penguin’ movie fame has been roped in as the DOP for ‘Adipurush’. His frames in the movie ‘Penguin’ were a delight to watch and only more can be expected in this magnum opus.</p>
                        </div>
                        <div class="row d-flex justify-content-center margin-bottom">
                            <img src={CE} alt="" width="70%" />
                        </div>
                        <div class="row d-flex justify-content-center margin-bottom">
                            <p class="montserrat content ">Recently, the title look of Tollywood star Prabhas’ next biggie ‘Adipurush’ was released and it was extravagant, as expected.<br/> The movie is based on the Epic tale of Ramayana and has Prabhas playing the lead. It was also revealed that Saif Ali Khan will be playing the baddie in the movie.</p>
                        </div>
                        <div class="row d-flex justify-content-center pad-bottom">
                            <a href="https://www.behindwoods.com/tamil-movies-cinema-news-16/penguin-dop-kharthik-palani-roped-in-for-prabhas-adi-purush.html" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Read Full Article</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Behindwoods;