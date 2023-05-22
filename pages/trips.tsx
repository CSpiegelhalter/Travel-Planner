import { useState } from 'react'
import styles from '../styles/pageStyles/trips.module.css'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import Button from '@/components/Button'
import Modal from '@/components/Modal'

function trips(props: any) {
  const [modalDisplay, setModalDisplay] = useState()

  return (
    <div className={styles.mainContainer}>
      <header className={styles.tripHeader}>
        <h1>My Trips:</h1>
      </header>
      <section className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
          <Image src="/walkingUpStairsIllustration.webp" alt="walking up stairs" fill />
          </div>
          <div className={styles.captionContainer}>
          <p className={styles.imageCaption}>You don't have any trips saved. Create a trip to get started!</p>
          </div>
        </div>
      </section>
      <div className={styles.btnContainer}>
        <Button name="createTripBtn" value="Create New Trip" disabled handler={setModalDisplay} params={true} />
      </div>
      {modalDisplay && <Modal setIsOpen={setModalDisplay} />}
      <NavBar />
    </div>
  )
}

export default trips
