import { PAGE_NAME } from '../constants'
import api from '../services/api'
import LessonCard from '../components/Card'

import React, { useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Typography, Card, Grid} from '@material-ui/core'

export default function TeacherList() {
  const [lessons, setLessons] = useState([])
  const [query, setQuery] = useState('')
  const classes = useStyles()

  async function ListLessons() {
    const response = await api.get('lessons')
    setLessons(response.data.data)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h3' color='textPrimary'>{PAGE_NAME}</Typography>
        </Grid>
        <Grid xs={12}>
          <Button
            onClick={ListLessons}
          >
            Carregar aulas
          </Button>
        </Grid>
        {lessons.map((lesson) => { return <Grid xs={3}><LessonCard name={lesson["name"]} description={lesson["description"]}/></Grid> })}
      </Grid>
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
