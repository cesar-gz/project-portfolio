import './index.scss'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_3bjfqaa',
                'template_ky0v96c',
                form.current,
                'y04LRN06MzREufY6-'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
                    idx={15}
                    />
                </h1>
                <p style={{marginTop:'-25px'}}>Feel free to reach out if you're looking for a developer, have a question, or want to connect.</p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required autoComplete="true"/>
                            </li>
                            <li className='half'>
                                <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                autoComplete="true"
                                />
                            </li>
                            <li>
                                <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                                />
                            </li>
                            <li>
                                <textarea
                                placeholder="Message"
                                name="message"
                                required>
                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[33.880905, -117.885398]} zoom={15}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.880905, -117.885398]}>
                            <Popup>I study here and enjoy meeting people here.</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact
