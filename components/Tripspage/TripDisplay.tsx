import styles from '@/styles/componentStyles/TripComponents.module.css'
import Image from 'next/image'

function TripDisplay(props: any) {

  const trimTripName = (name: string) => {
    return name.substring(0, 12)
  }

  return (
    <div onClick={() => props.handler(props.value)} className={styles.cardContainer}>
      <div className={styles.leftContainer}>
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
        <div className={styles.title}>
          {props.name.length < 15 ? <p className={styles.name}>{props.name} </p>
            :
            <p className={styles.name}>{`${trimTripName(props.name)}...`}</p>
          }
        </div>
      </div>
      <p className={styles.savedLocations}>{`${props.length} Saves \t >`}</p>
    </div>
  )



}


export default TripDisplay;