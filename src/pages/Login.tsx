import { Button, Card, createStyles, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TextInput from 'src/components/TextInput'

import api from 'src/services/api'

export default function Login() {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateClass = async () => {
    try {
      const response = await api.post('/teacher_auth/sign_in', {
        email,
        password,
      })
      const { headers, headers: { uid, client } } = response
      api.defaults.headers.common = {
        ...api.defaults.headers.common,
        'access-token': headers['access-token'],
        uid,
        client,
      }
      alert('Você está dentro!')
      history.push('/cadastrar-aula')
    } catch {
      alert('Erro ao tentar entrar!')
    }
  }

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography variant='h3'>Entre e adicione novas aulas!</Typography>
      <TextInput
        label='Email'
        onChange= {e => { setEmail(e.target.value) }}
        placeholder='Digite aqui seu email'
        value={email}
      />
      <TextInput
        label='Senha'
        onChange= {e => { setPassword(e.target.value) }}
        placeholder='Digite aqui sua senha'
        value={password}
        hidden
      />
      <Button
        className={classes.button}
        color='secondary'
        onClick={handleCreateClass}
        size='large'
        variant='contained'
      >
          Entrar
      </Button>
    </Card>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      alignItems: 'center',
      borderRadius: 15,
      margin: '4rem',
    },
    button: {
      marginTop: '0.8rem',
    },
  }),
)
