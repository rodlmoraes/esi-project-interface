
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NestedGrid from 'src/components/NestedGrid'

import LessonList from './LessonList'
import LessonForm from './LessonForm'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' component={LessonList} exact />
      <Route path='/cadastrar-aula' component={LessonForm}/>
    </BrowserRouter>
  )
}

export default Routes
