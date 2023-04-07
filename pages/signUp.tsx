import React from 'react'
import NavBar from '@/components/NavBar'
import { useState } from 'react'


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

  const [email, setEmail] = useState()
  const [confirmEmail, setConfirmEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [toolTip, setToolTip] = useState(false)
  const [type, setType] = useState('')

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }
  function handleConfirmEmailChange(event) {
    setConfirmEmail(event.target.value)
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }
  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value)
  }


  const testFunction = () => console.log(email, password, confirmEmail, confirmPassword)
  const confirmCheck = () => {
    if (email !== confirmEmail) {
      setToolTip(true)
      setType('Emails')
    }
    else if (password !== confirmPassword) {
      setToolTip(true)
      setType('Passwords')
    }
    else {
      console.log("sign up successful")
      setToolTip(false)
    }
  }
  return (
    <div>
      <NavBar />
      <div className="signUp container">
        <p>Welcome please fill out the information below to sign up!</p>
        <p>Please enter your email:</p>
        <input type="form" placeholder="Email address" onChange={handleEmailChange} />
        <p>Please confirm your email:</p>
        <input type="form" placeholder="Confirm email address" onChange={handleConfirmEmailChange} />
        <p>Please enter a password </p>
        <input type="password" placeholder="Password" onChange={handlePasswordChange} />
        <p>Please comfirm your password:</p>
        <input type="password" placeholder="Confirm password" onChange={handleConfirmPasswordChange} />
        {/* <button className='sign-up-submit' type="submit">Submit</button> */}
        <button onClick={confirmCheck}>test</button>
        {toolTip && <div className="tool-tip">{type} must match</div>}
      </div>
    </div>
  )
}

export default signUp
