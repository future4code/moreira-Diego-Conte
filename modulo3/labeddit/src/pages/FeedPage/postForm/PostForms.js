import React from 'react';
import useForms from '../../../hooks/useForm';
import { Button, TextField } from '@mui/material';
import { newPost } from '../../../services/requestsTypePost';
import { FormContainer } from './styledPostForm';
import { CardPost } from '../cardPost/cardPost';

export const NewPosts = (navigate) => {
    const { form, onChange, clearFields } = useForms({ title: "", body: "" });

    const onSubmitForm = (event) => {
        event.preventDefault();
        newPost(form, clearFields, navigate);
        CardPost()
    }

    return (
        <FormContainer>
            <details>
                <summary>No que está pensando? </summary>
                <form
                    className='Form'
                    onSubmit={onSubmitForm}>
                    <TextField
                        required
                        className='Title'
                        name='title'
                        label='Título do post'
                        type={'text'}
                        variant="outlined"
                        value={form.title}
                        color='secondary'
                        onChange={onChange} />
                    <TextField
                        required
                        className='Body'
                        name='body'
                        label='Escreva seu post aqui'
                        type={'text'}
                        variant="outlined"
                        value={form.body}
                        color='secondary'
                        multiline
                        maxRows={10}
                        onChange={onChange} />
                    <div>
                        <Button
                            className='ButtonSubmit'
                            type={'submit'}
                            variant="contained"
                            color='primary'>
                            Postar
                        </Button>
                    </div>
                </form>
            </details>
        </FormContainer>
    )
}