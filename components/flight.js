import InformationContainer from './InformationContainer';

export default function flight({departureTime, arrivalTime, date, destination,origin}){
    return(
        <>
            <InformationContainer
                icon="flight"
                upperDescription={`${date} ${departureTime} ${origin}`}
                lowerDescription={`${date} ${arrivalTime} ${destination}`}
            />
        </>
    )
}