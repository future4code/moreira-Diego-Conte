import './App.css';
import React from 'react';
import ContainerMessages from './components/css';
import iconButton from './img/sendIcon.png';

//Compreendo que o ideal seria separar cada componente e estilização em arquivos diversos; desta vez, porém, não o pude 
//fazer por conta das dificuldades da semana que me exauriram. Posto isso, separei somente a estilização.

class App extends React.Component {

  state = {
    inputName: '',
    inputMessage: '',

    message: [
      {
      }
    ]
  }

  getName = (event) => this.setState({
    inputName: event.target.value
  })

  getMessage = (event) => this.setState({
    inputMessage: event.target.value
  })

  addMessage = () => {
    let newMessage = [...this.state.message,
    {nameUser: this.state.inputName + ":", 
    userMessage: this.state.inputMessage }];
    
    if(this.state.inputName !== '' && this.state.inputMessage !== ''){ //Sets the state and prevents empty submissions
    this.setState({
      message: newMessage,
      inputMessage: ""
    })};
  }

  enterSend = (event) => { //Submissions by enter
    if (event.key === "Enter") {
      this.addMessage()
    }
  }

  render() {

    const allMessages = this.state.message.map((msg) => {
      if(msg.nameUser === "eu:" || msg.nameUser === "Eu:") { //Adds ':'. Does not accept the method .toLowerCase(). Do not know why :(
        return (
          <container><p>{msg.userMessage}</p></container>
        )
      } else {
        return (
          <div key={Date.now}>
            <p className='nameUser'>{msg.nameUser}</p>
            <p>{msg.userMessage}</p>
          </div>
        )
      }
    })

    return (
      <ContainerMessages>
        {allMessages}
        <section>
          <input className='inputName'
            type="text"
            placeholder={"Nome"}
            value={this.state.inputName}
            onChange={this.getName}
            onKeyDown={this.enterSend}
          />

          <input required className='inputMessage'
            placeholder={"Sua mensagem"}
            value={this.state.inputMessage}
            onChange={this.getMessage}
            onKeyDown={this.enterSend}
          />

          <button type="submit" onClick={this.addMessage}> <img src={iconButton} alt='Icone enviar' /> </button>
        </section>
      </ContainerMessages >
    )
  }
}

export default App;
