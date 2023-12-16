import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

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
              </div>
            </div>
          <Loader type="pacman" />
        </>
    )
}

export default About
