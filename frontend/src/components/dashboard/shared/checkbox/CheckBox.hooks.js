// Pathing
// _______
// src/components/dashboard/shared/checkbox/CheckBox.hooks.js

import { useState } from 'react';

export function useCheckBox(defaultActive) {

    // ------ STATE ------------------------------------------------------------------

    const [active, setActive] = useState(defaultActive);

    // ------ TOGGLE -----------------------------------------------------------------

    const toggle = () => {
        setActive(prev => !prev);
    };

    // ------ EXPORT -----------------------------------------------------------------

    return {
        active,
        toggle
    };
}