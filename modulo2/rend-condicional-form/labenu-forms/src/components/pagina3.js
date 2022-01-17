import React from 'react';
import Styled from 'styled-components';

const ContainerPagina3 = Styled.div`

text-align: center;
display: flex;
width: 99vw;
height: 99vh;

form{
    margin: auto 280px;

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

class Pagina3 extends React.Component {

    state = {
        inputMotivo: '',
        inputComplementar: '',

        etapa3: [],
    }

    onChangeMotivo = (event) => this.setState({
        inputMotivo: event.target.value
    })

    onChangeComplementar = (event) => this.setState({
        inputComplementar: event.target.value
    })


    render() {
        const conteudoPagina3 = this.state.etapa3.map((resposta) => {
            return <div>
                <p>LeroLero</p>
            </div>
        })

        return (
            <ContainerPagina3>
                <form>
                    <h1>Informações sobre quem não
                        se formou no ensino superior nem está cursando
                    </h1>
                    <div>
                        <p>1. Por que você não terminou um curso de 
                            graduação?</p>
                        <input type="text"
                            value={this.state.inputMotivo}
                            onChange={this.onChangeMotivo} />
                    </div>

                    <div>
                        <p>2. Você fez algum curso complementar? ?</p>
                        <select>
                            <option>
                                Curso técnico
                            </option>

                            <option>
                                Cursos de inglês
                            </option>

                            <option>
                                Não fiz curso complementar
                            </option>
                        </select>
                    </div>
                </form>
            </ContainerPagina3>
        )
    }
}

export default Pagina3;