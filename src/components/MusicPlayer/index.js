import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const MusicPlayer = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)

    }, [])

    return(
        <>
          <div className = "container radio-page">
              <div className = "text-zone">
                  <h1>
                      <AnimatedLetters
                          letterClass={letterClass}
                          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                          idx={15}
                      />
                  </h1>
              </div>
            </div>
          <Loader type="pacman" />
        </>
    )
}

export default MusicPlayer
