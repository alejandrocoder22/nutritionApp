import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    isLogged: false
  })
  const [isLoading, setIsLoading] = useState(true)
  return (
    <UserContext.Provider value={{ userState, setUserState, setIsLoading, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}
