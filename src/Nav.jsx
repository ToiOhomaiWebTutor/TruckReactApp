function Nav({trucks, onTruckSelect})
{
    return(
        <nav>
            <h2>Models</h2>
            <ul>
                {
                    trucks.map(
                        (truck) => (
                            <li
                                key={truck.model}
                                onClick={()=>onTruckSelect(truck)}
                            >
                                {truck.model}
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav;