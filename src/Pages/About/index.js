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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, recusandae repellat omnis, earum voluptatum optio id, corrupti maxime molestias veritatis necessitatibus quis? Iusto id tempora, explicabo tenetur ipsum minus alias voluptate adipisci, excepturi necessitatibus exercitationem culpa deserunt similique nulla eius quod, quisquam beatae molestias? Totam odit deleniti at quos nostrum.</p>
          <h3>Vision and Mission</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, recusandae repellat omnis, earum voluptatum optio id, corrupti maxime molestias veritatis necessitatibus quis? Iusto id tempora, explicabo tenetur ipsum minus alias voluptate adipisci, excepturi necessitatibus exercitationem culpa deserunt similique nulla eius quod, quisquam beatae molestias? Totam odit deleniti at quos nostrum.</p>
        </div>
      </div>
    </div>
  )
}

export default About