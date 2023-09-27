import './index.scss'

import About from '../About'
import Contact from '../Contact'
import Portfolio from '../Portfolio';

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

import resume from '../About/music/Gutierrez-Resume.pdf'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'G', 'u', 't', 'i', 'e', 'r', 'r', 'e', 'z'];
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e', ' ',
                     'S', 't', 'u', 'd', 'e', 'n', 't' ];
    const subArray = ['A','s','p','i','r','i','n','g',' ','F','r','o','n','t','-','E','n','d', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];


    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>C</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={letterClass}>s</span>
                    <span className={`${letterClass} _13`}>a</span>
                    <span className={`${letterClass} _14`}>r</span>
                    <AnimatedLetters letterClass={letterClass}
                          strArray={nameArray}
                          idx={15}/>
                    <br />
                </h1>
                <h2>
                    <AnimatedLetters letterClass={letterClass}
                      strArray={jobArray}
                      idx={19} />
                      <br />
                </h2>
                <h3>
                    <AnimatedLetters letterClass={letterClass}
                      strArray={subArray}
                      idx={18}/>
                </h3>
                <Link to="/portfolio" className='flat-button'>Projects</Link>
                <button className='flat-button' onClick={() => window.open(resume)}>Resume</button>
            </div>
            <Logo />
        </div>
        <About />
        <Portfolio />
        <div className='spacer'>
          <Contact />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home
