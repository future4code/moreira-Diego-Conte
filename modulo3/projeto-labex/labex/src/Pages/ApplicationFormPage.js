import { countries } from '../Constants/Countries'


export default function ApplyToTrip(props) {

    return (
        <div>
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