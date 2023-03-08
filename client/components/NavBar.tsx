import React from 'react';
import Image from 'next/image';

function NavBar(props: any) {


    return (
        <div>
            <header className="main-header">
                <Image src='/Globe.png' alt="WorldGlobe or food" width={60} height={60}></Image>
                <h2 className="header-title">Super-Mega-Awesome Travel-Planner</h2>
                <ul className="nav">
                    <li>Home</li>
                    <li>Login</li>
                    <li>SignUp</li>
                </ul>
            </header>
        </div>
    );
}

export default NavBar;