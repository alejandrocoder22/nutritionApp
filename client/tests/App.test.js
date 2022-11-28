
import { render } from '@testing-library/react'
import App from '../src/App'

describe('Pruebas en <App/>', () => {
    test('Debe de hacer match con el snapshot', () => {
      const { container } =  render(<App/>)
      expect(container).toMatchSnapshot()
    })
})