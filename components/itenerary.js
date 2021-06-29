import Flight from './Flight.js';

export default function Itenerary({itenerary}){
    return (
        <>
        {/* <Flight
            departureTime="06:50"
            arrivalTime="09:50"
            date="Jul 2"
            destination="OSL"
            origin="LHR"
        /> */}
            <div className="itenerary">
            {itenerary.flights.map(flights =>(
                <Flight
                    departureTime={flights.departureTime}
                    arrivalTime={flights.arrivalTime}
                    date={flights.date}
                    origin={flights.origin}
                    destination={flights.destination}
                    key={flights.conformation}
                />
            ))}
            </div>

            <style jsx>{`

                .itenerary{
                    display: flex;
                    flex-direction: column;
                    grid-gap:18px;
                    padding:18px 0;
                    width:150%;
                }

            `}</style>

        </>
    )
}