import React, { Component } from 'react';

import './article.css'

import CE from '../../../assets/img/press/CE.jpeg';

class NewIndianExpress extends Component {
    render() {
        return (
            <>
                <div class="outer-article">
                    <div class="container-fluid padding-top container-margin">
                        <div class="row montserrat font-small  d-flex justify-content-center margin-bottom">Article &#183; Adipurush</div>
                        <div class="row montserrat content-title d-flex justify-content-center margin-bottom ">NEW INDIAN EXPRESS</div>
                        <div class="row d-flex justify-content-center">
                            <p class="montserrat content ">Adipurush, the upcoming big-budget 3D epic starring Prabhas, has roped in cinematographer Kharthik Palani who recently lensed the Keerthy Suresh-starrer Penguin.</p>
                        </div>
                        <div class="row d-flex justify-content-center margin-bottom">
                            <img src={CE} alt="" width="70%" />
                        </div>
                        <div class="row d-flex justify-content-center margin-bottom">
                            <p class="montserrat content ">Kharthik has previously worked on the Hindi films Love Shagun, Zeenat, and the Kannada film French Biriyani. He is the erstwhile assistant of veteran cinematographer Tirru. <br/> Speaking about the film, a source close to the film says, “Adipurush is still in the nascent stage. The pre-production work is yet to begin, and there will be several discussions to figure out many aspects, including the rest of the cast and crew."</p>
                        </div>
                        <div class="row d-flex justify-content-center pad-bottom">
                            <a href="https://www.newindianexpress.com/entertainment/telugu/2020/aug/21/prabhas-3d-epic-adipurush-adds-penguin-cinematographer-kharthik-palani-2186172.html" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Read Full Article</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewIndianExpress;