import { GoogleMap } from '@react-google-maps/api'
import { useMemo } from 'react'


  //This is where we make the map. We pass the location from the home component as a prop

export default function Map(props: any  ) {
    const center = useMemo(() => (props.location), [])
    return <GoogleMap options={{ disableDefaultUI: true, }} zoom={15} center={center} mapContainerClassName='map-container'></GoogleMap>
  }