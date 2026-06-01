// Pathing
// _______
// src/components/shared/preloader/Preloader.jsx

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { usePreloader } from './Preloader.hooks';

function Preloader() {

    // ------------ HOOKS -------------------------------------------------------

    const {
        visible
    } = usePreloader();

    // ------------ GUARDS ------------------------------------------------------

    if (!visible) return null;

    // ------------ RETURN ------------------------------------------------------

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
    );
}

export default Preloader;