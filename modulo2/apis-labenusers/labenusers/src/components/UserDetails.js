import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ListUsers from './ListUsers';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0px auto;
align-items: center;
justify-content: center;
`

const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
    h1{
        font-size: 16px;
        margin-bottom: 30px;
    }
`

const Button = styled.button`
margin-top: 65px;
height: 25px;
width: 150px;
font-size: 16px;
border: 1px solid gray;
border-radius: 5px;
font-family: Roboto;
:hover{border: 1px solid black; cursor: pointer;};
:active{border: 3px solid black; width: 151px; height: 26px}
`

const urlApiLabenu = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";

const headers = {
    headers: {
        Authorization: "diego-conte-moreira"
    }
};

class UserDetails extends React.Component {

    state = {
        page: "UserDetails",
        infos: [],
    }

    componentDidMount() {
        this.getInfoUser()
    }

    getInfoUser = () => {
        axios
            .get(urlApiLabenu + this.props.userId, headers)
            .then((response) => {
                this.setState({ infos: response.data })
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    swipePage = (userId) => {
        if (this.state.page === "UserDetails") {
            this.setState({ page: "ListUsers", userId: userId })
        } else {
            this.setState({ page: "UserDetails", userId: "" })
        }
    };

    render() {
        return (
            <MainContainer>
                {this.state.page === "UserDetails" ?
                    <TextContainer>
                        <h1>Detalhes do usuário:</h1>
                        <p>Nome: {this.state.infos.name}</p>
                        <p>E-mail: {this.state.infos.email}</p>
                        <Button onClick={this.swipePage}> Lista de usuários</Button>
                    </TextContainer>
                    : (<ListUsers />)}
            </MainContainer>
        )
    }
}

export default UserDetails;