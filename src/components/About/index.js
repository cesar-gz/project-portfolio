import './index.scss'
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
                <button className="flat-button" onClick={() => window.open('https://youtube.com')}>My Resume</button>
                <p style={{color:'rgb(228, 91, 101)'}}>
                    As I've grown as a developer I have learned a lot from my mistakes, mentors, professors, and peers.
                    I'm eager to learn new skills, improve my current skills, and help others when I can. I am graduating
                    December 2023.
                </p>
                <p style={{color:'rgb(228, 91, 101)'}}>I can use:</p>
                <ul>
                    <p>Git, GitHub, React, MongoDB, Scrum, and Slack.</p>
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

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About