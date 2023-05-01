import React from 'react';


function Modal(props: any) {
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
                        <input type="form" placeholder="Name of new trip" onChange={(e) => { handleStateChange(e, setEmail) }} />
                        <button >test</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

