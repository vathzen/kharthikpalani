import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Element,scroller,animateScroll } from 'react-scroll'

import './home.css'

import kharthik from '../../assets/img/karthik.jpg'
import still1 from '../../assets/img/still1.jpg'
import promo from '../../assets/img/promo.png'
import still3 from '../../assets/img/still2.jpg'
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

    scrollToInfo = () => {
        scroller.scrollTo('info',{
            duration: 800,
            delay: 100,
            offset: -300,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToPenguin = () => {
        scroller.scrollTo('penguin',{
            duration: 800,
            delay: 100,
            offset: -200,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToPromo = () => {
        scroller.scrollTo('promo',{
            duration: 800,
            delay: 100,
            offset: -200,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToGallery = () => {
        scroller.scrollTo('gallery',{
            duration: 800,
            delay: 100,
            offset: -200,
            smooth: 'easeInOutQuart'
        })
    }

    scrollToContact = () => {
        animateScroll.scrollToBottom()
    }


    render() {
        return (
            <>
                <Element name="info"></Element>
                <div class="parallax-container" data-parallax="scroll" data-image-src={kharthik} data-bleed="300"></div>
                <nav class="scroll-bar">
                    <a onClick={() => this.scrollToInfo()} id="nav-info">
                        <div class="dot"></div>
                        <span class="hover-title">Kharthik Palani</span>
                    </a>
                    <a onClick={() => this.scrollToPenguin()}id="nav-penguin">
                        <div class="dot"></div>
                        <span class="hover-title">Penguin</span>
                    </a>
                    <a onClick={() => this.scrollToPromo()}id="nav-promo">
                        <div class="dot"></div>
                        <span class="hover-title">Promo</span>
                    </a>
                    <a onClick={() => this.scrollToGallery()}id="nav-gallery">
                        <div class="dot"></div>
                        <span class="hover-title">Gallery</span>
                    </a>
                    <a onClick={() => this.scrollToContact()}id="nav-contact">
                        <div class="dot"></div>
                        <span class="hover-title">Contact Me</span>
                    </a>
                </nav>
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
                <Element name="penguin"></Element>
                <div class="parallax-container" data-parallax="scroll" data-image-src={still1} data-bleed="300"></div>
                <section id="penguin">          
                    <div class="container padding-top">
                        <h2 class="display-6 montserrat content-title">Penguin (2020)</h2>
                        <ReactPlayer url="https://www.youtube.com/watch?v=1Mwp1CfFV-k" />
                    </div>
                </section>
                <Element name="promo"></Element>
                <div class="parallax-container" data-parallax="scroll" data-image-src={promo} data-bleed="300"></div>
                <section id="promo">
                    <div class="container padding-top">
                        <h2 class="display-6 montserrat content-title">PROMO</h2>
                        <div class="players">
                            <ReactPlayer url="https://vimeo.com/269800280" class="video" />
                            <ReactPlayer url="https://vimeo.com/265532251" class="video" />
                        </div>
                    </div>
                </section>
                <Element name="gallery"></Element>
                <div class="parallax-container" data-parallax="scroll" data-image-src={still3} data-bleed="300">
                    <p class="montserrat gallery-title padding-top-gallery">GALLERY</p>
                </div>
                <section id="gallery">
                    <div class="container padding-top">
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
                <footer id="footer">
                    <div class="container padding-top">
                        <div class="row align-icons">
                            <h2 class="display-6 montserrat">Connect With Me:</h2>
                        </div>
                        <br/>
                        <div class="row align-icons">
                            <a href="https://www.instagram.com/kharthikdop/" target="_blank" rel="noopener noreferrer"><img src={Insta}  alt="" class="socials"/></a>
                            <a href="https://twitter.com/KharthikDP" target="_blank" rel="noopener noreferrer"><img src={Twitter}  alt="" class="socials"/></a>
                            <a href="https://www.facebook.com/Karthikpalanidop" target="_blank" rel="noopener noreferrer"><img src={Facebook}  alt="" class="socials"/></a>
                            <a href="mailto:kharthikpalanidp@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Email}  alt="" class="socials"/></a>
                        </div>
                        <div class="row align-icons top-margin">
                            <a href="https://twitter.com/KharthikDP?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @KharthikDP</a>
                        </div>
                    </div>
                </footer>

            </>
        );
    }
}
export default Home;