import './App.css';
import React from 'react';
import Styled from 'styled-components';
import Pagina1 from './components/pagina1';
import Pagina2 from './components/pagina2';
import Pagina3 from './components/pagina3';
import Pagina4 from './components/pagina4';


const ContainerGeral = Styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: -100px;
margin-right: 20px;


button{
  font-size: 15px;
  height: 30px;
  width: 150px;
  border: 1px solid gray;
  border-radius: 10px;
  :hover{border: 1.5px solid black};
  :active{border: 2px solid black};
}
`


class App extends React.Component {

  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => this.setState({
    etapa: this.state.etapa + 1
  })



  render() {

    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Pagina1 />
        case 2:
          return <Pagina2 />
        case 3:
          return <Pagina3 />
        case 4:
          return <Pagina4 />
        default:
          return "Página não encontrada"
      }

    }
    return (
      <ContainerGeral>
        {renderizaEtapa()}
        {this.state.etapa !== 4 &&(
        <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
        )}
      </ContainerGeral>

    )
  }
}

export default App;
