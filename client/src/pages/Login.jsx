import { useState } from 'react'

import { onLogin } from '../services/userServices'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/ui/Nav'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <main className='auth'>
      <Nav />
      <form onSubmit={(e) => onLogin(e, userName, password, navigate)} className='auth__form wrapper'>
        <label className='auth__label'>Username</label>
        <input className='auth__input' onChange={(e) => setUserName(e.target.value)} />
        <label className='auth__label'>Password</label>
        <input className='auth__input' onChange={(e) => setPassword(e.target.value)} type='password' />
        <button className='auth__button pointer'>Login</button>
      </form>
    </main>
  )
}

export default Login
