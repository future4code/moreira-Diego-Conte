import React from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/')
  }

  return (

    <div>
      <button
        onClick={goToHomePage}>
        Home
      </button>
      <p>LoginPage </p>
    </div>
  )
}