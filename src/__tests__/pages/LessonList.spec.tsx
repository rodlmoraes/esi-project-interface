import React from 'react'
import { render } from '@testing-library/react'

import LessonList from 'src/pages/LessonList'

test('renders LessonList', () => {
  const { getByText, getAllByText } = render(<LessonList />)
  getByText('Aulas disponíveis')
  //getByText('Buscar')
})

test('renders HeaderLessonList', () => {
    const { getByText, getAllByText } = render(<LessonList />)
    getByText('HomeWorkout')
    //getByText('Buscar')
  })
  