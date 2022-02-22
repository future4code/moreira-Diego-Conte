import React from 'react';
import TextField from '@mui/material/TextField';
import useForms from '../../hooks/useForm';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/user';



const SignUpForm = ({setRightButtonText}) => {
    const { form, onChange, clearFields } = useForms({ username: "", email: "", password: "" });
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault();
        signUp(form, clearFields, navigate, setRightButtonText);
    }

    return (
        <form
            className='Form'
            onSubmit={onSubmitForm}>
            <p>Informe seus dados.</p>

            <TextField
                required
                className='TextField'
                name='username'
                label='Nome completo'
                type={'text'}
                variant="outlined"
                value={form.name}
                color='secondary'
                onChange={onChange} />

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
                onChange={onChange}
                inputProps={{ pattern: "^.{8,}$" }}
                title={"A senha deve ter no mínimo 8 caracteres"} />

            <div>
                <Button
                    type={'submit'}
                    variant="contained"
                    color='primary'>
                    Cadastrar-se
                </Button>
            </div>
        </form>
    )
}

export default SignUpForm;