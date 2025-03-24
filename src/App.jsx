import {useState, useEffect} from 'react';
import Nav from './Nav';
import Truck from './Truck';

function App() {

  const [trucks, setTrucks] = useState([]);
  const [selectedTruck, setSelectedTruck] = useState(null);

  useEffect(
    ()=>{
      fetch("data.json")
      .then(response => response.json())
      .then(data => setTrucks(data))
      .catch(error => console.error("Error loading data", error))
    }, []
  )

    return(
      <div>
        <h1>Trucks</h1>
        <Nav trucks={trucks} onTruckSelect={setSelectedTruck} />
        <Truck truck={selectedTruck} />
      </div>
    );
}

export default App
