import { useState } from 'react';
import Hamburger from './Hamburger';
import Dropdown from './Dropdown';
import styles from '../styles/componentStyles/HomeHeader.module.css'
import Link from 'next/link';
import Button from './Button';
import PlaceComponent from './PlaceComponent';

function HomeHeader(props) {
    const testList = ['spain', 'rome', 'vacay', 'our getaway']


    return (
        <div>
            <header className={styles.mainHeader}>
                <Dropdown tripsList={testList} />
                <div className={styles.pointsOfInterestFilterContainer}>
              <Button name="sideBarDataSwitch" handler={props.handleSavedTripsDisplay as any} value='Show saved trips'  />
              {Object.keys(props.locationLabels).map((point, index) => (
                <Button key={index} name="attractionsFilterBtn" handler={props.apicall} value={point} />
              ))}
            </div>
            <PlaceComponent />
                <div className={styles.burgerContainer} >
                    <Hamburger />
                </div>
            </header>
        </div>
    );
}

export default HomeHeader;
 