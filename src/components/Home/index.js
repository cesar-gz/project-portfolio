import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import resume from '../../assets/images/resume.pdf';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['C', 'e', 's', 'a', 'r', ' ', 'G', 'u', 't', 'i', 'e', 'r', 'r', 'e', 'z'];
    const jobArray = [
      'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r',
      ' ', 'a', 'n', 'd', ' ',
      'S', 'e', 'c', 'u', 'r', 'i', 't', 'y', ' ',
      'S', 'p', 'e', 'c', 'i', 'a', 'l', 'i', 's', 't'
    ];
    const subArray = ['B', 'a', 'c', 'h', 'e', 'l', 'o', 'r', 's', ' ', 'i', 'n', ' ', 'C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e'];
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
                    <AnimatedLetters letterClass={letterClass}
                          strArray={nameArray}
                          idx={15}/>
                </h1>
                <h1 className='job-title'>
                    {jobArray}
                </h1>
                <h1 className='sub-array'>
                    {subArray}
                </h1>
                <button className='flat-button' onClick={() => window.open(resume)}>View Résumé</button>
            </div>
          <Logo />
        </div>
        </>
    )
}

export default Home
