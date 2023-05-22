import Image from 'next/image'
import styles from '../styles/pageStyles/bucketList.module.css'
import NavBar from '@/components/NavBar'

function bucketList(props: any) {
  return (
    <div>
      <header>
        <h1 className={styles.headerCaption}>My Bucketlist:</h1>
      </header>
      <section className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <Image src="/paperAirplaneIllustration.webp" alt="walking up stairs" fill />
          </div>
          <div className={styles.captionContainer}>
          <p className={styles.imageCaption}>Save points of interest here to collect them.</p>
          </div>
      </section>
      <NavBar />
    </div>
  )
}

export default bucketList
