import React from 'react';
import styled from 'styled-components';


const MessageContainer = styled.div`

display: flex;
width: 60%;
margin-left: 200px;
word-wrap: break-word;
justify-content: flex-end;


boxMessage{
    display: flex;
    margin: 1px 0px;
    width: fit-content;
    text-align: end;
    word-wrap: break-word;
    border: 1px solid gray;
    border-radius: 5px 5px 5px 5px;
    background-color: rgb(182, 181, 181);
}

    p{
      margin: 2px 10px;
      font-size: 17px;
      font-weight: lighter ;
    }
`


export class UserMessage extends React.Component {
    render() {
        return (
            <MessageContainer>
                <boxMessage>
                    <p>{this.props.msgUser}</p>
                </boxMessage>
            </MessageContainer>
        )
    }
}