import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './Dropdown'
import styles from '../styles/componentStyles/NavBar.module.css'
import Hamburger from './Hamburger'
import { locationLabels } from '@/constants/constants'
import Button from './Button'

function NavBar(props: any) {
  const testList = ['spain', 'rome', 'vacay', 'our getaway']

  const holder = async () => {console.log('cock')}

  return (
    <div className={styles.navContainer}>
      <header className={styles.mainHeader}>
        <div className={styles.buttonContainer}>
        <Dropdown tripsList={testList}/> 
        </div>
       {/* {props.user &&  <p>Hello, {props.user.name}</p>} */}
        {/* <p className={styles.homeBtn}>
          <Link href="home">Home</Link>
        </p>
        <p className={styles.profileBtn}>
          <Link href="/profilePage"> Profile</Link>
        </p> */}
        {/* {props.user &&
          <div className={styles.navListContainer}>
            <ul>
              <li className= {styles.navListItem}><Link href="/api/auth/logout">logout</Link></li>
            </ul>
          </div>
        } */}
        <div className={styles.burgerContainer} >
        <Hamburger />
        </div>
        {/* {!props.user &&
          <ul className={styles.nav}>
            <div className={styles.navListContainer}>
              <li>
                <Link href="/api/auth/login">Login/Signup</Link>
              </li>
            </div>
          </ul>
        } */}
      </header>
    </div>
  )
}

export default NavBar
