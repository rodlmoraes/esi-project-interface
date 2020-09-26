
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TeacherForm from './TeacherForm'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/form' component={TeacherForm}/>
    </BrowserRouter>
  )
}

export default Routes
