import Image from 'next/image'
import styles from '@/styles/componentStyles/TripComponents.module.css'

function CreateTrip(props: any) {
    const onClickHandler = () => {
        props.setModalDisplay((prevVal: any) => !prevVal)
    }
    return (
        <div className={styles.createTripContainer} onClick={() => onClickHandler()} >
            <div className={styles.createTripImage}>
            <Image 
                src="/createTripPlus.webp"
                alt="Plus Sign"
                height={20}
                width={20}
            />
            </div>
            <h3>Create Trip</h3>
        </div>
    );
}

export default CreateTrip;