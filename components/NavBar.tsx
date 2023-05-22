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
            <Image src={props.map ? "/mapIconSelected.webp" : "/mapIconUnselected.webp"} alt="Backpack Icon" width={50} height={50} />
            <p className={styles.btnLabels} style={props.map ? { color: '#0000EF' } : { color: 'grey' }}>Maps</p>
          </Link>
        </div>
        <div className={styles.tripsBtn}>
          <Link href='/trips' prefetch={false}>
            <Image src={props.trips ? "/backpackIconSelected.webp" : "/backpackUnhighlighted.webp"} alt="Backpack Icon" width={50} height={50} />
            <p className={styles.btnLabels} style={props.trips ? { color: '#0000EF' } : { color: 'grey' }}>Trips</p>
          </Link>
        </div>
        <div className={styles.bucketListBtn}>
          <Link href='/bucketList' prefetch={false}>
            <Image className={styles.saveIcon}src={props.bucketList ? "/saveIconSelected.webp" : "/savedIconUnselected.webp"} alt="Backpack Icon" width={50} height={50} />
            <div className={styles.bucketLabel}>
              <p className={styles.btnLabels} style={props.bucketList ? { color: '#0000EF' } : { color: 'grey' }}>Bucket List</p>
            </div>
          </Link>
        </div>
        <div className={styles.ProfileBtn}>
          <Link href='/profilePage' prefetch={false}>
            <Image src={props.profile ? "/backpackIconSelected.webp" : "/backpackUnhighlighted.webp"} alt="Backpack Icon" width={50} height={50} />
            <div className={styles.meLabel}>
              <p className={styles.btnLabels} style={props.profile ? { color: '#0000EF' } : { color: 'grey' }}>Me</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default NavBar
