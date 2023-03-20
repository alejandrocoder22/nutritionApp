import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../services/logOut'

const IsLoggedNav = ({ context }) => {
  const navigate = useNavigate()
  return (
    <ul className='nav__ul'>
      <Link to='/dashboard'>
        <li className='nav__li'>Dashboard</li>
      </Link>

      <li className='nav__li nav__logout' onClick={() => logOut(navigate, context.setUserState)}>Desconectarse</li>
      <li className='nav__li nav__current-user capitalize'> {context.userState.userName}</li>
    </ul>
  )
}

export default IsLoggedNav
