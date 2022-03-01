import styled from 'styled-components';

export const StyledCardPost = styled.div` 
display: flex;
justify-content: center;
margin: 5% 0;
width: 98vw;
`

export const ContainerButtons = styled.section` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: min-content;
margin: 0 3%;
`

export const StylePost = styled.section` 
display: flex;
width: 80%;
margin: 1% ;
border-radius: 3px;
box-shadow: 0px 6px 8px #19322f14,0px 3px 4px #12473311, 0px 1px 16px #12473318;
:hover{cursor: pointer; box-shadow: 0px 6px 20px #00000013,0px 3px 16px #00000011, 0px 1px 45px #00000016}

.comments{
    text-align: right;
}
`

export const ContainerPost = styled.section` 
width: 100%;
padding-right: 1%;

.user{
    display: flex;
    align-items: center;
    font-style: italic;
    margin: 10px 0;
    word-break: break-all;
};

.title{
    margin: 10px;
    word-break: break-all;
};

.message{
    font-weight: normal;
    word-break: break-all;
    font-size: 18px;
    margin: 10px;
    margin-bottom: 30px;
};
`

