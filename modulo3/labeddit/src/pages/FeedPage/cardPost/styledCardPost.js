import styled from 'styled-components';

export const StyledCardPost = styled.div` 
display: flex;
width: 50%;
margin: 0.5% 0;
border-radius: 3px;
border: 1px solid lightgray;
background-color: white;
:hover{border: 1px solid gray}

h2{
    word-break: break-all;
}

h3{
    display: flex;
    word-break: break-all;
}
`

export const ContainerButtons = styled.section` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: min-content;
margin: 5px;
`

export const Arrow = styled.section`
display: flex;
justify-content: center;
align-items: center;
margin: 2px;
height: 30px;
border: 1px solid white;
:hover{cursor: pointer; background-color: lightgray; border: 1px solid gray; border-radius: 2px;}
`

