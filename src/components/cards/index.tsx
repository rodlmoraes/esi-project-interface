import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { red } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import TeacherImg from '../../assets/images/9k.png'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
      backgroundColor: '#1C1C24',
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
      backgroundColor: '#C45E1A',
      color: '#F5F5F7',
    },
  }),
)

export default function RecipeReviewCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia
        className={classes.media}
        image={TeacherImg}
        title='Paella dish'
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <Button className={classes.button}>Ver aula</Button>
      </CardActions>
    </Card>
  )
}
