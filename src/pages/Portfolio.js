import React from 'react'
import './Portfolio.css'

const Home = () => {

  return (
    <div id='portfolio' className='portfolio'>
      <section className="showcase" id="about">
        <h2>Projects</h2>
        <div className='showcase-container'>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover')">
            <a target='_blank' href='https://flightconnect.dev'><h3>flightconnect.dev</h3></a>
              <div className="flipper">
                <div className="card"></div>
                <div className="card-back">
                  <p>FlightConnect is a team project that my team and i created for the back end module at our school Digital Career Institute, we were tasked with creating a functioning backend and deploying it on a web server but we were interested in working with real world data as well.</p>
                  <p>In the end we chose to make a full stack flight search application with our server storing userdata as well as providing the client side with data from Amadeus, Sabre and Google API's.</p>
                  <p>Challenges were to implement all the different API's and handling or manipulating the data between our own database and the state of the current client session and its many components and routes</p>
                  <p>Technologies: Mongo DB, Express, React, Node</p>
                </div>
              </div>
            </div>


          <div className="flip-container" ontouchstart="this.classList.toggle('hover')">
            <a target='_blank' href='https://soundwise-wcnl.onrender.com/'><h3>soundwise.dev</h3></a>
            <div className="flipper">
              <div className="card"></div>
              <div className="card-back">
                <p>For our final project we wanted to focus on React and API integration since we found them to be more complicated than the backend.</p>
                <p>We chose to make a music player because the Spotify Web App has a lot of routes and API calls behind it and more functionality than we had time to implement.</p>
                <p>Unfortunately Spotify restricted the access to the player API 2 weeks before we started without mentioning it in the documentation.</p>
                <p>The challenges were the same as FlightConnect since we wanted to get more experience in this area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
