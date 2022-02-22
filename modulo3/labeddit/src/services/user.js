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
            alert(`Houve um erro com sua requisição: ${err.message}. Verifique seus dados e tente novamente.`)
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
            alert(`Houve um erro com sua requisição: ${err.message}. Tente novamente.`)
        })
}