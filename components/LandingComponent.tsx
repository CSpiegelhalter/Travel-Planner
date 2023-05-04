import React from 'react';
import styles from '../styles/componentStyles/LandingComponent.module.css'
import Link from 'next/link';
import { describe } from 'node:test';



function LandingComponent() {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>You are so stinky.</h1>
            <h2 className={styles.description}>It is honestly sickening, I would not believe a mere mortal could great such a stench.It is appalling</h2>
            <h3 className={styles.getStarted}>click <Link href='/home'>here</Link> to get started</h3>
        </div>
    );
}

export default LandingComponent;