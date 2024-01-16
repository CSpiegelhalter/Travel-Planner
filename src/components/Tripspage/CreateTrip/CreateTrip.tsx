import Image from 'next/image'
import styles from './CreateTrip.module.css'

function CreateTrip(props: any) {
  const onClickHandler = () => {
    props.setModalDisplay((prevVal: any) => !prevVal)
  }
  return (
    <div className={styles.createTripContainer} onClick={() => onClickHandler()}>
      <div className={styles.createTripImage}>
        <Image src="/createTripPlus.svg" alt="Plus Sign" height={20} width={20} />
      </div>
      <p className={styles.buttonText}>Create Trip</p>
    </div>
  )
}

export default CreateTrip
