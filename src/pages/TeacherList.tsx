import React, { useState } from 'react'
import { PAGE_NAME } from '../constants'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import api from '../services/api'
import Button from '@material-ui/core/Button'
import { Typography, Card, Grid} from '@material-ui/core'
import NestedGrid from '../components/Grid'


export default function TeacherList() {

  const [lessons, setLessons] = useState([])
  const [query, setQuery] = useState('')
  const classes = useStyles()

  async function ListLessons() {
    const response = await api.get('lessons')
    setLessons(response.data.data)
    console.log(response.data.data)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h3' color='textPrimary'>{PAGE_NAME}</Typography>
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          {lessons.map((lesson) => { return <Card className={classes.root}>{lesson["name"]}</Card> })}
        </Grid>
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
