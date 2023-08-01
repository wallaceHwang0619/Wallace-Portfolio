import './contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        'gmail',
        'template_cybdd6c',
        refForm.current,
        'jSTAxN9UuGq7wAWlT'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Message failed to send, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p>
            I am interested in any software related opportunities. Let me know
            if you have any questions, requests, or concerns that you'd like to
            make known to me. Feel free to reach out to me using the form below!
          </p>
          <div className="contact-form">
            <form
              ref={refForm}
              onSubmit={(e) => {
                e.preventDefault()
                sendEmail(e)
              }}
            >
              <ul>
                <li className="input-form half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="input-form half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="input-form">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></input>
                </li>
                <li className="input-form">
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Submit" />
                </li>
              </ul>
            </form>
          </div>
          <p className="second-paragraph">
            You can also find me on LinkedIn or Instagram using the links on the
            bottom-left.
          </p>
        </div>
        <div className="info-map">
          Wallace Hwang <br />
          United States <br /> San Jose, CA
          <br />
          <span>wallacehwang0619@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[37.33548, -121.893028]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[37.33548, -121.893028]}>
              <Popup>This is the city Wallace resides in.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Contact
