import React from 'react';

function signUp(props) {
    return (
        <div>
            <p>Welcome please fill out the information below to sign up!</p>
            <p>Please enter your email:</p>
            <input type='form' placeholder='Email address' />
            <p>Please confirm your email:</p>
            <input type='form' placeholder='Confirm email address' />
            <p>Please enter a password </p>
            <input type='form' placeholder='Password' />
            <p>Please comfirm your password:</p>
            <input type='form' placeholder='Confirm password' />
            <button type='submit'>Submit</button>


        </div>
    );
}

export default signUp;