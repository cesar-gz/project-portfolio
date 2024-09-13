import './index.scss'
import { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import DOMPURIFY from 'dompurify'

/*
// BuggyCounter component for testing error boundary
const BuggyCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(prevCounter => {
      if (prevCounter > 4) throw new Error('I crashed!');
      return prevCounter + 1;
    });
  };

  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>Error Boundary Test Counter</h3>
      <p>Click the number to increment. It will error after 5.</p>
      <h1 onClick={handleClick} style={{ cursor: 'pointer' }}>{counter}</h1>
    </div>
  );
};
*/

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
      let newErrors = {};

      if (!formData.name.trim()) {
        newErrors.name = 'Name is required.';
      } else if (!/^[a-zA-Z' -]{2,20}$/.test(formData.name)) {
        newErrors.name = 'Name must be 2-20 characters and can only contain letters, spaces, hyphens, and apostrophes';
      }

      if (!formData.email.trim()) {
        newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }

      if (!formData.subject.trim()) {
        newErrors.subject = 'Subject is required.';
      } else if (!/^[a-zA-Z0-9 .,!?'-]{2,30}$/.test(formData.subject)) {
        newErrors.subject = 'Subject must be 2-30 characters and can only contain letters, numbers, spaces, and basic punctuation';
      }

      if (!formData.message.trim()) {
        newErrors.message = 'Message is required.';
      } else if (formData.message.length < 10 || formData.message.length > 500) {
        newErrors.message = 'Message must be between 10 and 500 characters';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        if (validateForm()) {
          //if the form is valid, then sanitize the data

          const sanitizeData = {
            name: DOMPURIFY.sanitize(formData.name),
            email: DOMPURIFY.sanitize(formData.email),
            subject: DOMPURIFY.sanitize(formData.subject),
            message: DOMPURIFY.sanitize(formData.message)
          };

          emailjs
            .sendForm(
              'service_3bjfqaa',
              'template_ky0v96c',
              form.current,
              'y04LRN06MzREufY6-'
            )
            .then(
              () => {
                alert('Message sent!')
                window.location.reload(false)
              },
              () => {
                alert('Failed to send the message, please try again.')
              }
            )

          // TODO: possibly send data to backend here
          console.log('Sending email with:', sanitizeData);
          // Reset the form after successful submission
          setFormData({ name: '', email: '', subject: '', message: '' });
        }
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Feel free to reach out if you have a question.</p>

                {/* <BuggyCounter /> */}


                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete="true" />
                              {errors.name && <span className="error">{errors.name}</span>}
                            </li>
                            <li className='half'>
                                <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                autoComplete="true"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && <span className="error">{errors.email}</span>}
                            </li>
                            <li>
                                <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                              />
                              {errors.subject && <span className="error">{errors.subject}</span>}
                            </li>
                            <li>
                                <textarea
                                placeholder="Message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                              ></textarea>
                              {errors.message && <span className="error">{errors.message}</span>}
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
