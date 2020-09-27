import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import TeacherImg from '../assets/images/9k.png'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
      borderRadius: 15,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
    button: {
      width: '250px',
      height: '50px',
      margin: '3.2rem',
      fontWeight: 600,
      borderRadius: 15,
    },
  }),
)

export default function LessonCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        }
        title='Aula de Zmba'
        subheader='September 14, 2020'
      />
      <CardMedia
        className={classes.media}
        image={TeacherImg}
        title='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' component='p'>
          Aula para dançar bastante e emagrecer se divertindo muito observando um professor
          gostoso para animar os olhos também.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button className={classes.button} variant='contained' color='primary' >Ver aula</Button>
      </CardActions>
    </Card>
  )
}