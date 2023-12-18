import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import me from '../../assets/images/me.jpg'

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
                          strArray={['A', 'b', 'o', 'u', 't']}
                          idx={15}
                      />
                  </h1>
                  <p>
                      <span className='highlight'>Hello!</span> I have a passion for Front-End Engineering and all things Software.
                      I have two internship experiences at my University with Titan Radio and the Amazon Fellowship.
                      One of my notable achievements includes <span className='highlight'>winning third place</span> for a design challenge with my team
                      from the Amazon fellowship.
                  </p>
                  <p>
                      These <span className='highlight'>internships</span> have allowed me to learn communication and team work skills geared towards finishing a product.
                      I've also had the privilege of learning about user interfaces, user experiences, and the software
                      process. <span className='highlight'>My skills include</span> React, Angular, Software Design, Development, and Testing.
                  </p>
                  <p>
                      When I am not on the computer, I play indoor and beach volleyball with
                      friends. I also like lifting weights and running.
                  </p>
              </div>
              <div className="logo-container">
                  <img src={me} alt="me"/>
              </div>
            </div>
          <Loader type="pacman" />
        </>
    )
}

export default About
