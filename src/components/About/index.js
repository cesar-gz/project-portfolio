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
                          strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                          idx={15}
                      />
                  </h1>
                  <p>
                      <span className='highlight'>Hello!</span> I have a passion for developing Web Applications. I also specialize in Web Application Security.
                      I work as an Application Security Specialist for California's Franchise Tax Board. I plan, prepare, and execute security
                      tests for various web applications. <span className='highlight'>My goal</span> is to identify vulnerabilities in web applications to prevent any loss of confidentiality, integrity,
                      and availability of data that is important to Californians.
                      When I finish testing I write professional and detailed defect reports about any found
                      vulnerabilities to other technical and nontechnical staff members.
                  </p>
                  <p>
                      When I was attending classes at my University, I had the privilege of being accepted into two software internships. I interned with
                      California State University Fullerton's Titan Radio Station, and the Amazon Software Fellowship.
                      These <span className='highlight'>internships</span> have allowed me to solidify my programming, communication, and team work skills.
                      I've also had the privilege of learning about user interfaces, user experiences, and the software development
                      process. <span className='highlight'>My skills include</span> React, Angular, Web Application Development, Web Application Security,
                      Software Design, Development, and Testing.
                  </p>
                  <p>
                      In my free time <span className='highlight'>I develop web applications</span> and learn as much as I can about web development. This helps me better understand web applications
                      so that I can secure them better at work. One of my notable achievements includes <span className='highlight'>winning third place</span> for a design challenge with my team
                      from the Amazon fellowship internships. When I am not on the computer, I play indoor and beach volleyball with
                      friends. I also like lifting weights, hiking, and running. I enjoy traveling as well. I have been to Spain, Germany, and France. I plan
                      to see Japan in October.
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
