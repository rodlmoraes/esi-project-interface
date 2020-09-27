import React, { useState } from 'react'
import { PAGE_NAME } from '../constants'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../services/api'
import Button from '@material-ui/core/Button'

type Lesson = {
  name: String,
  description: String,
  link: String,
}

export default function TeacherList() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [query, setQuery] = useState('')
  const classes = useStyles()

  async function ListLessons() {
    const response = await api.get('lessons')
    setLessons(response.data.data)
  }

  return (
    <div>
      <h1>{PAGE_NAME}</h1>
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
        onClick={ListLessons}>
          Buscar
      </Button>
      <ul>
        {lessons.map((lesson, key) => { return <li key={key}>{lesson.name}</li> })}
      </ul>
    </div>
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
