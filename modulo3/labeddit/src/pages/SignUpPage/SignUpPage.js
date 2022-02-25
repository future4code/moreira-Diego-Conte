import React from 'react';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import SignUpForm from './SingUpForm';
import { FormContainer, MainContainerSignUp } from './styled';

const SignUpPage = ({ setRightButtonText }) => {
    useUnprotectedPage()
    return (
        <MainContainerSignUp>
            <FormContainer>
                <SignUpForm setRightButtonText={setRightButtonText} />
            </FormContainer>
        </MainContainerSignUp>
    )
}

export default SignUpPage;