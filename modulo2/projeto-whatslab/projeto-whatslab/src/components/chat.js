import React from 'react';
import iconButton from '../img/sendIcon.png';
import Styled from 'styled-components'
import { UserMessage } from './userMessage';
import { InterlocutorMessage } from './interlocutorMessage';

const ContainerMessages = Styled.div`
  
display: flex;
flex-direction: column;
min-height: 95vh;
width: 515px;
margin: 10px auto;
justify-content: end;
align-items: flex-start;
border-radius: 10px;
border: 2px solid gray;
word-wrap: break-word;
background-color: rgb(209, 209, 209);


// Input 

section{
    border-top: 1px solid gray;
    display: flex;
    height: 95%;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
  }
    
  .inputName{
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
    width: 6vw;
    height: 4.5vh;
    border-radius: 4px;
    border: 1px solid gray;
    margin: 10px 5px;
    :hover{border: 1px solid black; cursor: pointer}
  }

  .inputMessage{
    justify-content: center;
    align-items: center;
    text-align: left;
    font-size: 15px;
    width: 100vw;
    height: 4.5vh;
    border-radius: 4px;
    border: 1px solid gray;
    margin: 10px 5px;
    :hover{border: 1px solid black; cursor: pointer}
  }

  img{
    display: flex;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    :hover{cursor: pointer}
    :active{border: 1px solid rgb(209, 209, 209); cursor: pointer}
  }

  button{
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 40px;
    height: 32px;
    margin: 10px 5px;
    border: none;
    background-color: inherit;
} 
`
export class Chat extends React.Component {

  state = {
    inputName: '',
    inputMessage: '',

    message: [],
  }

  onChangeName = (event) => this.setState({
    inputName: event.target.value
  })

  onChangeMessage = (event) => this.setState({
    inputMessage: event.target.value
  })

  addMessage = () => {
    let newMessage = [...this.state.message,
    {
      nameUser: this.state.inputName          /*      (+ ":")       adds : */,
      userMessage: this.state.inputMessage
    }];

    if (this.state.inputName !== '' && this.state.inputMessage !== '') { //Sets the state and prevents empty submissions
      this.setState({
        message: newMessage,
        inputMessage: ""
      })
    };
  }

  oneKeyDownEnterToSend = (event) => {
    if (event.key === "Enter") {
      this.addMessage()
    }
  }

  render() {

    const displayingMessages = this.state.message.map((msg) => {
      if (msg.nameUser.toLowerCase() === "eu") {
        return <UserMessage
          msgUser={msg.userMessage}
        />
      } else {
        return <InterlocutorMessage
          nameUser={msg.nameUser}
          msgUser={msg.userMessage}
        />
      }
    })

    return <ContainerMessages>

      {displayingMessages}
      <section>
        <input className='inputName'
          type="text"
          placeholder={"Nome"}
          value={this.state.inputName}
          onChange={this.onChangeName}
          onKeyDown={this.oneKeyDownEnterToSend}
        />

        <input required className='inputMessage'
          placeholder={"Sua mensagem"}
          value={this.state.inputMessage}
          onChange={this.onChangeMessage}
          onKeyDown={this.oneKeyDownEnterToSend}
        />

        <button type="submit" onClick={this.addMessage}> <img src={iconButton} alt='Icone enviar' /> </button>
      </section>
    </ContainerMessages>
  }
}