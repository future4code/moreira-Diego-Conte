import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const token = localStorage.getItem('tokenLabEddit')
const headers = { headers: { Authorization: token } };

export const changeVotePosts = (idPost, body) => {
    axios.put(`${BASE_URL}posts/${idPost}/votes`, body, headers)
        .then((res) => {
        })
        .catch((err) => {
            alert('Ocorreu um erro com sua requisição. Tente novamente.')
        })
}

export const changeVoteComments = (idPost, body) => {
    axios.put(`${BASE_URL}comments/${idPost}/votes`, body, headers)
        .then((res) => {
        })
        .catch((err) => {
            alert('Ocorreu um erro com sua requisição. Tente novamente.')
        })
}