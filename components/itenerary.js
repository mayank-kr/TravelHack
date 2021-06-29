import Flight from './Flight.js';
import AccomodationCheckIn from './AccomodationCheckIn';
import Restaurant from './Restaurant';

export default function Itenerary({itenerary}){
    return (
        <>
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

            {itenerary.accomodation.map(place=>{
                <AccomodationCheckIn
                    startDate={place.startDate}
                    checkInTime={place.checkInTime}
                    name={place.name}
                    address={place.address}
                />
            })}

            {itenerary.restaurants.map(restaurant=>{
                <Restaurant
                    time={restaurant.time}
                    date={restaurant.date}
                    name={restaurant.name}
                    address={restaurant.address}

                />
            })}

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