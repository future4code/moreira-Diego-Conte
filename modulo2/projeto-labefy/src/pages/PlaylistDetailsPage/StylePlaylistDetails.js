import Styled from "styled-components"

export const ContainerPlaylistDetails = Styled.div`
display: : flex;
list-style: none;
color: white;
margin-top: 80px;
margin-left: -850px;
z-index: 1;

button{
    /* margin-left: 5px;
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 3px;
    color: #810101;
    :hover{border: 1px solid black; background-color: #d3d2d2} */
}
`

export const PlaylistNameDetailPage = Styled.p`
font-weight: bold;
color: red;
`

export const ContainerTracksRender =Styled.div`
display: flex;
line-height: 2px;
z-index: 1;

li{
    p{
        display: flex;
        flex-direction: column;
    }
    
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
z-index:1;

input{
    width: auto;
    z-index:2;
}

`