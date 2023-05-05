import { useState } from 'react';
import Hamburger from './Hamburger';
import Dropdown from './Dropdown';
import styles from '../styles/componentStyles/HomeHeader.module.css'
import Link from 'next/link';
import Button from './Button';
import PlaceComponent from './PlaceComponent';

interface HomeHeader {
    locationLabels: object,
    handleSavedTripsDisplay: Function,
    apiCall: Function,
    user: any
}

function HomeHeader(props: HomeHeader) {
    const testList = ['spain', 'rome', 'vacay', 'our getaway']


    return (
        <header className={styles.mainHeader}>
            <div className={styles.centerTop}>
            <Dropdown tripsList={testList} />
            <div className={styles.placeContainer}>
                <PlaceComponent />
            </div>
            {/* <div className={styles.pointsOfInterestFilterContainer}>
                <Button name="sideBarDataSwitch" handler={props.handleSavedTripsDisplay as any} value='Saved Places' />
            </div> */}
            <div className={styles.burgerContainer} >
                <Hamburger user={props.user}/>
            </div>
            </div>
            <div className={styles.btnContainer}>
                {Object.keys(props.locationLabels).map((point, index) => (
                    <Button key={index} name="attractionsFilterBtn" handler={props.apiCall} value={point} />
                ))}
            </div>

        </header>
    );
}

export default HomeHeader;
