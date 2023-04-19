import React from 'react'
import Button from './Button'

function Card(props: any) {

  //need to be added to data: props?.email,  props?.description props?.image_url,

  const locationData = [props?.name, props?.rating, props?.address, props?.lat, props?.lng, props?.attraction_type, props?.ratings_count]

  // const addToProfile = (dataToSend) => {
  //   const params = {

  //     data: dataToSend
  //   }
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(params),
  //   }
  //   const data = await fetch('/api/pointsOfInterest', options)
  // }

  return (
    <div className="card-container">
      <p className="rating">
        {props.rating}, Number of ratings {props.ratings_number}
      </p>
      <p className="priceRange">Price Level: {props.price}</p>
      <p className="address">{props.address}</p>
      <p className="operatingHours"></p>
      {props.phone && <p className="phone-number">{props.phone}</p>}
      <div className="card-btn-container">
        <Button handler={addToProfile} name="card-btn-addToProfile" value="Add to profile!"></Button>
        {/* <Button handler={addToProfile} name="card-btn-addToTrip" value="Add to trip!"></Button> */}
      </div>
    </div>
  )
}

export default Card
