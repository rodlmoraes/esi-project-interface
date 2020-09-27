import React from 'react'
import { render } from '@testing-library/react'

import TeacherForm from 'src/pages/TeacherForm'

test('renders learn react link', () => {
  const { getByText } = render(<TeacherForm />)
  const pageName = getByText(/Cadastro de Aula/i)
  expect(pageName).toBeDefined()
})
