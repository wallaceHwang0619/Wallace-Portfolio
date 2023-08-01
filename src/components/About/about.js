import './about.scss'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCuttlefish,
  faGitAlt,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm Wallace Hwang, an ambitious software engineer with a background
            in computer science and a minor in mathematics from Santa Clara
            University. My passion lies in the fields of data science and
            software engineering. Through my education and experience, I have
            gained a solid foundation in these areas, equipping me with the
            necessary skills to tackle complex challenges and create innovative
            solutions.
          </p>
          <p>
            I am an adaptable and quick learner, always eager to keep up with
            the latest advancements in the industry. My dedication to continuous
            growth empowers me to stay ahead of the curve and find creative
            solutions to ever-evolving challenges.
          </p>
          <p>
            I am excited about the possibilities that lie ahead and am confident
            in my ability to make a meaningful contribution to the success and
            growth of any organization I become a part of. I look forward to
            collaborating with like-minded professionals and taking on exciting
            projects that positively impact businesses and society as a whole.
            Thank you for taking the time to learn a bit about me. I'm
            enthusiastic about the future and the opportunities that await!
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#ffd700" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCuttlefish} color="rgb(112,155,206)" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDatabase} color="rgb(246,194,68)" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default About
