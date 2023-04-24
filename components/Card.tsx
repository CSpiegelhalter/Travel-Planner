import React from 'react'
import Button from './Button'
import { useUser } from '@auth0/nextjs-auth0/client'

function Card(props: any) {

  const { user, isLoading, error } = useUser()

  const locationData = [props?.name, props?.rating, props?.address, props?.lat, props?.lng, props?.attraction_type, props?.ratings_count, user?.email, user?.['https://example.com/id']]


  const addAttractionToDB = async () => {
    const params = {
      userId: locationData?.[8],
      name: locationData?.[0],
      rating: locationData?.[1],
      address: locationData?.[2],
      lat: locationData?.[3],
      lng: locationData?.[4],
      attraction_type: locationData?.[5],
      rating_count: locationData?.[6],
      email: locationData?.[7],

    }
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
    }
    const data = await fetch('/api/saveAttraction', options)
    console.log(await data.text())
    console.log('I worked?')
  }

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
        {props.allowAddToProfile ? <Button handler={addAttractionToDB} name="card-btn-addToProfile" value="Add to profile!"></Button> : null}
        {/* <Button handler={addToProfile} name="card-btn-addToTrip" value="Add to trip!"></Button> */}
      </div>
    </div>
  )
}

export default Card
