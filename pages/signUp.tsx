import React from 'react'
import NavBar from '@/components/NavBar'


const callSignUpApi = async () => {
    const params = {
      test: 'test'
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
    }
    const data = await fetch('/api/signup', options)
    
    console.log(await data.json())
  }


function signUp(props) {
  return (
    <div>
      <NavBar />
      <div className="signUp container">
        <p>Welcome please fill out the information below to sign up!</p>
        <p>Please enter your email:</p>
        <input type="form" placeholder="Email address" />
        <p>Please confirm your email:</p>
        <input type="form" placeholder="Confirm email address" />
        <p>Please enter a password </p>
        <input type="form" placeholder="Password" />
        <p>Please comfirm your password:</p>
        <input type="form" placeholder="Confirm password" />
        <button type="submit">Submit</button>
        <button onClick={callSignUpApi}>ahhhh</button>
      </div>
    </div>
  )
}

export default signUp
