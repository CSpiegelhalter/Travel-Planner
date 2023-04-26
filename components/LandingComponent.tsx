import React from 'react';
import styles from '../styles/LandingComponent.module.css'
import Link from 'next/link';
import { describe } from 'node:test';



function LandingComponent() {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>Welcome to the off the beaten path traveling assistant!</h1>
            <h2 className={styles.description}>So many places to go! So many that I don't know what to choose, I want to go somewhere cool, but not like too well known, but how do I find somewhere like that....idk I wish there were an app or something for that. That would be pretty groovy in my humble opinion</h2>
            <h3 className={styles.getStarted}>click <Link href='/home'>here</Link> to get started</h3>
        </div>
    );
}

export default LandingComponent;