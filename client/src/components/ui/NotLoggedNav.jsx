import { Link } from 'react-router-dom'

const NotLoggedNav = () => {
  return (
    <ul className='nav__ul'>
      <Link to='/login'>
        <li className='nav__li'>Ingresar</li>
      </Link>
      <Link to='/register'>
        <li className='nav__li'>Registrarse</li>
      </Link>
    </ul>
  )
}

export default NotLoggedNav
