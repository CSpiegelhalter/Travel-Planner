import React, { ChangeEvent, useState } from 'react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'

function signUp(props) {

  const [email, setEmail] = useState()
  const [confirmEmail, setConfirmEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [type, setType] = useState('')
  const [toolTip, setToolTip] = useState(false)
  const [alert, setAlert] =useState('')
  const router = useRouter()
  

  const callSignUpApi = async () => {
    const params = {
      email: email,
      password: password
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
    }
    const data = await fetch('/api/signup', options)
    const dataText = await data.text()
    if(dataText === 'User made successfully!'){
      router.push('/')
    }
    else if(dataText === "User already exists!"){
      setAlert("User already exists!")
    }
    else{
      setAlert('Unkown error occured, please try again later')
    }
    console.log(dataText)
    console.log(typeof data.body)
  }

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

  const confirmCheck = () => {
    if(alert){
      setAlert('')
    }
    if (email !== confirmEmail) {
      setToolTip(true)
      setType('Emails')
    }
    else if (password !== confirmPassword) {
      setToolTip(true)
      setType('Passwords')
    }
    else {
      callSignUpApi()
      setToolTip(false)
      console.log('I ran!')
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
        {alert && <div className="tool-tip">User already exsists!</div>}
        {toolTip && <div className="tool-tip">{type} must match</div>}
      </div>
    </div>
  )
}

export default signUp
