import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';
import { goToHomePage, goToCreateTripPage, goToAdminDetailsTripPage, goToLoginPage } from '../Route/NavFunctions';
import { useProtectedPage } from '../Hooks/useProtectedPage';
import useRequestData from '../Hooks/UseRequestData';


export default function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate();
  const [listTrips, error] = useRequestData(`${BASE_URL}${userPathVariables}trips`)

  const deleteTrip = (id, name) => {
    if (window.confirm(`Deseja realmente deletar a viagem ${name}?`)) {
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

  const displayTrips = listTrips && listTrips.trips.map((trip) => {
    return (
      <div
        key={trip.id}>
        <p onClick={() => goToAdminDetailsTripPage(navigate, trip.id)}>
          <b>Nome</b>: {trip.name}</p>
        <button onClick={() => deleteTrip(trip.id, trip.name)}>Delete</button>
        <hr></hr>
      </div>
    )
  })

  const logout = (navigate) => {
    localStorage.removeItem("token")
    goToHomePage(navigate)
  }

  return (
    <div>
      <button
        onClick={() => goToHomePage(navigate)}>
        Home
      </button>

      <button
        onClick={() => goToCreateTripPage(navigate)}>
        Criar viagens
      </button>

      <button
        onClick={() => logout(navigate)}>
        Sair
      </button>

      <p>AdminHomePage</p>
      {displayTrips}
    </div>
  )
}