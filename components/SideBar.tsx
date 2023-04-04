import React from 'react'
import Card from './Card'

function SideBar(props) {
  return (
    <div className="info-sidebar">
      {props.placesInfo.map((place: any, index: number) => (
        <Card
          key={index}
          name={place.name}
          rating={place.rating}
          price={place.price_level}
          address={place.formatted_address}
          ratings_number={place.user_ratings_total}
        />
      ))}
    </div>
  )
}

export default SideBar
