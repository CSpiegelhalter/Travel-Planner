import styles from '../styles/componentStyles/TripComponents.module.css'
import Image from 'next/image'

function TripDisplay(props: any) {

  return (
    <div onClick={() => props.handler(props.value)} className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src='/tiltedPin.webp'
          alt='Pin'
          width={20}
          height={20}
          style={{
            paddingTop: '0.4rem',
            paddingLeft: '0.4rem'
          }}
        />
      </div>
        <p className={styles.name}>{props.name} </p>
        <p className={styles.savedLocations}>{`${props.length} Saved Locations  >`}</p>
    </div>
  )



}


export default TripDisplay;