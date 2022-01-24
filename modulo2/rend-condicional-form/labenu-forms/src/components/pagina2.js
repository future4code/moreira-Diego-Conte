import React from 'react';
import Styled from 'styled-components';

const ContainerPagina2 = Styled.div`

text-align: center;
display: flex;
margin: 20px auto;
width: 99vw;
height: 99vh;

form{
    margin: auto 280px;

    h1{
        display: flex;
    }

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
    }
}
`

class Pagina2 extends React.Component {

    state = {
        inputCurso: '',
        inputEstabelecimento: '',
       
        etapa2: [],
    }

    onChangeCurso = (event) => this.setState({
        inputCurso: event.target.value
    })

    onChangeEstabelecimento = (event) => this.setState({
        inputEstabelecimento: event.target.value
    })


    render() {
        const conteudoPagina2 = this.state.etapa2.map((resposta) => {
            return <div>
                <p>LeroLero</p>
            </div>
        })

        return (
            <ContainerPagina2>
                <form>
                    <h1>Informações educacionais para quem está cursando
                        (ou já terminou) o ensino superior
                    </h1>
                    <div>
                        <p>1. Qual é o seu curso?</p>
                        <input type="text"
                            value={this.state.inputCurso}
                            onChange={this.onChangeCurso} />
                    </div>

                    <div>
                        <p>2. Qual é a unidade de ensino?</p>
                        <input type="text"
                            value={this.state.inputEstabelecimento}
                            onChange={this.onChangeEstabelecimento} />
                    </div>
                </form>
            </ContainerPagina2>
        )
    }
}

export default Pagina2;