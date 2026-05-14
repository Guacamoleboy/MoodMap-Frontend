// Pathing
// _______
// src/components/settings/shared/Sessions.jsx

import { useState } from 'react'
import SettingsEntry from '../SettingsEntry'
import styles from '../SettingsEntry.module.css'

const Sessions = () => {

    // ---- STATE -------------------------------------------------------------

    const [enabled, setEnabled] = useState(false)

    // ---- DESCRIPTION -------------------------------------------------------

    const description = enabled
        ? 'Flere aktive sessioner er tilladt på tværs af enheder.'
        : 'Kun én aktiv session er tilladt ad gangen for øget sikkerhed.'

    // ---- ACTION ------------------------------------------------------------

    const action = (
        <button
            className={`${styles.toggle} ${enabled ? styles.active : ''}`}
            onClick={() => setEnabled(prev => !prev)}
        >
            <span />
        </button>
    )

    // ---- RENDER ------------------------------------------------------------

    return (
        <SettingsEntry
            title="Sessioner"
            description={description}
            action={action}
        />
    )
}

export default Sessions