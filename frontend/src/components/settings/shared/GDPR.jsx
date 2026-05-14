// Pathing
// _______
// src/components/settings/shared/GDPR.jsx

import { useState } from 'react'
import SettingsEntry from '../SettingsEntry'
import styles from '../SettingsEntry.module.css'

const GDPR = () => {

    const [enabled, setEnabled] = useState(false)

    const description = enabled
        ? 'GDPR indstillinger er aktiveret for øget databeskyttelse.'
        : 'GDPR indstillinger er deaktiveret eller på standardniveau.'

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
            title="GDPR"
            description={description}
            action={action}
        />
    )
}

export default GDPR