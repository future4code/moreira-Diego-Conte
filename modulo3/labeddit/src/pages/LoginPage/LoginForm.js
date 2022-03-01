import React from 'react';
import TextField from '@mui/material/TextField';
import useForms from '../../hooks/useForm';
import { Button } from '@mui/material';
import {login} from '../../services/requestsTypePost'
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setRightButtonText }) => {
        
    const { form, onChange, clearFields } = useForms({ email: "", password: "" });
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault();
        login(form, clearFields, navigate, setRightButtonText);
    }

    return (
            <form
                className='Form'
                onSubmit={onSubmitForm}>
                <h3>Acessar</h3>
                <TextField
                    required
                    className='TextField'
                    name='email'
                    label='E-mail'
                    type={'email'}
                    variant="outlined"
                    value={form.email}
                    color='secondary'
                    onChange={onChange} />

                <TextField
                    required
                    className='TextField'
                    name='password'
                    label='Senha'
                    type="password"
                    variant="outlined"
                    value={form.password}
                    color='secondary'
                    onChange={onChange} />

                <div>
                    <Button
                        className='ButtonLogin'
                        type={'submit'}
                        variant="contained"
                        color='primary'>
                        Entrar
                    </Button>
                </div>
            </form>
    )
}

export default LoginForm;