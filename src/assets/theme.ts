import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F5F5F7',
    },
    primary: {
      main: '#F29C29',
      contrastText: '#FAFAFC',
    },
    secondary: {
      main: '#3281d9',
      contrastText: '#FAFAFC',
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'Poppins, Archivo, Roboto, sans-serif',
    allVariants: {
      color: '#FAFAFC',
    },
  },
})

export default theme
