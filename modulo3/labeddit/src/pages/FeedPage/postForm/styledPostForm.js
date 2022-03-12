import styled from 'styled-components';

export const FormContainer = styled.section`
display: flex;
align-items: center;
align-self: flex-start;
justify-content: center;
width: 98vw;
border-radius: 4px;
padding: 20px;
margin: 5px 5px;


summary{
    list-style: none;
    display: flex;
    justify-content: center;
    :hover{cursor: pointer;}
}

.Form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    color: black;
    font-size: 20px;
}
.Title{
    align-self: center;
    width: 70vw;
    margin: 15px 0px;
}

.Body{
    align-self: center;
    width: 70vw;
    margin: 15px 0px;
}

.ButtonSubmit{
    :hover{transition: 1s; cursor: pointer; background-color: #0890d4; color: white;};
}
`