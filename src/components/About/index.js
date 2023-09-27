import './index.scss'
import Timer from './timer'
import Playbar from './playbar'
import DJSchedule from './DJSchedule'
import RadioPlayer from './radio'
import cover from './music/cover.jpeg'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)

    }, [])

    return(
        <>
          <div className = "container about-page">
              <div className = "text-zone">
                  <h1>
                      <AnimatedLetters
                          letterClass={letterClass}
                          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                          idx={15}
                      />
                  </h1>
                  <p>
                      Hello, I'm Cesar Gutierrez, a senior at California State University Fullerton with a passion for Front-End Web Development.
                      I also enjoy learning about Back-End Web development and Cyber Security.
                      With 2 internship experiences at my University with Titan Radio and the Amazon Fellowship,
                      I've had the privilege of learning about user interfaces, user experiences, and the software process.
                      My skills include React, Angular, and software design, development, and testing.
                  </p>
                  <p>
                      My portfolio primarily focuses on Front-End applications, where I excel in CSS, HTML, and JavaScript.
                      I believe in consistent practice and repetition to hone my Front-End skills, and to deliver exceptional products.
                      This inspires me to continuously learn new ways of doing things and to relentlessly practice basics to own
                      my skills. Some of my notable achievements include winning third place for a design challenge with my team
                      from the Amazon fellowship. This experience and other internship experiences have allowed me to learn communication and team work skills that help finish a product.
                  </p>
                  <p>
                      Beyond my professional life, I enjoy playing volleyball, watching anime, hiking, and pc gaming. I find that these pursuits clear my mind
                      and give me energy and perspective to learn and try new technologies. Looking ahead, I'm excited about graduating and being able to start
                      working somewhere I can contribute and learn from.
                  </p>
              </div>

              <div className='player'>
                <div className='player_inner'>
                  <div id="scroll-container">
                    <h3 className="scroll-text" id="live">Now Playing: The Feed ( Episode 3 )</h3>
                  </div>
                  <div className='player_inner__middle'>
                    <div className='cube'>
                      <div className='cube_inner'>
                        <div id="DJshowLogo" className='cube_inner__front'>
                          <div className='bars'>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                            <div className='bars_bar'></div>
                          </div>
                          <div className='details'>
                            <div className='details_album'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='player_inner__bottom'>
                      <button className="button" id="DJ_button">
                        <h1 id="bio" style={{marginRight:'19px'}}>DJ artist</h1>
                      </button>
                      <div id="myModal" className="modal">
                        <div className="modal-content">
                          <span className="close">&times;</span>
                          <img className="DJimg" src={cover} alt="djPlayer"/>
                          <h1 id="DJname" style={{marginRight:'37px'}}>DJ Name</h1>
                          <p id="DJbio">DJ Bio</p>
                          <p id="DJshowBio">DJshowBio</p>
                          <DJSchedule />
                        </div>
                      </div>
                      <div className='playbar'>
                        <Playbar />
                        <div id='playbar_inner'></div>
                        <div className='playbar_left'>
                          <div id="songTimer"><Timer /></div>
                        </div>
                        <div className='playbar_right'>
                          <span>1:00:00</span>
                        </div>
                      </div>
                      <RadioPlayer />
                    </div>
                  </div>
                </div>
              </div>
            <Loader type="pacman" />
          </>
    )
}

export default About
