import './App.css';
import React from 'react';
import Styled from 'styled-components';
import { Chat } from './components/chat';


const ContainerMessages = Styled.div`

max-width: 99vw;
height: 95vh;

`


function App() {
  return (
    <ContainerMessages>
      <Chat/>
    </ContainerMessages>
  );
}

export default App;
