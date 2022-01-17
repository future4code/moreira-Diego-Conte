import React from 'react';
import Styled from 'styled-components';

const ContainerPagina1 = Styled.div`

text-align: center;
display: flex;
width: 99vw;
height: 99vh;
margin-top: 40px;

form{
    margin: auto auto;

    div{
        display: flex;
        flex-direction: column;
        margin: 10px 20px;
        
        p{
            text-align: start;
            margin-bottom: 5px;

        }

        input{
            width: 600px;
            height: 30px;
            border: 1px solid gray;
            border-radius: 10px;
            font-size: 18px;
        }

        select{
            width: 600px;
            height: 30px;
            border: 1px solid gray;
            background-color: white;
            border-radius: 10px;
            font-size: 18px;
        }
    }
}
`

class Pagina1 extends React.Component {

    state = {
        inputNome: '',
        inputIdade: '',
        inputEmail: '',
        inputEscolaridade: '',

        etapa1: [],
    }

    onChangeNome = (event) => this.setState({
        inputNome: event.target.value
    })

    onChangeIdade = (event) => this.setState({
        inputIdade: event.target.value
    })

    onChangeEmail = (event) => this.setState({
        inputEmail: event.target.value
    })


    render() {
        const conteudoPagina1 = this.state.etapa1.map((resposta) => {
            return <div>
                <p>LeroLero</p>
            </div>
        })

        return (
            <ContainerPagina1>
                <form>
                    <h1>Dados gerais</h1>
                    <div>
                        <p>1. Qual é o seu nome?</p>
                        <input type="text"
                            value={this.state.inputNome}
                            onChange={this.onChangeNome} />
                    </div>

                    <div>
                        <p>2. Qual é a sua idade?</p>
                        <input type="number"
                            value={this.state.inputIdade}
                            onChange={this.onChangeIdade} />
                    </div>

                    <div>
                        <p>3. Qual é o seu e-mail?</p>
                        <input type="email"
                            value={this.state.inputEmail}
                            onChange={this.onChangeEmail} />
                    </div>

                    <div>
                        <p>4. Qual é a sua escolaridade?</p>
                        <select>
                            <option>
                                Ensino Médio incompleto
                            </option>

                            <option>
                                Ensino Médio completo
                            </option>

                            <option>
                                Ensino Superior incompleto
                            </option>

                            <option>
                                Ensino Superior completo
                            </option>
                        </select>
                    </div>
                </form>
            </ContainerPagina1>
        )
    }
}

export default Pagina1;