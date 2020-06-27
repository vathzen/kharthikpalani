import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import './home.css'

import Karthik from '../../assets/img/karthik.jpg'
import still1 from '../../assets/img/still1.jpg'
import still2 from '../../assets/img/still2.jpg'
import still3 from '../../assets/img/still3.jpg'

class Home extends Component {
    render() {
        return (
            <>
                <div class="parallax-container" data-parallax="scroll" data-image-src={Karthik}></div>
                <section id="info">
                    <div class="container padding-top">
                        <h2 class="display-6">Kharthik Palani</h2>
                        <small>Kharthik Phalani is an Indian cinematographer who works in the Indian film industry. After completing his Under Graduation in Physics, He did Diploma in Film Technology (Cinematography) in FiIm & Television Institute of Tamilnadu, and started assisting Tirru from 2009.</small>
                        <h2 class="display-6 career">Career</h2>
                        <small>
                            <p>
                            He completed Diploma in Film Technology (Cinematography) in FiIm & Television Institute of Tamilnadu and started assisting DOP Mr.Tirru in 2009. Assisting on more than 600 commercials there by collaborating with production houses in India such as Nirvana, Corcoise films, Bang Bang films, sunrise films, Hot films, Anonymous Films, Opticus Inc, soda films, Foot candle films, etc and brands like Center Fresh, Slice, Miranda, KFC Krushers, Tata Indicom, Hutch - Vodafone, Kalyan Jewellers, Prince Jewellers, sangam Suitings, GRT jewellers, Chennai silks, Manapuram Gold, Volini, Canon, Philips, etc.
                            </p>
                            <p>
                            Later he went on to became an independent cinematographer and started working on commercials in Mumbai. He also did couple of indie feature films in Hindi and Telugu, and continued to do lots of commercials and promos for Netflix.
                            </p>
                            <p>
                            He garnered acclaim for his work in Penguin (2020). A critic from The Times of India noted that "Kharthik Phalani's visuals" help set "set the eerie mood" whilst a critic from The Hindu stated how "The filmmaker, however, revelation in terms of his visual sense. Two shots come to mind that are beautifully imagined and shot".
                            </p>
                        </small>
                    </div>
                </section>
                <div class="parallax-container" data-parallax="scroll" data-image-src={still1}></div>
                <section id="penguin">
                    <div class="container padding-top">
                        <h2 class="display-6">Penguin</h2>
                        <ReactPlayer url="https://vimeo.com/285496498"/>
                    </div>
                </section>
                <div class="parallax-container" data-parallax="scroll" data-image-src={still2}></div>
                <section id="penguin">
                    <div class="container padding-top">
                        <h2 class="display-6">Promo</h2>
                        <div class="players">
                            <ReactPlayer url="https://vimeo.com/269800280"/>
                            <ReactPlayer url="https://vimeo.com/265532251"/>
                        </div>
                        
                    </div>
                </section>
                <div class="parallax-container" data-parallax="scroll" data-image-src={still3}></div>


            </>
        );
    }
}
export default Home;