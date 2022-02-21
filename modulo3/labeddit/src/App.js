import React from 'react';
import Router from './routes/routes';
import { theme } from './constants/theme';
import { ThemeProvider } from '@mui/material';
import { GlobalStyle, MainContainer } from './components/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <GlobalStyle />
        <Router />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
