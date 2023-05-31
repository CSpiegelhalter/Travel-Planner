import Image from 'next/image'
import styles from '@/styles/componentStyles/TripComponents.module.css'


function CreateTrip(props: any) {
    return (
        <div className={styles.createTripContainer}>
            <Image 
                src="/createTripPlus.webp"
                alt="Plus Sign"
                height={30}
                width={30}
            />
            <h2>Create Trip</h2>
        </div>
    );
}

export default CreateTrip;