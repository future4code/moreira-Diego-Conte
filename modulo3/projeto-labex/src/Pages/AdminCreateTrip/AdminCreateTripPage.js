import React, { useState } from 'react';
import useForms from '../../Hooks/UseForms';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from 'axios';
import LogoWhite from '../../Assets/LogoWhite.png';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../Hooks/useProtectedPage';
import { goToHomePage, goBack, goToAdminHomePage } from '../../Route/NavFunctions';
import { planets } from '../../Constants/Planets';
import { BASE_URL } from '../../Constants/BASE_URL';
import { userPathVariables } from '../../Constants/UserPathVariables';
import { MainContainer, HomeButtonContainer, AlignSection, FormContainer, ButtonsSubmitAndBackSection } from './StyleAdminCreateTripPage';
import { Box } from '@mui/system';
import { FormControl, InputLabel } from '@mui/material';
import { logout, getTodayDate } from '../../Services/Requests';
import { token } from '../../Constants/Token';
import MessageBox from '../../Components/MessageBox';


//__________________________________________________________________________________________________________________________________


export default function AdminCreateTripPage() {
  useProtectedPage();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const { form, onChange } = useForms({ name: "", planet: "", date: "", description: "", durationInDays: "" });

  const createTrip = () => {
    axios.post(`${BASE_URL}${userPathVariables}trips`, form, { headers: { auth: token } })
      .then((res) => {
        setResponse("Viagem criada com sucesso!")
        goToAdminHomePage(navigate)
      })
      .catch((err) => {
        setError(err.response.data.message)
      })
  }

  const submitToCreateTrip = (event) => {
    event.preventDefault();
    createTrip();
  };


  const today = getTodayDate()


  return (
    <MainContainer>
      <HomeButtonContainer>
        <img
          onClick={() => goToHomePage(navigate)}
          src={LogoWhite}
          alt='Logo LabeX' />
        <Button
          variant="outlined"
          color='secondary'
          onClick={() => logout(navigate)}>
          Sair
        </Button>
      </HomeButtonContainer>
      <AlignSection>
        <FormContainer>
          <form
            className='Form'
            onSubmit={submitToCreateTrip}>
            <h1>Criar viagens</h1>
            <TextField
              required
              className='TextField'
              name='name'
              label='Nome'
              inputProps={{ pattern: "^.{5,}$" }}
              title={"O nome deve ter no m??nimo 5 caracteres"}
              variant="outlined"
              color='secondary'
              onChange={onChange} />
            <Box>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Destino</InputLabel>
                <Select
                  required
                  className='Select'
                  name='planet'
                  label='Planeta'
                  color='secondary'
                  onChange={onChange}>
                  {planets.map((planet) => {
                    return (
                      <MenuItem
                        value={planet}>
                        {planet}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
            <TextField
              required
              className='TextField'
              name='date'
              variant="outlined"
              color='secondary'
              type='date'
              inputProps={{ min: today }}
              title={"Datas retroativas n??o s??o aceitas"}
              onChange={onChange} />
            <TextField
              required
              className='TextField'
              name='description'
              inputProps={{ pattern: "^.{30,}$" }}
              title={"A descri????o deve ter no m??nimo 30 caracteres"}
              label='Descri????o'
              variant="outlined"
              color='secondary'
              onChange={onChange} />
            <TextField
              required
              className='TextField'
              name='durationInDays'
              label='Dura????o em dias'
              variant="outlined"
              color='secondary'
              type="number"
              inputProps={{ min: '50' }}
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
                type='submit'>
                Criar
              </Button>
            </ButtonsSubmitAndBackSection>
          </form>
        </FormContainer>
        {response && (
          <MessageBox
            severity={"success"}
            title={"Oba!"}
            message={response}
          />
        )}
        {error && (
          <MessageBox
            severity={"error"}
            title={"Algo deu errado"}
            message={error}
          />
        )}
      </AlignSection>
    </MainContainer>
  )
}