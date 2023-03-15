import { Link } from 'react-router-dom'

const NotLoggedNav = () => {
  return (
    <ul className='nav__ul'>
      <Link to='/login'>
        <li className='nav__li'>Login</li>
      </Link>
      <Link to='/register'>
        <li className='nav__li'>Register</li>
      </Link>
    </ul>
  )
}

export default NotLoggedNav
