import React from 'react';
import styled from 'styled-components';
import AddNewUsers from './components/AddNewUsers';
import ListUsers from './components/ListUsers';


const ContainerApp = styled.div`
  margin: 20px 20px;
`

const ButtonNav = styled.button`
  margin-top: 50px;
  margin-left: 432px;
  height: 25px;
  width: 100px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
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
        {this.state.currentPage === "AddNewUsers" ? <AddNewUsers /> : <ListUsers />}
        <ButtonNav onClick={this.changePage}> Navegar </ButtonNav>
      </ContainerApp>
    );
  }
}

export default App;
