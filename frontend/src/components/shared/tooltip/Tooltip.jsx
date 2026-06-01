// Pathing
// _______
// src/components/shared/tooltip/Tooltip.jsx

import styles from './Tooltip.module.css';
import { useTooltip } from './Tooltip.hooks';

function Tooltip({ text, children }) {

    const {
        visible,
        position,
        show,
        hide,
        move
    } = useTooltip();

    return (
        <div
            className={styles.wrapper}
            onMouseEnter={show}
            onMouseLeave={hide}
            onMouseMove={move}
        >
            {children}

            {visible && (
                <div
                    className={styles.tooltip}
                    style={{
                        left: position.x + 12,
                        top: position.y + 12
                    }}
                >
                    {text}
                </div>
            )}
        </div>
    );
}

export default Tooltip;