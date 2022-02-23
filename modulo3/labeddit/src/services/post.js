import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToFeedPage, goToPostPage } from '../routes/coordinator';
import {headers} from './headers'

export const newPost = (body, clearFields) => {

    axios.post(`${BASE_URL}posts`, body, headers)
        .then((res) => {
            clearFields()
        })
        .catch((err) => {
            alert(`Houve um erro com seu post: ${err.message}. Verifique seus dados e tente novamente.`)
        })
}

export const newComment = (id, body, clearFields) => {

    axios.post(`${BASE_URL}posts/${id}/comments`, body, headers)
        .then((res) => {
            clearFields()
        })
        .catch((err) => {
            alert(`Houve um erro com seu comentário: ${err.message}. Verifique seus dados e tente novamente.`)
        })
}