import styled from 'styled-components';

export const MainContainerSignUp = styled.div`
display: flex;
height: 90vh;
justify-content: space-evenly;
align-items: center;

img{
    width: 10%;
}
`

export const FormContainer = styled.section`
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
padding: 10px;

.Form{
    display: flex;
    flex-direction: column;
    color: black;
    text-align: center;

    h3{
        margin-bottom: 10%;
    }
}
.TextField{
    margin: 15px 0px;
}
button{
    margin-top: 3%;
    :hover{ transition: 1s; cursor: pointer; background-color: #0890d4; color: white; };
}
`