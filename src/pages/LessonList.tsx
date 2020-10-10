import api from '../services/api'
import LessonCard from '../components/LessonCard'
import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import Header from 'src/components/Header'

type Lesson = {
  name: string
  description: string
  link: string
}

export default function LessonList() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const classes = useStyles()

  const listLessons = async () => {
    const response = await api.get('lessons')
    setLessons(response.data.data)
  }

  useEffect(() => { listLessons() }, [])

  return (
    <>
      <Header/>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h3' color='textPrimary'>Aulas disponíveis</Typography>
          </Grid>
          {lessons.map(({ name, description, link }, key) => (<Grid key={key} xs={3}>
            <LessonCard name={name} description={description} link={link}/>
          </Grid>))}
        </Grid>
      </div>
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
