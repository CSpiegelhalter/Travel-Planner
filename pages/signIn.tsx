import React from 'react';
import NavBar from '@/components/NavBar';

function signUp(props) {
    return (
        <div>
            <NavBar />
            <div className='signIn-container'>
            <p>Enter your email:</p>
            <input type='form' placeholder='Email address' />
            <p>Enter your password:</p>
            <input type='form' placeholder='password' />
            <button type='submit'>Submit</button>
        </div>
        </div>
    );
}

export default signUp;