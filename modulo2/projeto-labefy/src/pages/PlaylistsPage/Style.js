import Styled from "styled-components"

export const ContainerReturnPlaylists = Styled.div`
display: flex;
list-style: none;
margin-top: 5px;

button{
    margin-right: 5px;
    border: 1px solid gray;
    border-radius 3px;
    :hover{border: 1px solid black; background-color: #e4e2e2}
}
`

export const PlaylistRaw = Styled.li`
:hover{border-radius: 3px; cursor: pointer; background-color: #e4e2e2}
`