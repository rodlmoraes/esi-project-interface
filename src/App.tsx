import React from 'react'
import Routes from './pages/Routes'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './assets/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}
