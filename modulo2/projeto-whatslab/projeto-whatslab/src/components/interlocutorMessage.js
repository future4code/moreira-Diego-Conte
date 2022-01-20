import React from 'react';
import Styled from 'styled-components';

const MessageContainer = Styled.div`

display: flex;
width: auto;
flex-direction: column;
margin: 1px 5px;
margin-right: 200px;
word-wrap: break-word;
border: 1px solid gray;
border-radius: 5px 5px 5px 5px;
background-color: #dddddd;
      
    .nameUser{
      margin: 2px 10px;
      font-size: 17px;
      font-weight: bold;
    }

    p{
      margin: 2px 10px;
      font-size: 17px;
      font-weight: lighter ;
    }
`

export class InterlocutorMessage extends React.Component {
    render() {

        return (
            <MessageContainer key={Date.now}>
                <p className='nameUser'>{this.props.nameUser}</p>
                <p>{this.props.msgUser}</p>
            </MessageContainer>
        )
    }
}
