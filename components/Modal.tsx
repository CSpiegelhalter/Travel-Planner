import React from 'react';


function Modal(props: any) {
    return (
        <div>
            <div className="darkBG" onClick={() => props.setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Details</h5>
                    </div>
                    <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
                        Close
                    </button>
                    <div className="modalContent">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

