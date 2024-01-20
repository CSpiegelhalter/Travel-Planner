import Image from 'next/image'
import styles from './NothingSavedPage.module.css'

function NothingSavedPage() {
  return (
    <section className={styles.contentContainer}>
      <Image src="/static/paperAirplaneIllustration.webp" alt="walking up stairs" width={0} height={300} layout="responsive" />
      <p className={styles.imageCaption}>Save points of interest here to remember them.</p>
    </section>
  )
}

export default NothingSavedPage
