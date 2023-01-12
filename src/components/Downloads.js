import React from 'react'
import './Downloads.css'

const Downloads = () => {
  
  return (
    <div className='downloads'>
      <a href='./CV_MarinDabro_EN.pdf' download>
        <p>CV</p>
      </a>
      <a href='./CV_MarinDabro_DE.pdf' download>
        <p>Lebenslauf</p>
      </a>
    </div>
  )
}

export default Downloads
