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

<<<<<<< HEAD:src/components/LessonCard.tsx
type LessonCardProps = {
=======
type ILessonCardProps = {
>>>>>>> 95a2b9edb3ebd37f7beff902e9dbe08362ab9cfd:src/components/Card.tsx
  name: string
  description: string
  link: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: '22rem',
      height: '28rem',
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
      marginLeft: '3.2rem',
      marginRight: '3.2rem',
      fontWeight: 600,
      borderRadius: 15,
    },
  }),
)

<<<<<<< HEAD:src/components/LessonCard.tsx
export default function LessonCard ({ name, description, link }:LessonCardProps) {
=======
export default function LessonCard ({name, description, link}:ILessonCardProps) {
>>>>>>> 95a2b9edb3ebd37f7beff902e9dbe08362ab9cfd:src/components/Card.tsx
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        title={name}
      />
      <CardMedia
        className={classes.media}
        image={TeacherImg}
        title={name}
      />
      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button className={classes.button} variant='contained' color='primary' >Ver aula</Button>
      </CardActions>
    </Card>
  )
}
