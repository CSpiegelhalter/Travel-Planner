import Link from 'next/link'
import styles from '../styles/componentStyles/NavBar.module.css'
import Image from 'next/image'

function NavBar(props: any) {
  const testList = ['spain', 'rome', 'vacay', 'our getaway']

  return (
    <header className={styles.mainHeader}>
      <div className={styles.buttonContainer}>
        <div className={styles.mapBtn}>
          <Link href='/mapTool' prefetch={false}>
          <Image src="/mapIconSelected.webp" alt="Backpack Icon" width={50} height={50} />
          <p className={styles.btnLabels}>Maps</p>
          </Link>
        </div>
        <div className={styles.tripsBtn}>
          <Link href='/trips' prefetch={false}>
          <Image src="/backpackIconSelected.webp" alt="Backpack Icon" width={50} height={50} />
          <p className={styles.btnLabels}>Trips</p>
          </Link>
        </div>
        <div className={styles.bucketListBtn}>
          <Link href='/bucketList' prefetch={false}>
          <Image src="/saveIconSelected.webp" alt="Backpack Icon" width={50} height={50} />
          <div className={styles.bucketLabel}>
          <p className={styles.btnLabels}>Bucket List</p>
          </div>
          </Link>
        </div>
        <div className={styles.ProfileBtn}>
          <Link href='/profilePage' prefetch={false}>
          <Image src="/backpackIconSelected.webp" alt="Backpack Icon" width={50} height={50} />
          <div className={styles.meLabel}>
            <p className={styles.btnLabels}>Me</p>
          </div>
            </Link>
        </div>
      </div>
    </header>
  )
}

export default NavBar
