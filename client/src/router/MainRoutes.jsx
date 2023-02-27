import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import UserDashBoard from '../pages/UserDashBoard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { verifyUser } from '../services/userServices'
import AddToDairy from '../pages/AddToDairy'

const MainRoutes = () => {
  const { userState, setUserState } = useContext(UserContext)

  useEffect(() => {
    verifyUser(setUserState)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={userState.isLogged ? <UserDashBoard /> : <Login />} />
        <Route path='/add-dairy' element={userState.isLogged ? <AddToDairy /> : <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
