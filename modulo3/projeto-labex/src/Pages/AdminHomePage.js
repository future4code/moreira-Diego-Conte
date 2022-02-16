import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';
import { goToHomePage, goToCreateTripPage, goToAdminDetailsTripPage } from '../Route/NavFunctions';
import { useProtectedPage } from '../Hooks/useProtectedPage';
import useRequestData from '../Hooks/UseRequestData';


export default function AdminHomePage() {
  useProtectedPage()

  const navigate = useNavigate();
  const [listTrips, error] = useRequestData(`${BASE_URL}${userPathVariables}trips`)


  const displayTrips =  listTrips && listTrips.map((trip) => {
      return (
          <div 
          key={trip.id}
          onClick={() => goToAdminDetailsTripPage(navigate,trip.id)}
          >
              <p><b>Nome</b>: {trip.name}</p>
              <hr></hr>
          </div>
      )
  })

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

      <p>AdminHomePage</p>
      {displayTrips}
    </div>
  )
}