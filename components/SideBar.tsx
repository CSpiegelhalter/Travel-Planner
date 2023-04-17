import React from 'react'
import Card from './Card'


// image_url, description, email need to be added to props, email will come from auth0 useUser, I am not sure on how to handle the other 2 props


function SideBar(props) {
  return (
    <div className="info-sidebar">
      {props.placesInfo.map((place: any, index: number) => (
        <Card
          key={index}
          name={place?.name}
          rating={place?.rating}
          price={place?.price_level}
          address={place?.formatted_address}
          ratings_count={place?.user_ratings_total}
          lat={place.geometry?.location.lat}
          lng={place.geometry?.location.lng}
          attraction_type= {place?.types}
        />
      ))}
    </div>
  )
}

export default SideBar
