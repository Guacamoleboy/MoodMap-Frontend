// Pathing
// _______
// src/components/dashboard/shared/checkbox/CheckBox.hooks.js

import { useState } from 'react';

export function useCheckBox(defaultActive) {

    const [active, setActive] = useState(defaultActive);

    const toggle = () => {
        setActive(prev => !prev);
    };

    return {
        active,
        toggle
    };
}