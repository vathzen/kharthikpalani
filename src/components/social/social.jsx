import React, { Component } from 'react'

import './social.css'

class Social extends Component {
    render() {
        return (
            <>
                <div id="social-page">
                    <div class="container padding-top">
                        <div class="row montserrat content-title font-white d-flex justify-content-center margin-bottom">SOCIAL</div>
                        <div class="row">
                            <div class="col-6">
                                <a class="twitter-timeline" data-width="640" data-height="960" data-dnt="true" data-theme="dark" href="https://twitter.com/KharthikDP?ref_src=twsrc%5Etfw">Tweets by KharthikDP</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </div>
                            <div class="col-6">
                                <div class="fb-page" data-href="https://www.facebook.com/Karthikpalanidop" data-tabs="timeline" data-width="600px" data-height="1000px" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Karthikpalanidop" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Karthikpalanidop">Karthik Palani DOP</a></blockquote></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Social;