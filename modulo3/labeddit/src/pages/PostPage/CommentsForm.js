import React from 'react';
import useForms from '../../hooks/useForm';
import { Button, TextField } from '@mui/material';
import { newComment } from '../../services/requestsTypePost';
import {ContainerFormComments, ContainerButton} from './styled';


export const CommentsForm = ({ id }) => {
    const { form, onChange, clearFields } = useForms({ body: "" });

    const onSubmitForm = (event) => {
        event.preventDefault()
        newComment(id, form, clearFields)
    }

    return (
        <ContainerFormComments>
            <form
                className='Form'
                onSubmit={onSubmitForm}>
                <TextField
                    required
                    className='TextField'
                    name='body'
                    label='Escreva seu comentário aqui'
                    type={'text'}
                    variant="outlined"
                    value={form.body}
                    color='secondary'
                    multiline
                    onChange={onChange} />
                <ContainerButton>
                    <Button
                        type={'submit'}
                        variant="contained"
                        color='primary'>
                        Postar
                    </Button>
                </ContainerButton>
            </form>
        </ContainerFormComments>
    )
}