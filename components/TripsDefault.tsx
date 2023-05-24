import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image'
import styles from '../styles/pageStyles/trips.module.css'



function TripsDefault(props: any) {
    const Button = dynamic(() => import('@/components/Button'))


    return (
        <section className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <Image src="/walkingUpStairsIllustration.webp" alt="walking up stairs" fill />
          </div>
          <div className={styles.captionContainer}>
            <p className={styles.imageCaption}>You don't have any trips saved. Create a trip to get started!</p>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button name="createTripBtn" value="Create New Trip" disabled handler={props.setModalDisplay} params={true} />
        </div>
      </section>
    );
}

export default TripsDefault;