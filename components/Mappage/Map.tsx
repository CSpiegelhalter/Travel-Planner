import { GoogleMap } from '@react-google-maps/api'

//This is where we make the map. We pass the location from the home component as a prop
export default function Map(props: any) {
  return (
    <GoogleMap
      options={{ disableDefaultUI: true }}
      z-index={1}
      zoom={15}
      center={props.location}
      mapContainerClassName="map-container"
    ></GoogleMap>
  )
}
