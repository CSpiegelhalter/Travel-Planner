import React from 'react';
import NavBar from '@/components/NavBar';

const apiLink: any = process.env.NEXT_PUBLIC_AWS_API_SIGNUP_LINK




const test = async () => {
  const data =   await fetch(apiLink, {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
        'Content-Type': 'application/json',
        },
      })

      let test = JSON.stringify(data)

      console.log(data)

}


function signUp(props) {
    return (
        <div>
            <NavBar />
            <div className='signUp container'>
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
                <button onClick={test}>ahhhh</button>
            </div>

        </div>
    );
}

export default signUp;