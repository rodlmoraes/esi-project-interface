import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../services/api'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'

export default function TeacherForm() {
  const history = useHistory()

  const [teacherName, setTeacherName] = useState('')
  const [lessonName, setLessonName] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')

  function handleCreateClass() {
    api.post('/teachers', {
      teacher: {
        name: teacherName,
      },
    })

    api.post('/lessons', {
      lesson: {
        name: lessonName,
        link,
        description,
      },
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    }).catch(() => {
      alert('Erro no cadastro!')
    })
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h3' color='textPrimary' >Cadastro de Aula</Typography>
      <TextField
        margin='normal'
        label='Nome da aula'
        placeholder='Aula de'
        fullWidth
        variant='outlined'
        value={lessonName}
        onChange= {e => { setLessonName(e.target.value) }}
      />
      <TextField
        margin='normal'
        label='Nome do Professor'
        placeholder='Nome'
        fullWidth
        variant='outlined'
        value={teacherName}
        onChange= {e => { setTeacherName(e.target.value) }}
      />
      <TextField
        margin='normal'
        label='Link da Aula'
        placeholder='Link do Youtube'
        fullWidth
        variant='outlined'
        value={link}
        onChange= {e => { setLink(e.target.value) }}
      />
      <TextField
        margin='normal'
        label='Descrição da Aula'
        placeholder='Descrição'
        fullWidth
        variant='outlined'
        value={description}
        onChange= {e => { setDescription(e.target.value) }}
      />
      <Button
        className={classes.button}
        variant='contained'
        color='secondary'
        size='large'
        onClick={handleCreateClass}>
          Salvar Cadastro
      </Button>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      background: '#1C1C24',
      padding: '2rem',
      alignItems: 'center',
    },
    button: {
      marginTop: '0.8rem',
    },
  }),
)
