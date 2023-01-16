export const onLogin = (e, username, password, navigate) => {
  e.preventDefault()
  fetch('http://localhost:3001/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(response => response.json())
    .then(userData => {
      if (userData.status === 'sucess') {
        window.localStorage.setItem('token', userData.token)
        navigate('/dashboard')
      }
    })
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
        setUserState({ isLogged: true })
      } else {
        setUserState({ isLogged: false })
      }
    })
}
