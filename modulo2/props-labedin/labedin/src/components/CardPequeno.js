import React from 'react';
import styled from 'styled-components';

const LittleCard = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    height: 60px;
    width: 530px;
    margin-bottom: 10px;
    padding-bottom: 5px;


    button{
    display: flex;
    width: 530px;
    height: 60px;
    text-align: start;
    align-items: center;
    border-radius: 3px;
    border: 1px solid rgb(0, 0, 0);
    background-color: inherit;
    }

    img {
    width: 30px;
    margin-left: 3px;
    margin-right: 10px;
    border-radius: 50%;
}

    p {
    font-size: 15px;
    text-align: justify;
    margin-right: 3px;
}
`
function CardPequeno(props) {
    return (
        <LittleCard>
            <button><img src={props.imagem} />
                <p>{props.informacao}</p>
            </button>
        </LittleCard>
    )
}

export default CardPequeno;