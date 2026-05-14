// Pathing
// _______
// src/components/settings/shared/Reminders.jsx

import { useState } from 'react'
import SettingsEntry from '../SettingsEntry'
import styles from '../SettingsEntry.module.css'

const Reminders = () => {

    // ---- UI STATE ONLY -----------------------------------------------------

    const [enabled, setEnabled] = useState(false)

    // ---- DESCRIPTION -------------------------------------------------------

    const description = enabled
        ? 'Påmindelser er aktiveret for aftaler og medicin.'
        : 'Påmindelser er deaktiveret.'

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
            title="Påmindelser"
            description={description}
            action={action}
        />
    )
}

export default Reminders