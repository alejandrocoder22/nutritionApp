import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    isLogged: false
  })
  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  )
}
