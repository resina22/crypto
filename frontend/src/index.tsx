import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#f57c00',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
);
