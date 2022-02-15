import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  const goToTripsPage = () => {
    navigate('/trips')
  }



  return (
    <div>
      <hr></hr>
      <button
        onClick={goToTripsPage}>
        Viagens
      </button>
    </div>
  );
}

export default Home;