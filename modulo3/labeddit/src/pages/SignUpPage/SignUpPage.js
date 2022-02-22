import React from 'react';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import SignUpForm from './SingUpForm';
import { FormContainer } from './styled';

const SignUpPage = ({ setRightButtonText }) => {
    useUnprotectedPage()
    return (
        <FormContainer>
            <SignUpForm setRightButtonText={setRightButtonText} />
        </FormContainer>
    )
}

export default SignUpPage;