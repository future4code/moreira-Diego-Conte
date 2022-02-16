import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from '../Hooks/useProtectedPage';
import { goToHomePage, goBack } from '../Route/NavFunctions';
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';

export default function AdminDetailsTripPage() {
  useProtectedPage()
  const [tripData, setTripData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTripDetails()
  }, [])

  const getTripDetails = () => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}${userPathVariables}trip/${id}`,
      { headers: { auth: token } })
      .then((res) => {
        setTripData(res.data.trip)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  console.log(tripData)


  // const tripsDetails = tripData ? tripData.map((detail) => {
  //   return (
  //     <div key={detail.id}>
  //       <p><b>Nome</b>: {detail.name}</p>
  //       <p><b>Descrição</b>: {detail.description}</p>
  //       <p><b>Planeta</b>: {detail.planet}</p>
  //       <p><b>Duração</b>: {detail.durationinDays} dias</p>
  //       <p><b>Data</b>: {detail.date}</p>
  //       <hr></hr>
  //     </div>
  //   )
  // }) : 'carregando...'


  return (
    <div>
      <button onClick={() => goToHomePage(navigate)}> Home </button>
      <button onClick={() => goBack(navigate)}> Voltar </button>

      <p>Detalhes no console</p>
      {/* {tripsDetails} */}
    </div>
  )
}