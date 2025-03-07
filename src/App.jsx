import { ThemeProvider } from '@emotion/react'
import MainRoute from './router/MainRoute'
import AppTheme from './theme/AppTheme';
import { CssBaseline } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <MainRoute />
    </ThemeProvider>
  )
}

export default App
