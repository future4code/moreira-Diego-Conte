import { Button, TextField } from '@mui/material';
import React from 'react';
import useForms from '../../hooks/useForm';
import { newComment } from '../../services/requestsTypePost';


export const CommentsForm = ({id}) => {
    const { form, onChange, clearFields } = useForms({ body: "" });

    const onSubmitForm = (event) => {
        event.preventDefault()
        newComment(id, form, clearFields)
    }

    return (
        <form
            className='Form'
            onSubmit={onSubmitForm}>
            <p>Novo comentário.</p>
            <TextField
                required
                className='TextField'
                name='body'
                label='Escreva seu comentário aqui'
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