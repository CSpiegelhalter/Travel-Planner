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
            <Dropdown tripsList={testList} />
                <PlaceComponent />
            <div className={styles.pointsOfInterestFilterContainer}>
                <Button name="sideBarDataSwitch" handler={props.handleSavedTripsDisplay as any} value='Show saved trips' />
            </div>
            <div className={styles.btnContainer}>
                {Object.keys(props.locationLabels).map((point, index) => (
                    <Button key={index} name="attractionsFilterBtn" handler={props.apiCall} value={point} />
                ))}
            </div>

            <div className={styles.burgerContainer} >
                <Hamburger user={props.user}/>
            </div>
        </header>
    );
}

export default HomeHeader;
