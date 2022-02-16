import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { goToHomePage } from '../Route/NavFunctions';
import {BASE_URL} from '../Constants/BASE_URL';
import {userPathVariables} from '../Constants/UserPathVariables'

export default function LoginPage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const printConsole = () => {
    const body = {
      email: email,
      password: password
    }
    
    axios.post(`${BASE_URL}${userPathVariables}login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      navigate('/admin/trips/list')
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return (
    <div>
      <button onClick={() => goToHomePage(navigate)}> Home </button>
      <p>LoginPage </p>
      <input
        placeholder='E-mail'
        type='email'
        value={email}
        onChange={handleEmail} />

      <input
        placeholder='Senha'
        type='password'
        value={password}
        onChange={handlePassword} />

      <button
        onClick={printConsole}>
        Enviar
      </button>
    </div>
  )
}