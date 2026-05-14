// Pathing
// _______
// src/components/settings/shared/Tracking.jsx

import { useState } from 'react'
import SettingsEntry from '../SettingsEntry'
import styles from '../SettingsEntry.module.css'

const Tracking = () => {

    // ---- UI STATE ONLY (TEMP) ------------------------------------------------

    const [enabled, setEnabled] = useState(false)

    // ---- DESCRIPTION --------------------------------------------------------

    const description = enabled
        ? 'Du har aktiveret tracking for en mere personaliseret oplevelse.'
        : 'Du har deaktiveret tracking og deler minimalt data.'

    // ---- TOGGLE -------------------------------------------------------------

    const handleToggle = () => {
        setEnabled(prev => !prev)
    }

    // ---- ACTION UI ----------------------------------------------------------

    const action = (
        <button
            className={`${styles.toggle} ${enabled ? styles.active : ''}`}
            onClick={handleToggle}
        >
            <span />
        </button>
    )

    // ---- RENDER -------------------------------------------------------------

    return (
        <SettingsEntry
            title="Tracking"
            description={description}
            action={action}
        />
    )
}

export default Tracking