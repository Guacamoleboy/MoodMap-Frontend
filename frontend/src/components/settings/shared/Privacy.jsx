// Pathing
// _______
// src/components/settings/shared/Privacy.jsx

import { useState } from 'react'
import SettingsEntry from '../SettingsEntry'
import styles from '../SettingsEntry.module.css'

const Privacy = () => {

    const [enabled, setEnabled] = useState(true)

    const description = enabled
        ? 'Privatlivsindstillinger er strammet for maksimal beskyttelse.'
        : 'Privatlivsindstillinger er mere åbne for funktionalitet.'

    const action = (
        <button
            className={`${styles.toggle} ${enabled ? styles.active : ''}`}
            onClick={() => setEnabled(prev => !prev)}
        >
            <span />
        </button>
    )

    return (
        <SettingsEntry
            title="Privatliv"
            description={description}
            action={action}
        />
    )
}

export default Privacy