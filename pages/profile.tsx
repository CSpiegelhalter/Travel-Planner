import { useUser } from '@auth0/nextjs-auth0/client'
import styles from '@/styles/pageStyles/Profile.module.css'
import dynamic from 'next/dynamic'

function profilePage() {
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const ProfileComponent = dynamic(() => import('@/components/Profilepage/ProfileComponent'))
  const ProfileDefault = dynamic(() => import('@/components/Profilepage/ProfileDefault'))
  const { user } = useUser()
  const userId: number = user?.['https://example.com/id'] as number
  const profilepicture = user?.picture
  //TODO Check local storage OR get trips for length
  const trips: any = ['1', '2', '3'] 
  
  return (
    <div className={styles.mainContainer}>
      <NavBar profile={true} bucketList={false} trips={false} map={false} />
      {user ? 
      <ProfileComponent  user={user} trips={trips}/>
      :
      <ProfileDefault /> 
 
    }
    </div>
  )
}

export default profilePage
