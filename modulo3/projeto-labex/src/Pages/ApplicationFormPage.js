import { countries } from '../Constants/Countries';
import { useNavigate } from "react-router-dom";
import { goToHomePage, goBack } from '../Route/NavFunctions';


export default function ApplyToTrip(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => goToHomePage(navigate)}> Home </button>
                <button onClick={() => goBack(navigate)}> Voltar </button>
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
            <input placeholder='Nome' />
            <input placeholder='Idade' />
            <input placeholder='Texto de candidatura' />
            <input placeholder='Profissão' />
            <select
                key={'escolhaPais'}
                placeholder='País'
                name='Country'
                // value={}
                // onChange={}
                required
            >
                <option
                    value={''}>
                    Escolha um país
                </option>
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