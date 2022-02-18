import useRequestData from '../Hooks/UseRequestData';
import axios from 'axios';
import React from 'react';
import LogoWhite from '../Assets/LogoWhite.png';
import Button from '@mui/material/Button';
import loading from '../Assets/Loading.gif';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';
import { goToHomePage, goToCreateTripPage, goToAdminDetailsTripPage } from '../Route/NavFunctions';
import { useProtectedPage } from '../Hooks/useProtectedPage';
import { CardTrip, MainContainer, TripsContainer, HomeButtonContainer, LoadingIcon } from '../Components/StyleAdminHomePage';


//___________________________________________________________________________________


export default function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate();
  const [listTrips, error] = useRequestData(`${BASE_URL}${userPathVariables}trips`)

  const logout = (navigate) => {
    localStorage.removeItem("token")
    goToHomePage(navigate)
  }

  const deleteTrip = (id, name) => {
    if (window.confirm(`Deseja realmente deletar a viagem "${name}"?`)) {
      axios.delete(`${BASE_URL}${userPathVariables}trips/${id}`, { headers: { auth: localStorage.getItem("token") } })
        .then((res) => {
          alert('Viagem deletada')
          window.location.reload()
        })
        .catch((err) => {
          alert(err)
        })
    }
  }

  const displayTrips = listTrips ? listTrips.trips.map((trip) => {
    return (
      <CardTrip
        key={trip.id}>
        <p>
          <h3 onClick={() => goToAdminDetailsTripPage(navigate, trip.id)}>
            {trip.name}
          </h3>
          <DeleteOutlineIcon
            className='deleteIcon'
            onClick={() => deleteTrip(trip.id, trip.name)}>
            Delete
          </DeleteOutlineIcon>
        </p>
      </CardTrip>
    )
  }) : <LoadingIcon src={loading} />

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
          onClick={() => goToCreateTripPage(navigate)}>
          Criar viagens
        </Button>
        <Button
          variant="outlined"
          color='secondary'
          onClick={() => logout(navigate)}>
          Sair
        </Button>
      </HomeButtonContainer>
      <h1>Painel administrativo</h1>
      <TripsContainer>
        {displayTrips}
      </TripsContainer>
    </MainContainer>
  )
}