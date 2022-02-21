import styled from 'styled-components';

export const ButtonHeaderContainer = styled.section`
display: flex;
justify-content: space-between;
width: 99vw;

button{
    margin: 20px;
    width: 120px;
    height: 45px;
    font-size: 18px;
    border: 2px solid white;
    color: white;
    :hover{transition: 1s; cursor: pointer; border: 2px solid white; background-color: white; color: black;};
    }
`

export const FormContainer = styled.section`
display: flex;
align-self: center;
align-items: center;
justify-content: center;
height: 60vh;
width: 50vw;
background-color: #ffffff;
border-radius: 10px;
padding: 20px;
border: 1px solid white;

.Form{
    display: flex;
    flex-direction: column;
    width: 60vw;
    color: black;
    text-align: center;
    font-size: 20px;
}
.TextField{
    margin: 15px 0px;
}
button{
    :hover{transition: 1s; cursor: pointer; background-color: black; color: white;};
}
`

