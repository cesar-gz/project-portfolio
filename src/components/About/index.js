import './index.scss'
import Timer from './timer'
import Playbar from './playbar'
import DJSchedule from './DJSchedule'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

//<script src="DJSchedule.js"></script>
//<embed><script src="https://embed.radio.co/player/d1a002c.js"></script></embed>

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)

        const script = document.createElement('script');
        script.src = "timer.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }

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
                  <button className="flat-button" onClick={() => window.open('https://s3.amazonaws.com/symp.csm.usprod/fullerton/files/220/220ae54fec94a0eb99891a125253c028.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAID3RBESXBCESHUGA%2F20230603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230603T025946Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=96aac89d5c250b914dbce023ab96c8399388cfe1b71080735781fa90e7b51746')}>
                    My Resume</button>
                  <p style={{color:'rgb(228, 91, 101)'}}>
                      As I've grown as a developer I have learned a lot from my mistakes, mentors, professors, and peers.
                      I'm eager to learn new skills, improve my current skills, and help others when I can. I am graduating
                      December 2023.
                  </p>
                  <p style={{color:'rgb(228, 91, 101)'}}>I can use:</p>
                  <ul>
                      <p>Git, GitHub, React, MongoDB, Scrum, Trello and Slack.</p>
                      <p>Windows, Linux, Ubuntu, VSCode, ChatGPT, PHP and MySQL.</p>
                  </ul>
                      <p style={{color:'rgb(228, 91, 101)'}}>I have taken classes on:</p>
                  <ul>
                      <p>Javascript, Python, C++, and Assembly.</p>
                      <p>Data Structures and Algorithm Engineering.</p>
                      <p>Software Design, Testing and Engineering.</p>
                      <p>Compilers, Operating Systems, Computer Networks, and Databases.</p>
                  </ul>
                      <p style={{color:'rgb(228, 91, 101)'}}>I am taking these classes in Fall 2023:</p>
                  <ul>
                      <p>Software Process, Mobile App Development, Senior Capstone Project, and Artificial Intelligence.</p>
                  </ul>
              </div>

              <div className='player'>
                <div className='player_inner'>
                  <div id="scroll-container">
                    <h3 className="scroll-text" id="live">Now Playing</h3>
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
                        <h1 id="bio">DJ artist</h1>
                      </button>
                      <div id="myModal" className="modal">
                        <div className="modal-content">
                          <span className="close">&times;</span>
                          <img className="DJimg" src="https://titanradio.org/wp-content/uploads/2021/10/djTeal.png" alt="djPlayer"/>
                          <h1 id="DJname">DJ Name</h1>
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
                    </div>
                  </div>
                </div>
              </div>
            <Loader type="pacman" />
          </>
    )
}

export default About
