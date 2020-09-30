import React from 'react'
import { render } from '@testing-library/react'

import LessonForm from 'src/pages/LessonForm'

test('renders LessonForm', () => {
  const { getByText, getAllByText } = render(<LessonForm />)
  getByText('Cadastro de Aula')
  getAllByText('Nome da aula')
  getAllByText('Nome do Professor')
  getAllByText('Link da Aula')
  getAllByText('Descrição da Aula')
  getByText('Salvar Cadastro')
})
