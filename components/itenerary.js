import Flight from './flight.js';

export default function Itenerary({props}){
    return (
        <>
        <Flight
            departureTime="06:50"
            arrivalTime="09:50"
            date="Jul 2"
            destination="OSL"
            origin="LHR"
        />
        </>
    )
}