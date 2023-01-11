import React from 'react'
import './BorderDiv.css'

const BorderDiv = ({children}) => {
  
  return (
    <div className='borderDiv'>
      <div className='one'>
      </div>
      <div className='two'>
        {children}
      </div>
    </div>
  )
}

export default BorderDiv
