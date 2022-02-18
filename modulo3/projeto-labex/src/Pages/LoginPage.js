import axios from 'axios';
import useForms from '../Hooks/UseForms';
import TextField from '@mui/material/TextField';
import LogoWhite from '../Assets/LogoWhite.png';
import React, { useEffect, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToHomePage, goBack } from '../Route/NavFunctions';
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';
import { FormContainer, MainContainer } from '../Components/StyleLoginPage';
import { ButtonHeaderContainer, ButtonsSubmitAndBackSection, AlignSection } from '../Components/StyleLoginPage';

//_______________________________________________________________________________________________________________________________

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
        alert('Verifique os dados informados e tente novamente')
      })
  }

  const clickToLogIn = (event) => {
    event.preventDefault();
    submitToLogin()
    clearFields();
  };


  return (
    <MainContainer>
      <ButtonHeaderContainer>
        <img
          onClick={() => goToHomePage(navigate)}
          src={LogoWhite}
          alt='Logo LabeX' />
        <Button
          variant="outlined"
          color='secondary'
          onClick={() => goToHomePage(navigate)}>
          Home
        </Button>
      </ButtonHeaderContainer>
      <AlignSection>
        <FormContainer>
          <form
            className='Form'
            onSubmit={clickToLogIn}>
            <p>Informe seus dados para acessar o painel administrativo.</p>
            <TextField
              className='TextField'
              required
              name='email'
              label='E-mail'
              type='email'
              variant="outlined"
              color='secondary'
              onChange={onChange} />

            <TextField
              className='TextField'
              required
              name='password'
              label='Senha'
              type='password'
              variant="outlined"
              color='secondary'
              onChange={onChange} />
            <ButtonsSubmitAndBackSection>
              <Button
                onClick={() => goBack(navigate)}
                variant="outlined"
                color='secondary'>
                Voltar
              </Button>

              <Button
                variant="outlined"
                color='secondary'
                onClick={submitToLogin}>
                Entrar
              </Button>
            </ButtonsSubmitAndBackSection>
          </form>
        </FormContainer>
      </AlignSection>
    </MainContainer>
  )
}