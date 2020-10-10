import { Button, Card, createStyles, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TextInput from 'src/components/TextInput'
import { useAuth } from 'src/contexts/auth'

export default function Login() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        onClick={() => signIn(email, password)}
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
