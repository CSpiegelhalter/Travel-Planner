import React, { ChangeEvent, useState } from 'react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'

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
  const [alert, setAlert] =useState('')
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
    const dataText = await data.text()
    //decides what to do depending on the data returned, either redirect or tells alert state what to display
    if(dataText === 'User made successfully!'){
      router.push('/')
    }
    else if(dataText === "User already exists!"){
      setAlert("User already exists!")
    }
    else{
      setAlert('Unkown error occured, please try again later')
    }
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

  function handleStateChange(event, param){
      param(event.target.value)
  }
  console.log(email)

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
        <input type="form" placeholder="Email address" onChange={(e) => {handleStateChange(e, setEmail)}} />
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
