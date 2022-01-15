import './App.css';
import React from 'react';
import ContainerMessages from './components/css'

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
    const newMessage = [...this.state.message,
    { nameUser: this.state.inputName, userMessage: this.state.inputMessage }];

    this.setState({
      message: newMessage,
      inputMessage: ""
    });
  }

  render() {
    const allMessages = this.state.message.map((message) => {
      return (
        <div key={Date.now}>
          <p className='nameUser'>{message.nameUser}</p>
          <p>{message.userMessage}</p>
        </div>
      )
    })

    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const submit = document.querySelector("#send")
        submit.click()
      }
    });

    return (
      <ContainerMessages>
        {allMessages}
        <section>
          <input className='inputName'
          type="text"
            placeholder={"Nome"}
            value={this.state.inputName}
            onChange={this.getName}
          />

          <input required className='inputMessage'
            placeholder={"Sua mensagem"}
            value={this.state.inputMessage}
            onChange={this.getMessage}
          />

          <button type="submit" onClick={this.addMessage}></button>
        </section>
      </ContainerMessages>
    )
  }
}

export default App;
