import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import styles from '@/styles/pageStyles/Profile.module.css'
import dynamic from 'next/dynamic'

function profilePage() {
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const { user } = useUser()
  const userId: number = user?.['https://example.com/id'] as number
  const profilepicture = user?.picture
  //TODO Check local storage OR get trips for length
  const trips: any = ['1', '2', '3'] 
  
  return (
    <div className={styles.mainContainer}>
      <NavBar profile={true} bucketList={false} trips={false} map={false} />
      <div className={styles.profileContainer}>
        <h1>{`${user?.given_name} ${user?.family_name}`}</h1>
        <p className={styles.savedTrips}>{`${trips.length} Trips`}</p>
        <div className={styles.profileItemsList}>
          <ul className={styles.profileList}> 
            <li className={styles.listItem}>{user?.given_name as string}</li>
            <li className={styles.listItem}>{user?.family_name as string}</li>
            <li className={styles.listItem}>{user?.nickname}</li>
            <li className={styles.listItem}>{user?.email}</li>
          </ul>
        </div>
        <Link className={styles.logout} href="api/auth/logout" prefetch={false}>Logout</Link>
      </div>
    </div>
  )
}

export default profilePage
