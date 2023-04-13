import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavBar(props: any) {
  return (
    <div className="nav-container">
      <header className="main-header">
        <Image src="/Globe.png" alt="WorldGlobe or food" width={40} height={40}></Image>
        <h2 className="header-title">Our Travel-Planner</h2>
        <p className="home-btn">
          <Link href="/">Home</Link>
        </p>

        <p className="profile-btn">
          <Link href="/profilePage"> Profile</Link>
        </p>
        <ul className="nav">
          <div className="nav-list-container">
            <li>
              <Link href="/logIn">Login</Link>
            </li>
          </div>
          <div className="nav-list-container">
            <li>
              <Link href="/signUp">Sign-Up</Link>
            </li>
          </div>
        </ul>
      </header>
    </div>
  )
}

export default NavBar
