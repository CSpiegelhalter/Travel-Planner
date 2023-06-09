import React from 'react';
import styles from '@/styles/componentStyles/bucketListDisplay.module.css'
import dynamic from 'next/dynamic';
import { testLocations } from '@/constants/test'

function BucketListDisplay(props) {
    const LocationDetailsCard = dynamic(() => import('@/components/LocationDetailsCard'))

    return (
        <div className={styles.mainContainer}>
            <LocationDetailsCard locationDetails={testLocations}/>
        </div>
    );
}

export default BucketListDisplay;