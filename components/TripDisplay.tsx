import dynamic from 'next/dynamic';
import { useState } from 'react';

function TripDisplay(props) {
  const TripInfoCard = dynamic(() => import('@/components/TripInfoCard'))
  const [showDetails, setShowDetails] = useState(false)
  const [selectedTrip, setSelectedTrip] = useState('')

  

  return (
    <div>
      {showDetails ? 
        <TripInfoCard tripDetails={props.data[selectedTrip]}/>
       : 
        Object.entries(props.data).map(([key, value], index) => (
          <div key={index} onClick={() =>{
             setSelectedTrip(key)
             setShowDetails(prevVal => !prevVal)
             }}>
            <h3>{key} Trip</h3>
            <h3>{value.length} Saved Locations</h3>
          </div>
        ))
      }
    </div>
  )



}


export default TripDisplay;