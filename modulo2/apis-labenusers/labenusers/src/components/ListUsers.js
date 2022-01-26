import axios from 'axios';
import React from 'react';
import styled from 'styled-components';


//                  STYLE
const ListUsersContainer = styled.div`
  margin: 30px auto;

  li{
    margin: 15px 10px;
  }
`

const ButtonDelete = styled.button`
  margin-left: 7px;
  height: 22px;
  width: 80px;
  font-size: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  :hover{border: 2px solid black}
`

const Input = styled.input`
  margin: 0px 0px;
  height: 25px;
  width: 200px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
`

const ButtonEditUser = styled.button`
  margin-top: 7px;
  margin-left: 5px;
  height: 25px;
  width: 100px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
`

const SearchBox = styled.div`
  margin-top: 70px;
`

//                  CONSTs
const urlApiLabenu = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";

const headers = {
    headers: {
        Authorization: "diego-conte-moreira"
    }
};


//                  MAIN COMPONENT FUNCTION
class ListUsers extends React.Component {

    state = {
        users: [],
        inputSearchName: "",
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios
            .get(urlApiLabenu, headers)
            .then((response) => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                alert(error)
            })
    }

    onChangeSearchName = (event) => {
        this.setState({ inputSearchName: event.target.value })
    }

    deleteUsers = (id) => {
        if(window.confirm("Deseja realmente excluir este contato?")){
        axios
            .delete(urlApiLabenu+id, headers)
            .then((response) => {
                this.getAllUsers()
                alert(`Usuário apagado com sucesso.`);
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
        } else {
            alert("Nenhum usuário foi excluído")
        }
    }


    render() {
        const listUsers = this.state.users.map((user) => {
            return <li key={user.id}> {user.name}
                <ButtonDelete onClick={() => this.deleteUsers(user.id)}>Deletar</ButtonDelete></li>
        });

        return (
            <ListUsersContainer>
                {listUsers}
                <SearchBox>
                    <p>Procurar usuário</p>
                    <Input
                        type="text"
                        placeholder='Nome exato para busca'
                        value={this.state.inputSearchName}
                        onChange={this.onChangeSearchName}
                    />
                    <ButtonEditUser>Buscar</ButtonEditUser>
                </SearchBox>
            </ListUsersContainer>
        )
    }
}

export default ListUsers;