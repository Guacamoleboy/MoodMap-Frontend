// Pathing
// _______
// src/components/shared/preloader/Preloader.hooks.js

import { useState, useEffect } from 'react';

export function usePreloader() {

    // ------------ STATE -------------------------------------------------------

    const [visible, setVisible] = useState(true);

    // ------------ EFFECT ------------------------------------------------------

    useEffect(() => {

        const timer = setTimeout(() => {
            setVisible(false);
        }, 1000);

        return () => clearTimeout(timer);

    }, []);

    // ------------ RETURN ------------------------------------------------------

    return {
        visible
    };
    
}