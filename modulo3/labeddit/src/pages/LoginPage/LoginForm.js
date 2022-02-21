import React from 'react';
import TextField from '@mui/material/TextField';
import useForms from '../../hooks/useForm';
import { Button } from '@mui/material';



const LoginForm = () => {
    const { form, onChange, clearFields } = useForms({ email: "", password: "" });

    const onSubmitForm = (event) => {
        event.preventDefault();
        clearFields();
    }

    return (
        <form
            className='Form'
            onSubmit={onSubmitForm}>
            <p>Informe seus dados.</p>
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