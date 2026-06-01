// Pathing
// _______
// src/components/shared/tooltip/Tooltip.hooks.js

import { useState } from 'react';

export function useTooltip() {

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const move = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    return {
        visible,
        position,
        show,
        hide,
        move
    };
}