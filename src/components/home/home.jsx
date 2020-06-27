import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import './home.css'

import kharthik from '../../assets/img/karthik.jpg'
import still1 from '../../assets/img/still1.jpg'
import promo from '../../assets/img/promo.png'
import still3 from '../../assets/img/still3.jpg'

import Image1 from '../../assets/img/gallery/image1.jpg'
import Image2 from '../../assets/img/gallery/image2.jpg'
import Image3 from '../../assets/img/gallery/image3.jpg'
import Image4 from '../../assets/img/gallery/image4.jpg'
import Image5 from '../../assets/img/gallery/image5.jpg'
import Image6 from '../../assets/img/gallery/image6.jpg'

import Insta from '../../assets/img/insta.png'
import Twitter from '../../assets/img/twitter.png'
import Facebook from '../../assets/img/facebook.png'
import Email from '../../assets/img/email.png'

class Home extends Component {
    render() {
        return (
            <>
                <div class="parallax-container" data-parallax="scroll" data-image-src={kharthik}></div>
                <section id="info">
                    <div class="container padding-top">
                        <h6 class="montserrat">Kharthik Phalani is an Indian cinematographer who works in the Indian film industry. After completing his Under Graduation in Physics, He did Diploma in Film Technology (Cinematography) in FiIm & Television Institute of Tamilnadu, and started assisting Tirru from 2009.</h6>
                        <h2 class="display-6 career montserrat font-var">Career</h2>
                        <h6 class="montserrat">
                            <p class="montserrat">
                                He completed Diploma in Film Technology (Cinematography) in FiIm & Television Institute of Tamilnadu and started assisting DOP Mr.Tirru in 2009. Assisting on more than 600 commercials there by collaborating with production houses in India such as Nirvana, Corcoise films, Bang Bang films, sunrise films, Hot films, Anonymous Films, Opticus Inc, soda films, Foot candle films, etc and brands like Center Fresh, Slice, Miranda, KFC Krushers, Tata Indicom, Hutch - Vodafone, Kalyan Jewellers, Prince Jewellers, sangam Suitings, GRT jewellers, Chennai silks, Manapuram Gold, Volini, Canon, Philips, etc.
                            </p>
                            <p class="montserrat">
                                Later he went on to became an independent cinematographer and started working on commercials in Mumbai. He also did couple of indie feature films in Hindi and Telugu, and continued to do lots of commercials and promos for Netflix.
                            </p>
                            <p class="montserrat">
                                He garnered acclaim for his work in Penguin (2020). A critic from The Times of India noted that "Kharthik Phalani's visuals" help "set the eerie mood" whilst a critic from The Hindu stated how "The filmmaker, however, revelation in terms of his visual sense. Two shots come to mind that are beautifully imagined and shot".
                            </p>
                        </h6>
                    </div>
                </section>
                <div class="parallax-container" data-parallax="scroll" data-image-src={still1}></div>
                <section id="penguin">
                    <div class="container padding-top">
                        <h2 class="display-6 montserrat font-var">Penguin (2020)</h2>
                        <ReactPlayer url="https://www.youtube.com/watch?v=1Mwp1CfFV-k" />
                    </div>
                </section>
                <div class="parallax-container" data-parallax="scroll" data-image-src={promo}></div>
                <section id="penguin">
                    <div class="container padding-top">
                        <h2 class="display-6 montserrat font-var">Promo</h2>
                        <div class="players">
                            <ReactPlayer url="https://vimeo.com/269800280" class="video" />
                            <ReactPlayer url="https://vimeo.com/265532251" class="video" />
                        </div>
                    </div>
                </section>
                <div class="parallax-container" data-parallax="scroll" data-image-src={still3}></div>
                <section id="gallery">
                    <div class="container padding-top">
                        <h2 class="display-6 montserrat font-var">Gallery</h2>
                        <div class="container">
                            <div class="col">
                                <div class="gallery">
                                    <img src={Image1} alt="" class="thumbs" />
                                    <img src={Image2} alt="" class="thumbs" />
                                    <img src={Image3} alt="" class="thumbs" />
                                    <img src={Image4} alt="" class="thumbs" />
                                    <img src={Image5} alt="" class="thumbs" />
                                    <img src={Image6} alt="" class="thumbs" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div class="container padding-top">
                        <div class="col-4">
                            <div class="row"><h3 class="montserrat">Contact Me</h3></div>
                            <div class="row montserrat"><img src={Insta}  alt=""/>&nbsp;Instagram   : @Kharthikdop</div><br/>
                            <div class="row montserrat"><img src={Twitter}  alt=""/>&nbsp;Twitter     : @KharthikDP</div><br/>
                            <div class="row montserrat"><img src={Facebook}  alt=""/>&nbsp;Facebook    : @InsideKarthik</div><br/>
                            <div class="row montserrat"><img src={Email}  alt=""/>&nbsp;Email       : kharthikpalanidp@gmail.com</div><br/>
                        </div>
                        <div class="col-4">
                        </div>
                    </div>
                </footer>

            </>
        );
    }
}
export default Home;