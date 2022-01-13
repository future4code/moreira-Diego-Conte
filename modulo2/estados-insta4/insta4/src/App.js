import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p{
    margin-top:40px;
    text-align: center;
    font-size: 20px;
  }

  input{
    font-size: 15px;
    width: 280px;
    height: 20px;
    margin: 5px;
    border: 1px solid black;
    :hover{background-color: #d6d6d6}
  }

  button{
    width: 120px;
    height: 25px;
    margin-left: 165px;
    margin-top: 10px;
    margin-bottom: 30px;
    border-radius: 2px;
    border: 1px solid black;
    :hover{cursor: pointer; background-color: #c1c1c7; font-weight:bold;};
    :active{cursor:pointer; background-color: inherit}
  }
`

export class App extends React.Component {

  state = {
    inputNome: "",
    inputFotoPerfil: "",
    inputFoto: "",
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuario: "Fernanda",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },

      {
        nomeUsuario: 'Mariê',
        fotoUsuario: 'https://picsum.photos/50/49',
        fotoPost: 'https://picsum.photos/200/149'
      }
    ]
  }

  getInputNome = (event) => this.setState({
    inputNome: event.target.value
  })

  getInputFotoPerfil = (event) => this.setState({
    inputFotoPerfil: event.target.value
  })

  getInputFoto = (event) => this.setState({
    inputFoto: event.target.value
  })


  novosPosts = () => {
    const getDateFromInput = [...this.state.posts,
    {
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFotoPerfil,
      fotoPost: this.state.inputFoto
    }];

    this.setState({
      posts: getDateFromInput,
      inputNome: "",
      inputFotoPerfil: "",
      inputFoto: ""
    });
  };



  render() {

    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        {listaPosts}

        <p>Adicone um post</p>
        <input
          placeholder={'Nome'}
          value={this.state.inputNome}
          onChange={this.getInputNome}
        />

        <input
          placeholder={'Informe o link da foto de perfil'}
          value={this.state.inputFotoPerfil}
          onChange={this.getInputFotoPerfil}
        />

        <input
          placeholder={'Informe o link da foto do post'}
          value={this.state.inputFoto}
          onChange={this.getInputFoto}
        />
        <button onClick={this.novosPosts}>Adicionar post</button>

      </MainContainer>
    )
  }
}

export default App;
