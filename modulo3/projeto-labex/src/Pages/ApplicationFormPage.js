import { countries } from '../Constants/Countries';
import { useNavigate } from "react-router-dom";


export default function ApplyToTrip(props) {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/')
    }

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <div>
                <button
                    onClick={goToHomePage}>
                    Home
                </button>

                <button
                    onClick={goBack}>
                    Voltar
                </button>
            </div>
            <select
                placeholder='Viagem'
                name='Country'
                // value={}
                // onChange={}
                required
            >
                <option
                    key={'escolhaViagem'}
                    value={''}
                // disabled
                >
                    Escolha uma viagem
                </option>
                {props.listTrips && props.listTrips.map((trip) => {
                    return (
                        <option
                            key={trip.id}
                            value={trip.name}>
                            {trip.name}
                        </option>
                    )
                })}
            </select>
            <input
                placeholder='Nome' ></input>
            <input
                placeholder='Idade'></input>
            <input
                placeholder='Texto de candidatura'></input>
            <input
                placeholder='Profissão'></input>
            <select
                key={'escolhaPais'}
                placeholder='País'
                name='Country'
                // value={}
                // onChange={}
                required
            >
                <option value={''}> Escolha um país</option>
                {countries.map((country,) => {
                    return (
                        <option
                            id={country}
                            value={country}>
                            {country}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}