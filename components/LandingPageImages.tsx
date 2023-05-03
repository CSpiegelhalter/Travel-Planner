import React from 'react';
import Image from 'next/image';

function LandingPageImages(props) {
    const [darkMode, setDarkMode] = useState(false) 
    
    return (
        <div>
                 {darkMode ? 
                 <Image src="" alt="Mountains at sunrise" className="landingPageImageDark" />  
                 <Image src="" alt="Mounatins at sunset" className="landingPageImageLight"/>
                
                
                 :
                }
        </div>
    );
}

export default LandingPageImages;