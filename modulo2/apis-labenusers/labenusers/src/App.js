import React from 'react';
import styled from 'styled-components';
import AddNewUsers from './components/AddNewUsers';
import ListUsers from './components/ListUsers';


const ContainerApp = styled.div`
display: flex;
flex-direction: column;
width: 98vw;
min-height: 97vh;
height: auto;
background-color: aliceblue;
`
const Intro = styled.div`
display: flex;
flex-direction: column;
margin: 30px auto;
align-items: center;
`
const ButtonNav = styled.button`
display: flex;
position: fixed;
justify-content: center;
align-items: center;
height: 25px;
width: 178px;
font-size: 16px;
border: 1px solid gray;
border-radius: 5px;
font-family: Roboto;
:hover{border: 1px solid black; cursor: pointer;};
:active{border: 2px solid black;}
`

class App extends React.Component {

  state = {
    currentPage: "AddNewUsers"
  }

  changePage = () => {
    if (this.state.currentPage === "AddNewUsers") {
      this.setState({ currentPage: "ListUsers" });
    } else {
      this.setState({ currentPage: "AddNewUsers" });
    }
  };

  render() {
    return (
      <ContainerApp>
        <ButtonNav onClick={this.changePage}> Navegar entre as páginas </ButtonNav>
        <Intro>
          <h1>Labenusers</h1>
        </Intro>
        {this.state.currentPage === "AddNewUsers" ? <AddNewUsers /> : <ListUsers />}
      </ContainerApp>
    );
  }
}

export default App;
