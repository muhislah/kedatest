import React from 'react'

function scroll(ref) {
  const selected = document.querySelector(ref)
  selected.scrollIntoView({behavior : "smooth"})
}

const Header = ({open}) => {
  return (
    <header>
      <div className='logo'>Home</div>
      <ul>
        <li onClick={() => scroll('#about')}>About</li>
        <li onClick={() => scroll('#price')}>Pricing</li>
        <li onClick={() => scroll('#contact')}>Contact</li>
        <li></li>
        <li><button className="login" onClick={open}>Login</button></li>
      </ul>
    </header>
  )
}

export default Header