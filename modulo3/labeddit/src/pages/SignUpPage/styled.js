import styled from 'styled-components';

export const MainContainerSignUp = styled.div`
display: flex;
height: 90vh;
justify-content: center;
align-items: center;
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
    margin-top: 3%;
    :hover{ transition: 1s; cursor: pointer; background-color: black; color: white; };
}
`