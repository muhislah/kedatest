import React, { useEffect, useState } from 'react'
import Header from '../../Components/module/Header'
import chartimg from './chart.png'
import background from './background.png'
import About from '../About'
import Contact from '../Contact'
import Price from '../Price'
import ScrollButton from '../../Components/base/ScrollButton'
import Login from '../../Components/module/Login'

const Home = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Header open={() => setVisible(true)}/>
      <ScrollButton />
      {visible && <Login close={() => setVisible(false)}/>}
      <div className='wrapper'>
        <img src={background} alt="back" />
        <img className='reverse' src={background} alt="back" />
        <div className='container'>
          <div className='small-container'>
            <img src={chartimg} alt="" />
            <div className='greeting'>
              <h1>Good Bussiness<br />Good Management</h1>
              <p>We present the best system for your business.</p>
              <p>All our package use TIER system. So, you can choose according to your needs</p>
              <button className='explore'>Browse package</button>
            </div>
          </div>
          <About/>
          <Price/>
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default Home