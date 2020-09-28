import api from '../services/api'
import LessonCard from '../components/Card'

import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Typography, Card, Grid} from '@material-ui/core'

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
    console.log(response.data.data)
  }

  useEffect(() => { listLessons() }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h3' color='textPrimary'>Aulas disponíveis</Typography>
        </Grid>
        <Grid xs={12}>
          <Button
            onClick={ListLessons}
          >
            Carregar aulas
          </Button>
        </Grid>
        {lessons.map({ name, description, link } => { return <Grid xs={3}><LessonCard name={name} description={description} link={link}/></Grid> })}
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
