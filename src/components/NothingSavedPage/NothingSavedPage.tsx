import Image from 'next/image'
import styles from './NothingSavedPage.module.css'

function NothingSavedPage() {
  return (
    <section className={styles.contentContainer}>
      <div className={styles.imageContainer}>
        <Image src="/paperAirplaneIllustration.webp" alt="walking up stairs" fill />
      </div>
      <div className={styles.captionContainer}>
        <p className={styles.imageCaption}>Save points of interest here to collect them.</p>
      </div>
    </section>
  )
}

export default NothingSavedPage
