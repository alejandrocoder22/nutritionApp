export const onLogin = async (e, username, password, navigate) => {
  e.preventDefault()

  const response = await fetch('http://localhost:3001/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })

  if (response.status === 200) {
    const userData = await response.json()
    window.localStorage.setItem('token', userData.token)
    navigate('/dashboard')
  }
}

export const verifyUser = (setUserState) => {
  return fetch('http://localhost:3001/api/users/verify', {
    method: 'GET',
    headers: {
      token: `Bearer ${window.localStorage.getItem('token')}`
    }
  })
    .then(response => response.json())
    .then(userData => {
      if (userData.status === 'sucess') {
        setUserState({ isLogged: true, userName: userData.data.username })
      } else {
        setUserState({ isLogged: false, userName: null })
      }
    })
}
