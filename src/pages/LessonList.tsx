import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'

import api from '../services/api'

type Lesson = {
  name: string,
  description: string,
  link: string,
}

export default function LessonList() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [query, setQuery] = useState('')
  const classes = useStyles()

  const listLessons = async () => {
    const response = await api.get('lessons')
    setLessons(response.data.data)
  }

  useEffect(() => { listLessons() }, [])

  return (
    <>
      <Typography variant='h3'>Cursos disponíveis</Typography>
      <TextField
        margin='normal'
        placeholder='busca'
        variant='outlined'
        value={query}
        onChange= {e => { setQuery(e.target.value) }}
      />
      <Button
        className={classes.button}
        variant='contained'
        color='secondary'
        onClick={listLessons}>
          Buscar
      </Button>
      <ul>
        {lessons.map((lesson, key) => { return <li key={key}>{lesson.name}</li> })}
      </ul>
    </>
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
