import React from 'react';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import SignUpForm from './SingUpForm';
import signup from '../../assets/SignUp.png';
import { FormContainer, MainContainerSignUp } from './styled';

const SignUpPage = ({ setRightButtonText }) => {
    useUnprotectedPage()
    return (
        <MainContainerSignUp>
            <img src={signup} alt='Caderno e caneta simbolizando inscrição'/>
            <FormContainer>
                <SignUpForm setRightButtonText={setRightButtonText} />
            </FormContainer>
        </MainContainerSignUp>
    )
}

export default SignUpPage;