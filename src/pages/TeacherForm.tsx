import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../services/api'
import Button from '@material-ui/core/Button'
import { Typography, Card } from '@material-ui/core'

export default function TeacherForm() {
  const history = useHistory()

  const [teacherName, setTeacherName] = useState('')
  const [lessonName, setLessonName] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')

  async function handleCreateClass() {
    try {
      await api.post('/teachers', {
        teacher: {
          name: teacherName,
        },
      })

      await api.post('/lessons', {
        lesson: {
          name: lessonName,
          link,
          description,
        },
      })
      alert('Cadastro realizado com sucesso!')
      history.push('/list')
    } catch {
      alert('Erro no cadastro!')
    }
  }

  const classes = useStyles()

  return (
    <Card className={classes.root}>
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
