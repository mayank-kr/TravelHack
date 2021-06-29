import InformationContainer from './InformationContainer';

export default function AccomodationCheckOut({endDate, checkOutTime, name, address}){
    return(
        <>
            <InformationContainer
                icon = "🛌"
                upperDescription={`${endDate} ${checkOutTime} `}
                lowerDescription={`${name}, ${address}`}
            />
        </>
    )
}