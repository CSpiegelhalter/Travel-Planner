import React, { useState } from 'react'
import Card from './Card'

function SideBar(props: any) {

  return (
    <div className="info-sidebar">
      {props.showSavedTrips ?
        <Card name="test" rating="5" price="" address="42 wallaby way Sydney Aus" ratings_count="420" allowAddToProfile={false} />
        :
        props.placesInfo ?
        props.placesInfo.map((place: any, index: number) => (
          <Card
            key={index}
            name={place?.name}
            rating={place?.rating}
            price={place?.price_level}
            address={place?.formatted_address}
            ratings_count={place?.user_ratings_total}
            lat={place.geometry?.location.lat}
            lng={place.geometry?.location.lng}
            attraction_type={place?.types}
            allowAddToProfile={true}
          />
        ))
        : null
      }
    </div>
  )
}

export default SideBar
