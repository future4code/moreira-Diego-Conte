import { Button, TextField } from '@mui/material';
import React from 'react';
import useForms from '../../hooks/useForm';
import { newPost } from '../../services/post';

export const NewPosts = (navigate) => {
    const { form, onChange, clearFields } = useForms({ title: "", body: "" });

    const onSubmitForm = (event) => {
        event.preventDefault();
        newPost(form, clearFields, navigate);
    }

    return (
        <form
            className='Form'
            onSubmit={onSubmitForm}>
            <p>Novo post.</p>
            <TextField
                required
                className='TextField'
                name='title'
                label='Título do post'
                type={'text'}
                variant="outlined"
                value={form.title}
                color='secondary'
                onChange={onChange} />
            <TextField
                required
                className='TextField'
                name='body'
                label='Escreva seu post aqui'
                type={'text'}
                variant="outlined"
                value={form.body}
                color='secondary'
                onChange={onChange} />
            <div>
                <Button
                    type={'submit'}
                    variant="contained"
                    color='primary'>
                    Postar
                </Button>
            </div>
        </form>
    )
}