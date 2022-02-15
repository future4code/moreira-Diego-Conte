import React from 'react';
import { useNavigate } from "react-router-dom";

export default function CreateTripPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/')
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <button
        onClick={goToHomePage}>
        Home
      </button>
      
      <button
        onClick={goBack}>
        Voltar
      </button>

      <p>CreateTrips</p>
    </div>
  )
}