import styles from '@/styles/componentStyles/bucketListDisplay.module.css'
import dynamic from 'next/dynamic';

function BucketListDisplay(props: any) {
    const LocationDetailsCard = dynamic(() => import('@/components/LocationDetailsCard'))

    return (
        <div className={styles.mainContainer}>
            <LocationDetailsCard locationDetails={props.locationsDetails}/>
        </div>
    );
}

export default BucketListDisplay;