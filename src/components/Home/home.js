import LogoTitle from '../../assets/images/w-logo.png'
import { Link } from 'react-router-dom'
import './home.scss'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo/logo'
import Loader from 'react-loaders'
import { useMediaQuery } from 'react-responsive'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'l', 'l', 'a', 'c', 'e']
  const jobArray1 = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ']
  const jobArray2 = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

  const isMobile = useMediaQuery({ query: '(max-Width: 1200px)' })

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>I</span>
            <span className={`${letterClass} _12`}>'</span>
            <span className={`${letterClass} _13`}>m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            ></AnimatedLetters>
            <br />{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray1}
              idx={22}
            ></AnimatedLetters>
            {isMobile && <br />}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={30}
            ></AnimatedLetters>
          </h1>
          <h2>
            Santa Clara University Graduate / Computer Science Major, Math Minor
            / Full Stack Developer
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo></Logo>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Home
