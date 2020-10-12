import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
)

export default function Header() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const history = useHistory()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChangetoLogin = () => {
    history.push('/entrar')
  }

  const handleChangetoClassRegister = () => {
    history.push('/cadastrar-aula')
  }

  const handleChangetoClassList = () => {
    history.push('/')
  }

  const handleChangetoAboutUs = () => {
    history.push('/')
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
      <IconButton
        onClick={handleClick}
      >
      <MenuIcon />
      </IconButton>
      <Menu
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            width: '10rem',
          },
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleChangetoLogin}>Login</MenuItem>
        <MenuItem onClick={handleChangetoClassRegister}>Cadastrar aula</MenuItem>
        <MenuItem onClick={handleChangetoClassList}>Lista de aulas</MenuItem>
        <MenuItem onClick={handleChangetoAboutUs}>Sobre nós</MenuItem>
      </Menu>
        <Typography variant='h6'>
            HomeWorkout
        </Typography>
        <IconButton color='inherit' onClick={handleChangetoLogin} >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
