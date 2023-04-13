import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import { handleStateChange } from '@/helperFunctions/helperFunction'
import { useRouter } from 'next/router'
import cookie  from 'cookie'



function LogIn(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [alert, setAlert] = useState('')
  const router = useRouter()


  const callLogInApi = async () => {
    const params = {
      email: email,
      password: password
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
    }
    const data = await fetch('/api/logIn', options)

    const dataCheck = await data.json()
    console.log(dataCheck.jwt)

    if (dataCheck.success) {
      // router.push('/')
      console.log('It worked!')
    }
    else if (!dataCheck) {
      setAlert('Incorrect email or password')
    }
    else {
      setAlert('Something went wrong.Please try again later.')
    }

  }

  

  return (
    <div>
      <NavBar />
      <div className="signIn-container">
        <p>Enter your email:</p>
        <input type="form" placeholder="Email address" onChange={(e) => handleStateChange(e, setEmail)} />
        <p>Enter your password:</p>
        <input type="password" placeholder="Password" onChange={(e) => handleStateChange(e, setPassword)} />
        <button onClick={callLogInApi}>test</button>
        {alert && <div className="tool-tip">{alert}</div>}
      </div>
    </div>
  )
}

export default LogIn
