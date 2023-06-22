import { useUser } from '@auth0/nextjs-auth0/client'
import styles from '@/styles/pageStyles/Profile.module.css'
import dynamic from 'next/dynamic'
import { use, useEffect, useState } from 'react'
import { grabDataToDisplay } from '@/helperFunctions/grabDataToDisplay'
import { testTrips } from '@/constants/test'

function profilePage() {
  const NavBar = dynamic(() => import('@/components/NavBar'))
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

  return (
    <div className={styles.mainContainer}>
      <NavBar profile={true} bucketList={false} trips={false} map={false} />
      {user ? <ProfileComponent user={user} trips={tripsNumber} /> : <ProfileDefault />}
    </div>
  )
}

export default profilePage
