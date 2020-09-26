
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TeacherList from './TeacherList'
import TeacherForm from './TeacherForm'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/list' component={TeacherList} />
      <Route path='/form' component={TeacherForm}/>
    </BrowserRouter>
  )
}

export default Routes
