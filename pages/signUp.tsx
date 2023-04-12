import React, { ChangeEvent, useState } from 'react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'
import { handleStateChange } from '@/helperFunctions/helperFunction'

function signUp(props) {

  // these are the states that are used to make sure the email/passwords match before the api is called
  const [email, setEmail] = useState()
  const [confirmEmail, setConfirmEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  //This boolean is used for conditional rendering, it renders if the email or password do not match or there is an error. 
  const [toolTip, setToolTip] = useState(false)
  //lets the error tooltip know whethere it's email or password that doesn't match and display which it is
  const [type, setType] = useState('')
  //lets the tooltip know what type of error is thrown and show the relating message
  const [alert, setAlert] = useState('')
  //used for the redirect if signup is completed successful.
  const router = useRouter()

  // This calls our signup function which in turn calls our lambda function and returns some data.
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
    //converts the ReadableStream into a string
    const dataCheck= await data.json()
    //decides what to do depending on the data returned, either redirect or tells alert state what to display
    if (dataCheck.success) {
      router.push('/')    }
    else if (dataCheck.error === "User already exists!") {
      setAlert("User already exists!")
    }
    else {
      setAlert('Unkown error occured, please try again later')
    }
  }


  //This checks if the email/pass and confirm match
  const validateInput  = () => {
    //this is used to reset the alert to falsy on the first confirm check
    if (alert) {
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
    }
  }
  return (
    <div>
      <NavBar />
      <div className="signUp container">
        <p>Welcome please fill out the information below to sign up!</p>
        <p>Please enter your email:</p>
        <input type="form" placeholder="Email address" onChange={(e) => { handleStateChange(e, setEmail) }} />
        <p>Please confirm your email:</p>
        <input type="form" placeholder="Confirm email address" onChange={(e) => { handleStateChange(e, setConfirmEmail) }} />
        <p>Please enter a password </p>
        <input type="password" placeholder="Password" onChange={(e) => { handleStateChange(e, setPassword) }} />
        <p>Please comfirm your password:</p>
        <input type="password" placeholder="Confirm password" onChange={(e) => { handleStateChange(e, setConfirmPassword) }} />
        <button onClick={validateInput}>test</button>
        {alert && <div className="tool-tip">{alert}</div>}
        {toolTip && <div className="tool-tip">{type} must match</div>}
      </div>
    </div>
  )
}

export default signUp
