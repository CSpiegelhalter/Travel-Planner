import styles from '@/styles/componentStyles/tripInfoModal.module.css'
import LocationDetailsCard from '../LocationDetailsCard';

function TripInfoModal(props: any) {

    return (


        <div>
            <div className={styles.darkBG} onClick={() => props.setShowDetails(false)} />
            <div className={styles.centered}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalHeader}>
                        <h1 className={styles.heading}>View Trip Locations!</h1>
                    </div>
                    <button className={styles.closeBtn} onClick={() => props.setShowDetails(false)}>
                        x
                    </button>
                    {/* <div className={styles.modalContent}> */}
                        <LocationDetailsCard locationDetails={props.locationDetails}/>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default TripInfoModal;