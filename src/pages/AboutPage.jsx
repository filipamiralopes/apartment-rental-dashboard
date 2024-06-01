import React from 'react'

const AboutPage = () => {
  return (
    <div className='about-project'>
      <h2>About the project</h2>
      <p>Welcome to our React App mini project! Admin dashboard for the apartment rental platform where the admin can see and manage the apartments shown on the platform.</p>
      
      <h2>Team Members</h2>
      <div className='team-members'>
      <div className='member'>
        <img src="https://media.licdn.com/dms/image/C4D03AQGPfg5NrGTlUQ/profile-displayphoto-shrink_800_800/0/1659991458230?e=1722470400&v=beta&t=t01iC8m-AZU8oJg-wI5kJoToGPAZvYAvvmE0HUt3IyE" alt="Photo of Filipa" />
        <h3>Filipa Lopes</h3>
        <p>Background in Biomedical Engineering and Neuroscience, I'm a Data Engineer with a flair for Backend. Ocean addict.</p>
        <a href="https://github.com/filipamiralopes">Filipa's GitHub</a><br/>
      <a href="https://www.linkedin.com/in/filipamiralopes/">Filipa's LinkedIn</a><br/>
      </div>
      <div className='member'>
        <img src="https://media.licdn.com/dms/image/D4D03AQGJzoPeHaTCJA/profile-displayphoto-shrink_800_800/0/1667037792619?e=1722470400&v=beta&t=O-tmWN9JQKGpbWHcO_crZX5laMputxKVOZNXXSbLUDQ" alt="Photo of Daniela" />
        <h3>Daniela Dias</h3>
        <p>Background in veterinary assistance spanning five years, transitioned into managerial roles, handling tasks such as accounting, human resources, resource management, and inventory control. Seeking new horizons, embarked on a transformative journey, currently pursuing a comprehensive Full Stack Web Development program at Ironhack. In transitioning to web development, I aim to carve a path where creativity and impact converge.</p>
        <a href="https://github.com/Dani-A-Dias">Daniela's GitHub</a><br/>
      <a href="https://www.linkedin.com/in/daniela-dias-604926243/">Daniela's LinkedIn</a><br/>
      
      </div> 
      </div>     
    </div>
  )
}

export default AboutPage