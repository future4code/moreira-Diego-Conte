import React from 'react';
import Router from './routes/routes';
import Header from './components/Header/Header';
import { theme } from './constants/theme';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { GlobalStyle, MainContainer } from './components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  const token = localStorage.getItem("tokenLabEddit");
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login");
  const [selectedPost, setSelectedPost] = useState()

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <GlobalStyle />
        <BrowserRouter>
          <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
          <Router setRightButtonText={setRightButtonText} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>
        </BrowserRouter>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
