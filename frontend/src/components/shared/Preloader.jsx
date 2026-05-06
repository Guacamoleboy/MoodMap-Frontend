// Pathing
// _______
// src/components/shared/Preloader.jsx

import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Preloader() {

    // ------------ STATE -------------------------------------------------------

    const [visible, setVisible] = useState(true);

    // ------------ EFFECT ------------------------------------------------------

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 900);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    // ------------ RETURN -------------------------------------------------------

    return (
        <div className="preloader">
            
            {/* Lottie Animation */}
            <DotLottieReact
                src="/images/logo/logo.lottie"
                autoplay
                speed={2.5}
                className="preloader-animation"
            />

        </div>
    )
}

export default Preloader