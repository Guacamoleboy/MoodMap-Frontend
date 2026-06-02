// Pathing
// _______
// src/components/dashboard/client/medication/sideeffects/SideEffects.hooks.js

import { useState } from 'react';

export function useSideEffects() {

    // ------ STATE ---------------------------------------------------------------

    const [sideEffects, setSideEffects] = useState([
        {
            id: 1,
            label: 'Kvalme',
            medication: 'Methylphenidate',
            createdAt: '2026-05-26'
        },
        {
            id: 2,
            label: 'Hovedpine',
            medication: 'Ipren',
            createdAt: '2026-05-22'
        },
    ]);

    // ------ REMOVE ---------------------------------------------------------------

    const removeEffect = (id) => {
        setSideEffects(prev => prev.filter(e => e.id !== id));
    };

    // ------ ADD ------------------------------------------------------------------

    const addEffect = () => {
        const newEffect = {
            id: Date.now(),
            label: 'Nyt side effect',
            medication: 'Ukendt',
            createdAt: new Date().toISOString().slice(0, 10)
        };

        setSideEffects(prev => [...prev, newEffect]);
    };

    // ------ EXPORT ---------------------------------------------------------------

    return {
        sideEffects,
        removeEffect,
        addEffect
    };
}