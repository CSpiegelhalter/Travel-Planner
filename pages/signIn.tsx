import React from 'react'
import NavBar from '@/components/NavBar'

const callSignInApi = async () => {
  const params = {
    test: 'test'
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(params),
  }
  const data = await fetch('/api/signIn', options)
  
  console.log(await data.json())
}


function signUp(props) {
  return (
    <div>
      <NavBar />
      <div className="signIn-container">
        <p>Enter your email:</p>
        <input type="form" placeholder="Email address" />
        <p>Enter your password:</p>
        <input type="form" placeholder="password" />
        <button type="submit">Submit</button>
      </div>
      <button onClick={callSignInApi}>test</button>
    </div>
  )
}

export default signUp
