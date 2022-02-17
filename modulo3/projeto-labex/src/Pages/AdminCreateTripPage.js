import React from 'react';
import { useNavigate } from "react-router-dom";
import useForms from '../Hooks/UseForms';
import { useProtectedPage } from '../Hooks/useProtectedPage';
import { goToHomePage, goBack } from '../Route/NavFunctions';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { planets } from '../Constants/Planets';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import axios from 'axios';
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';

const TesteInputs = styled.div` 
width: 800px;

Select{
  width: 80px;
}
`

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
    createTrip()
    clearFields();
  };

  return (
    <div>
      <div>
        <button onClick={() => goToHomePage(navigate)}> Home </button>
        <button onClick={() => goBack(navigate)}> Voltar </button>
      </div>
      <TesteInputs>
        <form onSubmit={submitToCreateTrip}>
          <TextField
            required
            name='name'
            label='Nome'
            inputProps={{ pattern: "^.{5,}$" }}
            title={"O nome deve ter no mínimo 5 caracteres"}
            variant="outlined"
            color='secondary'
            onChange={onChange} />

          <Select
            requires
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

          <TextField
            required
            name='date'
            variant="outlined"
            color='secondary'
            type='date'
            inputProps={{ min: '17/02/2022' }}
            onChange={onChange} />

          <TextField
            required
            name='description'
            inputProps={{ pattern: "^.{30,}$" }}
            title={"A descrição deve ter no mínimo 30 caracteres"}
            label='Descrição'
            variant="outlined"
            color='secondary'
            onChange={onChange} />

          <TextField
            required
            name='durationInDays'
            label='Duração em dias'
            variant="outlined"
            color='secondary'
            type="number"
            inputProps={{ min: '50' }}
            onChange={onChange} />

          <button>
            <Button
              variant="outlined"
              color='secondary'
              type='submit'>
              Criar
            </Button>
          </button>
        </form>
      </TesteInputs>

      <p>CreateTrips</p>
    </div>
  )
}