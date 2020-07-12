import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import './home.css'

import kharthik from '../../assets/img/karthik.jpg'
import still1 from '../../assets/img/still1.jpg'
import promo from '../../assets/img/promo.png'
import Image1 from '../../assets/img/gallery/image1.jpg'
import Image2 from '../../assets/img/gallery/image2.jpg'
import Image3 from '../../assets/img/gallery/image3.jpg'

class Home extends Component {
    render() {
        return (
            <>
                <div class="parallax-container" data-parallax="scroll" data-image-src={kharthik} data-bleed="100"></div>
                <section id="info">
                    <div class="container padding-top">
                        <h6 class="montserrat content">Kharthik Phalani is an Indian cinematographer who works in the Indian film industry. After completing his Under Graduation in Physics, He did Diploma in Film Technology (Cinematography) in FiIm & Television Institute of Tamilnadu, and started assisting Tirru from 2009.</h6>
                        <h2 class="display-6 career montserrat content-title">CAREER</h2>
                        <h6 class="montserrat">
                            <p class="montserrat content">
                                He completed Diploma in Film Technology (Cinematography) in FiIm & Television Institute of Tamilnadu and started assisting DOP Mr.Tirru in 2009. Assisting on more than 600 commercials there by collaborating with production houses in India such as Nirvana, Corcoise films, Bang Bang films, sunrise films, Hot films, Anonymous Films, Opticus Inc, soda films, Foot candle films, etc and brands like Center Fresh, Slice, Miranda, KFC Krushers, Tata Indicom, Hutch - Vodafone, Kalyan Jewellers, Prince Jewellers, sangam Suitings, GRT jewellers, Chennai silks, Manapuram Gold, Volini, Canon, Philips, etc.
                            </p>
                            <p class="montserrat content">
                                Later he went on to became an independent cinematographer and started working on commercials in Mumbai. He also did couple of indie feature films in Hindi and Telugu, and continued to do lots of commercials and promos for Netflix.
                            </p>
                            <p class="montserrat content">
                                He garnered acclaim for his work in Penguin (2020). A critic from The Times of India noted that "Kharthik Phalani's visuals" help "set the eerie mood" whilst a critic from The Hindu stated how "The filmmaker, however, revelation in terms of his visual sense. Two shots come to mind that are beautifully imagined and shot".
                            </p>
                        </h6>
                    </div>
                </section>
                <div class="parallax-container" data-parallax="scroll" data-image-src={still1} data-bleed="300"></div>
                <section id="penguin">          
                    <div class="container padding-top">
                        <h2 class="display-6 montserrat content-title">Penguin (2020)</h2>
                        <ReactPlayer url="https://www.youtube.com/watch?v=1Mwp1CfFV-k" width="100%"/>
                    </div>
                </section>
                <div class="parallax-container" data-parallax="scroll" data-image-src={promo} data-bleed="300"></div>
                <section id="promo">
                    <div class="container padding-top">
                        <h2 class="display-6 montserrat content-title text-center">PROMO</h2>
                        <div class="players">
                            <ReactPlayer url="https://vimeo.com/269800280" class="video" />
                            <ReactPlayer url="https://vimeo.com/265532251" class="video" />
                        </div>
                    </div>
                </section>
                <section id="gallery">
                    <div class="container">
                        <p class="montserrat gallery-title">GALLERY</p>
                        <div class="container">
                            <div class="col">
                                <div class="gallery container-fluid">
                                    <img src={Image1} alt="" class="thumbs" width="50vw"/>
                                    <img src={Image2} alt="" class="thumbs" width="50vw"/>
                                    <img src={Image3} alt="" class="thumbs" width="50vw"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </>
        );
    }
}
export default Home;