import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faPython, faJava, faReact, faRebel } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'

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
                    I have experience with Python, C++, Java, C, Assembly, Scrum, HTML, CSS, and Javascript. I have used Git, GitHub, React, Node.js,
                    MongoDB, R, PHP, and MySQL. I can operate Windows, Linux, VSCode, Insomnia, Google Sheets, and Microsoft Excel.
                </p>
                <p>
                    I have five projects in my Portfolio page, also available on GitHub.
                    I have practiced using Scrum methodology with class mates to produce a web application. 
                    I have completed programming assignments from my classes and uploaded them into GitHub as well.
                </p>
                <p>
                    In my free time I like to do programming project tutortials and play outdoor volleyball.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon = {faPython} color="#FFD43B" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon = {faJava} color="#5382a1" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon = {faGitAlt} color="#EC4D28" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon = {faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon = {faRebel} color="#DD4E1E" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon = {faC} color="#ADD8E6" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About