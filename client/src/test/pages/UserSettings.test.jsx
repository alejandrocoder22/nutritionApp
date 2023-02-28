import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { it, describe } from 'vitest'
import { UserContextProvider } from '../../context/userContext'

import UserSettings from '../../pages/UserSettings'

describe('Test in AddDairy page', () => {
  it('Should render', () => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <UserSettings />
        </UserContextProvider>
      </BrowserRouter>
    )
  })
})
