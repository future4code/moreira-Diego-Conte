import Styled from "styled-components"

export const ContainerPlaylistDetails = Styled.div`
display: : flex;
list-style: none;
color: white;
margin-top: 80px;
margin-left: -850px;

button{
    display: flex;
    border: 2px solid #330707;
    border-radius: 5px;
    font-size: 14px;
    margin: 50px 0px 0px 208px;
    :hover{cursor: pointer; border: 2px solid #5e0c0c;}
    :active{background-color: #8f0000}
}
`

export const PlaylistNameDetailPage = Styled.p`
font-weight: bold;
color: red;
`

export const ContainerTracksRender =Styled.div`
display: flex;
flex-direction: column;
line-height: 2px;
z-index: 1;
margin: 14px 0px;

h1{
    font-weight: normal;
    font-size: 17px;
}

p{
    :hover{cursor: pointer; color:red;};
    :active{color:white};
}

audio{
    height: 18px;
    width: 300px;
    border-radius: 0px;
}
`

export const ContainerIndividualTracks = Styled.div`
display: flex;
flex-direction: column;
z-index:1;
margin-bottom: 20px;
`

export const InputsPlayslistDetailsPage = Styled.div`
display: flex;
z-index: 1;
flex-direction: column;

details{
    display: flex;
    z-index: 1;
    flex-direction: column;
    summary{
        display: flex;
        z-index: 1;
        :hover{cursor: pointer; color: red};
        :active{color:white};
    }
    input{
        display: flex;
        justify-content: center;
        z-index: 1;
        margin: 6px 0px;
        height: 18px;
        width: 300px;
        border: 2px solid #330707;
        border-radius: 5px;
        font-size: 14px;
        z-index:1;
        :hover{cursor: pointer; border: 2px solid #5e0c0c}
        }

    button{
        display:flex;
        justify-content: center;
        z-index: 1;
        margin: 5px 0px;
        margin-left: 278px;
        width: 30px;
        border: 2px solid #330707;
        border-radius: 5px;
        font-size: 14px;
        z-index:1;
        :hover{cursor: pointer; border: 2px solid #5e0c0c;}
        :active{background-color: #8f0000}
    }
}
`