import api from '../services/api'
import LessonCard from '../components/LessonCard'

import React, { useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextInput from 'src/components/TextInput'

type Lesson = {
  name: string
  description: string
  link: string
}

export default function LessonList() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [query, setQuery] = useState('')
  const classes = useStyles()

  const listLessons = async () => {
    const response = await api.get('lessons')
    console.log(response.data.data)
    setLessons(response.data.data.filter( ({ name, description, link }:Lesson) => {
      return (query === "") ?
        true :
        name.match(`.*${query}.*`) || description.match(`.*${query}.*`)
    }))
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h3' color='textPrimary'>Aulas disponíveis</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextInput
            label='Busca'
            onChange= {e => { setQuery(e.target.value) }}
            placeholder='termos de busca'
            value={query}
          />
        </Grid>
        <Grid item xs={9}>
          <Button
            className={classes.button}
            color='secondary'
            onClick={listLessons}
            size='large'
            variant='contained'
            >
              Buscar
          </Button>
        </Grid>
        {lessons.map(({ name, description, link }, key) => (<Grid key={key} xs={3}>
          <LessonCard name={name} description={description} link={link}/>
        </Grid>))}
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
