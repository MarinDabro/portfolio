import React from 'react'
import {FontAweomeIcon, FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import './Home.css'
import reactLogo from '../media/react.png'
import basicsLogo from '../media/html-css-js.png'
import nodeLogo from '../media/node-js-new.png'
import mongoLogo from '../media/mongo.png'
import gitLogo from '../media/git.png'
import npmLogo from '../media/npm.png'
import laptopLogo from '../media/laptop.png'


const Home = ({openEmail}) => {

  return (
    <div id='home' className='home'>
      <div>
        <h2>Welcome.</h2>
        <h3>Hi, my name is Marin Dabro - Junior Web Developer.</h3>
        <p>I enjoy working on challenging projects that give me lots of bugs to solve and push me to dive deep into the documentation to understand the underlying proccesses and abstractions beneath my code.</p>
        <p>As a curious person I am naturally motivated to investigate and find myself interested not only in all things tech but in a lot of different topics and like to share, listen and discuss with others.</p>
        <p>I am currently searching for my first job and looking forward to be part of a team working on a real product. If you want to know more about me i will be glad to have a chat together.</p>
        <FontAwesomeIcon onClick={openEmail} className='contact' icon={faEnvelope} />
      </div>
      <div>
          <img src={laptopLogo} className='laptop'></img>
      </div>
      <div>
        <section>
          <img src={basicsLogo} className='basics'></img>
          <img src={reactLogo} className='react'></img>
        </section>
        <section>
          <img src={nodeLogo} className='node'></img>
          <img src={mongoLogo} className='mongo'></img>
        </section>
        <section>
          <img src={gitLogo} className='git'></img>
          <img src={npmLogo} className='npm'></img>
        </section>
      </div>
    </div>
  )
}

export default Home
