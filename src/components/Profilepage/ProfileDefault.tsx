import Link from 'next/link'
import styles from './Profile.module.css'


function ProfileDefault() {
    return (
        <div className={styles.profileContainer}>
            <h2>You don't seem to be logged in!</h2>
            <h3><a href={`api/auth/login?returnTo=${encodeURIComponent('/profile')}`} className={styles.login} >Login</a> to get started!</h3>
        </div>
    );
}

export default ProfileDefault;