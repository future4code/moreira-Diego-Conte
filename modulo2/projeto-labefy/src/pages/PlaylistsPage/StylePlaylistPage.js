import Styled from "styled-components"

export const MainContainerPlaylistPage = Styled.div`
margin-right: 550px;
color: #ff9898;
font-weight: bold;
font-size: 16px;
z-index:1;
`

export const ContainerLogo = Styled.img`
width: 100px;
`

export const ContainerPlaylistsRender = Styled.div`
display: flex;
list-style: none;
align-items: center;
margin-top: 5px;
color: white;
font-weight: bold;
line-height: 25px;
z-index:1;

button{
    display:flex;
    justify-content: center;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 3px;
    color: #810101;
    z-index:1;
    :hover{border: 1px solid black; background-color: #d3d2d2}
}
`

export const PlaylistRaw = Styled.li`
z-index:1;
:hover{border-radius: 3px; cursor: pointer; background-color: #1d1c1c}
`

export const ContainerInputAddNewPlaylists = Styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 60px;
z-index:1;

input{
    height:22px;
    border: 2px solid #330707;
    border-radius: 5px;
    font-size: 16px;
    z-index:1;
    :hover{cursor: pointer; border: 2px solid #5e0c0c}
}

button{
    border: 2px solid #330707;
    border-radius: 5px;
    font-size: 14px;
    z-index:1;
    :hover{cursor: pointer; border: 2px solid #5e0c0c;}
    :active{background-color: #8f0000}
}
`