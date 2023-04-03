import NavBar from '@/components/NavBar';
import React from 'react';

function profilePage(props) {
    return (
        <div className='profile-page-container'>
            <NavBar />
            
                <div>
                    <h1>Welcome back, Brando!</h1>
                </div>
                <div className='profile-container'>
                    <div className="test">
                        <h2>Saved locations: </h2>
                        <ul>
                            <li>
                                Location one
                            </li>
                            <li>
                                Location two
                            </li>
                            <li>
                                etc...
                            </li>
                        </ul>
                    </div>
                    <div className="test">
                        <h2>My trips:</h2>
                        <ul>
                            <li>My first trip:
                                <ul>
                                    <li>
                                        First item
                                    </li>
                                    <li>
                                        Second item
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Second Trip:
                                <ul>
                                    <li>
                                        Second trip item 1
                                    </li>
                                    <li>
                                        Second trip item 2
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-container">
                    <h4>I am not sure what I would want to do with this or if it will stick</h4>
                </div>
            </div>
     
    );
}

export default profilePage;