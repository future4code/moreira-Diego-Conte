import React from 'react';
import LoginForm from './LoginForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import login from '../../assets/Login.png';
import { Button } from '@mui/material';
import { FormContainer, MainContainerLogin } from './Styled';
import { useNavigate } from 'react-router-dom';
import { goToSignUpPage } from '../../routes/coordinator'

const LoginPage = ({ setRightButtonText }) => {
    useUnprotectedPage()
    const navigate = useNavigate()

    return (
        <MainContainerLogin>
            <img src={login} alt='Imagem de cadeado simbolizando área segura'/>
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