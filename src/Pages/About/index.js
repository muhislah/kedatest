import React from 'react'
import company from './company.png'

const About = () => {
  return (
    <div id="about">
      <h1 className='headline'>About</h1>
      <p>All information about company</p>
      <div className='section'>
        <img src={company} alt="" />
        <div>
          <h3>Profile</h3>
          <p>Our company is located in Pekalongan, Central Java. This company is engaged in providing package system services to make it easier for entrepreneurs to monitor the administration of their company. This company provides a package system service which consists of 3 packages.</p>
          <h3>Vision and Mission</h3>
          <p>realize a modern industry that is transparent and quality</p>
          <ul>
            <li>Participate in creating an orderly company administration</li>
            <li>Transparency and honesty</li>
            <li>Make it easier for users to manage office administration</li>
            <li>Provide a dynamic system that can be updated in accordance with the development of modern industry</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About