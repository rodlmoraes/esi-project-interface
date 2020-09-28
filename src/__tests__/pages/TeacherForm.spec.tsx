import React from 'react'
import { render } from '@testing-library/react'

import LessonForm from 'src/pages/LessonForm'

test('renders learn react link', () => {
  const { getByText } = render(<LessonForm />)
  const pageName = getByText(/Cadastro de Aula/i)
  expect(pageName).toBeDefined()
})
