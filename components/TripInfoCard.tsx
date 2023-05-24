import React from 'react';

function TripInfoCard(props: any) {
    return (
        <div>
            <div >
                <p>{props.name}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default TripInfoCard;