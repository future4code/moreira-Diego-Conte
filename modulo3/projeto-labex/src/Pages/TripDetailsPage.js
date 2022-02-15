import React from 'react';
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage() {
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

      <p>Trips details</p>
    </div>
  )
}