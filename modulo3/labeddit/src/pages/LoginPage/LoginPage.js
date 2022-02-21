import React from 'react';
import { Button } from '@mui/material';
import { FormContainer } from './Styled';
import { useNavigate } from 'react-router-dom';
import {goToSignUpPage} from '../../routes/coordinator'
import LoginForm from './LoginForm';

const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <FormContainer>
            <LoginForm />
            <div>
                <Button
                    onClick={() => { goToSignUpPage(navigate) }}
                    type={'submit'}
                    variant="text"
                    color='secondary'>
                    Não possui conta? Cadastre-se
                </Button>
            </div>
        </FormContainer>
    )
}

export default LoginPage;