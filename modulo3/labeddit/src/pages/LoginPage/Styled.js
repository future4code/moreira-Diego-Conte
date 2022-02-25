import styled from 'styled-components';


export const MainContainerLogin = styled.div` 
display: flex;
height: 90vh;
justify-content: center;
align-items: center;
`

export const FormContainer = styled.section`
display: flex;
flex-direction: column;
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
    justify-content: center;
    text-align: center;
    width: 50vw;
    color: black;
    font-size: 20px;
}
.TextField{
    align-self: center;
    width: 80%;
    margin: 15px 0px;
}
.ButtonLogin{
    margin: 3% 0;
    :hover{transition: 1s; cursor: pointer; background-color: black; color: white;};
}

.ButtonSignUp{
    :hover{cursor: pointer; text-decoration: underline;};
}
`

