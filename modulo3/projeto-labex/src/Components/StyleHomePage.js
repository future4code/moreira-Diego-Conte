import styled from 'styled-components';
import rocket from '../Assets/Spaceship.jpg';

export const MainContainer = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: space-between;
background-image: url(${rocket});
background-position-y: top;
background-size: cover;
`

export const TextContainer = styled.section` 
display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
padding-bottom: 90px;
margin: 50px;
color: #000000;
font-weight: bold;
font-size: 30px;

button{
    margin-top: 40px;
    font-size: 30px;
    border: 2px solid black;
    width: 250px;
    color: black;
    :hover{transition: 0.6s; cursor: pointer; width: 260px; border: 2px solid black;}
}
`

export const LoginButton = styled.div` 
display: flex;
align-items: flex-start;
justify-content: center;
width: 170px;

button{
    margin: 20px;
    width: 120px;
    font-size: 18px;
    border: 2px solid white;
    color: white;
    :hover{transition: 0.6s; cursor: pointer; width: 130px; border: 2px solid white;};
}
`