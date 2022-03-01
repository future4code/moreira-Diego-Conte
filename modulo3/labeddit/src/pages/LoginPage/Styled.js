import styled from 'styled-components';


export const MainContainerLogin = styled.div` 
display: flex;
height: 90vh;
justify-content: space-evenly;
align-items: center;

img{
    width: 18%;
}
`

export const FormContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 10px;
padding: 20px;
font-size: 20px;

.Form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: black;

    h3{
        margin-bottom: 5%;
    }
}
.TextField{
    align-self: center;
    margin: 15px 0px;
}
.ButtonLogin{
    margin: 3% 0;
    :hover{transition: 1s; cursor: pointer; background-color: #0890d4; color: white;};
}

.ButtonSignUp{
    :hover{cursor: pointer; text-decoration: underline;};
}
`

