import React from 'react';

function Card(props: any) {
    return (
        <div  className='card-container'>
            <h3 className='card-title'>Holder Title</h3>
            <p className='rating'>420.69 (1111)</p>
            <p className='address' >11111 ahhh lane Paris, France </p>
            <p className='operatingHours'>9am - 5pm</p>
            {props.phone && <p className='phone-number'>{props.phone}</p>}
        </div>
    );
}

export default Card;