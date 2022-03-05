import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const deleteVotesPosts = (idPost) => {
    const headers = { headers: { Authorization: localStorage.getItem('tokenLabEddit') } };

    axios.delete(`${BASE_URL}posts/${idPost}/votes`, headers)
        .then((res) => {
        })
        .catch((err) => {
            alert(`Houve um erro com sua requisição ${err.message}`)
        })
}

export const deleteVotesComments = (idPost) => {
    const headers = { headers: { Authorization: localStorage.getItem('tokenLabEddit') } };
    
    axios.delete(`${BASE_URL}comments/${idPost}/votes`, headers)
        .then((res) => {
        })
        .catch((err) => {
            alert(`Houve um erro com sua requisição ${err.message}`)
        })
}