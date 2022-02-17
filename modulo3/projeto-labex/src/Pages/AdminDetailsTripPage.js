import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from '../Hooks/useProtectedPage';
import { goToHomePage, goBack } from '../Route/NavFunctions';
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';
import { Header } from '../Components/Header';
import useRequestData from '../Hooks/UseRequestData';
import axios from 'axios';


export default function AdminDetailsTripPage() {
  useProtectedPage()
  const { id } = useParams();
  const navigate = useNavigate();
  const [decistion, setDecision] = useState(false);
  const token = localStorage.getItem('token');
  const [tripData, error] = useRequestData(`${BASE_URL}${userPathVariables}trip/${id}`, { headers: { auth: token } });



  const decideCandidate = (idcandidate, name, decision) => {
    axios.put(`${BASE_URL}${userPathVariables}trips/${id}/candidates/${idcandidate}/decide`, { approve: decision }, { headers: { auth: token } })
      .then((res) => {
        if (decision === true) {
          alert(`${name} constará na lista de viajantes`)
        } else {
          alert(`${name} não constará na lista de viajantes`)
        }
        window.location.reload()
      })
      .catch((err) => {
        alert(err)
      })
  }


  const candidates = tripData && tripData.trip.candidates.length > 0 ?
    tripData.trip.candidates.map((inscription) => {
      return (
        <ul key={inscription.id}>
          <li><b>Nome</b>: {inscription.name}</li>
          <li><b>Profissão</b>: {inscription.profession}</li>
          <li><b>Idade</b>: {inscription.age}</li>
          <li><b>País</b>: {inscription.country}</li>
          <li><b>Texto de candidatura</b>: {inscription.applicationText}</li>
          <button
            onClick={() => decideCandidate(inscription.id, inscription.name, true)}>
            Aprovar</button>
          <button
            onClick={() => decideCandidate(inscription.id, inscription.name, false)}>
            Reprovar</button>
          <hr></hr>
        </ul>
      )
    })
    :
    <p>sem candidatos</p>

  const approvedCandidates = tripData && tripData.trip.approved.length > 0?
    tripData.trip.approved.map((candidate) => {
      return (
        <ul key={candidate.id}>
          <li> {candidate.name}</li>
        </ul>
      )
    })
    :
    <p> Sem candidatos</p>


  return (
    <div>
      <Header />
      <button onClick={() => goToHomePage(navigate)}> Home </button>
      <button onClick={() => goBack(navigate)}> Voltar </button>

      {tripData &&
        <ul> Dados da Viagem
          <li>{tripData.trip.name}</li>
          <li>{tripData.trip.description}</li>
          <li>{tripData.trip.planet}</li>
          <li>{tripData.trip.durationInDays}</li>
          <li>{tripData.trip.date}</li>
        </ul>
      }

      <hr></hr>
      <p> Candidatos pendentes</p>
      {candidates}

      <hr></hr>
      <p>Cadidatos aprovados</p>
      {approvedCandidates}
    </div>
  )
}