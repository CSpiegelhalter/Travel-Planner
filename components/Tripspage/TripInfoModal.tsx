import styles from '@/styles/componentStyles/tripInfoModal.module.css'
import dynamic from 'next/dynamic'


function TripInfoModal(props: any) {
    const LocationDetailsCard = dynamic(() => import('@/components/LocationDetailsCard'))
    

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
\                        <LocationDetailsCard locationDetails={props.locationDetails}/>
                </div>
            </div>
        </div>
    );
}

export default TripInfoModal;