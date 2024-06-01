import React from 'react';
import githubLogo from '../assets/github-logo.png'


const Footer = () => {
  return (
    <div className='footer'>
      <a href="https://github.com/filipamiralopes/apartment-rental-dashboard" target="_blank">
        <img src={githubLogo} alt='white Github logo'/></a>
        <a href="https://github.com/filipamiralopes/apartment-rental-dashboard" target="_blank" className='footer-link'>
        <p>Github Repository</p></a>
    </div>
  )
}

export default Footer