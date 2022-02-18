import React from 'react';
import useForms from '../Hooks/UseForms';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from 'axios';
import LogoWhite from '../Assets/LogoWhite.png';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../Hooks/useProtectedPage';
import { goToHomePage, goBack } from '../Route/NavFunctions';
import { planets } from '../Constants/Planets';
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';
import { MainContainer, HomeButtonContainer, AlignSection, FormContainer, ButtonsSubmitAndBackSection } from '../Components/StyleAdminCreateTripPage';
import { Box } from '@mui/system';
import { FormControl, InputLabel } from '@mui/material';


//__________________________________________________________________________________________________________________________________


export default function AdminCreateTripPage() {
  useProtectedPage();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { form, onChange, clearFields } = useForms({ name: "", planet: "", date: "", description: "", durationInDays: "" });

  const createTrip = () => {
    axios.post(`${BASE_URL}${userPathVariables}trips`, form, { headers: { auth: token } })
      .then((res) => {
        alert("Viagem criada com sucesso")
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  const submitToCreateTrip = (event) => {
    event.preventDefault();
    createTrip();
    clearFields();
  };

  const logout = (navigate) => {
    localStorage.removeItem("token")
    goToHomePage(navigate)
  }

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
              title={"O nome deve ter no mínimo 5 caracteres"}
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
              inputProps={{ min: '17/02/2022' }}
              onChange={onChange} />
            <TextField
              required
              className='TextField'
              name='description'
              inputProps={{ pattern: "^.{30,}$" }}
              title={"A descrição deve ter no mínimo 30 caracteres"}
              label='Descrição'
              variant="outlined"
              color='secondary'
              onChange={onChange} />
            <TextField
              required
              className='TextField'
              name='durationInDays'
              label='Duração em dias'
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
      </AlignSection>
    </MainContainer>
  )
}