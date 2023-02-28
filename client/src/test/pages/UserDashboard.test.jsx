import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { it, describe } from 'vitest'
import { UserContextProvider } from '../../context/userContext'

import UserDashboard from '../../pages/UserDashboard'

describe('Test in AddDairy page', () => {
  it('Should render', () => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <UserDashboard />
        </UserContextProvider>
      </BrowserRouter>
    )
  })
})
