// Pathing
// _______
// src/components/dashboard/client/medication/SideEffects.jsx

import { useState } from 'react'
import styles from './SideEffects.module.css'

const SideEffectEntry = ({ label, onRemove }) => {

    return (
        <div className={styles.entry}>

            {/* LEFT */}
            <span className={styles.label}>
                {label}
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
    )
}

const SideEffects = () => {

    const [sideEffects, setSideEffects] = useState([
        { id: 1, label: 'Kvalme' },
        { id: 2, label: 'Hovedpine' },
    ])

    const removeEffect = (id) => {
        setSideEffects(prev => prev.filter(e => e.id !== id))
    }

    const addEffect = () => {
        const newEffect = {
            id: Date.now(),
            label: 'Nyt side effect'
        }

        setSideEffects(prev => [...prev, newEffect])
    }

    return (
        <section className="dashboard-card">

            {/* HEADER */}
            <div className="dashboard-card-header">
                <h2>Side effects</h2>
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

            {/* LIST */}
            <div className={styles.list}>
                {sideEffects.map(effect => (
                    <SideEffectEntry
                        key={effect.id}
                        label={effect.label}
                        onRemove={() => removeEffect(effect.id)}
                    />
                ))}
            </div>

        </section>
    )
}

export default SideEffects