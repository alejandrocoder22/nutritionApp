import { useState } from 'react'

import { onLogin } from '../services/userServices'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../components/ui/Nav'

export const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <main className='auth wera'>
      <Nav />
      <form onSubmit={(e) => onLogin(e, userName, password, navigate)} className='auth__form wrapper '>
        <div className='auth__wrapper'>
          <label className='auth__label'>Username</label>
          <input className='auth__input' onChange={(e) => setUserName(e.target.value)} />
          <label className='auth__label'>Password</label>
          <input className='auth__input' onChange={(e) => setPassword(e.target.value)} type='password' />
          <p className='auth__register-text'>Not having an account? <Link to='/register'>Register here</Link> </p>
          <button className='auth__button pointer'>Login</button>
        </div>
      </form>
    </main>
  )
}
