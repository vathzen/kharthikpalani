import React , {Component} from 'react'

import './about.css'

import Still from '../../assets/img/Still.png'

class About extends Component{
    render(){
        return(
            <div id="about-page">
                <div class="container pad-bottom padding-top">
                    <div class="row">
                        <div class="col d-flex flex-column align-items-center">
                            <img src={Still} alt="" width="80%"/>
                        </div>
                        <div class="col montserrat content ">
                            <p>Kharthik Phalani is an Indian cinematographer who works in the Indian film industry. After completing his Under Graduation in Physics, He did Diploma in Film Technology (Cinematography) in Film & Television Institute of Tamilnadu, and started assisting Tirru from 2009.</p>
                            <br/>
                            <p>He completed Diploma in Film Technology (Cinematography) in FiIm & Television Institute of Tamilnadu and started assisting DOP Mr.Tirru in 2009. Assisting on more than 600 commercials there by collaborating with production houses in India such as Nirvana, Corcoise films, Bang Bang films, sunrise films, Hot films, Anonymous Films, Opticus Inc, soda films, Foot candle films, etc and brands like Center Fresh, Slice, Miranda, KFC Krushers, Tata Indicom, Hutch - Vodafone, Kalyan Jewellers, Prince Jewellers, sangam Suitings, GRT jewellers, Chennai silks, Manapuram Gold, Volini, Canon, Philips, etc.</p>
                            <p>Later he went on to became an independent cinematographer and started working on commercials in Mumbai. He also did couple of indie feature films in Hindi and Telugu, and continued to do lots of commercials and promos for Netflix.</p>
                            <br/>
                            <p>He garnered acclaim for his work in Penguin (2020). A critic from The Times of India noted that "Kharthik Phalani's visuals" help set "set the eerie mood" whilst a critic from The Hindu stated how "The filmmaker, however, revelation in terms of his visual sense. Two shots come to mind that are beautifully imagined and shot".</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;