import React from 'react';

function TripInfoCard(props) {
    return (
        <div>
            {props.tripDetails.map((location, index) => {
                return (
                    <div key={index}>
                    <p>{location.name}</p>
                    <p>{location.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default TripInfoCard;