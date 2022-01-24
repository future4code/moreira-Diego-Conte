import React from 'react';
import Styled from 'styled-components';

const ContainerPagina4 = Styled.div`

text-align: center;
display: flex;
justify-content: center;
align-items: center;
width: 99vw;
height: 99vh;

p{
    text-align: start;
    font-size: 18px;
}  
`

class Pagina4 extends React.Component {

    render() {
        
        return (
            <ContainerPagina4>
                <p>
                    Agradecemos pela sua participação. <br></br>
                    Em breve entraremos em contato.
                </p>
            </ContainerPagina4>
        )
    
}
}

export default Pagina4;