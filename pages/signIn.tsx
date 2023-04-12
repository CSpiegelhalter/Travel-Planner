import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import { handleStateChange } from '@/helperFunctions/helperFunction'


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
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  //This boolean is used for conditional rendering, it renders if the email or password do not match or there is an error. 
  const [toolTip, setToolTip] = useState(false)
  //lets the error tooltip know whethere it's email or password that doesn't match and display which it is
  const [type, setType] = useState('')

  return (
    <div>
      <NavBar />
      <div className="signIn-container">
        <p>Enter your email:</p>
        <input type="form" placeholder="Email address" onChange={(e) => handleStateChange(e, setEmail)} />
        <p>Enter your password:</p>
        <input type="password" placeholder="Password" onChange={(e) => handleStateChange(e, setPassword)} />
        <button type="submit">Submit</button>
      </div>
    </div>
  )
}

export default signUp
