import { BASE_URL } from '../Constants/BASE_URL'
import {userPathVariables} from '../Constants/UserPathVariables'
import useRequestData from '../Hooks/UseRequestData';
import ApplyToTrip from './ApplicationFormPage';

function ListTrips() {
    const [listTrips, error] = useRequestData(`${BASE_URL}${userPathVariables}/trips`)

    const displayTrips =
        listTrips &&
        listTrips.map((trip) => {
            return (
                <div key={trip.id}>
                    <p><b>Nome</b>: {trip.name}</p>
                    <p><b>Descrição</b>: {trip.description}</p>
                    <p><b>Planeta</b>: {trip.planet}</p>
                    <p><b>Duração</b>: {trip.durationinDays} dias</p>
                    <p><b>Data</b>: {trip.date}</p>
                    <hr></hr>
                </div>
            )
        })

    return (
        <div>
            {displayTrips}
            <ApplyToTrip listTrips={listTrips}/>
        </div>
    );
}

export default ListTrips;