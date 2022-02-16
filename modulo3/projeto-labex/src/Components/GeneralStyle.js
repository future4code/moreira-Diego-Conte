import styled, { createGlobalStyle } from "styled-components";
import { mainColors } from "../Constants/Colors";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const MainContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: ${mainColors.fundo};
color: white;
.button-green{
    color: ${mainColors.secundario};
    font-weight: bold;
    margin: 10px;
}
.button-white{
    background-color: white;
    color: ${mainColors.secundario};
    font-weight: bold;
    margin: 10px;
    :hover{opacity: .5;}
}
`