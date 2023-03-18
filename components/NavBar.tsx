import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NavBar(props: any) {


    return (
        <div className='nav-container'>
            <header className="main-header">
                <Image src='/Globe.png' alt="WorldGlobe or food" width={40} height={40}></Image>
                <h2 className="header-title">Our Travel-Planner</h2>
                <p className='home-btn'><Link href="./index">Home</Link></p>
                <ul className="nav">
                    <div className='nav-list-container'>
                    <li><Link href="./SignIn">Login</Link></li>
                    </div>
                    <div className='nav-list-container'>
                    <li><Link href="./SignUp">Sign-Up</Link></li>
                    </div>
                </ul>
            </header>
        </div>
    );
}


export default NavBar;