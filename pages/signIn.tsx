import React from 'react';


function signUp(props) {
    return (
        <div>
            <p>Enter your email:</p>
            <input type='form' placeholder='Email address' />
            <p>Enter your password:</p>
            <input type='form' placeholder='password' />
            <button type='submit'>Submit</button>
        </div>
    );
}

export default signUp;