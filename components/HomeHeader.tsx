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
                <Dropdown tripsList={testList} />
                <div className={styles.placeContainer}>
                    <PlaceComponent isLoaded={props.isLoaded} />
                </div>
                <div className={styles.burgerContainer} >
                    <Hamburger style={{ lineHeight: '0.2rem', padding: '0.4rem 0.5rem' }} user={props.user} />
                </div>
            </div>
            <div className={styles.btnContainer}>
                {Object.keys(locationLabels).map((point, index) => (
                    <Button key={index} name="attractionsFilterBtn" handler={callPointsOfInterestsApi} value={point} params={{typeOfInterest: point, ...params}} disabled="" />
                ))}
            </div>

        </header>
    );
}

export default HomeHeader;
