import React from 'react';
import githubLogo from '../assets/github-logo.png'


const Footer = () => {
  return (
    <div className='footer'>
        <img src={githubLogo} alt='white Github logo'/>
        <p>Github Repository</p>
    </div>
  )
}

export default Footer