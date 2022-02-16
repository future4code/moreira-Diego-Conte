import React from 'react';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../Hooks/useProtectedPage';
import { goToHomePage, goBack } from '../Route/NavFunctions';

export default function AdminCreateTripPage() {

  useProtectedPage()

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => goToHomePage(navigate)}> Home </button>
        <button onClick={() => goBack(navigate)}> Voltar </button>
      </div>

      <p>CreateTrips</p>
    </div>
  )
}