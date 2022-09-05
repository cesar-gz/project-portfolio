import './index.scss'
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
                    About me paragraph 1.
                </p>
                <p>
                    About me paragraph 2.
                </p>
                <p>
                    About my paragraph 3.
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
    )
}

export default About