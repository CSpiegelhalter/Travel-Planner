import styles from '@/styles/componentStyles/MoreInfoModal.module.css'
import Image from 'next/image'

function MoreInfoModal(props: any) {

    const clickHandler = () => {
        props.setIsOpen(false)
    }

    return (
      <>
        <div className={props.className} onClick={() => clickHandler()}></div>
        <div className={styles.absoluteContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
              <Image 
              src={props.imageUrl} 
              alt="location image" 
              width={100}
              height={100}
              />
            </div>
            <div className={styles.contentContainer}>
              <p className={styles.content}>{props.name}</p>
              <p className={styles.content}>{props.descriptionShort}</p>
              <p className={styles.content}>{props.address}</p>
              <p className={styles.content}>{props.reviewCount}</p>
              <p className={styles.content}>{props.rating}</p>
              <p className={styles.content}>{props.attractionType}</p>
              <p className={styles.content}>{props.descriptionLong}</p>
            </div>
          </div>
        </div>
      </>
    )
}

export default MoreInfoModal
