import { useState } from 'react'
import styles from '../styles/pageStyles/trips.module.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'


function trips(props: any) {
  const [modalDisplay, setModalDisplay] = useState()

  const NavBar = dynamic(() => import('@/components/NavBar'))
  const Modal =  dynamic(() => import('@/components/Modal'))
  const Button =  dynamic(() => import('@/components/Button'))


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
      <NavBar trips={true} map={false} bucketList={false} profile={false} />
    </div>
  )
}

export default trips
