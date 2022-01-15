import styled from 'styled-components';
import imgBack from '../img/background.jpg'
import IconeSend from '../img/sendIcon.png'

const ContainerMessages = styled.div`
display: flex;
flex-direction: column;
min-height: 95vh;
width: 500px;
margin: 10px auto;
justify-content: end;
align-items: flex-start;
border-radius: 3px;
border: 1px solid gray;
background-image: url(${imgBack});
background-size: 100%; 

div{
  display: flex;
  flex-direction: column;
  margin: 15px 5px;
    
  .nameUser{
    margin: 2px 10px;
    font-size: 17px;
    font-weight: bold;
  }

  p{
    margin: 2px 10px;
    font-size: 17px;
  }
}

section{
  display: flex;
  height: 95%px;
  width: 500px;
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
}

button{
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  background-image: url(${IconeSend});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 80px;
  height: 5vh;
  border-radius: 4px;
  border: 1px solid gray;
  margin: 10px 5px;
}
`

export default ContainerMessages