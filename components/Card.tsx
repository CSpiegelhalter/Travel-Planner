import React from 'react'
import Button from './Button'

function Card(props: any) {
  const addToProfile = () => {
    // console.log(`${data[0]} was added!`)
    console.log(data)
    
  }

      //need to be added to data: props?.email,  props?.description props?.image_url,

  const data = [props?.name, props?.rating, props?.address, props?.lat, props?.lng, props?.attraction_type, props?.ratings_count]

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
