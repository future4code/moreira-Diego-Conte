import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import UserDetails from './UserDetails';


//                  STYLE
const ListUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  align-items: center;
`

const ReturnRender = styled.div`
  display: flex;
`

const ContainerUsers = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: space-between;
  
  li{
    list-style: none;
    border: 1px solid lightgray;
    border-radius: 3px;
    margin: 5px 0px;
    width: auto;
    font-size: 17px;
    :hover{font-weight:bold;border: 1px solid gray; cursor: pointer;}
  }
`

const ButtonDelete = styled.button`
  height: 21px;
  width: 25px;
  margin-top: 5px;
  margin-right: -2px;
  font-size: 16px;
  background-color: inherit;
  border:none;
  font-family: Roboto;
  border: 1px solid lightgray;
  border-radius: 3px;
  :hover{font-weight:bold;border: 1px solid gray; cursor: pointer;};
`

const Input = styled.input`
  display: flex;
  align-items: center;
  margin: 0px 0px;
  height: 25px;
  width: 300px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  :hover{border: 1px solid black; cursor: pointer;}
`

const ButtonSearch = styled.button`
  margin-top: 7px;
  height: 25px;
  width: 100px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  font-family: Roboto;
  :hover{border: 1px solid black; cursor: pointer;};
  :active{border: 3px solid black; width: 101px; height: 26px}
`

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  margin-bottom: 50px;
  font-size: 16px;
`

//                  CONSTs
const urlApiLabenu = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";

const urlApiLabenuSearch = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?"

const headers = {
    headers: {
        Authorization: "diego-conte-moreira"
    }
};


//                  MAIN COMPONENT FUNCTION
class ListUsers extends React.Component {

    state = {
        users: [],
        inputSearch: "",
        page: "ListUsers",
        userId: "",
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

    searchingUsers = (event) => {
        this.setState({ inputSearch: event.target.value })
    }


    deleteUsers = (id) => {
        if (window.confirm("Deseja realmente excluir este usuário?")) {
            axios
                .delete(urlApiLabenu + id, headers)
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

    searchUser = () => {
        if ((this.state.inputSearch).includes(`@`)) {
            axios
                .get(urlApiLabenuSearch + '&email=' + this.state.inputSearch, headers)
                .then((response) => {
                    this.setState({ users: response.data })
                    this.setState({ inputSearch: "" });
                })
                .catch((error) => {
                    alert(error.response.data.message)
                })
        } else {
            axios
                .get(urlApiLabenuSearch + 'name=' + this.state.inputSearch, headers)
                .then((response) => {
                    this.setState({ users: response.data });
                    this.setState({ inputSearch: "" });
                })
                .catch((error) => {
                    alert(error.response.data.message)
                })
        }
    }

    swipePage = (id) => {
        if (this.state.page === "ListUsers") {
            this.setState({ page: "UserDetails", userId: id })
        } else {
            this.setState({ page: "ListUsers", userId: "" })
        }
    };


    render() {
        const listUsers = this.state.users.map((user) => {
            return <ReturnRender>
                <ButtonDelete onClick={() => this.deleteUsers(user.id)}> X </ButtonDelete>
                <li key={user.id} onClick={() => this.swipePage(user.id)}>
                    {user.name}
                </li>
            </ReturnRender>
        });

        return (
            <ListUsersContainer>
                {this.state.page === "ListUsers" ?
                    <div>
                        <SearchBox>
                            <p>Procurar usuário</p>
                            <Input
                                type="text"
                                placeholder='Nome ou e-mail completo para busca'
                                value={this.state.inputSearch}
                                onChange={this.searchingUsers}
                            />
                            <ButtonSearch onClick={this.searchUser}>Buscar</ButtonSearch>
                        </SearchBox>
                        <p>Usuários cadastrados</p>
                        <ContainerUsers>
                            {listUsers}
                        </ContainerUsers>
                    </div> : (<UserDetails userId={this.state.userId} />)}
            </ListUsersContainer>
        )
    }
}

export default ListUsers;