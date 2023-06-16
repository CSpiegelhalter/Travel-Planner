import styles from '@/styles/componentStyles/SideBarModal.module.css'
import Image from 'next/image'

function SideBarModal(props: any) {

    const clickHandler = () => {
        props.setModalDisplay(false)
    }

    return (
      <div>
        <div className={styles.darkBG} onClick={() => {clickHandler()}}></div>
        <div className={styles.absoluteContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
              <Image 
              src={props.locationDetails.imageUrl} 
              alt="location image" 
              width={100}
              height={100}
            
              />
            </div>
            <div className={styles.contentContainer}>
              <p className={styles.content}>{props.locationDetails.name}</p>
              <p className={styles.content}>{props.locationDetails.descriptionShort}</p>
              <p className={styles.content}>{props.locationDetails.address}</p>
              <p className={styles.content}>{props.locationDetails.descriptionLong}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SideBarModal
