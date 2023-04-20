import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavBar(props: any) {


  return (
    <div className="nav-container">
      <header className="main-header">
        <Image src="/Globe.png" alt="WorldGlobe or food" width={40} height={40}></Image>
        <h2 className="header-title">Our Travel-Planner</h2>
       {props.user &&  <p>Hello, {props.user.name}</p>}
        <p className="home-btn">
          <Link href="/">Home</Link>
        </p>

        <p className="profile-btn">
          <Link href="/profilePage"> Profile</Link>
        </p>
        {!props.user &&
          <ul className="nav">
            <div className="nav-list-container">
              <li>
                <Link href="/api/auth/login">Login/Signup</Link>
              </li>
            </div>
          </ul>
        }
        {props.user &&
          <div className="nav-list-container">
            <ul>
              <li className= "nav-list-item"><Link href="/api/auth/logout">logout</Link></li>
            </ul>
          </div>
        }
      </header>
    </div>
  )
}

export default NavBar
