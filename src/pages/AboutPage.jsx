import React from 'react'

const AboutPage = () => {
  return (
    <div className='about-project'>
      <h2>About the project</h2>
      <p>Welcome to our React App mini project! Admin dashboard for the apartment rental platform where the admin can see and manage the apartments shown on the platform.</p>
      
      <h2>Team Members</h2>
      <div className='team-members'>
      <div >
        <img src="" alt="Photo of Filipa" />
        <h3>Filipa Lopes</h3>
        <p>Filipa Lopes</p>
      </div>
      <div>
        <img src="" alt="Photo of Daniela" />
        <h3>Daniela Dias</h3>
        <p>Daniela Dias</p>
    
      </div> 
      </div>     
                   
      <h2>Links</h2>
      <a href="https://github.com/filipamiralopes">Filipa's GitHub</a><br/>
      <a href="">Filipa's LinkedIn</a><br/>
      <a href="https://github.com/Dani-A-Dias">Daniela's GitHub</a><br/>
      <a href="">Daniela's LinkedIn</a><br/>
      
      
      
    </div>
  )
}

export default AboutPage