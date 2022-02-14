import React from 'react';
import { BASE_URL, userPathVariables } from '../Constants/BASE_URL'
import { UserRequestData } from '../Services/UserRequestData';

function ListTrips() {
    const [trips, error] = UserRequestData(BASE_URL + userPathVariables + '/trips')
    console.log(trips)


    // const listTrips =
    //     trips && trips.map((trip) => {
    //         return <div key={trip.id}>
    //             <p>Nome: {trip.name}</p>
    //             <p>Descrição: {trip.description}</p>
    //             <p>Planeta: {trip.planet}</p>
    //             <p>Duração: {trip.durationInDays}</p>
    //             <p>Data: {trip.date}</p>
    //         </div>
    //     })

    return (
        <div>
            Oi
            {/* {listTrips} */}
        </div>
    );
}

export default ListTrips;