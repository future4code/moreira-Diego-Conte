import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  const goToTripsPage = () => {
    navigate('/trips-list')
  }

  const goToLoginPage = () => {
    navigate('/login')
  }



  return (
    <div>
      <button
        onClick={goToTripsPage}>
        Viagens
      </button>

      <button
        onClick={goToLoginPage}>
        Login
      </button>
    </div>
  );
}

export default Home;