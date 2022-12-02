
import { UserContextProvider } from './context/userContext'
import MainRoutes from './router/MainRoutes'

function App () {
  return (
    <UserContextProvider>
      <MainRoutes />
    </UserContextProvider>
  )
}

export default App
