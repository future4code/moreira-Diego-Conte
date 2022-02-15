import { BASE_URL } from '../Constants/BASE_URL'
import { userPathVariables } from '../Constants/UserPathVariables'
import useRequestData from '../Hooks/UseRequestData';
import { useNavigate } from "react-router-dom";

function ListTrips() {
    const [listTrips, error] = useRequestData(`${BASE_URL}${userPathVariables}/trips`)
    const navigate = useNavigate();

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

    const goToHomePage = () => {
        navigate('/')
    }

    const goToApplicationPage = () => {
        navigate('/trips-application')
    }

    return (
        <div>
            <div>
                <button
                    onClick={goToHomePage}>
                    Home
                </button>

                <button
                    onClick={goToApplicationPage}>
                    Inscrever-se
                </button>
            </div>
            {displayTrips}

        </div>
    );
}

export default ListTrips;