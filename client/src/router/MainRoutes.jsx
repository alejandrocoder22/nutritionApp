import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { UserDashboard, Login, Register, AddToDairy, Home } from '../pages/index'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { verifyUser } from '../services/userServices'
import Nav from '../components/ui/Nav'

const MainRoutes = () => {
  const { userState, setUserState, setIsLoading, isLoading } = useContext(UserContext)

  useEffect(() => {
    verifyUser(setUserState, setIsLoading)
  }, [])

  return (
    <BrowserRouter>
      {
      isLoading
        ? <h1>Loading...</h1>
        : <>
          <Nav />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={userState.isLogged ? <UserDashboard /> : <Login />} />
              <Route path='/add-dairy' element={userState.isLogged ? <AddToDairy /> : <Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </main>
          </>
    }

    </BrowserRouter>
  )
}

export default MainRoutes
