import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import RecipeReviewCard from '../components/Card'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#1C1C24',
      padding: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(3),
      backgroundColor: '#9D9999',
      justifyContent: 'center',
      borderRadius: 20,
    },
  }),
)

export default function NestedGrid() {
  const classes = useStyles()

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><RecipeReviewCard/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><RecipeReviewCard/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><RecipeReviewCard/></Paper>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  )
}
