import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faDownload, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import BorderDiv from './components/BorderDiv';

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import EmailForm from './pages/EmailForm'
import Downloads from './components/Downloads'
import myLogo from './media/mylogo-colored.png'

import { useState } from 'react';

function App() {

  const [activePage, setActivePage] = useState(0)
  const [emailActive, setEmailActive] = useState(false)
  const [downloadActive, setDownloadActive] = useState(false)

  const next = () => {
    console.log(activePage)
    if (activePage === 0) {
      document.getElementById('home').classList.toggle('inactive')
      document.getElementById('portfolio').classList.toggle('active')
      setActivePage(1)
    }
  }
  const prev = () => {
    console.log(activePage)
    if (activePage === 1) {
      document.getElementById('portfolio').classList.toggle('active')
      document.getElementById('home').classList.toggle('inactive')
      setActivePage(0)
    }
  }

  const quitEmail = () => {
    setEmailActive(false)
  }

  const openEmail = () => {
    setEmailActive(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <section className="top">
        <p className="glitch">
          <span aria-hidden="true">marin dabro</span>
          marin dabro
          <span aria-hidden="true">marin dabro</span>
        </p>

        {downloadActive ? <Downloads /> : null}
        <div className="logos">
          <a href='https://github.com/MarinDabro' target='_blank'>
            <FontAwesomeIcon className='icon' icon={faGithubSquare} />
          </a>
          <a href='https://www.linkedin.com/in/marin-dabro/' target='_blank'>
            <FontAwesomeIcon className='icon' icon={faLinkedin} />
          </a>

          <div onClick={e => setDownloadActive(!downloadActive)}>
            <FontAwesomeIcon className='icon' icon={faDownload} />
          </div>
          <div onClick={e => setEmailActive(true)}>
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
          </div>
        </div>
      </section>
      </header>

      <div className='display'>
        <BorderDiv>
          <div className='logo'>
            <img src={myLogo} className='mylogo'></img>
          </div>
          <Home openEmail={openEmail} />
          <Portfolio />
        </BorderDiv>
      </div>

      <div className='nav'>
        <button onClick={prev}>
          <FontAwesomeIcon style={{pointerEvents: 'none'}} className='icon' icon={faChevronLeft} />
        </button>

        <button onClick={next}>
          <FontAwesomeIcon style={{pointerEvents: 'none'}} className='icon' icon={faChevronRight} />
        </button>
      </div>

      {emailActive ? <EmailForm quitEmail={quitEmail} /> : null}
    </div>
  );
}

export default App;
