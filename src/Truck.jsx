function Truck({truck})
{
    if(!truck)
    {
        return <div>Select a truck model to view details</div>
    }
    
    return(
        <div>
            <h2>{truck.model}</h2>
            <p>{truck.tagline}</p>
            <img src={truck.image} alt={truck.model} />
        </div>
    )
}

export default Truck;