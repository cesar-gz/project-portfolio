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
                      I am a senior at California State University Fullerton. I am majoring in Computer Science
                      and I am graduating December 2023. I have been a intern for Web Design at my University's radio station,
                      and I have been interned in a Amazon Fellowship.
                  </p>
                  <p>
                      As I've grown as a developer I have learned a lot from my mentors, professors, and peers.
                      I'm eager to learn new skills, improve my current skills, and help others when I can.
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
