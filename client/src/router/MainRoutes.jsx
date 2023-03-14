import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { UserDashboard, Login, Register, AddToDairy, Home } from '../pages/index'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { verifyUser } from '../services/userServices'

const MainRoutes = () => {
  const { userState, setUserState } = useContext(UserContext)

  useEffect(() => {
    verifyUser(setUserState)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={userState.isLogged ? <UserDashboard /> : <Login />} />
        <Route path='/add-dairy' element={userState.isLogged ? <AddToDairy /> : <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
