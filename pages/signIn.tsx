import React from 'react'
import { useState } from 'react'
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
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [toolTip, setToolTip] = useState(false)
  const [type, setType] = useState('')

function handleEmailInput(event){  
  setEmail(event.target.value)

}

function handlePasswordInput(event){
  setPassword(event.target.value)
}

const checkLogin = () => {
  
}

const bleh = () => {console.log(email, password)}
  return (
    <div>
      <NavBar />
      <div className="signIn-container">
        <p>Enter your email:</p>
        <input type="form" placeholder="Email address" onChange={handleEmailInput}/>
        <p>Enter your password:</p>
        <input type="password" placeholder="Password" onChange={handlePasswordInput}/>
        <button type="submit">Submit</button>
      </div>
      <button onClick={bleh}>test</button>
    </div>
  )
}

export default signUp
