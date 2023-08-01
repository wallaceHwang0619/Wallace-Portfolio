import './portfolio.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Music from '../../assets/images/music-genre.png'
import Inrix from '../../assets/images/inrix-logo.png'
import Discord from '../../assets/images/discord-bot.png'
import Remotasks from '../../assets/images/remotasks-logo.png'
import Amazon from '../../assets/images/amazon-logo.png'
import CHTGlobal from '../../assets/images/cht-logo.png'
import Hanley from '../../assets/images/chess-piece.png'
import Resume from '../../assets/images/wallace-resume.pdf'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'M',
                'y',
                ' ',
                'P',
                'o',
                'r',
                't',
                'f',
                'o',
                'l',
                'i',
                'o',
              ]}
              idx={15}
            />
          </h1>
          <p>
            As a growing Software Engineer, I'm thrilled to share some of the
            projects I've had the opportunity to work on throughout my career!
            This page serves as a portfolio, showcasing my skill set and passion
            for software development. Additionally, here you can find a link to
            my resume for a more comprehensive overview of my experience and
            qualifications.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Resume}
            className="flat-button"
          >
            My Resume
          </a>
        </div>
        <div className="card-container">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <Card className="large-card">
            <CardActionArea
              className="card-action"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wallaceHwang0619/Music-Genre-Classifier"
            >
              <CardMedia
                component="img"
                height={160}
                image={Music}
                alt="Music Genres"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Music Genre Classifier
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A music genre classifier built utilizing supervised machine
                  learning techniques. Three models - K-Nearest Neighbors,
                  Random Forest, and Neural Network - were implemented and
                  evaluated using the same set of features.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className="card">
            <CardActionArea
              className="card-action"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wallaceHwang0619/DiscordBot"
            >
              <CardMedia
                component="img"
                height={160}
                image={Discord}
                alt="Discord Bot"
              />
              <CardContent className="card-text">
                <Typography gutterBottom variant="h5" component="div">
                  Interactive Discord Bot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A discord server bot which returned user information for
                  League of Legends. The bot would automatically detect for
                  messages in a community server to return information based on
                  user request. The bot also provided feedback based on recent
                  user performance.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className="card">
            <CardActionArea
              className="card-action"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wallaceHwang0619/InrixHack"
            >
              <CardMedia
                component="img"
                height={160}
                image={Inrix}
                alt="INRIX"
              />
              <CardContent className="card-text">
                <Typography gutterBottom variant="h5" component="div">
                  Commute Schedule Optimizer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project was done during the INRIX Hackathon, and involved
                  creating an optimized commute scheduler that integrated
                  seamlessly with Google Calendar. Leveraging Google and INRIX's
                  APIs, our team developed an accurate commute time estimator,
                  enabling users to plan their daily schedules efficiently.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <div className="experience-list">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                idx={15}
              />
            </h1>
            <div className="experience">
              <img src={Remotasks} alt="Amazon" />
              <div className="experience-title">
                Remotasks - AI Training Programmer
              </div>
              <sub> (July 2023 - Current)</sub>
            </div>
            <div className="experience">
              <img src={Amazon} alt="Amazon" />
              <div className="experience-title">
                Amazon - Software Development Engineer Intern
              </div>
              <sub> (June 2022 - September 2022)</sub>
            </div>
            <div className="experience">
              <img src={CHTGlobal} alt="Amazon" />
              <div className="experience-title">
                CHT Global - Data Analyst Intern
              </div>
              <sub> (June 2017 - September 2017)</sub>
            </div>
            <div className="experience">
              <img src={Hanley} alt="Amazon" />
              <div className="experience-title">
                Hanley Chess Academy - Chess Instructor
              </div>
              <sub> (January 2016 - July 2016)</sub>
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Portfolio
