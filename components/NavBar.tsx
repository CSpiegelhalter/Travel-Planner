import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './Dropdown'
import { test } from 'node:test'
import styles from '../styles/Modal.module.css'

function NavBar(props: any) {
  const testList = ['spain', 'rome', 'vacay', 'our getaway']

  return (
    <div className={styles.navContainer}>
      <header className={styles.mainHeader}>
        {/* <Image src="/Globe.png" alt="WorldGlobe or food" width={40} height={40}></Image> */}
        <Dropdown tripsList={testList}/> 
        <h2 className={styles.headerTitle}>Our Travel-Planner</h2>
       {props.user &&  <p>Hello, {props.user.name}</p>}
        <p className={styles.homeBtn}>
          <Link href={styles.home}>Home</Link>
        </p>

        <p className={styles.profileBtn}>
          <Link href="/profilePage"> Profile</Link>
        </p>
        {!props.user &&
          <ul className={styles.nav}>
            <div className={styles.navListContainer}>
              <li>
                <Link href="/api/auth/login">Login/Signup</Link>
              </li>
            </div>
          </ul>
        }
        {props.user &&
          <div className="navListContainer">
            <ul>
              <li className= "navListItem"><Link href="/api/auth/logout">logout</Link></li>
            </ul>
          </div>
        }
      </header>
    </div>
  )
}

export default NavBar
