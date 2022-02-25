import React from 'react';
import { Button } from '@mui/material';
import { FormContainer, MainContainerLogin } from './Styled';
import { useNavigate } from 'react-router-dom';
import { goToSignUpPage } from '../../routes/coordinator'
import LoginForm from './LoginForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({ setRightButtonText }) => {
    useUnprotectedPage()
    const navigate = useNavigate()

    return (
        <MainContainerLogin>
            <FormContainer>
                <LoginForm setRightButtonText={setRightButtonText} />
                <>
                    <Button
                        className='ButtonSignUp'
                        onClick={() => { goToSignUpPage(navigate) }}
                        type={'submit'}
                        variant="text"
                        color='secondary'>
                        Não possui conta? Cadastre-se
                    </Button>
                </>
            </FormContainer>
        </MainContainerLogin>
    )
}

export default LoginPage;