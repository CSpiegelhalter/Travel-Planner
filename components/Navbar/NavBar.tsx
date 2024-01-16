'use client'

import Link from 'next/link'
import styles from './NavBar.module.css'
import Image from 'next/image'
import { NavBarProps } from '@/Types/types'
// import { useRouter } from 'next/router'

function NavBar(props: NavBarProps) {
  const testList = ['spain', 'rome', 'vacay', 'our getaway']

  // const router = useRouter()

  const iconItems = [
    {
      selected: props.map,
      selectedImage: '/mapIconSelected.webp',
      unselectedImage: '/mapIconUnselected.webp',
      href: '/map',
      name: 'Maps',
      alt: 'Map icon',
    },
    {
      selected: props.trips,
      selectedImage: '/backpackIconSelected.webp',
      unselectedImage: '/backpackUnhighlighted.webp',
      href: '/trips',
      name: 'Trips',
      alt: 'Backpack Icon',
    },
    {
      selected: props.bucketList,
      selectedImage: '/saveIconSelected.webp',
      unselectedImage: '/savedIconUnselected.webp',
      href: '/bucketList',
      name: 'Bucket List',
      alt: 'Save Icon',
    },
    {
      selected: props.profile,
      selectedImage: '/backpackIconSelected.webp',
      unselectedImage: '/backpackUnhighlighted.webp',
      href: '/profile',
      name: 'Profile',
      alt: 'Backpack Icon',
    },
  ]

  return (
    <header className={styles.mainHeader}>
      <div className={styles.buttonContainer}>
        {iconItems.map((info, index) => (
          <div key={info.name + 'btnBorder'} id={index.toString()} className={styles.btnBorder}>
            <Link
              key={info.name}
              className={styles.link}
              href={info.href}
              prefetch={false}
              style={{ textDecoration: 'none' }}
            >
              <div key={info.name + 'navBtn'} className={styles.navBtn}>
                <div key={info.name + 'imageContainer'} className={styles.imageContainer}>
                  <Image
                    key={info.name + 'image'}
                    src={info.selected ? info.selectedImage : info.unselectedImage}
                    alt={info.alt}
                    fill
                  />
                </div>
                <p
                  key={info.name + 'buttonLabel'}
                  className={styles.btnLabels}
                  style={info.selected ? { color: '#0000EF' } : { color: 'grey' }}
                >
                  {info.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </header>
  )
}

export default NavBar
