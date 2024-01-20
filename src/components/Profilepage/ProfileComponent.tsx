import styles from './Profile.module.css'

function ProfileComponent({ user }: any) {
  return (
    <div className={styles.profileContainer}>
      <h1>{`${user?.given_name} ${user?.family_name}`}</h1>
      {/* <Link href='/trips' prefetch={false} className={styles.link}>
        <p className={styles.savedTrips}>{`${trips} Trips`}</p>
        </Link> */}
      <div className={styles.profileItemsList}>
        <ul className={styles.profileList}>
          <li className={styles.listItem}>{user?.given_name as string}</li>
          <li className={styles.listItem}>{user?.family_name as string}</li>
          <li className={styles.listItem}>{user?.nickname}</li>
          <li className={styles.listItem}>{user?.email}</li>
        </ul>
      </div>
      <a className={styles.logout} href="api/auth/logout">
        Logout
      </a>
    </div>
  )
}

export default ProfileComponent
