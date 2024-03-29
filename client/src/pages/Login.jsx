import { useState, useContext } from 'react'
import { onLogin } from '../services/userServices'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../components/ui/Nav'
import { UserContext } from '../context/userContext'

export const Login = () => {
  const context = useContext(UserContext)

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <section className='auth'>
      <form onSubmit={(e) => onLogin(e, userName, password, navigate, context)} className='auth__form wrapper '>
        <div className='auth__wrapper'>
          <label className='auth__label'>Usuario</label>
          <input className='auth__input' onChange={(e) => setUserName(e.target.value)} />
          <label className='auth__label'>Contraseña</label>
          <input className='auth__input' onChange={(e) => setPassword(e.target.value)} type='password' />
          <p className='auth__register-text'>¿No tienes cuenta? <Link to='/register'>Regístrate aquí</Link> </p>
          <button className='auth__button pointer'>Ingresar</button>
        </div>
      </form>
    </section>
  )
}
