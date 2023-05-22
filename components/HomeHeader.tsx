import { useState } from 'react';
import Hamburger from './Hamburger';
import Dropdown from './Dropdown';
import styles from '../styles/componentStyles/HomeHeader.module.css'
import Button from './Button';
import PlaceComponent from './PlaceComponent';
import { callPointsOfInterestsApi } from '@/helperFunctions/helperFunction';
import { HomeHeader, PointsOfInterestApiParams } from '@/Types/types';
import { locationLabels } from '@/constants/constants';

function HomeHeader(props: HomeHeader) {
    const testList = ['spain', 'rome', 'vacay', 'our getaway']
    const params: PointsOfInterestApiParams = {
        callback: props.callback,
        city: props.city
    }

    return (
        <header className={styles.mainHeader}>
            <div className={styles.centerTop}>
                <div className={styles.placeContainer}>
                    <PlaceComponent isLoaded={props.isLoaded} style={{ paddingRight: '0', marginRight: '0' }} />
                    <div className={styles.hamburgerContainer}>
                        <Hamburger className={styles.hamburger} style={{ width: '4rem', marginTop: '1rem', marginBottom: '0.5rem', borderRadius: '3rem', background: 'white', paddingTop: '0.3rem', marginRight: '1rem' }} user={props.user} />
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    {Object.keys(locationLabels).map((point, index) => (
                        <Button key={index} name="attractionsFilterBtn" handler={callPointsOfInterestsApi} value={point} params={{ typeOfInterest: point, ...params }} disabled="" style={{ padding: '0.3rem', height: '2rem', fontWeight: '700' }} />
                    ))}
                </div>
            </div>

        </header>
    );
}

export default HomeHeader;
