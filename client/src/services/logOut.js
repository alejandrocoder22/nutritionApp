export const logOut = (navigate) => {
  window.localStorage.removeItem('token')
  navigate('/login')
}
