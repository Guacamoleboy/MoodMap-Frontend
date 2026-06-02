// Pathing
// _______
// src/components/dashboard/client/medication/sideeffects/SideEffects.jsx

import styles from './SideEffects.module.css';
import { useSideEffects } from './SideEffects.hooks';
import SideEffectsEntry from './SideEffectsEntry';

function SideEffects() {

    // ------ SETUP ------------------------------------------------------------------

    const {sideEffects, removeEffect, addEffect} = useSideEffects();

    // ------ RETURN -----------------------------------------------------------------

    return (
        <section className="dashboard-card">

            {/* HEADER */}
            <div className="dashboard-card-header">
                <div className="dashboard-card-title">
                    <i className="fa fa-exclamation-triangle" />
                    <h2>Bivirkninger</h2>
                </div>
                <p>
                    Registrér og administrér nuværende bivirkninger.
                </p>
            </div>

            {/* ACTION */}
            <button
                type="button"
                className={`moodmap-button primary s ${styles.actionButton}`}
                onClick={addEffect}
            >
                Tilføj sideeffect
            </button>

            {/* COLUMN HEADER */}
            <div className={styles.tableHeader}>
                <span>BIVIRKNING</span>
                <span>MEDICIN</span>
                <span></span>
            </div>

            {/* LIST */}
            <div className={styles.list}>
                {sideEffects.map(effect => (
                    <SideEffectsEntry
                        key={effect.id}
                        label={effect.label}
                        medication={effect.medication}
                        createdAt={effect.createdAt}
                        onRemove={() => removeEffect(effect.id)}
                    />
                ))}
            </div>

        </section>
    );
}

export default SideEffects;