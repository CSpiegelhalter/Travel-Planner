'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import styles from './Profile.module.css'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { grabDataToDisplay } from '@/helperFunctions/grabDataToDisplay'
import LoadingComponent from '@/components/Loading/LoadingComponent/LoadingComponent'
import Image from 'next/image'
import Hamburger from '@/components/Hamburger/Hamburger'

function ProfilePage() {
  const ProfileComponent = dynamic(() => import('@/components/Profilepage/ProfileComponent'))
  const ProfileDefault = dynamic(() => import('@/components/Profilepage/ProfileDefault'))
  const { user, isLoading } = useUser()
  const userId: number | any = process.env.NEXT_PUBLIC_AUTH0_USER_ID
    ? user?.[process.env.NEXT_PUBLIC_AUTH0_USER_ID]
    : null

  const [tripsNumber, setTripsNumber] = useState<number>(0)

  useEffect(() => {
    if (!!user) {
      grabDataToDisplay(userId, 'trips').then((val) => {
        if (Object.keys(val)?.length > 0) {
          setTripsNumber(Object.keys(val)?.length)
        }
      })
    }
  }, [isLoading, user])

  if (isLoading) return <LoadingComponent />

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <a href={'/'} className={styles.logo}>
          <Image src="/static/Logo.webp" alt="Logo" width={60} height={60} />
        </a>
        <Hamburger />
      </div>
      {user ? <ProfileComponent user={user} trips={tripsNumber} /> : <ProfileDefault />}
    </div>
  )
}

export default ProfilePage
