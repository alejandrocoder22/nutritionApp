import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { logOut } from '../../services/logOut'

const Nav = () => {
  const context = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <header className='header wrapper '>
      <Link to='/'>
        <div className='header__logo'>Logo</div>
      </Link>
      <nav className='header__nav'>

        {
          context.userState.isLogged
            ? (

              <ul className='nav__ul'>
                <Link to='/dashboard'>
                  <li className='nav__li'>Dashboard</li>
                </Link>

                <li className='nav__li nav__logout' onClick={() => logOut(navigate, context.setUserState)}>Logout</li>
                <li className='nav__li nav__current-user'> {context.userState.userName}</li>
              </ul>

              )
            : (
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

      </nav>
    </header>
  )
}

export default Nav
