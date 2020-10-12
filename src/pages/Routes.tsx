import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { useAuth } from 'src/contexts/auth'

import LessonList from './LessonList'
import LessonForm from './LessonForm'
import Login from './Login'

export default function Routes() {
  const { signedIn } = useAuth()

  return (
    <BrowserRouter>
      <Switch>
        {signedIn
          ? <Route path='/cadastrar-aula' component={LessonForm}/>
          : <Route path='/entrar' component={Login} />}
        <Route path='/' component={LessonList} exact />
        <Redirect to={signedIn ? '/cadastrar-aula' : '/'} />
      </Switch>
    </BrowserRouter>
  )
}
