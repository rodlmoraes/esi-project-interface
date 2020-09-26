import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../services/api'
import Button from '@material-ui/core/Button'

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

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
    }),
  )

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label='Nome da aula '
          style={{ margin: 8 }}
          placeholder='Aula de'
          helperText=' '
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          value={lessonName}
          onChange= {e => { setLessonName(e.target.value) }}
        />
        <TextField
          label='Nome do Professor '
          placeholder='Nome'
          className={classes.textField}
          helperText=' '
          variant='outlined'
          InputLabelProps={{
            shrink: true,
          }}
          value={teacherName}
          onChange= {e => { setTeacherName(e.target.value) }}
        />
        <TextField
          label='Link da Aula '
          placeholder='Link do Youtube'
          className={classes.textField}
          helperText=' '
          variant='outlined'
          InputLabelProps={{
            shrink: true,
          }}
          value={link}
          onChange= {e => { setLink(e.target.value) }}
        />
        <TextField
          label='Descrição da Aula '
          style={{ margin: 8 }}
          placeholder='Descrição'
          helperText=' '
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          value={description}
          onChange= {e => { setDescription(e.target.value) }}
        />
      </div>
      <Button variant='outlined' color='primary' onClick={handleCreateClass}>
        Salvar
      </Button>
    </div>
  )
}
