import styles from './Profile.module.css'
import Link from 'next/link'


function ProfileComponent(props: any) {
    return (
        <div className={styles.profileContainer}>
        <h1>{`${props.user?.given_name} ${props.user?.family_name}`}</h1>
        <Link href='/trips' prefetch={false} className={styles.link}>
        <p className={styles.savedTrips}>{`${props.trips} Trips`}</p>
        </Link>
        <div className={styles.profileItemsList}>
          <ul className={styles.profileList}> 
            <li className={styles.listItem}>{props.user?.given_name as string}</li>
            <li className={styles.listItem}>{props.user?.family_name as string}</li>
            <li className={styles.listItem}>{props.user?.nickname}</li>
            <li className={styles.listItem}>{props.user?.email}</li>
          </ul>
        </div>
        <Link className={styles.logout} href="api/auth/logout" prefetch={false}>Logout</Link>
      </div>
    );
}

export default ProfileComponent;