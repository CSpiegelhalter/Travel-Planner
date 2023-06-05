import styles from '@/styles/componentStyles/tripInfoModal.module.css'

function TripInfoModal(props: any) {
    return (


        <div>
            <div className={styles.darkBG} onClick={() => props.setShowDetails(false)} />
            <div className={styles.centered}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                        <h1 className={styles.heading}>Create a new Trip!</h1>
                    </div>
                    <button className={styles.closeBtn} onClick={() => props.setShowDetails(false)}>
                        x
                    </button>
                    <div className={styles.modalContent}>
                        <div className={styles.detailsContainer}>
                            {props.locationDetails.map((value: any, index: number) => (
                            <ul className={styles.tripList}>
                                <li className={styles.listItem}>{value.name}</li>
                                <li className={styles.listItem}>{value.address}</li>
                                <li className={styles.listItem}>{value.rating} stars</li>
                                <li className={styles.listItem}>{value.reviewCount}</li>
                                <li className={styles.listItem}>{value.description}</li>
                            </ul>
          ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    );
}

export default TripInfoModal;