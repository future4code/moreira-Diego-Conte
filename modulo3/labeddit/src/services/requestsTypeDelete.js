import axios from "axios";
import { BASE_URL } from "../constants/urls";

const token = localStorage.getItem('tokenLabEddit')
const headers = { headers: { Authorization: token } };

export const deleteVotesPosts = (idPost) => {
    axios.delete(`${BASE_URL}posts/${idPost}/votes`, headers)
        .then((res) => {
            alert('Voto deletado')
        })
        .catch((err) => {
            alert(`Houve um erro com sua requisição ${err.message}`)
        })
}