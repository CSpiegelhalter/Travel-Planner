import NavBar from '@/components/NavBar';
import React from 'react';

function profilePage(props) {
    return (
        <>
            <NavBar />
            <div className='profile-page-container'>
                <div className='profile-container'>
                    <div className="test">test</div>
                    <div className="test">test</div>
                </div>
                <div className="footer-container">
                    Footer 
                </div>
            </div>
        </>
    );
}

export default profilePage;