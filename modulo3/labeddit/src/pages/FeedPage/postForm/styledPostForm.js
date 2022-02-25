import styled from 'styled-components';

export const FormContainer = styled.section`
display: flex;
align-items: center;
justify-content: center;
background-color: #ffffff;
border-radius: 4px;
padding: 20px;
margin: 10px 0;
border: 1px solid white;
transition: 1s;
:hover{transition: 1s; border: 1px solid black;}

summary{
    list-style: none;
    width: 60vw;
    display: flex;
    justify-content: center;
    :hover{cursor: pointer;}
}

.Form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 60vw;
    color: black;
    font-size: 20px;
}
.Title{
    align-self: center;
    width: 100%;
    margin: 15px 0px;
}

.Body{
    align-self: center;
    width: 100%;
    margin: 15px 0px;
}

.ButtonSubmit{
    :hover{transition: 1s; cursor: pointer; background-color: black; color: white;};
}
`