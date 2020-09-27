import React from 'react'
import Routes from './pages/routes'
import { ThemeProvider } from '@material-ui/core'
import theme from './assets/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Routes />
    </ThemeProvider>
  )
}
