import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator'

export const Header = () => {
    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeedPage(navigate)} color="inherit"> LabEddit </Button>
                <Button onClick={() => goToLoginPage(navigate)} color="inherit">Login</Button>
            </StyledToolbar>
        </AppBar>
    );
}

export default Header;