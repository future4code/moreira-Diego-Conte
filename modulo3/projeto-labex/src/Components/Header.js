import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Assets/Logo.png'
import { goToHomePage } from '../Route/NavFunctions';

const MainContainer = styled.div` 
display: flex;
position: absolute;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 100px;
background-color: transparent;
:hover{transition: 1s; background-color: #0000006f;};

img{
    background-color: transparent;
    max-height: 80px;
    :hover{cursor: pointer; width: 180px;}
}
`

export const Header = () => {
    const navigate = useNavigate();
    return (
        <MainContainer>
            <img
                onClick={() => goToHomePage(navigate)}
                src={Logo} 
                alt='Logo LabeX'/>
        </MainContainer>
    )
}