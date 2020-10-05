import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import TextInput from 'src/components/TextInput'

import api from '../services/api'
import LessonCard from '../components/LessonCard'

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
    const { data } = await api.get('/lessons')
    const filteredLessons = data
      .filter(({ name, description }: Lesson) => name.includes(query) || description.includes(query))

    setLessons(filteredLessons)
  }

  useEffect(() => { listLessons() }, [query])

  return (
    <div className={classes.root}>
      <Typography variant='h3' color='textPrimary'>Aulas disponíveis</Typography>
      <TextInput
        label='Busca'
        onChange= {e => { setQuery(e.target.value) }}
        placeholder='Nome ou descrição da aula'
        value={query}
      />
      <Grid container spacing={3}>
        {lessons.map(({ name, description, link }, key) => (<Grid key={key} item xs={3}>
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
