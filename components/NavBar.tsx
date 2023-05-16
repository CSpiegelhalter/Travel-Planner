import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './Dropdown'
import styles from '../styles/componentStyles/NavBar.module.css'
import Hamburger from './Hamburger'
import { locationLabels } from '@/constants/constants'
import Button from './Button'

function NavBar(props: any) {
  const testList = ['spain', 'rome', 'vacay', 'our getaway']

  return (
    <header className={styles.mainHeader}>
      <div className={styles.buttonContainer}>
        <Dropdown tripsList={testList} />
      </div>
      <div className={styles.burgerContainer} >
        <Hamburger />
      </div>
    </header>
  )
}

export default NavBar
