import React from 'react';

function Card(props: any) {
    return (
        <div  className='card-container'>
            <h3 className='card-title'>{props.name}</h3>
            <p className='rating'>{props.rating}, Number of ratings {props.ratings_number}</p>
            <p className='priceRange'>Price Level: {props.price}</p>
            <p className='address' >{props.address}</p>
            <p className='operatingHours'></p>
            {props.phone && <p className='phone-number'>{props.phone}</p>}
        </div>
    );
}

export default Card;