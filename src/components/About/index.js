import './index.scss'
import { useEffect, useState } from 'react'
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
                      <span className='highlight'>Hello!</span> I have a passion for Web Applications and Web Application Security. I currently work as an
                      Application Security Specialist for California's Franchise Tax Board. I plan, prepare, and execute security tests for various web applications.
                      When I finish testing I write professional and detailed defect reports about any found vulnerabilities to other technical and nontechnical staff members.
                  </p>
                  <p>
                      I also have two internship experiences with California State University Fullerton's Titan Radio Station, and the Amazon Software Fellowship.
                      These <span className='highlight'>internships</span> have allowed me to learn communication and team work skills geared towards finishing a product.
                      I've also had the privilege of learning about user interfaces, user experiences, and the software
                      process. <span className='highlight'>My skills include</span> React, Angular, Software Design, Development, and Testing.
                  </p>
                  <p>
                      One of my notable achievements includes <span className='highlight'>winning third place</span> for a design challenge with my team
                      from the Amazon fellowship. When I am not on the computer, I play indoor and beach volleyball with
                      friends. I also like lifting weights and running.
                  </p>
              </div>
              <div className="logo-container">
                  <img src={me} alt="me"/>
              </div>
            </div>

        </>
    )
}

export default About
