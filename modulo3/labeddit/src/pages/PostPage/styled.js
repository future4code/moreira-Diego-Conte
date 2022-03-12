import styled from 'styled-components';

export const ContainerPost = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 98vw;
`

export const Post = styled.section` 
display: flex;
flex-direction: column;
width: 80%;
margin: 1% ;
border-radius: 3px;
box-shadow: 0px 6px 8px #19322f14,0px 3px 4px #12473311, 0px 1px 16px #12473318;
:hover{cursor: pointer; box-shadow: 0px 6px 20px #00000013,0px 3px 16px #00000011, 0px 1px 45px #00000016}

.user{
    display: flex;
    align-items: center;
    font-style: italic;
    margin: 10px 0;
    word-break: break-all;
};

.title{
    display: flex;
    align-items: center;
    margin: 10px;
    word-break: break-all;
};

.message{
    font-weight: normal;
    word-break: break-all;
    font-size: 18px;
    margin: 10px;
};

.comments{
    text-align: right;
}
`

export const ContainerFormComments = styled.div` 
display: flex;
align-items: center;
justify-content: center;
width: 95vw;
padding: 20px;
margin: 5px 5px;

.TextField{
    width: 50vw;
    margin-bottom: 10px;
}
`

export const ContainerButton = styled.div`
margin: 10px 0;
display: flex;
justify-content: center;

button{
    :hover{transition: 1s; cursor: pointer; background-color: #0890d4; color: white;};
}
`

export const ContainerComment = styled.section` 
display: flex;
justify-content: center;
width: 70vw;

.user{
    display: flex;
    align-items: center;
    font-style: italic;
    margin: 10px 0;
    word-break: break-all;
};

.message{
    font-weight: normal;
    word-break: break-all;
    font-size: 18px;
    margin: 10px;
};
`