import { useState } from 'react'
import Nav from '../components/ui/Nav'

export const Register = () => {
  const [username, setUsername] = useState(null)
  const [password, setPasword] = useState(null)

  const onRegister = (e) => {
    e.preventDefault()
    return fetch('http://localhost:3001/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
  }

  return (
    <main className='auth'>
      <Nav />
      <form className='auth__form wrapper' onSubmit={onRegister}>
        <div className='auth__wrapper'>
          <label className='auth__label'>Username</label>
          <input className='auth__input' onChange={(e) => setUsername(e.target.value)} />
          <label className='auth__label '>Password</label>
          <input className='auth__input' onChange={(e) => setPasword(e.target.value)} type='password' />
          <button className='auth__button pointer '>Register</button>
        </div>
      </form>
    </main>
  )
}
