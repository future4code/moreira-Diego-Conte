import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Logo from './Assets/Logo.png';
import GroupIcon from '@material-ui/icons/Group';
import PersonSearchIcon from '@material-ui/icons/Face';

const MainContainer = styled.div`
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
top: 50%;
left: 50%;
width: 400px;
height: 600px;
transform: translate(-50%, -50%);
border: 2px solid black;
border-radius: 5px;
background-color: white;
box-shadow: 0 0 10px black;
`

const Header = styled.section`
display: flex;
width: 400px;
height: 50px;
justify-content: space-evenly;
align-items: center;
border-bottom: 1px solid lightgray;
`

const LeroLero = styled.div`
height: 25px;
width: 310px;
`
const color = '#48a498'

const ImageLogo = styled.img`
width: 150px;
z-index: -1;
position: fixed;
`

function App() {
  const [currentPage, setCurrentPage] = useState('Home')


  const changePage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'Matches':
        return <Matches setCurrentPage={setCurrentPage} />
      default:
        return <Home />
    }
  }




  return (
    <MainContainer>
      <Header>
        <ImageLogo src={Logo} alt="Logo AstroMatch" />
        {currentPage === 'Matches' &&
          <PersonSearchIcon
            fontSize='large'
            onClick={() => { setCurrentPage('Home') }}>
          </PersonSearchIcon>}
        <LeroLero>
        </LeroLero>
        {currentPage === 'Home' &&
          <GroupIcon
            fontSize='large'
            onClick={() => { setCurrentPage('Matches') }}
          >
          </GroupIcon>}
      </Header>
      {changePage()}
    </MainContainer>
  );
}

export default App;
