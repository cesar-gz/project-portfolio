import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faPython, faJava, faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
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
                    I am a senior student at California State Fullerton. I am expected to graduate in December 2023. I have experience with
                    Python, C++, PHP, MySQL, Assembly, R, HTML, CSS, Javascript, Pytest and the Robot framework. I have used Git, GitHub, React, 
                    MongoDB, and Scrum. I can operate Windows, Linux, Ubuntu, VSCode, Insomnia, Google Sheets, and Microsoft Excel.
                </p>
                <p>
                    I have taken many computer classes like: Operating Systems, Compilers and Languages, Databases and
                    Structures, Python, C++, Assembly, Javascript, Intro to Software Engineering, Software Testing, Data Science, Computer Security and
                    Computer Ethics. I am currently taking Software Design, Algorithm Engineering, and Computer Communications.
                </p>
                <p>
                    I like creating and working on web applications when I can. In my free time I work on leetcode problems, learn how to develop new
                    projects, or spend time with friends playing beach or outdoor volleyball.
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
                        <FontAwesomeIcon icon = {faPhp} color="#DD4E1E" />
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