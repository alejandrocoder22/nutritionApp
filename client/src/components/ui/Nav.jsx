import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import IsLoggedNav from './IsLoggedNav'
import NotLoggedNav from './NotLoggedNav'

const Nav = () => {
  const context = useContext(UserContext)

  return (
    <header className='header wrapper '>
      <Link to='/'>
        <div className='header__logo'>Nutrition</div>
      </Link>
      <nav className='header__nav'>

        {
          context.userState.isLogged
            ? <IsLoggedNav context={context} />
            : <NotLoggedNav />
        }

      </nav>
    </header>
  )
}

export default Nav
