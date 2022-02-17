import { countries } from '../Constants/Countries';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { goToHomePage, goBack } from '../Route/NavFunctions';
import useRequestData from '../Hooks/UseRequestData';
import { BASE_URL } from '../Constants/BASE_URL';
import { userPathVariables } from '../Constants/UserPathVariables';
import { useState } from 'react';
import useForms from '../Hooks/UseForms';
import { planets } from '../Constants/Planets';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



export default function ApplyToTrip(props) {
    const navigate = useNavigate();
    const [tripId, setTripId] = useState("");
    const [listTrips, error] = useRequestData(`${BASE_URL}${userPathVariables}trips`)
    const token = localStorage.getItem('token');
    const { form, onChange, clearFields } = useForms({ name: "", age: 18, applicationText: "", profession: "", country: "" });

    const onChangeTrip = (e) => {
        setTripId(e.target.value)
    }

    const applicationCandidate = () => {
        axios.post(`${BASE_URL}${userPathVariables}trips/${tripId}/apply`, form, { headers: { auth: token } })
            .then((res) => {
                alert("Você submeteu a sua candidatura com sucesso!")
                window.location.reload()
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const submitToCreateTrip = (event) => {
        event.preventDefault();
        applicationCandidate()
        clearFields();
    };


    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(navigate)}> Home </button>
                <button onClick={() => goBack(navigate)}> Voltar </button>
            </div>
            <div>
                <form onSubmit={submitToCreateTrip}>
                    <Select
                        required
                        name='trip'
                        label='Viagem'
                        color='secondary'
                        onChange={onChangeTrip}>
                        {listTrips && listTrips.trips.map((trip) => {
                            return (
                                <option
                                    key={trip.id}
                                    value={trip.id}>
                                    {trip.name} - {trip.planet}
                                </option>
                            )
                        })}
                    </Select>

                    <TextField
                        required
                        name='name'
                        label='Nome'
                        inputProps={{ pattern: "^.{3,}$" }}
                        title={"O nome deve ter no mínimo 3 caracteres"}
                        variant="outlined"
                        color='secondary'
                        onChange={onChange} />

                    <TextField
                        required
                        name='age'
                        label='Idade'
                        variant="outlined"
                        color='secondary'
                        type="number"
                        inputProps={{ min: '18' }}
                        title={"Somente maiores de 18 anos"}
                        onChange={onChange} />

                    <TextField
                        required
                        name='applicationText'
                        inputProps={{ pattern: "^.{30,}$" }}
                        title={"A descrição deve ter no mínimo 30 caracteres"}
                        label='Descrição'
                        variant="outlined"
                        color='secondary'
                        onChange={onChange} />

                    <TextField
                        required
                        name='profession'
                        label='Profissão'
                        inputProps={{ pattern: "^.{10,}$" }}
                        title={"A profissão deve ter no mínimo 10 caracteres"}
                        variant="outlined"
                        color='secondary'
                        onChange={onChange} />

                    <Select
                        required
                        name='country'
                        label='País'
                        color='secondary'
                        onChange={onChange}>
                        {countries.map((country) => {
                            return (
                                <option
                                    key={country}
                                    value={country}>
                                    {country}
                                </option>
                            )
                        })}
                    </Select>

                    <button>Candidatar-se</button>
                </form>
            </div>
        </div>
    )
}