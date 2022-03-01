import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator'

export const Header = ({ rightButtonText, setRightButtonText }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("tokenLabEddit")

    const logout = () => {
        localStorage.removeItem("tokenLabEddit")
    }

    const buttonRightAction = () => {
        if (token) {
            logout()
            setRightButtonText('Login')
            goToLoginPage(navigate)
        } else {
            goToLoginPage(navigate)
        }
    }

    return (
        <AppBar color='success' position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeedPage(navigate)} color="inherit"> LabEddit </Button>
                <Button onClick={() => buttonRightAction()} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    );
}

export default Header;