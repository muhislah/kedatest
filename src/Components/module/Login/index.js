import React, { useRef, useState } from 'react'
import loginimg from './login.svg'
import exit from './exit.svg'

const Login = ({close}) => {
  const loginPage = useRef(null)
  const [user, setUser] = useState({})
  const fadeOf = () => {
    loginPage.current.classList.add('fade')
    setTimeout(() => {
      close()
    }, 400)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  return (
    <div className='login-page' ref={loginPage}>
      <div className='container'>
        <img src={exit} onClick={fadeOf} alt="" className='exit' />
        <img src={loginimg} alt="" />
        <h1>Login</h1>
        <p>Please login with your account!</p>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email : </label>
            <input name="email" onChange={handleChange} placeholder='Insert your email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email" id="email" autoFocus required />
            <label htmlFor="password">Password :</label>
            <input name="password" onChange={handleChange} placeholder='Type your password' type="password" id="password" minLength={8} maxLength={32} required/>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login