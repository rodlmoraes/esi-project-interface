
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TeacherList from './TeacherList'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' component={TeacherList} />
    </BrowserRouter>
  )
}

export default Routes
