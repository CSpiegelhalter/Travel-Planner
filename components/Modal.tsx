import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useState } from 'react';

function Modal(props: any) {
    const [tripName, setTripName] = useState('')
    const { user, error, isLoading } = useUser()
    const userId = user?.['https://example.com/id']

    const addTripToDB = async () => {
    //     const params = {
    //         trip_name: tripName,
    //         user_id: userId            
    //     }
    //     const options = {
    //       method: 'POST',
    //       body: JSON.stringify(params),
    //     }
    //     const data = await fetch('/api/saveAttraction', options)
        console.log("I was clicked")
      }

    function handleStateChange(e: any){
        setTripName(e.target.value)
        console.log(tripName)
    }
    
    return (
        <div>
            <div className="darkBG" onClick={() => props.setIsOpen(false)} />
            <div className="centered">
                <div className="modal-container">
                    <div className="modalHeader">
                        <h5 className="heading">Create a new Trip!</h5>
                    </div>
                    <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
                        Close
                    </button>
                    <div className="modalContent">
                        <p>Please enter the name of your trip:</p>
                        <input type="form" placeholder="Name of new trip" onChange={(e) => { handleStateChange(e) }} />
                        <button onClick={addTripToDB}>Add Trip!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

