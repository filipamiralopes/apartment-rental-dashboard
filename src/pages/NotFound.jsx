import React from 'react'
import notFound from '../assets/sad-robot.jpg'

const NotFound = () => {
  return (
    <div className='page-not-found'>
    <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>

      <img src={notFound} alt="page not found" className='robot-not-found'/>

      <button >Return Home</button>

      </div>
  )
}

export default NotFound