
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LessonList from './LessonList'
import LessonForm from './LessonForm'
import Login from './Login'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' component={LessonList} exact />
      <Route path='/entrar' component={Login} />
      <Route path='/cadastrar-aula' component={LessonForm}/>
    </BrowserRouter>
  )
}

export default Routes
