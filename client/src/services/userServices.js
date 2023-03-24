export const onLogin = async (e, username, password, navigate, context) => {
  e.preventDefault()

  const response = await fetch('https://nutritionapi.alejandrocoder.com/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })

  if (response.status === 200) {
    const userData = await response.json()
    window.localStorage.setItem('token', userData.token)
    context.setUserState({ isLogged: true, userName: userData.userName })
    navigate('/dashboard')
  } else {
    context.setUserState({ isLogged: false, userName: null })
  }
}

export const verifyUser = (setUserState) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/api/users/verify`, {
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
