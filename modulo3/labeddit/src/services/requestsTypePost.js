import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToFeedPage } from '../routes/coordinator';


export const login = (body, clearFields, navigate, setRightButtonText) => {

    axios.post(`${BASE_URL}users/login`, body)
        .then((res) => {
            localStorage.setItem('tokenLabEddit', res.data.token)
            clearFields()
            goToFeedPage(navigate)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            alert(err.message)
        })
}

export const signUp = (body, clearFields, navigate, setRightButtonText) => {

    axios.post(`${BASE_URL}users/signup`, body)
        .then((res) => {
            localStorage.setItem('tokenLabEddit', res.data.token)
            clearFields()
            alert(`Boas-vindas, ${body.username}. Vamos começar!`)
            goToFeedPage(navigate)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            alert(err.message)
        })
}

export const newPost = (body, clearFields) => {
    const headers = { headers: { Authorization: localStorage.getItem('tokenLabEddit') } };

    axios.post(`${BASE_URL}posts`, body, headers)
        .then((res) => {
            clearFields()
            window.location.reload()
        })
        .catch((err) => {
            alert(err.message)
        })
}


export const newComment = (id, body, clearFields) => {
    const headers = { headers: { Authorization: localStorage.getItem('tokenLabEddit') } };

    axios.post(`${BASE_URL}posts/${id}/comments`, body, headers)
        .then((res) => {
            clearFields()
            window.location.reload()
        })
        .catch((err) => {
            alert(err.message)
        })
}


export const firstVotePosts = (idPost, body) => {

    const headers = { headers: { Authorization: localStorage.getItem('tokenLabEddit') } };

    axios.post(`${BASE_URL}posts/${idPost}/votes`, body, headers)
        .then((res) => {
        })
        .catch((err) => {
            alert(err.message)
        })
}

export const firstVoteComments = (idPost, body) => {
    const headers = { headers: { Authorization: localStorage.getItem('tokenLabEddit') } };

    axios.post(`${BASE_URL}comments/${idPost}/votes`, body, headers)
        .then((res) => {
        })
        .catch((err) => {
            alert(err.message)
        })
}