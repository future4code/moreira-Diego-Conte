import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


//                  STYLE
const AddNewUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  justify-content: center;
  align-items: center;
`

const Inputs = styled.input`
  margin: 5px;
  height: 28px;
  width: 300px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  :hover{border: 1px solid black; cursor: pointer;}
`

const ButtonAddUser = styled.button`
  margin-top: 7px;
  height: 25px;
  width: 100px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  font-family: Roboto;
  :hover{border: 1px solid black;cursor: pointer;};
  :active{border: 2px solid black; width: 101px; height: 26px}
`


//                  CONSTs

const urlCreateUser = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "diego-conte-moreira"
  }
};

class AddNewUsers extends React.Component {

  state = {
    inputName: "",
    inputMail: "",
  }

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value })
  }

  onChangeInputMail = (event) => {
    this.setState({ inputMail: event.target.value })
  }

  addUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputMail
    }

    axios.post(urlCreateUser, body, headers)
      .then((response) => {
        alert(`O usuário ${this.state.inputName} foi adicionado com sucesso.`);
        this.setState({ inputName: "" });
        this.setState({ inputMail: "" });
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  render() {
    return (
      <AddNewUsersContainer>
        <p>Informe-nos seus dados:</p>
        <Inputs
          type="text"
          placeholder='Nome'
          value={this.state.inputName}
          onChange={this.onChangeInputName}
        />

        <Inputs
          type="email"
          placeholder='E-mail'
          value={this.state.inputMail}
          onChange={this.onChangeInputMail}
        />

        <ButtonAddUser onClick={this.addUsers}>Cadastrar-se</ButtonAddUser>
      </AddNewUsersContainer>
    );
  }
}

export default AddNewUsers;
