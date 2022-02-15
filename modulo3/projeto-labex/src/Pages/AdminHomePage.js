import React from 'react';
import { useNavigate } from "react-router-dom";

export default function AdminHomePage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/')
  }

  const goToCreateTripPage = () => {
    navigate('/admin-create-trips')
  }
  return (
    <div>
      <button
        onClick={goToHomePage}>
        Home
      </button>

      <button
        onClick={goToCreateTripPage}>
        Criar viagens
      </button>

      <p>AdminHomePage</p>
    </div>
  )
}