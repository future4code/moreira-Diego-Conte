import axios from 'axios';
import { BASE_URL } from '../constants/urls';


export const changeVotePosts = (idPost, body) => {
    const headers = { headers: { Authorization: localStorage.getItem('tokenLabEddit') } };

    axios.put(`${BASE_URL}posts/${idPost}/votes`, body, headers)
        .then((res) => {
        })
        .catch((err) => {
            alert('Ocorreu um erro com sua requisição. Tente novamente.')
        })
}

export const changeVoteComments = (idPost, body) => {
    const headers = { headers: { Authorization: localStorage.getItem('tokenLabEddit') } };
    
    axios.put(`${BASE_URL}comments/${idPost}/votes`, body, headers)
        .then((res) => {
        })
        .catch((err) => {
            alert('Ocorreu um erro com sua requisição. Tente novamente.')
        })
}