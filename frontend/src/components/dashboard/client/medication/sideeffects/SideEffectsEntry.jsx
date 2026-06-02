// Pathing
// _______
// src/components/dashboard/client/medication/sideeffects/SideEffectsEntry.jsx

import styles from './SideEffects.module.css';
import Tooltip from '@components/shared/tooltip/Tooltip';

// ------ FORMAT FOR TOOLTIP ------------------------------------------------------------------

const formatDate = (dateStr) => {
    if (!dateStr) return 'ukendt dato';
    const [year, month, day] = dateStr.split('-');
    if (!year || !month || !day) {
        return 'ukendt dato';
    }
    return `${day}/${month}-${year}`;
};

// ------ ENTRY -------------------------------------------------------------------------------

function SideEffectsEntry({ label, medication, createdAt, onRemove }) {

    return (
        <Tooltip text={`Tilføjet d. ${formatDate(createdAt)}`}>

            <div className={styles.entry}>

                {/* LEFT */}
                <span className={styles.colLeft}>
                    {label}
                </span>

                {/* MID */}
                <span className={styles.colMid}>
                    {medication}
                </span>

                {/* RIGHT */}
                <button
                    type="button"
                    className={styles.remove}
                    onClick={onRemove}
                >
                    FJERN
                </button>

            </div>

        </Tooltip>
    );
}

export default SideEffectsEntry;