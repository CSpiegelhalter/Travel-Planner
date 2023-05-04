import { useState } from 'react';
import Image from 'next/image';

function LandingPageImages(props) {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div>
            {darkMode ?
                <div>
                    <Image src="" alt="Mountains at sunrise" className="landingPageImageDark" />
                    <Image src="" alt="Mounatins at sunset" className="landingPageImageLight" />
                </div>

                :
                }
        </div>
    );
}

export default LandingPageImages;