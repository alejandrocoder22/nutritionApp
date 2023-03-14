export const logOut = (navigate, setUserState) => {
  window.localStorage.removeItem('token')
  setUserState({ isLogged: false, userName: null })
  navigate('/login')
}
