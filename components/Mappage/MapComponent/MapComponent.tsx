import { GoogleMap, MarkerF } from '@react-google-maps/api'
// import './mapTool.module.css'
import { testLocations } from '@/constants/test'
//This is where we make the map. We pass the location from the home component as a prop
export default function Map(props: any) {
  const mapOptions = {
    disableDefaultUI: true,

  }
  return (
    <GoogleMap options={mapOptions} z-index={1} zoom={15} center={props.location} mapContainerClassName="map-container">
      {testLocations.map((marker: any, index: any) => (
        <MarkerF key={index} position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }} />
      ))}
    </GoogleMap>
  )
}
