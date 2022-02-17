import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToHomePage } from '../Route/NavFunctions';
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables'
import useForms from '../Hooks/UseForms';
import TextField from '@mui/material/TextField';

export default function LoginPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const { form, onChange, clearFields } = useForms({ email: "", password: "" });

  const isLogedIn = () => {
    if (token) {
      goToAdminHomePage(navigate)
    }
  }

  useEffect(() => {
    isLogedIn()
  }, [])


  const submitToLogin = () => {
    axios.post(`${BASE_URL}${userPathVariables}login`, form)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        navigate('/admin/trips/list')
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  const clickToLogIn = (event) => {
    event.preventDefault();
    submitToLogin()
    clearFields();
};


  return (
    <div>
      <button onClick={() => goToHomePage(navigate)}> Home </button>
      <p>LoginPage </p>
      <hr></hr>
      <div>
        <form>
          <TextField
            onSubmit={clickToLogIn}
            required
            name='email'
            label='E-mail'
            type='email'
            variant="outlined"
            color='secondary'
            onChange={onChange} />

          <TextField
            required
            name='password'
            label='Senha'
            type='password'
            variant="outlined"
            color='secondary'
            onChange={onChange} />
        </form>
      </div>
      
      <button
        onClick={submitToLogin}>
        Enviar
      </button>
    </div>
  )
}