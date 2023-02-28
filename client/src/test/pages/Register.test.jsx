import { screen, render, cleanup } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Home from '../../pages/Home'
import { UserContextProvider } from '../../context/userContext'

describe('Tests in Home component', () => {
  afterEach(cleanup)

  it('Should render', () => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <Home />
        </UserContextProvider>
      </BrowserRouter>
    )
  })

  it('Should show Button', () => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <Home />
        </UserContextProvider>
      </BrowserRouter>
    )
    screen.getByText('Start Here')
  })
})
