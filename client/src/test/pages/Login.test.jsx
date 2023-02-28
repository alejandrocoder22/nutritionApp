import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { it, describe } from 'vitest'
import { UserContextProvider } from '../../context/userContext'

import Login from '../../pages/Login'

describe('Test in AddDairy page', () => {
  it('Should render', () => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <Login />
        </UserContextProvider>
      </BrowserRouter>
    )
  })
})
