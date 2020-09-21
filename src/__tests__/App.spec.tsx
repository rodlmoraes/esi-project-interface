
import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

test('renders app', () => {
  const { getAllByText } = render(<App />)
  const element = getAllByText(/Ver aula/i)
  expect(element).toBeDefined()
})
